import React, { Component } from 'react';
import { View, Image, ActivityIndicator, Text, ImageBackground, TextInput, Platform, TouchableOpacity, KeyboardAvoidingView, Dimensions, ScrollView, Alert } from 'react-native';
import styles from './Styles';
import { Icon } from '../../../utils/Icon/Icon';
import { Header, Left, Body, Right, Button, Toast } from 'native-base';
import { HeaderColor } from '../../../utils/Colors';
import { AsyncStorage } from 'react-native';
import { changepassword } from '../../../lib/api';
import { GlobalAPI } from '../../../lib/Globals';
import { EmptyField, Password } from '../../../lib/Validation';
import { StackActions, NavigationActions } from 'react-navigation';

export default class ResetPasswordScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            CurrentPassword: '',
            NewPassword: '',
            ConfirmPassword: '',
            token: '',
            Loading: false
        }
        console.log("reset", props)
    }

    validate() {
        if (EmptyField(this.state.CurrentPassword)) {
            Toast.show({
                text: 'Please Enter Current Password.',
                duration: 2000,
                type: "warning"
            })
            return false
        }
        if (EmptyField(this.state.NewPassword) || Password(this.state.NewPassword)) {
            Toast.show({
                text: 'Enter new alphanumeric password having atleast 8 characters.',
                duration: 2000,
                type: "warning"
            })
            return false
        }
        if (EmptyField(this.state.ConfirmPassword)) {
            alert("Please Confirm Password.")
            Toast.show({
                text: 'Please Confirm Password.',
                duration: 2000,
                type: "warning"
            })
            return false
        }
        else
            this.submit()
    }

    submit() {
        this.setState({ Loading: true })
        let formData = new FormData();
        formData.append(' old_password', this.state.CurrentPassword);
        formData.append(' password', this.state.NewPassword);
        formData.append(' confirm_password', this.state.ConfirmPassword);
        // formData = JSON.parse(formData)

        GlobalAPI(changepassword, "POST", formData, null, response => {
            console.log('resetpassword123', response)
            if (response.status == 200) {
                this.setState({ Loading: false })
                try {
                    AsyncStorage.removeItem("access_token");
                }
                catch (exception) {
                    alert("failed.")

                }
                Toast.show({
                    text: 'Password Changed Successfully.',
                    duration: 2000,
                    type: "success"
                })

                const resetAction = StackActions.reset({
                    index: 0,
                    actions: [NavigationActions.navigate({ routeName: 'Login' })],
                });
                this.props.navigation.dispatch(resetAction);
            }
            else {
                this.setState({ Loading: false })
                Toast.show({
                    text: response.user_msg,
                    duration: 2000,
                    type: "danger"
                })
            }

        }, error => {
            console.log("rpass", error)
            this.setState({ Loading: false })
            Alert.alert(
                'Failed!',
                'No Internet Connection.',
                [
                    { text: 'Ok', style: 'cancel' },
                    { text: 'Retry', onPress: () => this.submit() },
                ],
                { cancelable: false }
            )
        }
        )

    }
    render() {
        return (
            <View pointerEvents={this.state.Loading ? "none" : "auto"} style={{ flex: 1 }}>

                <ImageBackground source={require('../../../assets/images/red_1.jpg')} style={styles.backgroundimage}>

                    <Header style={{ backgroundColor: HeaderColor }}>
                        <Left>
                            <Button transparent onPress={() => this.props.navigation.goBack()}>
                                <Icon name="angle-left" size={22} style={styles.backbutton} />
                            </Button>
                        </Left>
                        <Body>
                            <Text style={styles.headertitle}>Reset Password</Text>
                        </Body>
                        <Right>

                        </Right>

                    </Header>
                    <ScrollView >
                        <KeyboardAvoidingView behavior="padding" enabled>

                            <View style={styles.view1}>
                                <Text style={styles.neostore}>NeoSTORE</Text>

                                <View style={styles.view3}>
                                    <Icon name="lock" size={22} style={styles.icon} />
                                    <TextInput onChangeText={(text) => this.setState({ CurrentPassword: text })} style={styles.textinput} placeholder="Current Password" placeholderTextColor="white" ></TextInput>

                                </View>

                                <View style={styles.view3}>
                                    <Icon name="unlock" size={22} style={styles.icon} />
                                    <TextInput onChangeText={(text) => this.setState({ NewPassword: text })} style={styles.textinput} placeholder="Enter New Password" placeholderTextColor="white" ></TextInput>
                                </View>

                                <View style={styles.view3}>
                                    <Icon name="lock" size={22} style={styles.icon} />
                                    <TextInput onChangeText={(text) => this.setState({ ConfirmPassword: text })} style={styles.textinput} placeholder="Confirm Password" placeholderTextColor="white" ></TextInput>
                                </View>

                                <TouchableOpacity style={styles.loginbutton} onPress={() => this.validate()}>
                                    {this.state.Loading ? <ActivityIndicator size="large" color="red" /> : <Text style={styles.buttontext}>SUBMIT</Text>}

                                </TouchableOpacity>

                            </View>
                        </KeyboardAvoidingView>
                    </ScrollView>

                </ImageBackground>
            </View>



        );
    }


}
import React, { Component } from 'react';
import { View, Image, ActivityIndicator, Text, ImageBackground, TextInput, Platform, TouchableOpacity, KeyboardAvoidingView, Dimensions, ScrollView } from 'react-native';
import styles from './Styles';
import { Icon } from '../../../utils/Icon/Icon';
import { Container, Header, Left, Body, Right, Button, Title } from 'native-base';
import { White, ButtonText, PlusIconBackground, HeaderColor, HeaderTextFontWeight } from '../../../utils/Colors';
import { AsyncStorage } from 'react-native';
import { changepassword } from '../../../lib/api';
// import { Globals } from '../../../lib/Globals';
import { GlobalAPI } from '../../../lib/Globals';


export default class ResetPasswordScreen extends Component {

    state = {
        CurrentPassword: '',
        NewPassword: '',
        ConfirmPassword: '',
        token: '',
        Loading: false
    }
    validate() {
        var emailreg = /\S+@\S+\.\S+/;
        var passwordreg = /^[0-9a-zA-Z]+$/;

        if (this.state.CurrentPassword == "") {
            alert("Please Enter Current Password")
            return false
        }
        if (this.state.NewPassword == "" || !this.state.NewPassword.match(passwordreg)) {
            alert("Enter new alphanumeric password having atleast 8 characters.")
            return false
        }
        if (this.state.ConfirmPassword == "") {
            alert("Please Confirm Password.")
            return false
        }
        else
            this.submit()


    }
    async submit() {
        this.setState({ Loading: true })
        var getdata = await AsyncStorage.getItem('ResponseData');
        // console.log('resetpassword', getdata)
        getdata = JSON.parse(getdata)
        var accesstoken = getdata.data.access_token
        console.log('resetpassword', accesstoken)
        let formData = new FormData();
        formData.append(' old_password', this.state.CurrentPassword);
        formData.append(' password', this.state.NewPassword);
        formData.append(' confirm_password', this.state.ConfirmPassword);
        // formData = JSON.parse(formData)

        await GlobalAPI(changepassword, "POST", formData, accesstoken, response => {
            console.log('resetpassword123', response)
            if (response.status == 200) {
                this.setState({ Loading: false })
                alert("Password Changed Successfully")
                this.props.navigation.replace('Myaccount')
                this.setState({ Loading: true })
            }
            else
                alert(response.user_msg)
        })

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
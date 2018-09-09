import React, { Component } from 'react';
import { View, Image, Text, Alert, ImageBackground, TextInput, BackHandler, Platform, TouchableOpacity, ActivityIndicator } from 'react-native';
import styles from './Styles';
import { Icon } from '../../../utils/Icon/Icon';
import { Container, Header, Left, Body, Right, Button, Title, Toast } from 'native-base';
import { forgotpassword } from '../../../lib/api';
import { GlobalAPI } from '../../../lib/Globals';
import { White } from '../../../utils/Colors';

export default class Forgotpassword extends Component {

    state = {
        Username: '',
        Loading: false
    }

    validate() {
        var emailreg = /\S+@\S+\.\S+/;
        var passwordreg = /^[0-9a-zA-Z]+$/;
        if (this.state.Username == "" || !this.state.Username.match(emailreg)) {
            // alert("Enter Valid User Name.")
            Toast.show({
                text: 'Enter Valid User Name.',
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
        formData.append('email', this.state.Username);
        GlobalAPI(forgotpassword, "POST", formData, null, response => {

            if (response.status == 200) {
                this.setState({ Loading: false })
                // alert("Password Maild You")
                Toast.show({
                    text: 'Password Maild You',
                    duration: 2000,
                    type: "success"
                })
                this.props.navigation.replace("Login")
            }
            else {
                this.setState({ Loading: false })
                // alert(response.user_msg)
                Toast.show({
                    text: response.user_msg,
                    duration: 2000,
                    type: "danger"
                })
            }
            alert(response.user_msg)
        },
            error => {
                this.setState({ Loading: false })
                Alert.alert(
                    'Failed!',
                    'No Internet Connection.',
                    [
                        { text: 'Exit', onPress: () => BackHandler.exitApp(), style: 'cancel' },
                        { text: 'Retry', onPress: () => this.submit() },
                    ],
                    { cancelable: false }
                )
                console.log(error)
            }
        )


    }

    render() {
        return (
            <ImageBackground source={require('../../../assets/images/red_1.jpg')} style={styles.backgroungimage}>
                <Header style={{ backgroundColor: 'red' }}>
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.goBack()}>
                            <Icon name="angle-left" size={26} style={styles.backicon} />
                        </Button>
                    </Left>
                    <Body>
                        <Text style={styles.headertitle}>Forgot Password</Text>
                        {/* <Title style = {{color:'white',fontWeight:'bold',fontSize:25, textAlign:'center'}}>Register</Title> */}
                    </Body>
                    <Right></Right>
                </Header>

                <View style={styles.view1}>
                    <Text style={styles.neostore}>NeoSTORE</Text>
                    <View style={styles.view3}>
                        <Icon name="user" size={30} style={styles.icon} />
                        <TextInput onChangeText={(text) => this.setState({ Username: text })} style={styles.textinput} placeholder="Username" placeholderTextColor={White} ></TextInput>
                    </View>

                    <TouchableOpacity style={styles.loginbutton} onPress={() => this.validate()}>
                        {this.state.Loading ? <ActivityIndicator size="large" color="red" /> : <Text style={styles.buttontext}>SUBMIT</Text>}
                    </TouchableOpacity>

                </View>

            </ImageBackground>



        );
    }


}
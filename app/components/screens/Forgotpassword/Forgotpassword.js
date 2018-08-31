import React, { Component } from 'react';
import { View, Image, Text, ImageBackground, TextInput, Platform, TouchableOpacity } from 'react-native';
import styles from './Styles';
import { Icon } from '../../../utils/Icon/Icon';
import { Container, Header, Left, Body, Right, Button, Title } from 'native-base';
import { forgotpassword } from '../../../lib/api';
import { GlobalAPI } from '../../../lib/Globals';

export default class Forgotpassword extends Component {

    state = {
        Username: '',
        NewPassword: '',
        ConfirmPassword: ''

    }

    validate() {
        var emailreg = /\S+@\S+\.\S+/;
        var passwordreg = /^[0-9a-zA-Z]+$/;
        if (this.state.Username == "" || !this.state.Username.match(emailreg)) {
            alert("Enter Valid User Name.")
            return false
        }
        else
            this.submit()
    }

    submit() {
        let formData = new FormData();
        formData.append('email', this.state.Username);
        GlobalAPI(forgotpassword, "POST", formData, null, response => {

            if (response.status == 200) {
                alert("Password Maild You")
                this.props.navigation.replace("Login")
            }
            else
                alert(response.user_msg)
        },
            error => {
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
                            <Icon name="angle-left" size={26} color="#f9fbff" />
                        </Button>
                    </Left>
                    <Body>
                        {/* <Title style = {{color:'white',fontWeight:'bold',fontSize:25, textAlign:'center'}}>Register</Title> */}
                    </Body>
                    <Right></Right>
                </Header>

                <View style={styles.view1}>
                    <Text style={styles.neostore}>NeoSTORE</Text>
                    <View style={styles.view3}>
                        <Icon name="user" size={30} color="#FFFFFF" style={styles.icon} />
                        <TextInput onChangeText={(text) => this.setState({ Username: text })} style={styles.textinput} placeholder="Username" placeholderTextColor="white" ></TextInput>
                    </View>

                    <TouchableOpacity style={styles.loginbutton} onPress={() => this.validate()}>
                        <Text style={styles.buttontext}>SUBMIT</Text>
                    </TouchableOpacity>

                </View>

            </ImageBackground>



        );
    }


}
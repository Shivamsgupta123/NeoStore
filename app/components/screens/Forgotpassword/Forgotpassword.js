import React, { Component } from 'react';
import { View, Image, Text, ImageBackground, TextInput, Platform, TouchableOpacity } from 'react-native';
import styles from './Styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Container, Header, Left, Body, Right, Button, Title } from 'native-base';
import { White, ButtonText, PlusIconBackground, HeaderColor } from '../../../utils/Colors';
import { LogoSize, LogoFontWeight, LogoPadding, TextInputFont, RegularFont } from '../../../utils/FontSizes';
import { register, forgotpassword } from '../../../lib/api';

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

        let formData = new FormData();
        formData.append('email', this.state.Username);

        await fetch(
            forgotpassword
            , {
                method: 'POST',
                body: formData,
            })
            .then(response => response.json())
            .then(response => {
                if (response.status == 200) {
                    alert("Submitted")
                    this.props.navigation.navigate('Loginscreen')
                }
                else
                    alert(response.user_msg)

            }
            )




    }
    render() {
        return (

            <ImageBackground source={require('../../../assets/images/red_1.jpg')} style={{ flex: 1, borderColor: "red", borderWidth: 1 }}>

                <Header style={{ backgroundColor: 'red' }}>
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.goBack()}>
                            <Icon name="chevron-left" size={26} color="#f9fbff" />
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
                        <Icon name="user" size={30} color="#FFFFFF" style={{ padding: Platform.OS === 'ios' ? 0 : 5, width: 35 }} />
                        <TextInput onChangeText={(text) => this.setState({ Username: text })} style={styles.textinput} placeholder="Username" placeholderTextColor="white" ></TextInput>

                    </View>

                    <View style={styles.view3}>
                        <Icon name="unlock" size={27} color="#FFFFFF" style={{ padding: Platform.OS === 'ios' ? 0 : 5, width: 35 }} />
                        <TextInput onChangeText={(text) => this.setState({ NewPassword: text })} style={styles.textinput} placeholder="Enter New Password" placeholderTextColor="white" ></TextInput>
                    </View>

                    <View style={styles.view3}>
                        <Icon name="lock" size={30} color="#FFFFFF" style={{ padding: Platform.OS === 'ios' ? 0 : 5, width: 35 }} />
                        <TextInput onChangeText={(text) => this.setState({ ConfirmPassword: text })} style={styles.textinput} placeholder="Confirm Password" placeholderTextColor="white" ></TextInput>
                    </View>

                    <TouchableOpacity style={styles.loginbutton} onPress={() => this.validate()}>
                        <Text style={styles.buttontext}>SUBMIT</Text>

                    </TouchableOpacity>

                </View>

            </ImageBackground>



        );
    }


}
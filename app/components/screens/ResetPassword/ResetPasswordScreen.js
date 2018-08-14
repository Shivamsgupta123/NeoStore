import React, { Component } from 'react';
import { View, Image, ActivityIndicator, Text, ImageBackground, TextInput, Platform, TouchableOpacity } from 'react-native';
import styles from './Styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Container, Header, Left, Body, Right, Button, Title } from 'native-base';
import { White, ButtonText, PlusIconBackground, HeaderColor, HeaderTextFontWeight } from '../../../utils/Colors';
import { LogoSize, LogoFontWeight, LogoPadding, TextInputFont, RegularFont, HeaderText } from '../../../utils/FontSizes';
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
        // if(this.state.Username == "" || !this.state.Username.match(emailreg))
        // {
        //   alert("Enter Valid User Name.")
        //   return false
        // }

        // else
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
                alert("Password Changed Successfully")
                this.props.navigation.navigate('Login')
                this.setState({ Loading: true })
            }
            else
                alert(response.user_msg)
        })



        // await Globals(changepassword, { method: 'POST', body: formData, headers: { access_token: getdata.data.access_token } }, response => {
        //     console.log('reset password', response)
        //     if (response.status == 200) {
        //         alert("Submitted")
        //         this.props.navigation.navigate('Login')
        //     }
        //     else
        //         alert(response.user_msg)
        // })



        // await fetch(
        //     changepassword
        //     , {
        //         method: 'POST',
        //         body: formData,
        //         headers: {
        //             access_token: getdata.data.access_token

        //         }
        //     })
        //     .then(response => response.json())
        //     .then(response => {
        //         if (response.status == 200) {
        //             alert("Submitted")
        //             this.props.navigation.navigate('Loginscreen')
        //         }
        //         else
        //             alert(response.user_msg)

        //     }
        //     )

    }
    render() {
        if (this.state.Loading)
            return <ActivityIndicator style={{ flex: 1, justifyContent: 'center' }} size="large" color="#e91b1a" />
        return (

            <ImageBackground source={require('../../../assets/images/red_1.jpg')} style={{ flex: 1, borderColor: "red", borderWidth: 1 }}>

                <Header style={{ backgroundColor: HeaderColor }}>
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.goBack()}>
                            <Icon name="chevron-left" size={22} color="#f9fbff" />
                        </Button>
                    </Left>
                    <Body>
                        <Text style={styles.headertitle}>Reset Password</Text>
                    </Body>
                    <Right>

                    </Right>

                </Header>

                <View style={styles.view1}>
                    <Text style={styles.neostore}>NeoSTORE</Text>

                    <View style={styles.view3}>
                        <Icon name="lock" size={30} color="#FFFFFF" style={styles.icon} />
                        <TextInput onChangeText={(text) => this.setState({ CurrentPassword: text })} style={styles.textinput} placeholder="Current Password" placeholderTextColor="white" ></TextInput>

                    </View>

                    <View style={styles.view3}>
                        <Icon name="unlock" size={27} color="#FFFFFF" style={styles.icon} />
                        <TextInput onChangeText={(text) => this.setState({ NewPassword: text })} style={styles.textinput} placeholder="Enter New Password" placeholderTextColor="white" ></TextInput>
                    </View>

                    <View style={styles.view3}>
                        <Icon name="lock" size={30} color="#FFFFFF" style={styles.icon} />
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
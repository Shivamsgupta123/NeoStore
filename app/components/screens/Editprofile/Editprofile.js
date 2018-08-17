import React, { Component } from 'react';
import { AppRegistry, ImageBackground, TextInput, StyleSheet, Text, Platform, View, KeyboardAvoidingView, Image, ScrollView, Dimensions, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import { Container, Header, Left, Body, Right, Button, Title } from 'native-base';
import styles from './Styles';
import { White, ButtonText, PlusIconBackground, HeaderColor } from '../../../utils/Colors';
import { LogoSize, LogoFontWeight, LogoPadding, TextInputFont, RegularFon, HeaderTextFontWeight, HeaderText, ButtonTextSize } from '../../../utils/FontSizes';
import DatePicker from 'react-native-datepicker';
import { Calendar } from 'react-native-calendars';
import ImagePicker from 'react-native-customized-image-picker';
import { updateaccountdetail } from '../../../lib/api';
import { GlobalAPIPost } from '../../../lib/Globals';
import { GlobalAPI } from '../../../lib/Globals';



export default class Editprofile extends Component {

    constructor(props) {
        super(props);

        this.focusNextField = this.focusNextField.bind(this);
        this.inputs = {};
    }

    focusNextField(id) {
        this.inputs[id].focus()
    }

    state = {
        FirstName: '',
        LastName: '',
        Email: '',
        PhoneNumber: '',
        DOB: ''

    }
    validate = (FirstName, LastName, Email, PhoneNumber, DOB) => {

        var namereg = /^[A-Za-z]+$/;
        var emailreg = /\S+@\S+\.\S+/;
        // var passwordreg = /^[0-9a-zA-Z]+$/;
        var phonenoreg = /^\+?([0-9]{2})\)?[-. ]?([0-9]{5})[-. ]?([0-9]{5})$/;
        var dobreg = /^([0-9]{2})-([0-9]{2})-([0-9]{4})$/;


        if (this.state.FirstName == "" || !this.state.FirstName.match(namereg)) {
            alert("Please Enter Valid First Name with no wide spaces & Numbers.")
            return false
        }
        else
            if (this.state.LastName == "" || !this.state.LastName.match(namereg)) {
                alert("Please Enter Valid Last Name with no wide spaces & Numbers.")
                return false
            }
            else
                if (this.state.Email == "" || !this.state.Email.match(emailreg)) {
                    alert("Please Enter Valid Email.")
                    return false
                }
                else
                    if (this.state.PhoneNumber == "" || !this.state.PhoneNumber.match(phonenoreg)) {
                        alert("Please enter 10 digit phone no with country code(eg.+91).")
                        return false
                    }
                    else
                        if (this.state.DOB == "" || !this.state.DOB.match(phonenoreg)) {
                            alert("PLease enter BOB in formate DD-MM-YYYY")
                            return false
                        }
                        else
                            this.props.navigation.navigate('Myaccount')
        this.submit()

    }
    submit() {
        let formData = new FormData();
        formData.append('first_name', this.state.FirstName);
        formData.append('last_name', this.state.LastName);
        formData.append('email', this.state.Email);
        formData.append('phone_no', this.state.PhoneNumber);
        formData.append('profile_pic', "abc");
        formData.append('dob', this.state.DOB);

        GlobalAPI(updateaccountdetail, "POST", formData, null, response => {
            if (response.status == 200) {
                alert("Account detail updated successfully.")
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
            // <View style={{ height: Dimensions.get('window').height }}>
            <ImageBackground source={require('../../../assets/images/red_1.jpg')} style={{ flex: 1, borderColor: "red", borderWidth: 1, heigh: Dimensions.get('window').height }}>
                <Header style={{ backgroundColor: HeaderColor }}>
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.goBack()}>
                            <Icon name="chevron-left" size={22} color={White} style={{ marginLeft: 40 / 3 }} />
                        </Button>
                    </Left>

                    <Text style={{ color: White, fontSize: HeaderText, marginLeft: Platform.OS === 'ios' ? 0 : 65, fontWeight: HeaderTextFontWeight, marginTop: Platform.OS === 'ios' ? 5 : 10 }}>Edit Profile</Text>

                    <Right>
                        <Icon name="search" size={22} color={White} style={{ marginRight: 40 / 3 }} />
                    </Right>


                </Header>
                <ScrollView >
                    <KeyboardAvoidingView style={styles.keyboardview} behavior="padding" enabled>

                        <View style={{ alignItems: 'center', padding: 20 }}>

                            <Image style={{ width: 400 / 3, height: 400 / 3, borderRadius: 400 / 6, }} source={require('../../../assets/images/lion.jpg')} />

                            <View style={styles.view3}>
                                <Icon name="user" size={25} color="#FFFFFF" style={styles.iconpadding} />
                                <TextInput onSubmitEditing={() => { this.focusNextField('two'); }} returnKeyType={"next"} ref={input => { this.inputs['one'] = input; }} onChangeText={(text) => this.setState({ FirstName: text })} style={styles.textinput} placeholder="First Name" placeholderTextColor="white" ></TextInput>
                            </View>

                            <View style={styles.view3}>
                                <Icon name="user" size={25} color="#FFFFFF" style={styles.iconpadding} />
                                <TextInput onSubmitEditing={() => { this.focusNextField('three'); }} returnKeyType={"next"} ref={input => { this.inputs['two'] = input; }} onChangeText={(text) => this.setState({ LastName: text })} style={styles.textinput} placeholder="Last Name" placeholderTextColor="white" ></TextInput>
                            </View>

                            <View style={styles.view3}>
                                <Icon name="envelope" size={20} color="#FFFFFF" style={styles.iconpadding} />
                                <TextInput onSubmitEditing={() => { this.focusNextField('four'); }} returnKeyType={"next"} ref={input => { this.inputs['three'] = input; }} onChangeText={(text) => this.setState({ Email: text })} style={styles.textinput} placeholder="Email" placeholderTextColor="white" ></TextInput>
                            </View>

                            <View style={styles.view3}>
                                <Icon name="mobile" size={35} color="#FFFFFF" style={{ height: 50, width: Platform.OS === 'ios' ? 30 : 35, justifyContent: "center", paddingBottom: 7, paddingLeft: Platform.OS === 'ios' ? 0 : 8 }} />
                                <TextInput onSubmitEditing={() => { this.focusNextField('five'); }} returnKeyType={"next"} ref={input => { this.inputs['four'] = input; }} keyboardType="phone-pad" onChangeText={(text) => this.setState({ PhoneNumber: text })} style={styles.textinput} placeholder="Phone Number" placeholderTextColor="white" ></TextInput>
                            </View>

                            <View style={styles.view3}>
                                <Icon name="birthday-cake" size={20} color="#FFFFFF" style={styles.iconpadding} />
                                <TextInput returnKeyType={"next"} onChangeText={(text) => this.setState({ DOB: text })} style={styles.textinput} placeholder="DOB" placeholderTextColor="white" ></TextInput>
                            </View>

                            <TouchableOpacity style={styles.loginbutton} onPress={() => this.validate(this.state.FirstName, this.state.LastName, this.state.Email, this.state.PhoneNumber, this.state.DOB)}>
                                <Text onSubmitEditing={() => { this.focusNextField('six'); }} returnKeyType={"next"} ref={input => { this.inputs['five'] = input; }} style={styles.buttontext}>SUBMIT</Text>
                            </TouchableOpacity>




                        </View>

                    </KeyboardAvoidingView>
                </ScrollView>
            </ImageBackground>
            // </View>

        );
    }
}
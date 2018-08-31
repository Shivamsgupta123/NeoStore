import React, { Component } from 'react';
import { View, ActivityIndicator, Image, Text, ImageBackground, TextInput, ScrollView, Platform, TouchableOpacity, KeyboardAvoidingView, Keyboard, Dimensions } from 'react-native';
import styles from './Styles';
import { Icon } from '../../../utils/Icon/Icon';
import { Container, Header, Left, Body, Right, Button, Title } from 'native-base';
import { White, ButtonText, PlusIconBackground, HeaderColor } from '../../../utils/Colors';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import { register, } from '../../../lib/api';
import { GlobalAPI } from '../../../lib/Globals';

var gender = [
    { label: "Male", value: 0 },
    { label: "Female", value: 1 }
];
export default class Registration extends Component {
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
        Password: '',
        ConfirmPassword: '',
        PhoneNumber: '',
        Ischecked: this.props.Ischecked,
        Loading: false
    }
    validate() {
        var namereg = /^[A-Za-z]+$/;
        var emailreg = /\S+@\S+\.\S+/;
        var passwordreg = /^[0-9a-zA-Z]+$/;
        var phonenoreg = /^\+?([0-9]{2})\)?[-. ]?([0-9]{5})[-. ]?([0-9]{5})$/;

        if (this.state.FirstName == "" || !this.state.FirstName.match(namereg)) {
            alert("Please Enter Valid Name with no wide spaces & Numbers.")
            return false
        }
        else
            if (this.state.LastName == "" || !this.state.LastName.match(namereg)) {
                alert("Please Enter Valid Name with no wide spaces & Numbers.")
                return false
            }
            else
                if (this.state.Email == "" || !this.state.Email.match(emailreg)) {
                    alert("Please Enter Valid Email.")
                    return false
                }
                else
                    if (this.state.Password == "" || !this.state.Password.match(passwordreg) || this.state.Password.length < 8) {
                        alert("Enter alphanumeric password having atleast 8 characters.")
                        return false
                    }
                    else
                        if (this.state.ConfirmPassword == "") {
                            alert("Please Confirm Password.")
                            return false
                        }
                        else
                            if (this.state.ConfirmPassword != this.state.Password) {
                                alert("Please enter password exactly same as above password")
                                return false
                            }
                            else
                                if (this.state.PhoneNumber == "" || !this.state.PhoneNumber.match(phonenoreg)) {
                                    alert("Please enter 10 digit phone no with country code(eg.+91).")
                                    return false
                                }
        if (this.state.Ischecked !== true) {
            alert("Please accept terms & conditions")
        }
        else
            this.register()
    }
    register() {
        this.setState({ Loading: true })
        let formData = new FormData();
        formData.append('first_name', this.state.FirstName);
        formData.append('last_name', this.state.LastName);
        formData.append('email', this.state.Email);
        formData.append('password', this.state.Password);
        formData.append('confirm_password', this.state.ConfirmPassword);
        formData.append('gender', 'M');
        formData.append('phone_no', this.state.PhoneNumber);
        console.log(formData)
        GlobalAPI(register, "POST", formData, null, response => {
            this.setState({ Loading: false })
            if (response.status == 200) {
                alert("Registration Successfull")
                this.props.navigation.replace("Login")
            }
            else
                alert(response.user_msg)
            this.setState({ Loading: false })
        },
            error => {
                console.log(error)
                this.setState({ Loading: false })
            }
        )
    }
    focusNextField(id) {
        this.inputs[id].focus();
    }

    // radio buttons
    onPress = data => this.setState({ data });

    render() {
        return (
            <View pointerEvents={this.state.Loading ? "none" : "auto"} style={{ flex: 1 }}>
                <ImageBackground source={require('../../../assets/images/red_1.jpg')} style={{ flex: 1, borderColor: "red", borderWidth: 1, heigh: Dimensions.get('window').height }}>

                    <Header style={{ backgroundColor: HeaderColor }}>
                        <Left>
                            <Button transparent onPress={() => this.props.navigation.goBack()}>
                                <Icon name="angle-left" size={26} color={White} />
                            </Button>
                        </Left>
                        <Text style={styles.HeaderText}>Register</Text>
                        <Right></Right>
                    </Header>
                    <ScrollView >
                        <KeyboardAvoidingView style={styles.keyboardview} behavior="padding" enabled>
                            <View>
                                <View style={styles.neostore}>
                                    <Text style={styles.neostore}>NeoSTORE</Text>
                                    <View style={styles.view3}>
                                        <Icon name="user" size={25} style={styles.lockicon} />
                                        <TextInput onSubmitEditing={() => { this.focusNextField('two'); }} returnKeyType={"next"} ref={input => { this.inputs['one'] = input; }} onChangeText={(text) => this.setState({ FirstName: text })} style={styles.textinput} placeholder="First Name" placeholderTextColor="white" ></TextInput>

                                    </View>
                                    <View style={styles.view3}>
                                        <Icon name="user" size={25} style={styles.lockicon} />
                                        <TextInput onSubmitEditing={() => { this.focusNextField('three'); }} returnKeyType={"next"} ref={input => { this.inputs['two'] = input; }} onChangeText={(text) => this.setState({ LastName: text })} style={styles.textinput} placeholder="Last Name" placeholderTextColor="white" ></TextInput>

                                    </View>
                                    <View style={styles.view3}>
                                        <Icon name="mail" size={23} style={styles.lockicon} />
                                        <TextInput onSubmitEditing={() => { this.focusNextField('four'); }} returnKeyType={"next"} ref={input => { this.inputs['three'] = input; }} onChangeText={(text) => this.setState({ Email: text })} style={styles.textinput} placeholder="Email" placeholderTextColor="white" ></TextInput>

                                    </View>
                                    <View style={styles.view3}>
                                        <Icon name="unlock" size={23} style={styles.unlockicon} />
                                        <TextInput onSubmitEditing={() => { this.focusNextField('five'); }} returnKeyType={"next"} ref={input => { this.inputs['four'] = input; }} onChangeText={(text) => this.setState({ Password: text })} style={styles.textinput} secureTextEntry={true} placeholder="Password" placeholderTextColor="white" ></TextInput>
                                    </View>

                                    <View style={styles.view3}>
                                        <Icon name="lock" size={23} style={styles.lockicon} />
                                        <TextInput onSubmitEditing={() => { this.focusNextField('six'); }} returnKeyType={"next"} ref={input => { this.inputs['five'] = input; }} onChangeText={(text) => this.setState({ ConfirmPassword: text })} style={styles.textinput} secureTextEntry={true} placeholder="Confirm Password" placeholderTextColor="white" ></TextInput>
                                    </View>

                                    <View style={styles.radio}>
                                        <Text style={styles.radioTitle}> Gender </Text>
                                        <RadioForm
                                            formHorizontal={true}
                                            buttonSize={10}
                                            radio_props={gender}
                                            initial={0}
                                            buttonColor={'#fff'}
                                            selectedButtonColor={'#fff'}
                                            labelStyle={styles.radiobuttonlable}
                                            onPress={(value) => { }} />
                                    </View>
                                    <View style={styles.view3}>
                                        <Icon name="mobile" size={24} style={styles.lockicon} />
                                        <TextInput onSubmitEditing={() => { this.focusNextField('seven'); }} returnKeyType={"next"} ref={input => { this.inputs['six'] = input; }} keyboardType="phone-pad" onChangeText={(text) => this.setState({ PhoneNumber: text })} style={styles.textinput} placeholder="Phone Number" placeholderTextColor="white" ></TextInput>
                                    </View>
                                    <View style={{ flexDirection: 'row' }}>

                                        <TouchableOpacity style={styles.container} onPress={() => { this.setState({ Ischecked: !this.state.Ischecked }) }} >
                                            {console.log(this.state.Ischecked)}
                                            <View style={styles.checkboxContainer}>
                                                <View style={[styles.square, this.state.Ischecked ? { backgroundColor: 'rgba(256,256,256,1.0)', } : { backgroundColor: 'rgba(256,256,256,0)', },]} ></View>
                                            </View>
                                            <View>
                                                <Text style={{ color: this.props.color, fontSize: 17, marginRight: 10, fontWeight: 'bold' }}>{this.props.label}</Text>
                                            </View>
                                        </TouchableOpacity>



                                        <Text style={{ color: "white", fontWeight: 'bold', fontSize: 14 }}>I agree the Terms & Condtition</Text>
                                    </View>
                                    <TouchableOpacity style={styles.loginbutton} onPress={() => this.validate()}>
                                        {this.state.Loading ? <ActivityIndicator size="large" color="red" /> : <Text style={styles.buttontext}>REGISTER</Text>}
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </KeyboardAvoidingView>
                    </ScrollView>
                </ImageBackground>
            </View>
        );
    }
}
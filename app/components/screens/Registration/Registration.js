import React, { Component } from 'react';
import { View, ActivityIndicator, Image, Text, ImageBackground, BackHandler, TextInput, ScrollView, Platform, TouchableOpacity, KeyboardAvoidingView, Keyboard, Dimensions, Alert } from 'react-native';
import styles from './Styles';
import { Icon } from '../../../utils/Icon/Icon';
import { Container, Header, Left, Body, Right, Button, Title, Toast } from 'native-base';
import { White, ButtonText, PlusIconBackground, HeaderColor } from '../../../utils/Colors';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import { register, } from '../../../lib/api';
import { GlobalAPI } from '../../../lib/Globals';
import { EmptyField, Email, Name, Password, PhoneNumber } from '../../../lib/Validation';

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

        if (EmptyField(this.state.FirstName) || Name(this.state.FirstName)) {
            // alert("Please Enter Valid Name with no wide spaces & Numbers.")
            Toast.show({
                text: 'Please Enter Valid First Name with no wide spaces & Numbers.',
                duration: 2000,
                type: "warning"
            })
            return false
        }
        if (EmptyField(this.state.LastName) || Name(this.state.LastName)) {
            Toast.show({
                text: 'Please Enter Valid Last Name with no wide spaces & Numbers.',
                duration: 2000,
                type: "warning"
            })
            return false
        }
        if (EmptyField(this.state.Email) || Email(this.state.Email)) {
            Toast.show({
                text: 'Please Enter Valid Email.',
                duration: 2000,
                type: "warning"
            })
            return false
        }
        if (EmptyField(this.state.Password) || Password(this.state.Password) || this.state.Password.length < 8) {
            // alert("Enter alphanumeric password having atleast 8 characters.")
            Toast.show({
                text: 'Enter alphanumeric password having atleast 8 characters.',
                duration: 2000,
                type: "warning"
            })
            return false
        }
        if (EmptyField(this.state.ConfirmPassword)) {
            Toast.show({
                text: 'Confirm Password.',
                duration: 2000,
                type: "warning"
            })
            return false
        }
        if (this.state.ConfirmPassword != this.state.Password) {
            Toast.show({
                text: 'Please enter password exactly same as above password.',
                duration: 2000,
                type: "warning"
            })
            return false
        }
        if (EmptyField(this.state.PhoneNumber) || PhoneNumber(this.state.PhoneNumber)) {
            Toast.show({
                text: 'Please enter 10 digit phone no with country code(eg.+91).',
                duration: 2000,
                type: "warning"
            })
            return false
        }
        if (this.state.Ischecked !== true) {
            Toast.show({
                text: 'Please accept terms & conditions.',
                duration: 2000,
                type: "warning"
            })
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
                Toast.show({
                    text: 'Registration Successfull.',
                    duration: 2000,
                    type: "success"
                })
                alert("Registration Successfull")
                this.props.navigation.replace("Login")
            }
            else {
                Toast.show({
                    text: response.user_msg,
                    duration: 2000,
                    type: "danger"
                })
                // alert(response.user_msg)
                this.setState({ Loading: false })
            }

        },
            error => {
                console.log(error)
                this.setState({ Loading: false })
                Alert.alert(
                    'Failed!',
                    'No Internet Connection.',
                    [
                        { text: 'Exit', onPress: () => BackHandler.exitApp(), style: 'cancel' },
                        { text: 'Retry', onPress: () => this.login() },
                    ],
                    { cancelable: false }
                )
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
                                        <TextInput onSubmitEditing={() => { this.focusNextField('two'); }} returnKeyType={"next"} ref={input => { this.inputs['one'] = input; }} onChangeText={(text) => this.setState({ FirstName: text })} style={styles.textinput} placeholder="First Name" placeholderTextColor={White} ></TextInput>

                                    </View>
                                    <View style={styles.view3}>
                                        <Icon name="user" size={25} style={styles.lockicon} />
                                        <TextInput onSubmitEditing={() => { this.focusNextField('three'); }} returnKeyType={"next"} ref={input => { this.inputs['two'] = input; }} onChangeText={(text) => this.setState({ LastName: text })} style={styles.textinput} placeholder="Last Name" placeholderTextColor={White} ></TextInput>

                                    </View>
                                    <View style={styles.view3}>
                                        <Icon name="mail" size={23} style={styles.lockicon} />
                                        <TextInput onSubmitEditing={() => { this.focusNextField('four'); }} returnKeyType={"next"} ref={input => { this.inputs['three'] = input; }} onChangeText={(text) => this.setState({ Email: text })} style={styles.textinput} placeholder="Email" placeholderTextColor={White} ></TextInput>

                                    </View>
                                    <View style={styles.view3}>
                                        <Icon name="unlock" size={23} style={styles.unlockicon} />
                                        <TextInput onSubmitEditing={() => { this.focusNextField('five'); }} returnKeyType={"next"} ref={input => { this.inputs['four'] = input; }} onChangeText={(text) => this.setState({ Password: text })} style={styles.textinput} secureTextEntry={true} placeholder="Password" placeholderTextColor={White} ></TextInput>
                                    </View>

                                    <View style={styles.view3}>
                                        <Icon name="lock" size={23} style={styles.lockicon} />
                                        <TextInput onSubmitEditing={() => { this.focusNextField('six'); }} returnKeyType={"next"} ref={input => { this.inputs['five'] = input; }} onChangeText={(text) => this.setState({ ConfirmPassword: text })} style={styles.textinput} secureTextEntry={true} placeholder="Confirm Password" placeholderTextColor={White} ></TextInput>
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
                                                <Text style={styles.checkboxlable}>{this.props.label}</Text>
                                            </View>
                                        </TouchableOpacity>



                                        <Text style={{ color: "white", fontWeight: 'bold', fontSize: 14 }}>I agree the Terms & Condtition</Text>
                                    </View>
                                    <TouchableOpacity style={styles.loginbutton} onPress={() => this.validate()}>
                                        {this.state.Loading ? <ActivityIndicator size="large" color={HeaderColor} /> : <Text style={styles.buttontext}>REGISTER</Text>}
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
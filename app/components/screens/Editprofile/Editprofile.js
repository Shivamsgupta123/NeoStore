import React, { Component } from 'react';
import { AppRegistry, ImageBackground, TextInput, StyleSheet, Text, Platform, View, KeyboardAvoidingView, Image, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import { AsyncStorage } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Container, Header, Left, Body, Right, Button, Title } from 'native-base';
import styles from './Styles';
import { White, ButtonText, PlusIconBackground, HeaderColor } from '../../../utils/Colors';
import { LogoSize, LogoFontWeight, LogoPadding, TextInputFont, RegularFon, HeaderTextFontWeight, HeaderText, ButtonTextSize } from '../../../utils/FontSizes';
import { DatePickerDialog } from 'react-native-datepicker-dialog'
import moment from 'moment';
import ImagePicker from 'react-native-image-picker';
import { updateaccountdetail } from '../../../lib/api';
import { GlobalAPI } from '../../../lib/Globals';



export default class Editprofile extends Component {

    constructor(props) {
        super(props);
        console.log("editprofilr123", props)
        this.focusNextField = this.focusNextField.bind(this);
        this.inputs = {};
        this.state = {
            FirstName: '',
            LastName: '',
            Email: '',
            PhoneNumber: '',
            DOB: '',
            avatarSource: null,
            Loader: false,
            // profileimage: 'abc'
            DateText: "16 - 10 - 1996",
            DateHolder: null
        }
        console.log("profileimage", this.props.navigation.state.params.data.profile_pic)


    }

    focusNextField(id) {
        this.inputs[id].focus()
    }



    // Validation
    validate = (FirstName, LastName, Email, PhoneNumber, DOB) => {

        var namereg = /^[A-Za-z]+$/;
        var emailreg = /\S+@\S+\.\S+/;
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
                        // if (this.state.DOB == "" || !this.state.DOB.match(dobreg)) {
                        //     alert("PLease enter DOB in formate DD-MM-YYYY")
                        //     return false
                        // }
                        // else

                        this.submit()

    }

    submit() {
        let formData = new FormData();
        formData.append('first_name', this.state.FirstName);
        formData.append('last_name', this.state.LastName);
        formData.append('email', this.state.Email);
        formData.append('dob', this.state.DateText);
        formData.append('profile_pic', this.state.avatarSource.uri);
        formData.append('phone_no', this.state.PhoneNumber);


        // console.log("formdata", formData)

        GlobalAPI(updateaccountdetail, "POST", formData, null, response => {
            if (response.status == 200) {
                alert("Account detail updated successfully.")
                this.props.navigation.navigate('Myaccount')
                // this.setState({ Loader: false })
            }
            else
                alert(response.user_msg)
        },
            error => {
                console.log(error)

            }
        )
    }


    // ImagePicker
    takeimage() {
        var options = {
            title: 'Select Image',
            storageOptions: {
                skipBackup: true,
                path: 'images'

            }
        };
        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled image picker');
            }
            else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            }
            else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            }
            else {
                let source = { uri: 'data:image/jpeg;base64,' + response.data };

                this.setState({
                    avatarSource: source
                });
            }
        });
    }

    DatePickerMainFunctionCall() {
        let DateHolder = this.state.DateHolder;
        if (!DateHolder || DateHolder == null) {
            DateHolder = new Date();
            this.setState({
                DateHolder: DateHolder
            });
        }
        //To open the dialog
        this.refs.DatePickerDialog.open({
            date: DateHolder,
        });
    }

    onDatePickedFunction(date) {

        this.setState({
            dobDate: date,
            DateText: moment(date).format('DD-MM-YYYY')
        });
        console.log("date", this.state.DateText)
    }




    render() {
        // if (this.state.Loader)
        //     return <ActivityIndicator style={{ flex: 1, justifyContent: 'center' }} size="large" color="#e91b1a" />
        return (
            // <View style={{ height: Dimensions.get('window').height }}>
            <ImageBackground source={require('../../../assets/images/red_1.jpg')} style={{ flex: 1, borderColor: "red", borderWidth: 1, heigh: Dimensions.get('window').height }}>
                <Header style={{ backgroundColor: HeaderColor }}>
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.goBack()}>
                            <Icon name="chevron-left" size={22} color={White} />
                        </Button>
                    </Left>

                    <Text style={{ color: White, fontSize: HeaderText, marginLeft: Platform.OS === 'ios' ? 0 : 65, fontWeight: HeaderTextFontWeight, marginTop: Platform.OS === 'ios' ? 5 : 10 }}>Edit Profile</Text>

                    <Right>
                        <Icon name="search" size={22} color={White} />
                    </Right>


                </Header>
                <ScrollView >
                    <KeyboardAvoidingView style={styles.keyboardview} behavior="padding" enabled>

                        <View style={{ alignItems: 'center', padding: 20 }}>
                            <TouchableOpacity onPress={() => this.takeimage()} >

                                <View style={styles.profileimage}>

                                    {this.state.avatarSource === null ? <Image style={styles.profileimage} source={{ uri: this.props.navigation.state.params.data.profile_pic }} /> :
                                        <Image style={styles.profileimage} source={this.state.avatarSource} />
                                    }

                                </View>

                                {/* <Image style={styles.profileimage} source={require('../../../assets/images/lion.jpg')} /> */}
                            </TouchableOpacity>

                            <View style={styles.view3}>
                                <Icon name="user" size={25} color="#FFFFFF" style={styles.iconpadding} />
                                <TextInput onSubmitEditing={() => { this.focusNextField('two'); }} returnKeyType={"next"} ref={input => { this.inputs['one'] = input; }} onChangeText={(text) => this.setState({ FirstName: text })} style={styles.textinput} placeholder={this.props.navigation.state.params.data.first_name} placeholderTextColor="white" ></TextInput>
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
                                <TouchableOpacity onPress={() => this.DatePickerMainFunctionCall()}>


                                    <Text style={styles.dob}>{this.state.DateText}</Text>
                                    {/* fontSize: 30, marginLeft: 15, marginTop: 0, borderWidth: 0, color: 'white', */}
                                </TouchableOpacity>
                                <DatePickerDialog ref="DatePickerDialog" onDatePicked={(d) => this.onDatePickedFunction(d)} />

                                {/* <TextInput returnKeyType={"next"} onChangeText={(text) => this.setState({ DOB: text })} style={styles.textinput} placeholder="DOB" placeholderTextColor="white" ></TextInput> */}
                            </View>

                            <TouchableOpacity style={styles.loginbutton} onPress={() => this.validate(this.state.FirstName, this.state.LastName, this.state.Email, this.state.PhoneNumber, this.state.DOB)}>
                                <Text onSubmitEditing={() => { this.focusNextField('six'); }} returnKeyType={"next"} ref={input => { this.inputs['five'] = input; }} style={styles.buttontext}>SUBMIT</Text>
                            </TouchableOpacity>




                        </View>

                    </KeyboardAvoidingView>
                </ScrollView>
            </ImageBackground >
            // </View>

        );
    }
}
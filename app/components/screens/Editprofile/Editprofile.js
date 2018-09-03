import React, { Component } from 'react';
import { AppRegistry, ActivityIndicator, ImageBackground, TextInput, StyleSheet, Text, Platform, View, KeyboardAvoidingView, Image, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
// import { AsyncStorage } from 'react-native';
import { Icon } from '../../../utils/Icon/Icon';
import { Container, Header, Left, Body, Right, Button, Title } from 'native-base';
import styles from './Styles';
import { White, ButtonText, PlusIconBackground, HeaderColor } from '../../../utils/Colors';
import { LogoSize, LogoFontWeight, LogoPadding, TextInputFont, RegularFon, HeaderTextFontWeight, HeaderText, ButtonTextSize } from '../../../utils/FontSizes';
import { DatePickerDialog } from 'react-native-datepicker-dialog'
import moment from 'moment';
import ImagePicker from 'react-native-image-picker';
import { updateaccountdetail } from '../../../lib/api';
import { GlobalAPI } from '../../../lib/Globals';
import { UserProvider, UserObject } from '../../../lib/UserProvider';



export default class Editprofile extends Component {
    constructor(props) {
        super(props);
        console.log("editprofile888", UserObject.user_data.first_name)
        this.focusNextField = this.focusNextField.bind(this);
        this.inputs = {};
        this.state = {
            FirstName: UserObject.user_data.first_name,
            LastName: UserObject.user_data.last_name,
            Email: UserObject.user_data.email,
            PhoneNumber: UserObject.user_data.phone_no,
            // DOB: UserObject.state.params.dob,
            avatarSource: null,
            Loading: false,
            profileimage: UserObject.user_data.profile_pic,
            DateText: UserObject.user_data.dob,
            DateHolder: null
        }
        console.log("name", UserObject.user_data.first_name)
        console.log("profileimae", this.state.FirstName)
    }

    focusNextField(id) {
        this.inputs[id].focus()
    }



    // sending updated data to API
    submit() {
        if (this.state.avatarSource == null)
            alert("Upload profile image")
        else {
            this.setState({ Loading: true })
            let formData = new FormData();
            formData.append('first_name', this.state.FirstName);
            formData.append('last_name', this.state.LastName);
            formData.append('email', this.state.Email);
            formData.append('dob', this.state.DateText);
            formData.append('profile_pic', this.state.avatarSource.uri);
            formData.append('phone_no', this.state.PhoneNumber);
            console.log("formdata", formData)

            GlobalAPI(updateaccountdetail, "POST", formData, null, response => {

                if (response.status == 200) {
                    console.log("afs", response)
                    UserProvider.setUserInfo("user_data", response.data)
                    console.log("updated", UserObject)
                    this.setState({ Loading: false })
                    alert("Account detail updated successfully.")
                    this.props.navigation.goBack()
                }
                else
                    alert(response.user_msg)
            },
                error => {
                    console.log(error)
                }
            )
        }
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
    // Datepicker
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
        console.log("date", date)

        this.setState({
            dobDate: date,
            DateText: moment(date).format('DD-MM-YYYY')
        });
        console.log("date1", this.state.DateText)
    }

    render() {

        return (
            <View pointerEvents={this.state.Loading ? "none" : "auto"} style={{ flex: 1 }}>
                <ImageBackground source={require('../../../assets/images/red_1.jpg')} style={styles.backgroundimage}>
                    <Header style={{ backgroundColor: HeaderColor }}>
                        <Left>
                            <Button transparent onPress={() => this.props.navigation.goBack()}>
                                <Icon name="angle-left" size={22} color={White} />
                            </Button>
                        </Left>
                        <Text style={styles.headertext}>Edit Profile</Text>
                        <Right>
                            <Icon name="search" size={22} color={White} />
                        </Right>
                    </Header>

                    <ScrollView >
                        <KeyboardAvoidingView style={styles.keyboardview} behavior="padding" enabled>
                            <View style={styles.mainview}>

                                <TouchableOpacity onPress={() => this.takeimage()} >
                                    <View style={styles.profileimage}>
                                        {this.state.avatarSource === null ? <Image style={styles.profileimage} source={{ uri: this.state.profileimage }} /> :
                                            <Image style={styles.profileimage} source={this.state.avatarSource} />
                                        }
                                    </View>
                                    {/* <Image style={styles.profileimage} source={require('../../../assets/images/lion.jpg')} /> */}
                                </TouchableOpacity>

                                <View style={styles.view3}>
                                    <Icon name="user" size={25} color="#FFFFFF" style={styles.iconpadding} />
                                    <TextInput onSubmitEditing={() => { this.focusNextField('two'); }} returnKeyType={"next"} ref={input => { this.inputs['one'] = input; }} onChangeText={(text) => this.setState({ FirstName: text })} style={styles.textinput} defaultValue={this.state.FirstName} placeholderTextColor="white" ></TextInput>
                                </View>

                                <View style={styles.view3}>
                                    <Icon name="user" size={25} color="#FFFFFF" style={styles.iconpadding} />
                                    <TextInput onSubmitEditing={() => { this.focusNextField('three'); }} returnKeyType={"next"} ref={input => { this.inputs['two'] = input; }} onChangeText={(text) => this.setState({ LastName: text })} style={styles.textinput} defaultValue={this.state.LastName} placeholderTextColor="white" ></TextInput>
                                </View>

                                <View style={styles.view3}>
                                    <Icon name="mail" size={22} color="#FFFFFF" style={styles.mailicon} />
                                    <TextInput onSubmitEditing={() => { this.focusNextField('four'); }} returnKeyType={"next"} ref={input => { this.inputs['three'] = input; }} onChangeText={(text) => this.setState({ Email: text })} style={styles.textinput} defaultValue={this.state.Email} placeholderTextColor="white" ></TextInput>
                                </View>

                                <View style={styles.view3}>
                                    <Icon name="mobile" size={25} color="#FFFFFF" style={styles.mobileicon} />
                                    <TextInput onSubmitEditing={() => { this.focusNextField('five'); }} returnKeyType={"next"} ref={input => { this.inputs['four'] = input; }} keyboardType="phone-pad" onChangeText={(text) => this.setState({ PhoneNumber: text })} style={styles.textinput} defaultValue={this.state.PhoneNumber} placeholderTextColor="white" ></TextInput>
                                </View>

                                <View style={styles.view3}>
                                    <Icon name="cake" size={20} color="#FFFFFF" style={styles.cakeicon} />
                                    <TouchableOpacity onPress={() => this.DatePickerMainFunctionCall()}>
                                        <Text style={styles.dob}>{this.state.DateText}</Text>
                                    </TouchableOpacity>
                                    <DatePickerDialog ref="DatePickerDialog" onDatePicked={(d) => this.onDatePickedFunction(d)} />
                                </View>

                                <TouchableOpacity style={styles.loginbutton} onPress={() => this.submit()}>
                                    {this.state.Loading ? <ActivityIndicator size="large" color="red" /> : <Text onSubmitEditing={() => { this.focusNextField('six'); }} returnKeyType={"next"} ref={input => { this.inputs['five'] = input; }} style={styles.buttontext}>SUBMIT</Text>}
                                </TouchableOpacity>
                            </View>
                        </KeyboardAvoidingView>
                    </ScrollView>
                </ImageBackground >
            </View>

        );
    }
}
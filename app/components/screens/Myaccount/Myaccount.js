import React, { Component } from 'react';
import { AppRegistry, ActivityIndicator, ImageBackground, TextInput, StyleSheet, Text, Platform, View, KeyboardAvoidingView, Image, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import Editprofile from '../Editprofile/Editprofile'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Container, Header, Left, Body, Right, Button, Title } from 'native-base';
import styles from './Styles';
import { White, ButtonText, PlusIconBackground, HeaderColor } from '../../../utils/Colors';
import { LogoSize, LogoFontWeight, LogoPadding, TextInputFont, RegularFon, HeaderTextFontWeight, HeaderText, ButtonTextSize } from '../../../utils/FontSizes';
import ResetPasswordScreen from '../ResetPassword/ResetPasswordScreen';
import { AsyncStorage } from 'react-native';

var getdata
export default class Myaccount extends Component {
    state = {
        FirstName: '',
        LastName: '',
        Email: '',
        PhoneNumber: '',
        DOB: '',
        ProfileImage: 'abc',
    }

    // getting users data
    componentWillMount = async () => {
        getdata = await AsyncStorage.getItem('ResponseData');
        // console.log("data123", getdata)
        getdata = JSON.parse(getdata)
        this.setState({ FirstName: getdata.data.first_name, LastName: getdata.data.last_name, Email: getdata.data.email, PhoneNumber: getdata.data.phone_no, DOB: getdata.data.dob, ProfileImage: getdata.data.profile_pic })
    }
    render() {
        return (
            <View style={{ flex: 1, height: Dimensions.get('window').height }}>
                <ImageBackground source={require('../../../assets/images/red_1.jpg')} style={styles.backgroundimage}>
                    <Header style={{ backgroundColor: HeaderColor }}>
                        <Left>
                            <Button transparent onPress={() => this.props.navigation.goBack()}>
                                <Icon name="chevron-left" size={22} color="#f9fbff" />
                            </Button>
                        </Left>
                        <Body>
                            <Text style={styles.headertitle}>My Account</Text>
                        </Body>
                        <Right>
                            <Icon name="search" size={22} color="#f9fbff" />
                        </Right>
                    </Header>

                    <View style={styles.mainview}>

                        <Image style={styles.profileimage} source={{ uri: this.state.ProfileImage }} />
                        <View style={styles.view3}>
                            <Icon name="user" size={25} color="#FFFFFF" style={styles.iconpadding} />
                            <TextInput style={styles.textinput} editable={false} placeholder={this.state.FirstName} placeholderTextColor="white" ></TextInput>
                        </View>

                        <View style={styles.view3}>
                            <Icon name="user" size={25} color="#FFFFFF" style={styles.iconpadding} />
                            <TextInput style={styles.textinput} editable={false} placeholder={this.state.LastName} placeholderTextColor="white" ></TextInput>
                        </View>

                        <View style={styles.view3}>
                            <Icon name="envelope" size={20} color="#FFFFFF" style={styles.iconpadding} />
                            <TextInput style={styles.textinput} editable={false} placeholder={this.state.Email} placeholderTextColor="white" ></TextInput>

                        </View>

                        <View style={styles.view3}>
                            <Icon name="mobile" size={35} color="#FFFFFF" style={styles.mobileicon} />
                            <TextInput style={styles.textinput} editable={false} placeholder={this.state.PhoneNumber} placeholderTextColor="white" ></TextInput>
                        </View>

                        <View style={styles.view3}>
                            <Icon name="birthday-cake" size={20} color="#FFFFFF" style={styles.iconpadding} />
                            <TextInput style={styles.textinput} editable={false} placeholder="16-10-1996" placeholderTextColor="white" ></TextInput>
                        </View>

                        <TouchableOpacity style={styles.loginbutton} onPress={() => this.props.navigation.navigate('Editprofile', getdata)}>
                            <Text style={styles.buttontext}>Edit Profile</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.resetpasswordbutton} onPress={() => this.props.navigation.navigate('ResetPasswordScreen')}>
                            <Text style={styles.resetpasswordbuttontext}>RESET PASSWORD</Text>
                        </TouchableOpacity>
                    </View>

                </ImageBackground>
            </View>


        );
    }
}
import React, { Component } from 'react';
import { AppRegistry, ActivityIndicator, ImageBackground, TextInput, StyleSheet, Text, Platform, View, KeyboardAvoidingView, Image, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import Editprofile from '../Editprofile/Editprofile'
import { Icon } from '../../../utils/Icon/Icon';
import { Container, Header, Left, Body, Right, Button, Title } from 'native-base';
import styles from './Styles';
import { White, ButtonText, PlusIconBackground, HeaderColor } from '../../../utils/Colors';
import { LogoSize, LogoFontWeight, LogoPadding, TextInputFont, RegularFon, HeaderTextFontWeight, HeaderText, ButtonTextSize } from '../../../utils/FontSizes';
import ResetPasswordScreen from '../ResetPassword/ResetPasswordScreen';
import { UserObject } from '../../../lib/UserProvider';

var getdata
export default class Myaccount extends Component {
    state = {
        autoplay: true
    }
    componentDidMount() {
        console.log("25")
        const didBlurSubscription = this.props.navigation.addListener(
            'willFocus',
            payload => {
                this.setState({ autoplay: false })
            }
        );
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <ImageBackground source={require('../../../assets/images/red_1.jpg')} style={styles.backgroundimage}>
                    <Header style={{ backgroundColor: HeaderColor }}>
                        <Left>
                            <Button transparent onPress={() => this.props.navigation.goBack()}>
                                <Icon name="angle-left" size={22} style={styles.icon} />
                            </Button>
                        </Left>
                        <Body>
                            <Text style={styles.headertitle}>My Account</Text>
                        </Body>
                        <Right>
                            <Icon name="search" size={22} style={styles.icon} />
                        </Right>
                    </Header>
                    <ScrollView>

                        <View style={styles.mainview}>

                            <Image style={styles.profileimage} source={{ uri: UserObject.user_data.profile_pic }} />
                            <View style={styles.view3}>
                                <Icon name="user" size={25} style={styles.iconpadding} />
                                <TextInput style={styles.textinput} editable={false} placeholder={UserObject.user_data.first_name} placeholderTextColor="white" ></TextInput>
                            </View>

                            <View style={styles.view3}>
                                <Icon name="user" size={25} style={styles.iconpadding} />
                                <TextInput style={styles.textinput} editable={false} placeholder={UserObject.user_data.last_name} placeholderTextColor="white" ></TextInput>
                            </View>

                            <View style={styles.view3}>
                                <Icon name="mail" size={22} style={styles.mailicon} />
                                <TextInput style={styles.textinput} editable={false} placeholder={UserObject.user_data.email} placeholderTextColor="white" ></TextInput>

                            </View>

                            <View style={styles.view3}>
                                <Icon name="mobile" size={25} style={styles.mobileicon} />
                                <TextInput style={styles.textinput} editable={false} placeholder={UserObject.user_data.phone_no} placeholderTextColor="white" ></TextInput>
                            </View>

                            <View style={styles.view3}>
                                <Icon name="cake" size={20} style={styles.cakeicon} />
                                <TextInput style={styles.textinput} editable={false} placeholder={UserObject.user_data.dob} placeholderTextColor="white" ></TextInput>
                            </View>

                            <TouchableOpacity style={styles.loginbutton} onPress={() => this.props.navigation.navigate('Editprofile')}>
                                <Text style={styles.buttontext}>Edit Profile</Text>
                            </TouchableOpacity>


                        </View>

                    </ScrollView>
                </ImageBackground>
                <TouchableOpacity style={styles.resetpasswordbutton} onPress={() => this.props.navigation.navigate('ResetPasswordScreen')}>
                    <Text style={styles.resetpasswordbuttontext}>RESET PASSWORD</Text>
                </TouchableOpacity>
            </View>
            // </View>


        );
    }
}
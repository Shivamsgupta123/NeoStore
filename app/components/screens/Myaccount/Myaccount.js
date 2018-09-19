import React, { Component } from 'react';
import { ImageBackground, TextInput, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Icon } from '../../../utils/Icon/Icon';
import { Header, Left, Body, Right, Button, } from 'native-base';
import styles from './Styles';
import { HeaderColor } from '../../../utils/Colors';
import { connect } from "react-redux";
class Myaccount extends Component {
    constructor(props) {
        super(props);
        this.state = {
            autoplay: true
        }
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
                            {/* <Icon name="search" size={22} style={styles.icon} /> */}
                        </Right>
                    </Header>
                    <ScrollView>

                        <View style={styles.mainview}>
                            {this.props.state.user_data.profile_pic == null ? <Image style={styles.profileimage} source={require('../../../assets/images/user.png')} /> :
                                <Image style={styles.profileimage} source={{ uri: this.props.state.user_data.profile_pic }} />}
                            <View style={styles.view3}>
                                <Icon name="user" size={25} style={styles.iconpadding} />
                                <TextInput style={styles.textinput} editable={false} placeholder={this.props.state.user_data.first_name} placeholderTextColor="white" ></TextInput>
                            </View>

                            <View style={styles.view3}>
                                <Icon name="user" size={25} style={styles.iconpadding} />
                                <TextInput style={styles.textinput} editable={false} placeholder={this.props.state.user_data.last_name} placeholderTextColor="white" ></TextInput>
                            </View>

                            <View style={styles.view3}>
                                <Icon name="mail" size={22} style={styles.mailicon} />
                                <TextInput style={styles.textinput} editable={false} placeholder={this.props.state.user_data.email} placeholderTextColor="white" ></TextInput>

                            </View>

                            <View style={styles.view3}>
                                <Icon name="mobile" size={25} style={styles.mobileicon} />
                                <TextInput style={styles.textinput} editable={false} placeholder={this.props.state.user_data.phone_no} placeholderTextColor="white" ></TextInput>
                            </View>

                            <View style={styles.view3}>
                                <Icon name="cake" size={20} style={styles.cakeicon} />
                                {/* {console.log("User DOB", this.props.state.user_data.dob)} */}
                                {this.props.state.user_data.dob == null ? <TextInput style={styles.textinput} editable={false} placeholder="24-12-2000" placeholderTextColor="white" ></TextInput> :
                                    <TextInput style={styles.textinput} editable={false} placeholder={this.props.state.user_data.dob} placeholderTextColor="white" ></TextInput>}
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
const mapStateToProps = (state) => {
    console.log("state3", state)
    return {
        state
    }
}
export default connect(mapStateToProps)(Myaccount)

import React, { Component } from 'react';
import {AppRegistry,ImageBackground, TextInput, StyleSheet,  Text, Platform, View,KeyboardAvoidingView, Image, ScrollView,Dimensions,TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import { Container, Header, Left, Body, Right, Button, Title } from 'native-base';
import styles from './Styles';
import {White,ButtonText,PlusIconBackground,HeaderColor} from '../../../utils/Colors';
import {LogoSize,LogoFontWeight,LogoPadding,TextInputFont,RegularFon,HeaderTextFontWeight,HeaderText,ButtonTextSize} from '../../../utils/FontSizes';
import ResetPasswordScreen from '../ResetPassword/ResetPasswordScreen';
import { AsyncStorage } from 'react-native';


export default class Myaccount extends Component{
  state = {
    FirstName:'',
    LastName:'',
    Email:'',
    PhoneNumber:'',
    DOB:''

  }
  componentWillMount = async () => {
    var getdata = await AsyncStorage.getItem('ResponseData');   
    

    getdata = JSON.parse(getdata)
    
    this.setState({FirstName:getdata.data.first_name})
    this.setState({LastName:getdata.data.last_name})
    this.setState({Email:getdata.data.email})
    this.setState({PhoneNumber:getdata.data.phone_no})
    this.setState({DOB:getdata.data.dob})
  }
  render(){
    return(
      <ImageBackground source={require('../../../assets/images/red_1.jpg')} style = {styles.backgroundimage}>
        <Header style = {{backgroundColor:HeaderColor}}>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
            <Icon name="chevron-left" size={22}  color="#f9fbff"  />
            </Button>
          </Left>
          <Body>
          <Text style = {styles.headertitle}>My Account</Text>
          </Body>
          <Right>
            <Icon name="search" size={22}  color="#f9fbff" />
          </Right>
                 
        </Header>
        <ScrollView style = {{height:Dimensions.get('window').height}}>  
          {/* <KeyboardAvoidingView style = {styles.keyboardview} behavior="padding" enabled> */}

          <View style = {{ alignItems:'center',padding:20}}>

            <Image style={styles.profileimage} source={require('../../../assets/images/lion.jpg')}/>
            <View style = {styles.view3}>
              <Icon name="user" size={25} color="#FFFFFF" style = {styles.iconpadding}/>
              <TextInput style = {styles.textinput} editable ={false} placeholder = { this.state.FirstName} placeholderTextColor ="white" ></TextInput>
            </View>

            <View style = {styles.view3}>
              <Icon name="user" size={25} color="#FFFFFF" style = {styles.iconpadding}/>
              <TextInput style = {styles.textinput} editable ={false} placeholder = { this.state.LastName} placeholderTextColor ="white" ></TextInput>
            </View>

            <View style={styles.view3 }>
              <Icon name="envelope" size={20} color="#FFFFFF" style = {styles.iconpadding}/>
              <TextInput style = {styles.textinput} editable ={false}  placeholder = { this.state.Email} placeholderTextColor ="white" ></TextInput>
              
            </View>

            <View style={styles.view3 }>
              <Icon name="mobile" size={35} color="#FFFFFF" style = {{ height:50, width:Platform.OS === 'ios' ? 30: 35,     justifyContent:"center",paddingBottom:7, paddingLeft:Platform.OS === 'ios' ? 0: 8}} />
              <TextInput style = {styles.textinput} editable ={false}  placeholder = { this.state.PhoneNumber} placeholderTextColor ="white" ></TextInput>
            </View>

            <View style={styles.view3 }>
              <Icon name="birthday-cake" size={20} color="#FFFFFF" style = {styles.iconpadding} />
              <TextInput style = {styles.textinput}  editable ={false} placeholder = "16-10-1996" placeholderTextColor ="white" ></TextInput>
            </View>

            <TouchableOpacity style = {styles.loginbutton}  onPress={() => this.props.navigation.navigate('EditProfilescreen')}>
              <Text style={styles.buttontext}>Edit Profile</Text>
            </TouchableOpacity>




          </View>
          
          {/* </KeyboardAvoidingView> */}
        </ScrollView>
        <TouchableOpacity style = {styles.resetpasswordbutton}  onPress={() => this.props.navigation.navigate('ResetPasswordScreen')}>
           <Text style={styles.resetpasswordbuttontext}>RESET PASSWORD</Text>
        </TouchableOpacity>
      </ImageBackground>

    );
}
}
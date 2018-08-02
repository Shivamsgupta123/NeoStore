import React, { Component } from 'react';
import {AppRegistry,ImageBackground, TextInput, StyleSheet,  Text, Platform, View,KeyboardAvoidingView, Image, ScrollView,Dimensions,TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import { Container, Header, Left, Body, Right, Button, Title } from 'native-base';
import styles from './Styles';
import {White,ButtonText,PlusIconBackground,HeaderColor} from '../../../utils/Colors';
import {LogoSize,LogoFontWeight,LogoPadding,TextInputFont,RegularFon,HeaderTextFontWeight,HeaderText,ButtonTextSize} from '../../../utils/FontSizes';



export default class Editprofile extends Component{
render(){
    return(
        <ImageBackground source={require('../../../assets/images/red_1.jpg')} style={{ flex:1,borderColor:"red",borderWidth:1, heigh:Dimensions.get('window').height}}>
        <Header style = {{backgroundColor:HeaderColor}}>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
            <Icon name="chevron-left" size={22}  color = {White} style = {{marginLeft:40/3}} />
            </Button>
          </Left>
          {/* <Body>
            <Title style = {{color:'white',fontWeight:'800',fontSize:22, marginLeft:Platform.OS === 'ios' ? 0 : 30}}>My account</Title>
          </Body> */}
          <Text style = {{ color:White,fontSize:HeaderText,marginLeft:Platform.OS === 'ios'? 0 : 65, fontWeight:HeaderTextFontWeight,marginTop:Platform.OS === 'ios'? 5:10}}>Edit Profile</Text>
          <Right>
          <Icon name="search" size={22}  color = {White} style = {{marginRight:40/3}} />
          </Right>
          
        
        </Header>
        <ScrollView style = {{height:Dimensions.get('window').height}}>  
        <KeyboardAvoidingView style = {styles.keyboardview} behavior="padding" enabled>

        <View style = {{ alignItems:'center',padding:20}}>

        <Image style={{width: 400/3, height: 400/3, borderRadius:400/6,}} source={require('../../../assets/images/lion.jpg')}/>
          <View style = {styles.view3}>
        <Icon name="user" size={25} color="#FFFFFF" style = {styles.iconpadding}/>
           <TextInput style = {styles.textinput}  placeholder = "First Name" placeholderTextColor ="white" ></TextInput>
        </View>

        <View style = {styles.view3}>
        <Icon name="user" size={25} color="#FFFFFF" style = {styles.iconpadding}/>
           <TextInput style = {styles.textinput} placeholder = "Last Name" placeholderTextColor ="white" ></TextInput>
        </View>

        <View style={styles.view3 }>
           <Icon name="envelope" size={20} color="#FFFFFF" style = {styles.iconpadding}/>
           <TextInput style = {styles.textinput} placeholder = "Email" placeholderTextColor ="white" ></TextInput>
           
           </View>

           <View style={styles.view3 }>
           <Icon name="mobile" size={35} color="#FFFFFF" style = {{ height:50, width:Platform.OS === 'ios' ? 30: 35,
                justifyContent:"center",paddingBottom:7, paddingLeft:Platform.OS === 'ios' ? 0: 8}} />
           <TextInput style = {styles.textinput}  placeholder = "Phone Number" placeholderTextColor ="white" ></TextInput>
           </View>

           <View style={styles.view3 }>
           <Icon name="birthday-cake" size={20} color="#FFFFFF" style = {styles.iconpadding} />
           <TextInput style = {styles.textinput} placeholder = "DOB" placeholderTextColor ="white" ></TextInput>
           </View>

           <TouchableOpacity style = {styles.loginbutton}  onPress={() => this.props.navigation.navigate('Loginscreen')}>
           <Text style={styles.buttontext}>SUBMIT</Text>
           </TouchableOpacity>




        </View>
        
        </KeyboardAvoidingView>
        </ScrollView>
        </ImageBackground>

    );
}
}
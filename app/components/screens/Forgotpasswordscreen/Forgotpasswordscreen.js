import React, { Component} from 'react';
import { View ,Image,Text,ImageBackground,TextInput,Platform, TouchableOpacity} from 'react-native';
import styles from './Styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Container, Header, Left, Body, Right, Button, Title } from 'native-base';
import {White,ButtonText,PlusIconBackground,HeaderColor} from '../../../utils/Colors';
import {LogoSize,LogoFontWeight,LogoPadding,TextInputFont,RegularFont} from '../../../utils/FontSizes';







// const img = require('../../assets/images/red_1.jpg');
export default class Forgotpassword extends Component{
    render(){
        return(
            
            <ImageBackground source={require('../../../assets/images/red_1.jpg')} style={{ flex:1,borderColor:"red",borderWidth:1}}>

            <Header style = {{backgroundColor:'red'}}>
          <Left>
            <Button transparent onPress={() => this.props.navigation.navigate('Loginscreen')}>
            <Icon name="chevron-left" size={26}  color="#f9fbff" />
            </Button>
          </Left>
          <Body>
            {/* <Title style = {{color:'white',fontWeight:'bold',fontSize:25, textAlign:'center'}}>Register</Title> */}
          </Body>
          <Right></Right>
          
        
        </Header>

           <View style = {styles.view1}>
           <Text style = { styles.neostore }>NeoSTORE</Text>
           <View style={styles.view3 }>
           <Icon name="user" size={30} color="#FFFFFF" style = {{padding: Platform.OS === 'ios' ? 0 : 5}}/>
           <TextInput style = {styles.textinput} placeholder = "Username" placeholderTextColor ="white" ></TextInput>
           
           </View>

           <View style={styles.view3 }>
           <Icon name="unlock" size={30} color="#FFFFFF" style = {{padding: Platform.OS === 'ios' ? 0 : 5}} />
           <TextInput style = {styles.textinput} placeholder = "Enter New Password" placeholderTextColor ="white" ></TextInput>
           </View>

           <View style={styles.view3 }>
           <Icon name="lock" size={30} color="#FFFFFF" style = {{padding: Platform.OS === 'ios' ? 0 : 5}}/>
           <TextInput style = {styles.textinput} placeholder = "Confirm Password" placeholderTextColor ="white" ></TextInput>
           </View>
           <TouchableOpacity style = {styles.loginbutton} onPress={() => this.props.navigation.navigate('Loginscreen')}>
           <Text style={styles.buttontext}>SUBMIT</Text>
           
           </TouchableOpacity>
           
           </View>
           
            </ImageBackground>
            
        

        );
    }
   

}
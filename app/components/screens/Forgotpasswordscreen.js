import React, { Component} from 'react';
import { View ,Image,Text,ImageBackground,TextInput,TouchableOpacity} from 'react-native';
import styles from '../Styles';
import Icon from 'react-native-vector-icons/FontAwesome';






// const img = require('../../assets/images/red_1.jpg');
export default class Forgotpassword extends Component{
    render(){
        return(
            
            <ImageBackground source={require('../../assets/images/red_1.jpg')} style={{ flex:1,borderColor:"red",borderWidth:1}}>
           <View style = {styles.view1}>
           <Text style = { styles.neostore }>NeoSTORE</Text>
           <View style={styles.view3 }>
           <Icon name="user" size={30} color="#FFFFFF" />
           <TextInput style = {styles.textinput} placeholder = "Username" placeholderTextColor ="white" ></TextInput>
           
           </View>

           <View style={styles.view3 }>
           <Icon name="unlock" size={30} color="#FFFFFF" />
           <TextInput style = {styles.textinput} placeholder = "Enter New Password" placeholderTextColor ="white" ></TextInput>
           </View>

           <View style={styles.view3 }>
           <Icon name="lock" size={30} color="#FFFFFF" />
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
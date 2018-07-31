import React, { Component} from 'react';
import { View ,Image,Text,ImageBackground,TextInput,TouchableOpacity} from 'react-native';
import styles from '../Styles';
import Icon from 'react-native-vector-icons/FontAwesome';






// const img = require('../../assets/images/red_1.jpg');
export default class Login extends Component{
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
           <Icon name="lock" size={30} color="#FFFFFF" />
           <TextInput style = {styles.textinput} secureTextEntry={true} placeholder = "Password" placeholderTextColor ="white" ></TextInput>
           </View>
           <TouchableOpacity style = {styles.loginbutton}>
           <Text style={styles.buttontext}>LOGIN</Text>
           
           </TouchableOpacity>
           <TouchableOpacity  onPress={() => this.props.navigation.navigate('Forgotpasswordscreen')}>
           <Text style = {styles.forgotpassword}>Forgot Password?</Text>

           </TouchableOpacity>
           </View>
           <View style = {styles.view2}>
           <TouchableOpacity  onPress={() => this.props.navigation.navigate('Homescreen')}>
               <View style = {{ flexDirection: 'row',justifyContent: 'space-between', alignItems:'center'}}>
                  <Text style = {styles.newaccount}>DONT HAVE AN ACCOUNT?</Text>
                  <Icon style = {{marginRight:15}} name="plus" size={40} color="#FFFFFF" />
                </View>
           </TouchableOpacity>
           </View>
            </ImageBackground>
            
        

        );
    }
   

}
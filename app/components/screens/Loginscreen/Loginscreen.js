import React, { Component} from 'react';
import { View ,Image,Text,ImageBackground,TextInput,TouchableOpacity,Platform, Dimensions,KeyboardAvoidingView} from 'react-native';
import styles from './Styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {White,ButtonText,PlusIconBackground} from '../../../utils/Colors';
import Editprofile from '../Editprofile/EditProfilescreen';
import { AsyncStorage } from 'react-native';
import {login} from '../../../lib/api';


const storedata = async() => {
    
        try {
          await AsyncStorage.setItem(Username, this.state.Username);
          await AsyncStorage.setItem(Password, this.state.Password);
          
        } catch (error) {
            alert("error saving data")
        
        }
      
}





// const img = require('../../assets/images/red_1.jpg');
// var st = true ;
export default class Login extends Component{
    
    
    state = {
        Username: '',
        Password: ''

    }

    // validate(){
//     var emailreg = /\S+@\S+\.\S+/;
//     var passwordreg = /^[0-9a-zA-Z]+$/;

//     if(this.state.Username == "" || !this.state.Username.match(emailreg))
//     {
//     alert("Enter Valid User Name.")
//     return false
//     }
//     else
//     if(this.state.Password == "" || !this.state.Password.match(passwordreg) || this.state.Password.length<8)
//     {
//     alert("Enter alphanumeric password having atleast 8 characters.")
//    return false
//     }
//     else
    // this.login()

    // }

   
//  async login(){


    


//     let formData = new FormData();
//       formData.append('email', this.state.Username);
//       formData.append('password', this.state.Password);
    

//   await fetch(
//     'http://staging.php-dev.in:8844/trainingapp/api/users/login'  
//     , {
//       method: 'POST',
//       body: formData,
//     })
//     .then(response => response.json()  )
//     .then(  response =>{
// if(response.status == 200)
// {
// alert("success")
// console.log("err")
// this.props.navigation.navigate('Homescreen')
// }
// else
// alert(response.user_msg)

//     }
//     )
// shivamsgupta@outlook.com
      


    
// }



    render(){
        return(
            <View style = {{height:Dimensions.get('window').height, width:Dimensions.get('window').width}}>
            
            <ImageBackground source={require('../../../assets/images/red_1.jpg')} style={{ flex:1,borderColor:"red",borderWidth:1, height:Dimensions.get("window").height}}>
            {/* <KeyboardAvoidingView behavior="position" enabled> */}
           <View style = {styles.view1}>
           <Text style = { styles.neostore }>NeoSTORE</Text>
           <View style={styles.view3 }>
           <Icon name="user" size={30} color="#FFFFFF" style = {{padding: Platform.OS === 'ios' ? 0 : 5}}/>
           <TextInput  returnKeyType = {"next"} onChangeText={(text) => this.setState({Username:text})}    style = {styles.textinput} placeholder = "Username" placeholderTextColor ={White} ></TextInput>
           
           </View>
           <View style={styles.view3 }>
           <Icon name="lock" size={30} color="#FFFFFF" style = {{padding: Platform.OS === 'ios' ? 0 : 5}}/>
           <TextInput  onChangeText={(text) => this.setState({Password:text})}    style = {styles.textinput} secureTextEntry={true} placeholder = "Password" placeholderTextColor = {White} ></TextInput>
           </View>
           <TouchableOpacity onPress={() => this.props.navigation.navigate('Homescreen')} style = {styles.loginbutton}>
           <Text style={styles.buttontext}>LOGIN</Text>
           
           </TouchableOpacity>
           <TouchableOpacity  onPress={() => this.props.navigation.navigate('Forgotpasswordscreen')}>
           <Text style = {styles.forgotpassword}>Forgot Password?</Text>

           </TouchableOpacity>
           </View>
           <View style = {styles.view2}>
           
               <View style = {{ flexDirection: 'row',justifyContent: 'space-between', alignItems:'center'}}>
                  <Text style = {styles.newaccount}>DONT HAVE AN ACCOUNT?</Text>
                  <TouchableOpacity  onPress={() => this.props.navigation.navigate('EditProfilescreen')}>
                  <FeatherIcon style = {{marginRight:15,backgroundColor: PlusIconBackground, padding:2}} name="plus" size={40} color="#FFFFFF" />
            
           </TouchableOpacity>
           </View>
           </View>
           {/* </KeyboardAvoidingView> */}
            </ImageBackground>
            </View>
        

        );
    }
   

}
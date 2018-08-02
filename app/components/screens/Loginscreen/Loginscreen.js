import React, { Component} from 'react';
import { View ,Image,Text,ImageBackground,TextInput,TouchableOpacity,Platform, Dimensions,KeyboardAvoidingView} from 'react-native';
import styles from './Styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {White,ButtonText,PlusIconBackground} from '../../../utils/Colors';








// const img = require('../../assets/images/red_1.jpg');
export default class Login extends Component{
    state = {
        Username: '',
        Password: ''

    }

    // handleUsername = (text) => {
    //     this.setState({ Username: text })
    //  }
    //  handlePassword = (text) => {
    //     this.setState({ Password: text })
    //  }
    login = (Username,Password) => {

        
        if(Username == "")
        alert("Enter Username.")
        else
        {
        if(Password == "")
        alert("enter Password")
        if(Username != "" && Password != "")
        {
        this.props.navigation.navigate('Homescreen');
         
        }
        }
    }




//     login(){
// return 
// fetch('http://staging.php-dev.in:8844/trainingapp/api/users/login', {
//   method: 'POST',
//   headers: {
//     Accept: 'application/json',
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify({
//     firstParam: 'yourValue',
//     secondParam: 'yourOtherValue',
//   }),
// });


//     }



    render(){
        return(
            <View style = {{height:Dimensions.get('window').height, width:Dimensions.get('window').width}}>
            
            <ImageBackground source={require('../../../assets/images/red_1.jpg')} style={{ flex:1,borderColor:"red",borderWidth:1, height:Dimensions.get("window").height}}>
            {/* <KeyboardAvoidingView behavior="position" enabled> */}
           <View style = {styles.view1}>
           <Text style = { styles.neostore }>NeoSTORE</Text>
           <View style={styles.view3 }>
           <Icon name="user" size={30} color="#FFFFFF" style = {{padding: Platform.OS === 'ios' ? 0 : 5}}/>
           <TextInput  onChangeText={(text) => this.setState({Username:text})}    style = {styles.textinput} placeholder = "Username" placeholderTextColor ={White} ></TextInput>
           
           </View>
           <View style={styles.view3 }>
           <Icon name="lock" size={30} color="#FFFFFF" style = {{padding: Platform.OS === 'ios' ? 0 : 5}}/>
           <TextInput  onChangeText={(text) => this.setState({Password:text})}    style = {styles.textinput} secureTextEntry={true} placeholder = "Password" placeholderTextColor = {White} ></TextInput>
           </View>
           <TouchableOpacity onPress = {()=>this.login(this.state.Username, this.state.Password)} style = {styles.loginbutton}>
           <Text style={styles.buttontext}>LOGIN</Text>
           
           </TouchableOpacity>
           <TouchableOpacity  onPress={() => this.props.navigation.navigate('Forgotpasswordscreen')}>
           <Text style = {styles.forgotpassword}>Forgot Password?</Text>

           </TouchableOpacity>
           </View>
           <View style = {styles.view2}>
           
               <View style = {{ flexDirection: 'row',justifyContent: 'space-between', alignItems:'center'}}>
                  <Text style = {styles.newaccount}>DONT HAVE AN ACCOUNT?</Text>
                  <TouchableOpacity  onPress={() => this.props.navigation.navigate('Registrationscreen')}>
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
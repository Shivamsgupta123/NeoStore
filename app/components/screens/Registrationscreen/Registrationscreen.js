import React, { Component} from 'react';
import { View ,Image,Text,ImageBackground,TextInput, ScrollView,Platform,TouchableOpacity,KeyboardAvoidingView,Keyboard, Dimensions} from 'react-native';
import styles from './Styles';
import Icon from 'react-native-vector-icons/FontAwesome';
// import { Container, Header, Content, ListItem, Text, Radio, Right, Left } from 'native-base';
import RadioGroup from 'react-native-radio-buttons-group';
import Checkbox from '../../../containers/CheckBox';
// import {Header  } from "react-native-elements";
// import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import { Container, Header, Left, Body, Right, Button, Title } from 'native-base';
import {White,ButtonText,PlusIconBackground,HeaderColor} from '../../../utils/Colors';
import {LogoSize,LogoFontWeight,LogoPadding,TextInputFont,RegularFon,HeaderTextFontWeight,HeaderText,ButtonTextSize} from '../../../utils/FontSizes';
// import {firstname,lastname} from '../../../utils/Validators';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';



var gender=[
  {label: "Male" , value:0},
  {label: "Female", value:1}
];
export default class Registration extends Component{

    state = {
        
        FirstName:'',
        LastName:'',
        Email:'',
        Password:'',
        ConfirmPassword:'',
        PhoneNumber:''

      }

      validate(){
        var namereg = /^[A-Za-z]+$/;
        var emailreg = /\S+@\S+\.\S+/;
        var passwordreg = /^[0-9a-zA-Z]+$/;
        var phonenoreg = /^\+?([0-9]{2})\)?[-. ]?([0-9]{5})[-. ]?([0-9]{5})$/;
        
        
        if(this.state.FirstName == "" || !this.state.FirstName.match(namereg))
        {
        alert("Please Enter Valid Name with no wide spaces & Numbers.")
        return false
        }
        // else
        // if(!this.state.FirstName.match(namereg))
        // {
        // alert("Enter only Characters & Dont insert wide spaces .")
        // return false
        // }
        else
        if(this.state.LastName == "" || !this.state.LastName.match(namereg))
        {
        alert("Please Enter Valid Name with no wide spaces & Numbers.")
        return false
        }
        // else
        // if(!this.state.LastName.match(namereg))
        // {
        // alert("Enter only Characters & Dont insert wide spaces .")
        // return false
        // }
        else
        if(this.state.Email == "" || !this.state.Email.match(emailreg))
        {
        alert("Please Enter Valid Email.")
        return false
        }
        // else
        // if(!this.state.Email.match(emailreg))
        // {
        // alert("Enter valid Email.")
        // return false
        // }
        else
        if(this.state.Password == "" || !this.state.Password.match(passwordreg) || this.state.Password.length<8 )
        {
        alert("Enter alphanumeric password having atleast 8 characters.")
        return false
        }
        // else
        // if(!this.state.Password.match(passwordreg))
        // {
        // alert("Enter only alphanumeric characters.")
        // return false
        // }
        // else 
        // if(this.state.Password.length<8 || this.state.Password.length>12)
        // {
        // alert("Password must contain 8-12 characters")
        // return false
        // }
       
        else
        if(this.state.ConfirmPassword == "")
        {
        alert("Please Confirm Password.")
        return false
        }
        else 
        if(!this.state.ConfirmPassword != this.state.Password)
        {
        alert("Please enter password exactly same as above password")
        return false
        }
        else
        if(this.state.PhoneNumber == "" || !this.state.PhoneNumber.match(phonenoreg)) 
      {
        alert("Please enter 10 digit phone no with country code(eg.+91).")
        return false
      }
        // else
        // if(!this.state.PhoneNumber.match(phonenoreg))
        // {
        // alert("Please enter 10 digit phone no with country code(eg.+91).")
        // return false
        // }
        else
        this.register()



      }
     
      async register(){

        

      
      let formData = new FormData();
      formData.append('first_name:', this.state.FirstName);
      formData.append('last_name', this.state.LastName);
      formData.append('email', this.state.Email);
      formData.append('password', this.state.Password);
      formData.append('confirm_password', this.state.ConfirmPassword);
      formData.append('gender','M');
      formData.append('phone_no', this.state.PhoneNumber);
        console.log(formData)
      await fetch(
        'http://staging.php-dev.in:8844/trainingapp/api/users/register'  
        , {
          method: 'POST',
          body: formData,
        })
        .then(response => response.json()  )
        .then(  response =>{
    if(response.status == 200)
    alert("Registered Successfully")
    else
    alert(response.user_msg)
    
        }
        )




      }
      focusNextField(id) {
        this.inputs[id].focus();
      }
    
      
      onPress = data => this.setState({ data });
    render(){

        // let selectedButton = this.state.data.find(e => e.selected == true);
        // selectedButton = selectedButton ? selectedButton.value : this.state.data[0].label;
        // onSubmitEditing={() => {this.focusNextField('two');}} ref={ input => {this.inputs['one'] = input; }}returnKeyType = {"next"}

        return(   

          
            
            <ImageBackground source={require('../../../assets/images/red_1.jpg')} style={{ flex:1,borderColor:"red",borderWidth:1, heigh:Dimensions.get('window').height}}>

            <Header style = {{backgroundColor:HeaderColor}}>
          <Left>
            <Button transparent onPress={() => this.props.navigation.navigate('Loginscreen')}>
            <Icon name="chevron-left" size={26}  color={White} />
            </Button>
          </Left>
          {/* <Body>
            <Title style = {{color:'white',fontWeight:'bold',fontSize:25, marginLeft:Platform.OS === 'ios' ? 0 : 45}}>Register</Title>
          </Body> */}
           <Text style = {{ color:White,fontSize:HeaderText,marginLeft:Platform.OS === 'ios'? 0 : 65, fontWeight:HeaderTextFontWeight,marginTop:Platform.OS === 'ios'? 5:10}}>Register</Text>
          <Right></Right>
          
        
        </Header>
        <ScrollView style = {{height:Dimensions.get('window').height}}>  
            <KeyboardAvoidingView style = {styles.keyboardview} behavior="padding" enabled>

              
            <View stlye={{flex:1}}>
           <View style = {styles.neostore}>
           <Text style = { styles.neostore }>NeoSTORE</Text>
           <View style={styles.view3 }>
           <Icon name="user" size={30} color="#FFFFFF" style = {styles.iconpadding}/>
           <TextInput  returnKeyType = {"next"} onChangeText={(text) => this.setState({FirstName:text})} style = {styles.textinput} placeholder = "First Name" placeholderTextColor ="white" ></TextInput>
           
           </View>
           <View style={styles.view3 }>
           <Icon name="user" size={30} color="#FFFFFF" style = {styles.iconpadding}/>
           <TextInput returnKeyType = {"next"} onChangeText={(text) => this.setState({LastName:text})} style = {styles.textinput} placeholder = "Last Name" placeholderTextColor ="white" ></TextInput>
           
           </View>
           <View style={styles.view3 }>
           <Icon name="envelope" size={23} color="#FFFFFF" style = {styles.iconpadding}/>
           <TextInput returnKeyType = {"next"} onChangeText={(text) => this.setState({Email:text})} style = {styles.textinput} placeholder = "Email" placeholderTextColor ="white" ></TextInput>
           
           </View>
           <View style={styles.view3 }>
           <Icon name="unlock" size={23} color="#FFFFFF" style = {styles.iconpadding} />
           <TextInput returnKeyType = {"next"} onChangeText={(text) => this.setState({Password:text})} style = {styles.textinput} secureTextEntry={true} placeholder = "Password" placeholderTextColor ="white" ></TextInput>
           </View>

           <View style={styles.view3 }>
           <Icon name="lock" size={30} color="#FFFFFF" style = {styles.iconpadding}/>
           <TextInput returnKeyType = {"next"} onChangeText={(text) => this.setState({ConfirmPassword:text})} style = {styles.textinput} secureTextEntry={true} placeholder = "Confirm Password" placeholderTextColor ="white" ></TextInput>
           </View>

                            <View style={styles.radio}>
                                <Text style={styles.radioTitle}> Gender </Text>
                                <RadioForm 
                                formHorizontal={true} 
                                buttonSize={10} 
                                radio_props={gender} 
                                initial={0}
                                buttonColor={'#fff'}
                                selectedButtonColor={'#fff'}
                                labelStyle={{fontSize:Platform.OS === 'ios' ? 20 : 17, color:"#fff", padding:4}}
                                onPress={(value)=>{}}/>

                                
                            </View>
                        





            <View style={styles.view3 }>
           <Icon name="mobile" size={30} color="#FFFFFF" style = {styles.iconpadding} />
           <TextInput returnKeyType = {"next"} keyboardType = "phone-pad" onChangeText={(text) => this.setState({PhoneNumber:text})} style = {styles.textinput} placeholder = "Phone Number" placeholderTextColor ="white" ></TextInput>
           </View>
           <View style = {{flexDirection:'row' }}>
             <Checkbox label = "" checked = {false} color = 'ffffff'/>
             <Text style = {{color:"white", fontWeight:'bold', fontSize:14}}>I agree the Terms & Condtition</Text>
           </View>

           


           <TouchableOpacity style = {styles.loginbutton}  onPress = {()=>this.validate()}>
           <Text style={styles.buttontext}>REGISTER</Text>
           </TouchableOpacity>
           </View>

           </View>
           
           </KeyboardAvoidingView>
           </ScrollView>
           </ImageBackground>

            
        

        );
    }
   

}
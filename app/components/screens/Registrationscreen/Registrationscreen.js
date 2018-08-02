import React, { Component} from 'react';
import { View ,Image,Text,ImageBackground,TextInput, ScrollView,Platform,TouchableOpacity,KeyboardAvoidingView,Keyboard, Dimensions} from 'react-native';
import styles from './Styles';
import Icon from 'react-native-vector-icons/FontAwesome';
// import { Container, Header, Content, ListItem, Text, Radio, Right, Left } from 'native-base';
import RadioGroup from 'react-native-radio-buttons-group';
import Checkbox from '../../../containers/CheckBox';
// import {Header  } from "react-native-elements";
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import { Container, Header, Left, Body, Right, Button, Title } from 'native-base';
import {White,ButtonText,PlusIconBackground,HeaderColor} from '../../../utils/Colors';
import {LogoSize,LogoFontWeight,LogoPadding,TextInputFont,RegularFon,HeaderTextFontWeight,HeaderText,ButtonTextSize} from '../../../utils/FontSizes';
// import {firstname,lastname} from '../../../utils/Validators';




export default class Registration extends Component{

    state = {
        data: [
          {
            label: 'Male',
          },
          {
            label: 'Female',
        
          },
          
          
        ],
        FirstName:'',
        LastName:'',
        Email:'',
        Password:'',
        ConfirmPassword:'',
        PhoneNumber:''

      }
      register = (FirstName,LastName,Email,Password,ConfirmPassword,PhoneNumber) => {
        
        // firstname(FirstName);
        // lastname(LastName);
        
        // if(FirstName == "")
        // alert("Please Enter First Name.")
        // else
        // if(LastName == "")
        // alert("Please Enter Last Name.")
        // else
        // if(Email == "")
        // alert("Please Enter Email.")
        // else
        // if(Password == "")
        // alert("Please Enter Password.")
        // else
        // if(ConfirmPassword == "")
        // alert("Please Confirm Password.")
        // else
        // if(PhoneNumber == "")
        // alert("Please Enter Phone Number.")
        // else
        // this.props.navigation.navigate('Loginscreen')

      }
    
      
      onPress = data => this.setState({ data });
    render(){

        let selectedButton = this.state.data.find(e => e.selected == true);
        selectedButton = selectedButton ? selectedButton.value : this.state.data[0].label;

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
           <TextInput onChangeText={(text) => this.setState({FirstName:text})} style = {styles.textinput} placeholder = "First Name" placeholderTextColor ="white" ></TextInput>
           
           </View>
           <View style={styles.view3 }>
           <Icon name="user" size={30} color="#FFFFFF" style = {styles.iconpadding}/>
           <TextInput onChangeText={(text) => this.setState({LastName:text})} style = {styles.textinput} placeholder = "Last Name" placeholderTextColor ="white" ></TextInput>
           
           </View>
           <View style={styles.view3 }>
           <Icon name="envelope" size={23} color="#FFFFFF" style = {styles.iconpadding}/>
           <TextInput onChangeText={(text) => this.setState({Email:text})} style = {styles.textinput} placeholder = "Email" placeholderTextColor ="white" ></TextInput>
           
           </View>
           <View style={styles.view3 }>
           <Icon name="unlock" size={23} color="#FFFFFF" style = {styles.iconpadding} />
           <TextInput onChangeText={(text) => this.setState({Password:text})} style = {styles.textinput} secureTextEntry={true} placeholder = "Password" placeholderTextColor ="white" ></TextInput>
           </View>

           <View style={styles.view3 }>
           <Icon name="lock" size={30} color="#FFFFFF" style = {styles.iconpadding}/>
           <TextInput onChangeText={(text) => this.setState({ConfirmPassword:text})} style = {styles.textinput} secureTextEntry={true} placeholder = "Confirm Password" placeholderTextColor ="white" ></TextInput>
           </View>

            <View style={styles.genderview }> 
                <Text style = {{color:"white",fontSize:22,fontWeight:"bold"}} >Gender</Text>
                <RadioGroup  radioButtons={this.state.data} onPress={this.onPress} flexDirection='row' checkedButtonColor = {"#fff"}/>
      
            </View>

            <View style={styles.view3 }>
           <Icon name="mobile" size={30} color="#FFFFFF" style = {styles.iconpadding} />
           <TextInput onChangeText={(text) => this.setState({PhoneNumber:text})} style = {styles.textinput} placeholder = "Phone Number" placeholderTextColor ="white" ></TextInput>
           </View>
           <View style = {{flexDirection:'row' }}>
             <Checkbox label = "" checked = {false} color = 'ffffff'/>
             <Text style = {{color:"white", fontWeight:'bold', fontSize:14}}>I agree the Terms & Condtition</Text>
           </View>

           


           <TouchableOpacity style = {styles.loginbutton}  onPress = {()=>this.register(this.state.FirstName,this.state.LastName,this.state.Email,this.state.Password,this.state.ConfirmPassword,this.state.PhoneNumber)}>
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
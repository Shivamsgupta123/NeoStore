import React, { Component} from 'react';
import { View ,Image,Text,ImageBackground,TextInput,TouchableOpacity,KeyboardAvoidingView,Keyboard, ScrollView} from 'react-native';
import styles from '../Styles';
import Icon from 'react-native-vector-icons/FontAwesome';
// import { Container, Header, Content, ListItem, Text, Radio, Right, Left } from 'native-base';
import RadioGroup from 'react-native-radio-buttons-group';
import Checkbox from '../../containers/CheckBox';





export default class Ragistration extends Component{

    state = {
        data: [
          {
            label: 'Male',
          },
          {
            label: 'Female',
        
          },
          
          
        ],
      };
    
      // update state
      onPress = data => this.setState({ data });
    render(){
        let selectedButton = this.state.data.find(e => e.selected == true);
        selectedButton = selectedButton ? selectedButton.value : this.state.data[0].label;

        return(
            
            <ImageBackground source={require('../../assets/images/red_1.jpg')} style={{ flex:1,borderColor:"red",borderWidth:1}}>

            <KeyboardAvoidingView style = {styles.keyboardview} behavior="position" enabled>
            <View stlye={{flex:1}}>
           <View style = {styles.neostore}>
           <Text style = { styles.neostore }>NeoSTORE</Text>
           <View style={styles.view3 }>
           <Icon name="user" size={30} color="#FFFFFF" />
           <TextInput style = {styles.textinput} placeholder = "First Name" placeholderTextColor ="white" ></TextInput>
           
           </View>
           <View style={styles.view3 }>
           <Icon name="user" size={30} color="#FFFFFF" />
           <TextInput style = {styles.textinput} placeholder = "Last Name" placeholderTextColor ="white" ></TextInput>
           
           </View>
           <View style={styles.view3 }>
           <Icon name="envelope" size={30} color="#FFFFFF" />
           <TextInput style = {styles.textinput} placeholder = "Email" placeholderTextColor ="white" ></TextInput>
           
           </View>
           <View style={styles.view3 }>
           <Icon name="unlock" size={30} color="#FFFFFF" />
           <TextInput style = {styles.textinput} placeholder = "Password" placeholderTextColor ="white" ></TextInput>
           </View>

           <View style={styles.view3 }>
           <Icon name="lock" size={30} color="#FFFFFF" />
           <TextInput style = {styles.textinput} placeholder = "Confirm Password" placeholderTextColor ="white" ></TextInput>
           </View>

            <View style={styles.genderview }> 
                <Text style = {{color:"white",fontSize:22,fontWeight:"bold"}} >Gender</Text>
                <RadioGroup  radioButtons={this.state.data} onPress={this.onPress} flexDirection='row' color = "#fff"/>
      
            </View>

            <View style={styles.view3 }>
           <Icon name="mobile" size={30} color="#FFFFFF" />
           <TextInput style = {styles.textinput} placeholder = "Phone Number" placeholderTextColor ="white" ></TextInput>
           </View>
           <View style = {{flexDirection:'row' }}>
             <Checkbox label = "" checked = {false} color = 'ffffff'/>
             <Text style = {{color:"white", fontWeight:'bold', fontSize:14}}>I agree the Terms & Condtition</Text>
           </View>

           


           <TouchableOpacity style = {styles.loginbutton}  onPress={() => this.props.navigation.navigate('Loginscreen')}>
           <Text style={styles.buttontext}>REGISTER</Text>
           </TouchableOpacity>
           </View>

</View>
           </KeyboardAvoidingView>
           </ImageBackground>

            
        

        );
    }
   

}
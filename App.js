

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Login from './app/components/screens/Loginscreen';
import Forgotpassword from './app/components/screens/Forgotpasswordscreen';
import Ragistration from './app/components/screens/Registrationscreen';
import { createStackNavigator } from 'react-navigation';
import Home from './app/components/screens/Homescreen';


const RootStack = createStackNavigator(
  {
    Loginscreen:{
      screen:Login,
      navigationOptions:{
        header:null,
      }
    },
     
    Forgotpasswordscreen: {
      screen:Forgotpassword,
      navigationOptions:{
        header:null,
        
    }
  },
    Registrationscreen: {
      screen: Ragistration,
      navigationOptions:{
        header:null,
        
    }
    },
    Homescreen: {
      screen: Home,
      navigationOptions:{
        header:null,
      }
    },
  },
  
  {
    initialRouteName: 'Loginscreen',
  }
);



export default class App extends Component {
  render() {
    return (
        
          
          <RootStack/>
          
    
    )
  }
}



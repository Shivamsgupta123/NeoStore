import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Title } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createDrawerNavigator } from 'react-navigation';
// import React, {Component} from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import Login from './app/components/screens/Loginscreen/Loginscreen';
import Forgotpassword from './app/components/screens/Forgotpassword/Forgotpassword';
import Registration from './app/components/screens/Registrationscreen/Registrationscreen';
import { createStackNavigator } from 'react-navigation';
import Home from './app/components/screens/Homescreen/Homescreen';
import HeaderIconExample from './app/components/screens/demo';


export default class MyHomeScreen extends Component {
    static navigationOptions = {
        drawerLabel: 'Home',
        drawerIcon: ({ tintColor }) => (
            <Image
                source={require('../../assets/images/red_1.jpg')}
                style={[styles.icon, { tintColor: tintColor }]}
            />
        ),
    };
    render() {
        return (
            <Button
                onPress={() => this.props.navigation.navigate('Notifications')}
                title="Go to notifications"
            />
        );
    }
}

class MyNotificationsScreen extends Component {
    static navigationOptions = {
        drawerLabel: 'Notifications',
        drawerIcon: ({ tintColor }) => (
            <Image
                source={require('../../assets/images/red_1.jpg')}
                style={[styles.icon, { tintColor: tintColor }]}
            />
        ),
    };

    render() {
        return (
            <Button
                onPress={() => this.props.navigation.goBack()}
                title="Go back home"
            />
        );
    }
}
const styles = StyleSheet.create({
    icon: {
        width: 24,
        height: 24,
    },
});

const MyApp = createDrawerNavigator({
    Home: {
        screen: MyHomeScreen,
    },
    Notifications: {
        screen: MyNotificationsScreen,
    },
});





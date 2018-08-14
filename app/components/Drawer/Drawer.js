import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, Platform, View, Image, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Container, Header, Left, Body, Right, Button, Title } from 'native-base';
import styles from './Styles';
import Login from '../screens/Login/Login';
import Myaccount from '../screens/Myaccount/Myaccount';
import { AsyncStorage } from 'react-native';

export default class Drawer extends Component {
    state = {
        FirstName: '',
        LastName: '',
        Email: ''
    }

    componentWillMount = async () => {
        var getdata = await AsyncStorage.getItem('ResponseData');

        getdata = JSON.parse(getdata)
        this.setState({ FirstName: getdata.data.first_name })
        this.setState({ LastName: getdata.data.last_name })
        this.setState({ Email: getdata.data.email })
    }

    logout = async () => {

        try {
            AsyncStorage.removeItem("access_token");
        }
        catch (exception) {
            alert("failed.")

        }



        this.props.navigation.navigate('Login')

    }



    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'black', }}>

                <View style={{ alignItems: 'center', padding: 20 }}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Myaccount')}>
                        <Image style={styles.profileimage} source={require('../../assets/images/lion.jpg')} />
                    </TouchableOpacity>
                    <Text style={styles.username}>{this.state.FirstName} {this.state.LastName}</Text>
                    <Text style={styles.useremail}>{this.state.Email}</Text>
                </View>
                <ScrollView>
                    <View style={styles.drawerview}>

                        <Icon name="shopping-cart" style={styles.drawericon} size={30} color="#FFFFFF" />
                        <TouchableOpacity>
                            <Text style={styles.drawertext}>My Cart</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.drawerview}>

                        <Icon name="table" style={styles.drawericon} size={30} color="#FFFFFF" />
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Productlist', { Title: 'Tables', Id: "1" })}>
                            <Text style={styles.drawertext}>Tables</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.drawerview}>

                        <Icon name="table" style={styles.drawericon} size={30} color="#FFFFFF" />
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Productlist', { Title: 'Sofas', Id: "3" })}>
                            <Text style={styles.drawertext}>Sofas</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.drawerview}>

                        <Icon name="table" style={styles.drawericon} size={30} color="#FFFFFF" />
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Productlist', { Title: 'Chairs', Id: "2" })}>
                            <Text style={styles.drawertext}>Chairs</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.drawerview}>

                        <Icon name="table" style={styles.drawericon} size={30} color="#FFFFFF" />
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Productlist', { Title: 'Cupboards', Id: "5" })}>
                            <Text style={styles.drawertext}>Cupboards</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.drawerview}>

                        <Icon name="user" style={styles.drawericon} size={30} color="#FFFFFF" />
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Myaccount')}>
                            <Text style={styles.drawertext}>My Acoount</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.drawerview}>

                        <Icon name="location-arrow" style={styles.drawericon} size={30} color="#FFFFFF" />
                        <TouchableOpacity>
                            <Text style={styles.drawertext}>Store Locators</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.drawerview}>

                        <Icon name="list" style={styles.drawericon} size={30} color="#FFFFFF" />
                        <TouchableOpacity>
                            <Text style={styles.drawertext}>My Orders</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.drawerview}>

                        <Icon name="sign-out" style={styles.drawericon} size={30} color="#FFFFFF" />
                        <TouchableOpacity onPress={() => this.logout()} >
                            <Text style={styles.drawertext}>Logout</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>


            </View>

        );
    }
}
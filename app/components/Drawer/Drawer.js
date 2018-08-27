import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, Platform, View, Image, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Container, Header, Left, Body, Right, Button, Title } from 'native-base';
import styles from './Styles';
import { AsyncStorage } from 'react-native';

export default class Drawer extends Component {
    state = {
        FirstName: '',
        LastName: '',
        Email: '',
        profileimage: 'abc'
    }

    componentWillMount = async () => {
        var getdata = await AsyncStorage.getItem('ResponseData');

        getdata = JSON.parse(getdata)
        console.log("drawer", getdata)
        this.setState({ FirstName: getdata.data.first_name })
        this.setState({ LastName: getdata.data.last_name })
        this.setState({ Email: getdata.data.email })
        this.setState({ profileimage: getdata.data.profile_pic })
        // console.log("pi", this.state.profileimage)
    }

    logout = async () => {

        try {
            AsyncStorage.removeItem("access_token");
        }
        catch (exception) {
            alert("failed.")

        }



        this.props.navigation.replace('Login')

    }



    render() {
        return (
            <View style={styles.mainview}>

                {/* <View style={{ alignItems: 'center', padding: 20 }}> */}
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Myaccount')}>
                    <View style={{ alignItems: 'center', padding: 20 }}>
                        <Image style={styles.profileimage} source={{ uri: this.state.profileimage }} />

                        <Text style={styles.username}>{this.state.FirstName} {this.state.LastName}</Text>
                        <Text style={styles.useremail}>{this.state.Email}</Text></View>

                </TouchableOpacity>
                {/* </View> */}
                {/* <ScrollView> */}
                <View style={styles.drawerview1}>
                    <TouchableOpacity style={styles.drawerview} onPress={() => this.props.navigation.navigate('MyCart')}>
                        <Icon name="shopping-cart" style={styles.drawericon} size={30} color="#FFFFFF" />
                        <Text style={styles.drawertext}>My Cart</Text>
                        <View style={styles.cartitemview}>
                            <Text style={styles.cartitemcount}>10</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={styles.drawerview1}>
                    <TouchableOpacity style={styles.drawerview} onPress={() => this.props.navigation.navigate('Productlist', { Title: 'Tables', Id: "1" })}>
                        <Icon name="table" style={styles.drawericon} size={30} color="#FFFFFF" />
                        <Text style={styles.drawertext}>Tables</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.drawerview1}>
                    <TouchableOpacity style={styles.drawerview} onPress={() => this.props.navigation.navigate('Productlist', { Title: 'Sofas', Id: "3" })}>
                        <Icon name="table" style={styles.drawericon} size={30} color="#FFFFFF" />
                        <Text style={styles.drawertext}>Sofas</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.drawerview1}>
                    <TouchableOpacity style={styles.drawerview} onPress={() => this.props.navigation.navigate('Productlist', { Title: 'Chairs', Id: "2" })}>
                        <Icon name="wheelchair" style={styles.drawericon} size={28} color="#FFFFFF" />
                        <Text style={styles.drawertext}>Chairs</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.drawerview1}>
                    <TouchableOpacity style={styles.drawerview} onPress={() => this.props.navigation.navigate('Productlist', { Title: 'Cupboards', Id: "5" })}>
                        <Icon name="stop" style={styles.drawericon} size={28} color="#FFFFFF" />
                        <Text style={styles.drawertext}>Cupboards</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.drawerview1}>
                    <TouchableOpacity style={styles.drawerview} onPress={() => this.props.navigation.navigate('Myaccount')}>
                        <Icon name="user" style={styles.drawericon} size={30} color="#FFFFFF" />
                        <Text style={styles.drawertext}>My Account</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.drawerview1}>
                    <TouchableOpacity style={styles.drawerview} onPress={() => this.props.navigation.navigate('Swiper')}>
                        <Icon name="location-arrow" style={styles.drawericon} size={30} color="#FFFFFF" />
                        <Text style={styles.drawertext}>Store Locators</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.drawerview1}>
                    <TouchableOpacity style={styles.drawerview} onPress={() => this.props.navigation.navigate('Myorder')}>
                        <Icon name="list" style={styles.drawericon1} size={25} color="#FFFFFF" />
                        <Text style={styles.drawertext}>My Orders</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.drawerview1}>
                    <TouchableOpacity style={styles.drawerview} onPress={() => this.logout()} >
                        <Icon name="sign-out" style={styles.drawericon} size={30} color="#FFFFFF" />
                        <Text style={styles.drawertext}>Logout</Text>
                    </TouchableOpacity>
                </View>
                {/* </ScrollView> */}


            </View>

        );
    }
}
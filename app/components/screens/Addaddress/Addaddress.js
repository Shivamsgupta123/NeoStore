import React, { Component } from 'react';
import { View, TextInput, Alert, FlatList, ScrollView, KeyboardAvoidingView, Vibration, Dimensions, ActivityIndicator, Image, Text, TouchableOpacity } from 'react-native';
import styles from './Styles';
import { HeaderColor } from '../../../utils/Colors';
import { Container, Header, Left, Body, Right, Button, Title, Toast } from 'native-base';
import { Icon } from '../../../utils/Icon/Icon';
import { AsyncStorage } from 'react-native';
import { UserObject } from '../../../lib/UserProvider'

export default class Addaddress extends Component {
    constructor(props) {
        super(props)
        this.focusNextField = this.focusNextField.bind(this);
        this.inputs = {};
        this.state = {
            Loading: true,
            Address: '',
            Landmark: '',
            City: '',
            STATE: '',
            Zipcode: '',
            Country: ''
        }
        this.address = []
        console.log("addaddress", props)
    }
    focusNextField(id) {
        this.inputs[id].focus()
    }
    componentDidMount() {
        // Assigned value to state if user came to this screen from edit option in Address listing screen
        if (this.props.navigation.state.params != undefined) {
            this.setState({
                Address: this.props.navigation.state.params.item.address,
                Landmark: this.props.navigation.state.params.item.landmark,
                City: this.props.navigation.state.params.item.city,
                STATE: this.props.navigation.state.params.item.state,
                Zipcode: this.props.navigation.state.params.item.zipcode,
                Country: this.props.navigation.state.params.item.country
            })
            AsyncStorage.getItem("address").then((add) => {
                this.address = this.address.concat(JSON.parse(add))
                // console.log("565", this.address)
                this.address.splice(this.props.navigation.state.params.index, 1)
                // console.log("xyz", this.address)
                // AsyncStorage.setItem("address", JSON.stringify(this.address))
            })
            return
        }
        // Getting array of addresses form local storage & Append new address to that array
        AsyncStorage.getItem("address").then((add) => {
            if (add == null)
                return
            this.address = this.address.concat(JSON.parse(add))
            // console.log("565", this.address)
        })
    }

    // Checking validations & stroing address to local Storage.
    saveAddress() {
        if (this.state.Address == '') {
            // alert("Enter Address")
            Toast.show({
                text: "Enter Address",
                duration: 1500,
                type: "warning"
            })
        }
        else
            if (this.state.Landmark == '') {
                Toast.show({
                    text: "Enter LandMark",
                    duration: 1500,
                    type: "warning"
                })
            }
            else
                if (this.state.City == '') {
                    Toast.show({
                        text: "Enter City",
                        duration: 1500,
                        type: "warning"
                    })
                }
                else
                    if (this.state.STATE == '') {
                        Toast.show({
                            text: "Enter State",
                            duration: 1500,
                            type: "warning"
                        })
                    }
                    else
                        if (this.state.Zipcode == '') {
                            Toast.show({
                                text: "Enter ZipCode",
                                duration: 1500,
                                type: "warning"
                            })
                        }
                        else
                            if (this.state.Country == '') {
                                Toast.show({
                                    text: "Enter Country",
                                    duration: 1500,
                                    type: "warning"
                                })
                            }
                            else {
                                var address1 = [{ Name: UserObject.user_data.first_name + " " + UserObject.user_data.last_name, address: this.state.Address, landmark: this.state.Landmark, city: this.state.City, state: this.state.STATE, zipcode: this.state.Zipcode, country: this.state.Country }]
                                // var address1 = [{ Name: UserObject.user_data.first_name + " " + UserObject.user_data.last_name, address: this.state.Address + ", " + this.state.Landark + ", " + this.state.City + "-" + this.state.STATE + " " + this.state.Zipcode + ". " + this.state.Country }]
                                this.address = this.address.concat(address1)
                                console.log("787", this.address1)
                                // var v1 = JSON.stringify(this.address)
                                // console.log("v1", v1)
                                // var v2 = JSON.parse(v1)
                                // console.log("v2", v2)
                                AsyncStorage.setItem("address", JSON.stringify(this.address))
                                console.log("787", JSON.stringify(this.address))
                                Vibration.vibrate(200)
                                // alert("Address Saved")
                                Toast.show({
                                    text: "Address Saved",
                                    duration: 2000,
                                    type: "success"
                                })
                                // this.props.navigation.replace("AddressList")
                                this.props.navigation.goBack()
                            }
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Header style={{ backgroundColor: HeaderColor }}>
                    <Left style={{ paddingRight: -10 }}>
                        <Button transparent onPress={() => this.props.navigation.pop()}>
                            <Icon name="angle-left" size={22} color="#f9fbff" />
                        </Button>
                    </Left>
                    <Body>
                        <Text style={styles.headertitle}>Add Address</Text>
                    </Body>
                    <Right style={{ paddingRight: 8 }}>
                        <Icon name="search" size={22} color="#f9fbff" />
                    </Right>

                </Header>
                <ScrollView style={{ flex: 1, }}>
                    <KeyboardAvoidingView style={styles.keyboard} behavior="padding" enabled>

                        <View style={{ flex: 1, width: "100%" }}>
                            <View style={{ padding: 15 }}>
                                <Text style={styles.address}>ADDRESS</Text>
                                <View style={{ paddingTop: 10 }}>
                                    <TextInput onSubmitEditing={() => { this.focusNextField('two'); }} returnKeyType={"next"} ref={input => { this.inputs['one'] = input; }} onChangeText={(text) => this.setState({ Address: text })} multiline={true} defaultValue={this.state.Address} style={styles.textinput}></TextInput>
                                </View>
                                <View style={{ paddingTop: 10 }}>
                                    <Text style={styles.address}>LANDMARK</Text>
                                    <View style={{ paddingTop: 10 }}>
                                        <TextInput onSubmitEditing={() => { this.focusNextField('three'); }} returnKeyType={"next"} ref={input => { this.inputs['two'] = input; }} onChangeText={(text) => this.setState({ Landmark: text })} placeholder="LANDMARK" defaultValue={this.state.Landmark} style={styles.landmarktextinput} ></TextInput>
                                    </View>
                                </View>

                                <View style={{ flexDirection: "row", paddingTop: 10 }}>
                                    <Text style={styles.address}>CITY</Text>
                                    <Text style={styles.state}>STATE</Text>
                                </View>
                                <View style={{ flexDirection: "row", paddingTop: 10 }}>
                                    <TextInput onSubmitEditing={() => { this.focusNextField('four'); }} returnKeyType={"next"} ref={input => { this.inputs['three'] = input; }} onChangeText={(text) => this.setState({ City: text })} placeholder="CITY" defaultValue={this.state.City} style={styles.citytextinput} ></TextInput>
                                    <TextInput onSubmitEditing={() => { this.focusNextField('five'); }} returnKeyType={"next"} ref={input => { this.inputs['four'] = input; }} onChangeText={(text) => this.setState({ STATE: text })} placeholder="STATE" defaultValue={this.state.STATE} style={styles.statetextinput} />
                                </View>
                                <View style={{ flexDirection: "row", paddingTop: 10 }}>
                                    <Text style={styles.address}>ZIP CODE</Text>
                                    <Text style={styles.country}>COUNTRY</Text>
                                </View>
                                <View style={{ flexDirection: "row", paddingTop: 10 }}>
                                    <TextInput onSubmitEditing={() => { this.focusNextField('six'); }} returnKeyType={"next"} ref={input => { this.inputs['five'] = input; }} onChangeText={(text) => this.setState({ Zipcode: text })} keyboardType="phone-pad" placeholder="ZIP CODE" defaultValue={this.state.Zipcode} style={styles.citytextinput} ></TextInput>
                                    <TextInput ref={input => { this.inputs['six'] = input; }} onChangeText={(text) => this.setState({ Country: text })} placeholder="COUNTRY" defaultValue={this.state.Country} style={styles.statetextinput} />
                                </View>
                                <View style={styles.buttonview}>
                                    <TouchableOpacity style={styles.saveaddressbutton} onPress={() => this.saveAddress()} >
                                        <Text style={styles.saveaddressbuttontext}>SAVE ADDRESS</Text>
                                    </TouchableOpacity>
                                </View>

                            </View>
                        </View>
                    </KeyboardAvoidingView>
                </ScrollView>

            </View>
        )
    }
}

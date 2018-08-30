import React, { Component } from 'react';
import { View, TextInput, Alert, FlatList, ScrollView, KeyboardAvoidingView, Dimensions, ActivityIndicator, Image, Text, TouchableOpacity } from 'react-native';
import styles from './Styles';
import { HeaderColor } from '../../../utils/Colors';
import { Container, Header, Left, Body, Right, Button, Title } from 'native-base';
import { Icon } from '../../../utils/Icon/Icon';
import { AsyncStorage } from 'react-native';
import { UserObject } from '../../../lib/UserProvider'

export default class Addaddress extends Component {
    constructor(props) {
        super(props)
        this.focusNextField = this.focusNextField.bind(this);
        this.inputs = {};
        this.state = { Loading: true, Address: '', Landark: '', City: '', STATE: '', Zipcode: '', Country: '' }
        this.address = []
    }
    focusNextField(id) {
        this.inputs[id].focus()
    }
    componentDidMount() {
        AsyncStorage.getItem("address").then((add) => {
            if (add == null)
                return
            this.address = this.address.concat(JSON.parse(add))
            console.log("565", this.address)
        })
    }

    saveAddress() {

        if (this.state.Address == '')
            alert("Enter Address")
        else
            if (this.state.Landark == '')
                alert("Enter LandMark")
            else
                if (this.state.City == '')
                    alert("Enter City")
                else
                    if (this.state.STATE == '')
                        alert("Enter State")
                    else
                        if (this.state.Zipcode == '')
                            alert("Enter ZipCode")
                        else
                            if (!this.state.Zipcode.match(/^\d+/))
                                alert("Zip Code Must be a Number")
                            else
                                if (this.state.Country == '')
                                    alert("Enter Country")
                                else {
                                    var address1 = [{ Name: UserObject.user_data.first_name + " " + UserObject.user_data.last_name, address: this.state.Address + ", " + this.state.Landark + ", " + this.state.City + "-" + this.state.STATE + " " + this.state.Zipcode + ". " + this.state.Country }]
                                    this.address = this.address.concat(address1)
                                    console.log("787", this.address)
                                    AsyncStorage.setItem("address", JSON.stringify(this.address))
                                    alert("Address Saved")

                                }

    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Header style={{ backgroundColor: HeaderColor }}>
                    <Left style={{ paddingRight: -10 }}>
                        <Button transparent onPress={() => this.props.navigation.goBack()}>
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
                                    <TextInput onSubmitEditing={() => { this.focusNextField('two'); }} returnKeyType={"next"} ref={input => { this.inputs['one'] = input; }} onChangeText={(text) => this.setState({ Address: text })} multiline={true} style={styles.textinput}></TextInput>
                                </View>
                                <View style={{ paddingTop: 10 }}>
                                    <Text style={styles.address}>LANDMARK</Text>
                                    <View style={{ paddingTop: 10 }}>
                                        <TextInput onSubmitEditing={() => { this.focusNextField('three'); }} returnKeyType={"next"} ref={input => { this.inputs['two'] = input; }} onChangeText={(text) => this.setState({ Landark: text })} placeholder="LANDMARK" style={styles.landmarktextinput} ></TextInput>
                                    </View>
                                </View>

                                <View style={{ flexDirection: "row", paddingTop: 10 }}>
                                    <Text style={styles.address}>CITY</Text>
                                    <Text style={styles.state}>STATE</Text>
                                </View>
                                <View style={{ flexDirection: "row", paddingTop: 10 }}>
                                    <TextInput onSubmitEditing={() => { this.focusNextField('four'); }} returnKeyType={"next"} ref={input => { this.inputs['three'] = input; }} onChangeText={(text) => this.setState({ City: text })} placeholder="CITY" style={styles.citytextinput} ></TextInput>
                                    <TextInput onSubmitEditing={() => { this.focusNextField('five'); }} returnKeyType={"next"} ref={input => { this.inputs['four'] = input; }} onChangeText={(text) => this.setState({ STATE: text })} placeholder="STATE" style={styles.statetextinput} />
                                </View>
                                <View style={{ flexDirection: "row", paddingTop: 10 }}>
                                    <Text style={styles.address}>ZIP CODE</Text>
                                    <Text style={styles.country}>COUNTRY</Text>
                                </View>
                                <View style={{ flexDirection: "row", paddingTop: 10 }}>
                                    <TextInput onSubmitEditing={() => { this.focusNextField('six'); }} returnKeyType={"next"} ref={input => { this.inputs['five'] = input; }} onChangeText={(text) => this.setState({ Zipcode: text })} placeholder="ZIP CODE" style={styles.citytextinput} ></TextInput>
                                    <TextInput ref={input => { this.inputs['six'] = input; }} onChangeText={(text) => this.setState({ Country: text })} placeholder="COUNTRY" style={styles.statetextinput} />
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

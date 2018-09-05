import React, { Component } from 'react';
import { View, TextInput, Alert, FlatList, ScrollView, KeyboardAvoidingView, Dimensions, ActivityIndicator, Image, Text, TouchableOpacity } from 'react-native';
import styles from './Styles';
import { HeaderColor } from '../../../utils/Colors';
import { Container, Header, Left, Body, Right, Button, Title } from 'native-base';
import { Icon } from '../../../utils/Icon/Icon';
import { AsyncStorage } from 'react-native';
import { UserObject } from '../../../lib/UserProvider';
import { placeorder } from '../../../lib/api';
import { GlobalAPI } from '../../../lib/Globals';

export default class AddressList extends Component {
    constructor(props) {
        super(props)
        console.log("addresslist", UserObject)
        this.address1 = []
        this.state = { autoplay: true, autoplay1: true, Select: 0, Loading: false }
        this.addressindex = 0
        this.index
    }

    async getAddress() {
        this.address1 = await AsyncStorage.getItem("address")
        this.address1 = JSON.parse(this.address1)
        // this.address1.splice(0, 1)
        console.log("list", this.address1)
        console.log("pqr", this.address1.length)
        this.index = this.address1.length
        this.setState({ autoplay: false })


    }
    async componentDidMount() {
        const didBlurSubscription = this.props.navigation.addListener(
            'willFocus',
            payload => {

                this.getAddress()
            }
        );
        // this.getAddress()
    }
    removeAddress(item, index) {
        Alert.alert(
            'Delete!',
            'Delete Address?',
            [
                { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                { text: 'OK', onPress: () => this.deleteAddress(index, item) },
            ],
            { cancelable: false }
        )
        // this.address1.splice(index, 1)
        // AsyncStorage.setItem("address", JSON.stringify(this.address1))
        // this.setState({ autoplay: true })
    }
    deleteAddress(index, item) {
        this.address1.splice(index, 1)
        AsyncStorage.setItem("address", JSON.stringify(this.address1))
        this.setState({ autoplay: true })
    }
    placeOrder() {
        console.log('called')
        let formData = new FormData();
        if (this.index == 0 || this.address1 == null || this.address1.length == 0) {
            alert("Please Add Address")
        }

        else {
            console.log("null", this.addressindex)
            console.log("01010", this.address1)
            console.log("20202", this.address1[this.addressindex].address)

            formData.append("address", this.address1[this.addressindex].address);
            GlobalAPI(placeorder, "POST", formData, null, response => {
                if (response.status == 200) {
                    alert(response.user_msg)
                    this.setState({ Loading: true })
                    this.props.navigation.replace("MyApp")
                }
                else {
                    alert(response.user_msg)
                }
            }, error => {
                console.log(error)
            })
        }
    }
    selectAddress(item, index) {
        // console.log("item", item)
        // console.log("index", index)
        this.setState({ Select: index })
        this.addressindex = index
    }
    editAddress(item, index) {
        var editAdd = { item: item, index: index }
        // console.log("item", item)
        // console.log("index", index)
        this.props.navigation.navigate('Addaddress', editAdd)

    }


    render() {
        return (
            <View pointerEvents={this.state.Loading ? "none" : "auto"} style={styles.mainview}>
                <View>
                    <Header style={{ backgroundColor: HeaderColor }}>
                        <Left style={{ paddingRight: -10 }}>
                            <Button transparent onPress={() => this.props.navigation.goBack()}>
                                <Icon name="angle-left" size={22} style={styles.headericon} />
                            </Button>
                        </Left>
                        <Body>
                            <Text style={styles.headertitle}>Address List</Text>
                        </Body>
                        <Right style={{ paddingRight: 0 }}>
                            <Button transparent onPress={() => this.props.navigation.navigate('Addaddress')}>
                                <Icon name="plus" size={22} style={styles.headericon} />
                            </Button>
                        </Right>
                    </Header>
                </View>
                <ScrollView>
                    <View style={{ padding: 15 }}>
                        <View>
                            <Text style={styles.address}>Shipping Address</Text>
                        </View>
                        <View >

                            <FlatList
                                data={this.address1}
                                extraData={this.state}
                                renderItem={({ item, index }) =>
                                    (
                                        <View style={styles.addressview}>
                                            <View style={styles.radiobutton}>
                                                <TouchableOpacity onPress={() => this.selectAddress(item, index)}>
                                                    <View style={[styles.radiobuttonfill, this.state.Select == index ? { backgroundColor: "grey" } : { backgroundColor: "white" }]} ></View>
                                                </TouchableOpacity>
                                            </View>
                                            <View style={styles.addresssubview}>
                                                <View style={styles.buttonview}>
                                                    <Text style={styles.name}>{item.Name}</Text>
                                                    <TouchableOpacity style={styles.closeicon} onPress={() => this.removeAddress(item, index)}>
                                                        <Icon name="close" size={15} color="#1C1C1C" />
                                                    </TouchableOpacity>

                                                </View>
                                                {/* <View style={{ flex: 1, flexDirection: "row" }}> */}
                                                <Text style={styles.add}>{item.address}, {item.landmark}, {item.city}, {item.state}, {item.zipcode}, {item.country}.</Text>
                                                <TouchableOpacity onPress={() => this.editAddress(item, index)}>
                                                    <Icon name="edit" style={styles.editicon} size={15} color="#1C1C1C" />
                                                </TouchableOpacity>
                                                {/* </View> */}

                                            </View>


                                        </View>

                                    )
                                }

                                keyExtractor={(item, index) => '' + index}
                            />

                        </View>
                        <View style={styles.buttonview}>
                            <TouchableOpacity style={styles.orderbutton} onPress={() => this.placeOrder()}>
                                {this.state.Loading ? <ActivityIndicator size="large" color="" /> : <Text style={styles.orderbuttontext}>PLACE ORDER</Text>}
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>

            </View>

        )
    }
}
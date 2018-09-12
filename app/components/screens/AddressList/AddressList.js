import React, { Component } from 'react';
import { View, TextInput, Alert, FlatList, ScrollView, KeyboardAvoidingView, Dimensions, ActivityIndicator, Image, Text, TouchableOpacity, Vibration } from 'react-native';
import styles from './Styles';
import { HeaderColor } from '../../../utils/Colors';
import { Container, Header, Left, Body, Right, Button, Title, Toast } from 'native-base';
import { Icon } from '../../../utils/Icon/Icon';
import { AsyncStorage } from 'react-native';
import { UserObject } from '../../../lib/UserProvider';
import { placeorder } from '../../../lib/api';
import { GlobalAPI } from '../../../lib/Globals';
import { connect } from "react-redux";
import { StackActions, NavigationActions } from 'react-navigation';
import stripe from 'tipsi-stripe';
const addUpdateData = (data) => {
    return {
        type: 'ADD_UPDATE_DATA',
        data
    }
}
class AddressList extends Component {
    constructor(props) {
        super(props)
        console.log("addresslist", props)
        this.address1 = []
        this.state = { autoplay: true, autoplay1: true, Select: 0, Loading: false }
        this.addressindex = 0
        this.index
        // console.log("adresses", this.address1)
        this.options = {
            requiredBillingAddressFields: 'full',
            prefilledInformation: {
                billingAddress: {
                    name: '',
                    line1: '',
                    line2: '',
                    city: '',
                    state: '',
                    country: '',
                    postalCode: '',
                },
            },
        }
        // console.log("option", this.options)
    }

    //Getting addresses from local storage
    async getAddress() {
        this.address1 = await AsyncStorage.getItem("address")
        this.address1 = JSON.parse(this.address1)
        this.index = this.address1.length
        this.setState({ autoplay: false })
        // console.log("adresses", this.address1)
        // console.log("addressindex", this.addressindex)
        this.options.prefilledInformation.billingAddress.name = this.address1[this.addressindex].Name
        this.options.prefilledInformation.billingAddress.line1 = this.address1[this.addressindex].address
        this.options.prefilledInformation.billingAddress.line2 = this.address1[this.addressindex].landmark
        this.options.prefilledInformation.billingAddress.city = this.address1[this.addressindex].city
        this.options.prefilledInformation.billingAddress.state = this.address1[this.addressindex].state
        this.options.prefilledInformation.billingAddress.country = this.address1[this.addressindex].country
        this.options.prefilledInformation.billingAddress.postalCode = this.address1[this.addressindex].zipcode
        console.log("option", this.options)
    }
    async componentDidMount() {
        const didBlurSubscription = this.props.navigation.addListener(
            'willFocus',
            payload => {
                this.getAddress()
            }
        );
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
        Vibration.vibrate(200)
        this.address1.splice(index, 1)
        AsyncStorage.setItem("address", JSON.stringify(this.address1))
        Toast.show({
            text: 'Address Deleted.',
            duration: 2000,
            type: "success"

        })
        this.setState({ autoplay: true })
    }

    async placeOrder() {
        let formData = new FormData();
        // Checking that Array initially empty or not
        if (this.index == 0 || this.address1 == null || this.address1.length == 0) {
            Toast.show({
                text: 'Please Add Address.',
                duration: 1500,
                type: "danger"
            })
        }
        else {
            stripe.setOptions({
                publishableKey: 'pk_test_YQp17Dc1izLbcNXXiLn1qYbh',
                merchantId: 'MERCHANT_ID', // Optional
                androidPayMode: 'test', // Android only
            })
            const token = await stripe.paymentRequestWithCardForm(this.options)

            console.log(token)
            fetch("http://10.0.102.235:9000/charge",
                {
                    method: "POST",
                    body: token.tokenId
                }
            )
                .then(response => {
                    console.log("response", response)
                    if (response.status == 200) {
                        console.log("success")
                        Vibration.vibrate(200)
                        Toast.show({
                            text: 'Payment Successful',
                            duration: 2000,
                            type: "success"
                        })
                        this.setState({ Loading: true })
                        formData.append("address", this.address1[this.addressindex].address);
                        GlobalAPI(placeorder, "POST", formData, null, response => {
                            if (response.status == 200) {

                                Vibration.vibrate(200)
                                this.props.addUpdateData({ total_carts: 0 })
                                Toast.show({
                                    text: response.user_msg,
                                    duration: 2000,
                                    type: "success"
                                })
                                const resetAction = StackActions.reset({
                                    index: 0,
                                    actions: [NavigationActions.navigate({ routeName: 'MyApp' })],
                                });
                                this.props.navigation.dispatch(resetAction);
                                this.setState({ Loading: false })
                            }
                            else {
                                this.setState({ Loading: false })
                                alert(response.user_msg)
                            }
                        }, error => {
                            this.setState({ Loading: false })
                            Alert.alert(
                                'Failed!',
                                'No Internet Connection.',
                                [
                                    { text: 'Retry', onPress: () => this.placeOrder() },
                                ],
                                { cancelable: false }
                            )
                            console.log(error)
                        })
                    }
                })
                .catch(error => {
                    this.setState({ Loading: false })
                    Alert.alert(
                        'Failed!',
                        'No Internet Connection.',
                        [
                            { text: 'Retry', onPress: () => this.placeOrder() },
                        ],
                        { cancelable: false }
                    )
                    console.log(error)
                })

        }
    }

    // Assigning the address & index of Address from array of addresses to specifying which address is selected from multiple addresses for placing order.
    selectAddress(item, index) {
        // console.log("item", item)
        console.log("index", index)
        this.setState({ Select: index })
        this.addressindex = index
    }
    // Assigning the address & index of Address from array of addresses to specifying which address is selected for editing.
    editAddress(item, index) {
        // console.log("item", item)
        // console.log("index", index)
        var editAdd = { item: item, index: index }
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
                                {this.state.Loading ? <ActivityIndicator size="large" color="white" /> : <Text style={styles.orderbuttontext}>PLACE ORDER</Text>}
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>

            </View>

        )
    }
}
const mapStateToProps = (state) => {
    console.log("mycart state", state)
    return {
        state
    }
}
export default connect(mapStateToProps, { addUpdateData })(AddressList)
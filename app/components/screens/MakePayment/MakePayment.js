import React, { Component } from 'react';
import { View, TextInput, Alert, FlatList, ScrollView, KeyboardAvoidingView, Vibration, Dimensions, ActivityIndicator, Image, Text, TouchableOpacity, ImageBackground } from 'react-native';
import styles from './Styles';
import { HeaderColor } from '../../../utils/Colors';
import { Container, Header, Left, Body, Right, Button, Title, Toast } from 'native-base';
import { Icon } from '../../../utils/Icon/Icon';
import stripe from 'tipsi-stripe';
import AddressList from '../AddressList/AddressList';


export default class MakePayment extends Component {
    constructor(props) {
        super(props)
        this.options = {
            requiredBillingAddressFields: 'full',
            prefilledInformation: {
                billingAddress: {
                    name: 'abc',
                    line1: 'pqr',
                    line2: '3',
                    city: 'Mumbai',
                    state: 'Maharashtra',
                    country: 'India',
                    postalCode: '444605',
                },
            },
        }
    }
    makePayment = async () => {
        stripe.setOptions({
            publishableKey: 'pk_test_YQp17Dc1izLbcNXXiLn1qYbh',
            merchantId: 'MERCHANT_ID', // Optional
            androidPayMode: 'test', // Android only
        })
        const token = await stripe.paymentRequestWithCardForm(this.options)
        console.log("token", token.tokenId)
        fetch("http://localhost:9000/charge",
            {
                method: "POST",
                body: token.tokenId
            }
        )
            // .then((response) => response.json())
            .then(response => {
                console.log("response", response)
                if (response.status == 200)
                    Vibration.vibrate(200)
                Toast.show({
                    text: 'Payment Successful',
                    duration: 2000,
                    type: "success"
                })
                this.props.navigation.goBack(5858)
            })
            .catch(error => {
                console.log(error)
            })

    }


    render() {
        return (
            <View >
                <ImageBackground source={require('../../../assets/images/payment.png')} style={{ height: Dimensions.get('window').height }}>
                    <Header style={{ backgroundColor: HeaderColor }}>
                        <Left style={{ paddingRight: -10 }}>
                            <Button transparent onPress={() => this.props.navigation.pop()}>
                                <Icon name="angle-left" size={22} color="#f9fbff" />
                            </Button>
                        </Left>
                        <Body>
                            <Text style={styles.headertitle}>Payment</Text>
                        </Body>
                        <Right style={{ paddingRight: 8 }}>
                            <Icon name="search" size={22} color="#f9fbff" />
                        </Right>
                    </Header>

                    <View style={styles.buttonview}>
                        <TouchableOpacity style={styles.orderbutton} onPress={() => makePayment()}>
                            <Text style={styles.orderbuttontext}>MAKE PAYMENT</Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </View>
        )
    }
    // onPress={() => this.makePayment()}

}
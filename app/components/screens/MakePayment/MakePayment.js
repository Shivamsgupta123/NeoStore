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
        this.token = 'aghsadajkf6565'

    }
    makePayment() {
        stripe.setOptions({
            publishableKey: 'pk_test_YQp17Dc1izLbcNXXiLn1qYbh',
            merchantId: 'MERCHANT_ID',
            androidPayMode: 'test',
        })

        // console.log(token)
        fetch("http://10.0.102.235:9000/charge",
            {
                method: "POST",
                body: this.token
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
                        <TouchableOpacity style={styles.orderbutton} onPress={() => this.makePayment()}>
                            <Text style={styles.orderbuttontext}>MAKE PAYMENT</Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </View>
        )
    }
    // onPress={() => this.makePayment()}
}


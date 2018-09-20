import React, { Component } from 'react';
import { ActivityIndicator, Alert, Platform, TextInput, Text, View, Image, ScrollView, Dimensions, TouchableOpacity, Share, Vibration } from 'react-native';
import { Rating } from 'react-native-elements';
import { Icon } from '../../../utils/Icon/Icon';
import { Container, Header, Left, Body, Right, Button, Toast } from 'native-base';
import styles from './Styles';
import { AsyncStorage } from 'react-native';
import Modal from "react-native-modal";
import { login, productid, addtocart, productdetail, productrating, } from '../../../lib/api';
import { GlobalAPI } from '../../../lib/Globals';
import Stars from 'react-native-stars';
import ImageZoom from 'react-native-image-pan-zoom';
import { connect } from "react-redux";
import { addUpdateData } from '../../../redux/actions/UserData_Action';
import { UserObject } from '../../../lib/UserProvider'
import { StyleSheet } from 'react-native';
import { ProductProducer, White, ButtonText, PlusIconBackground, HeaderColor } from '../../../utils/Colors';
import { DetailScreenFont, HeaderTextFontWeight, HeaderText, LogoSize, LogoFontWeight, LogoPadding, TextInputFont, RegularFont, ButtonTextSize } from '../../../utils/FontSizes';
import { FontBold, FontMedium, FontBook } from '../../../utils/Fonts';

export default class MakePayment extends Component {
    constructor(props) {
        super(props)
        this.state = {
            fetcheddata: [],
            img1: '',
            isModalVisible: false,
            Rating: 0,
            datafetched: false,
            Quntity: '',
            isModalVisible1: false,
            Loading: true,
            Loader: false,
            stars: '',
            isModalVisible2: false,
            showToast: false
        }

    }

    componentDidMount() {
        this.fetchResult()
    }

    fetchResult = () => {
        let url = productdetail + productid + "1";
        return GlobalAPI(url, "GET", null, null, response => {
            if (response.status == 200) {

                this.setState({
                    fetcheddata: response.data,
                    datafetched: true,
                    Loading: false,
                    img1: response.data.product_images[0].image,
                }
                );
                console.log("method called12", this.state.fetcheddata)
            }
            else {
                console.log("aaa", response.user_msg)
                this.setState({ Loading: false })
            }
        },
            error => {
                Alert.alert(
                    'Failed!',
                    'No Internet Connection.',
                    [
                        { text: 'Ok', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                        { text: 'Retry', onPress: () => this.fetchResult() },
                    ],
                    { cancelable: false }
                )
                this.setState({ Loading: false })
                console.log(error)
            }
        )
    }


    render() {
        return (
            <View style={{ flex: 1, width: "100%" }}>

                <Header style={{ backgroundColor: HeaderColor }}>
                    <Left style={{ paddingRight: -10 }}>
                        <Button transparent onPress={() => this.props.navigation.pop()}>
                            <Icon name="angle-left" size={22} color="#f9fbff" />
                        </Button>
                    </Left>
                    <Body>
                        <Text style={styles.headertitle}>Detail</Text>
                    </Body>
                    <Right style={{ paddingRight: 8 }}>
                        {/* <Icon name="search" size={22} color="#f9fbff" /> */}
                    </Right>
                </Header>
                <View style={{ height: Platform.OS === 'ios' ? "8%" : "10%", backgroundColor: White }}>
                    <Text style={{ color: "#111111", fontSize: Platform.OS === 'ios' ? 23 : 22, fontWeight: '600', marginLeft: 8, marginTop: 4, fontFamily: FontBold }}>{this.state.fetcheddata.name}</Text>
                    <View style={{ height: "50%", flexDirection: 'row', justifyContent: "space-between", width: "93%" }}>
                        <Text style={styles.productproducer}>{this.state.fetcheddata.producer} </Text>
                        <Rating
                            type="custom"
                            fractions={0}
                            startingValue={this.state.fetcheddata.rating}
                            readonly
                            imageSize={20}
                            ratingBackgroundColor={White}
                        />
                    </View>
                </View>
                <View style={{ height: Platform.OS === 'ios' ? "70%" : "62%", backgroundColor: White, width: "95%", margin: 8.5, }}>

                    <View style={{ height: "10%", width: "85%", marginLeft: "5%", marginRight: "7%", marginTop: "1%", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        <Text style={styles.productcost}>Rs. {this.state.fetcheddata.cost}</Text>
                        <TouchableOpacity onPress={() => this.shareon()}>
                            <Icon name="share" size={23} style={styles.shareicon} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ height: "40%", backgroundColor: "yellow", width: "60%", marginLeft: "9%" }}></View>
                </View>
                <View style={{ height: Platform.OS === 'ios' ? "10%" : "14%", backgroundColor: White, width: "95%", marginLeft: 8.5, marginRight: 8.5, }}></View>

            </View>
        )
    }
    // onPress={() => this.makePayment()}
}


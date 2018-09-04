import React, { Component } from 'react';
import { ActivityIndicator, Platform, TextInput, Text, View, Image, ScrollView, Dimensions, TouchableOpacity, Share } from 'react-native';
import { Rating } from 'react-native-elements';
import { Icon } from '../../../utils/Icon/Icon';
import { Container, Header, Left, Body, Right, Button, } from 'native-base';
import styles from './Styles';
import { White, HeaderColor, } from '../../../utils/Colors';
import { AsyncStorage } from 'react-native';
import Modal from "react-native-modal";
import { login, productid, addtocart, productdetail, productrating, } from '../../../lib/api';
import { GlobalAPI } from '../../../lib/Globals';
import Stars from 'react-native-stars';
import { UserProvider, UserObject } from '../../../lib/UserProvider';
// import Vibration from 'react-native-vibration;'
// var Vibration = require('react-native-vibration');
// const DURATION = 10000
export default class Productdetail extends Component {
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
            stars: ''
        }
    }
    closeRatePopup = () =>
        this.setState({ isModalVisible: !this.state.isModalVisible });


    closeBuyPopup = () =>
        this.setState({ isModalVisible1: !this.state.isModalVisible1 });

    // getting product detail
    componentDidMount() {
        console.log("a")
        let url = productdetail + productid + this.props.navigation.state.params.Id;
        return GlobalAPI(url, "GET", null, null, response => {
            if (response.status == 200) {
                this.setState({
                    fetcheddata: response.data,
                    datafetched: true,
                    Loading: false,
                    img1: response.data.product_images[0].image,
                }
                );
            }
        }, error => {
            alert("No Internet Connection!")
            this.setState({ Loading: false })
            console.log(error)
        }
        )
    }

    getimage() {
        var image = [];
        this.state.fetcheddata.product_images.forEach((img, index) => {
            image.push(
                <TouchableOpacity key={index} onPress={() => { this.setState({ img1: img.image }) }}>
                    <Image source={{ uri: img.image }} style={styles.productsubimage} />
                </TouchableOpacity>
            )
        })
        return image
    }

    quantitySubmit = () => {
        let formData = new FormData();
        formData.append(' product_id', this.state.fetcheddata.id);
        formData.append(' quantity', this.state.Quntity);
        this.setState({ isModalVisible: false })
    }

    ratingsubmit() {
        this.setState({ Loader: true })
        let formData = new FormData();
        formData.append(' product_id', this.state.fetcheddata.id);
        formData.append('rating', this.state.stars);
        GlobalAPI(productrating, "POST", formData, null, response => {
            if (response.status == 200) {
                this.setState({ Loader: false })
                // alert(response.message)
                this.setState({ isModalVisible: false, Loading: false })
                // alert(response.message)
            }
            else
                alert(response.user_msg)
        },
            error => {
                console.log(error)
            })
    }

    async buysubmit() {
        this.setState({ Loader: true })
        var getdata = await AsyncStorage.getItem('ResponseData');
        console.log(getdata)
        getdata = JSON.parse(getdata)
        let formData = new FormData();
        formData.append(' product_id', this.state.fetcheddata.id);
        formData.append(' quantity', this.state.Quntity);
        await GlobalAPI(addtocart, "POST", formData, getdata.data.access_token, response => {
            if (response.status == 200) {
                this.setState({ Loader: false })
                console.log("buysubmit", response)
                // alert(response.message)
                UserProvider.setUserInfo("total_carts", response.total_carts)
                // Vibration.cancel()
                this.setState({ isModalVisible1: false, Loading: false })
            }
            else {
                alert(response.user_msg)
                this.setState({ Loader: false })
            }

        }, error => {
            console.log(error)
        })
    }

    buymodalback() {
        this.setState({ isModalVisible1: !this.state.isModalVisible1 })

    }
    ratingmodalback() {
        this.setState({ isModalVisible: !this.state.isModalVisible })

    }

    // sharing on media
    shareon() {
        Share.share({
            message: "Shivam want to share - \n " + "Name:" + this.state.fetcheddata.name + ",\n Producer:" + this.state.fetcheddata.producer + ",\n Rating:" + this.state.fetcheddata.rating + ",\n Cost:" + this.state.fetcheddata.cost,
            url: 'http://bam.tech',
            title: 'Wow, did you see that?'
        }, {
                // Android only:
                dialogTitle: 'NeoStore',
                // iOS only:
                excludedActivityTypes: [
                    'com.apple.UIKit.activity.PostToTwitter'
                ]
            })
    }

    render() {
        if (this.state.Loading)
            return <ActivityIndicator style={{ flex: 1, justifyContent: 'center' }} size="large" color="#e91b1a" />
        return (
            this.state.datafetched ?
                <View style={styles.mainview}>

                    <Header style={{ backgroundColor: HeaderColor }}>
                        <Left style={{ marginLeft: Platform.OS === 'ios' ? 10 : -10 }}>
                            <Button transparent onPress={() => this.props.navigation.goBack()}>
                                <Icon name="angle-left" size={22} color={White} />
                            </Button>
                        </Left>
                        <Body>
                            <Text style={styles.headertitle}>{this.props.navigation.state.params.Title}</Text>
                        </Body>
                        <Right>
                            <Icon name="search" size={22} color="#f9fbff" style={{ marginRight: 6 }} />
                        </Right>
                    </Header>

                    <ScrollView  >
                        <View style={{ flex: 1, backgroundColor: White }}>
                            <Text style={styles.productname}>{this.state.fetcheddata.name}</Text>
                            <View style={styles.subview1}>
                                <Text style={styles.productproducer}>{this.state.fetcheddata.producer} </Text>

                                <Rating
                                    type="custom"
                                    fractions={0}
                                    startingValue={this.state.fetcheddata.rating}
                                    readonly
                                    imageSize={20}
                                    ratingBackgroundColor='#7F7F7F'
                                />
                            </View>

                            <View style={styles.subview2}>
                                <Text style={styles.productcost}>Rs. {this.state.fetcheddata.cost}</Text>
                                <TouchableOpacity onPress={() => this.shareon()}>
                                    <Icon name="share" size={27} color="#7F7F7F" style={{ marginTop: 35 }} />
                                </TouchableOpacity>
                            </View>

                            <View style={styles.subview3}>
                                <Image source={{ uri: this.state.img1 }} style={styles.productimage} />
                            </View>
                            <ScrollView horizontal={true}>
                                <View style={styles.subview4}>
                                    {this.getimage()}
                                </View>
                            </ScrollView>

                            <View styel={{ flex: 1, paddingBottom: 15 }}>
                                <Text style={styles.productdescription}>DESCRIPTION</Text>
                                <Text style={styles.productdetail}>{this.state.fetcheddata.description}</Text>
                            </View>
                            <View style={styles.subview5}>
                                <TouchableOpacity style={styles.button} onPress={this.closeBuyPopup}>
                                    <Text style={styles.buttontext}>BUY NOW</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.button1} onPress={this.closeRatePopup}>
                                    <Text style={styles.buttontext1}>RATE</Text>
                                </TouchableOpacity>
                            </View>

                            {/* Rating modal                  */}
                            <View style={styles.subview5}>
                                <Modal isVisible={this.state.isModalVisible}>
                                    <View style={styles.modalview1}>
                                        <Text style={styles.modalview2}>{this.state.fetcheddata.name}</Text>
                                        <Image source={{ uri: this.state.img1 }} style={styles.modalimage} />

                                        <Stars
                                            half={false}
                                            default={this.state.fetcheddata.rating}
                                            update={(val) => { this.setState({ stars: val }) }}
                                            spacing={4}
                                            starSize={40}
                                            count={5}
                                            fullStar={<Icon name="star" size={27} color="#e2d628" style={{ marginTop: 35 }} />}
                                            emptyStar={<Icon name="star" size={27} color="#7F7F7F" style={{ marginTop: 35 }} />}
                                        />
                                        {this.state.Loader ? <ActivityIndicator size="large" color="red" /> : <View style={{ flexDirection: 'row', }}>
                                            <TouchableOpacity onPress={() => this.ratingsubmit()} style={styles.ratingbutton}>
                                                <Text style={styles.ratingbuttontext}>SUBMIT</Text>
                                            </TouchableOpacity>
                                            <View style={styles.popupbutton}>
                                                <TouchableOpacity style={styles.popupback} onPress={() => this.ratingmodalback()}>
                                                    <Text style={styles.popupbutton}>BACK</Text>
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                        }
                                    </View>
                                </Modal>
                                {console.log("b")}
                            </View>
                            {console.log("c")}
                            {/* Buy Modal */}

                            <View style={styles.modalview4}>

                                <Modal isVisible={this.state.isModalVisible1}>
                                    <View style={styles.modalview5}>
                                        <Text style={styles.buypopupname}>{this.state.fetcheddata.name}</Text>
                                        <Image source={{ uri: this.state.img1 }} style={styles.buypopupimage} />
                                        <Text style={styles.buypopuptext}>Enter Qty</Text>
                                        <TextInput onChangeText={(text) => this.setState({ Quntity: text })} style={styles.textinput} keyboardType="phone-pad" />
                                        {this.state.Loader ? <ActivityIndicator size="large" color="red" /> : <View style={{ flexDirection: 'row', }}>
                                            <TouchableOpacity onPress={() => this.buysubmit()} style={styles.ratingbutton}>
                                                <Text style={styles.ratingbuttontext}>SUBMIT</Text>
                                            </TouchableOpacity>
                                            <View style={styles.popupbutton}>
                                                <TouchableOpacity style={styles.popupback} onPress={() => this.buymodalback()}>
                                                    <Text style={styles.popupbutton}>BACK</Text>
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                        }
                                    </View>
                                </Modal>

                            </View>
                            {/* </KeyboardAvoidingView> */}
                            {/* </ScrollView> */}

                        </View>
                    </ScrollView>
                </View>
                :
                null
        );


    }
}
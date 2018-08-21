import React, { Component } from 'react';
import { AppRegistry, FlatList, ActivityIndicator, ImageBackground, TextInput, StyleSheet, Text, Platform, View, KeyboardAvoidingView, Image, ScrollView, Dimensions, TouchableOpacity, Share } from 'react-native';
import { Rating } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Container, Header, Left, Body, Right, Button, Title } from 'native-base';
import styles from './Styles';
import { White, ProductProducer, DetailScreenFont, ButtonText, PlusIconBackground, HeaderColor, ProductlistFont } from '../../../utils/Colors';
import { LogoSize, LogoFontWeight, LogoPadding, TextInputFont, RegularFon, HeaderTextFontWeight, HeaderText, ButtonTextSize, ProductlistTitle } from '../../../utils/FontSizes';
import { AsyncStorage } from 'react-native';
// import Modal from 'react-native-modalbox';
import Modal from "react-native-modal";
import { login, productid, addtocart, fetchaccountdetail, prductlist, productdetail, productrating, register, changepassword } from '../../../lib/api';
import { GlobalAPI } from '../../../lib/Globals';


export default class Productdetail extends Component {
    constructor(props) {
        super(props)
        // console.log('shivam', props)
        this.state = {
            fetcheddata: [],
            img1: '',
            img2: '',
            img3: '',
            img4: '',
            isModalVisible: false,
            Rating: 0,
            datafetched: false,
            Quntity: '',
            isModalVisible1: false,
            Loading: true
        }
    }
    closeRatePopup = () =>
        this.setState({ isModalVisible: !this.state.isModalVisible });

    closeBuyPopup = () =>
        this.setState({ isModalVisible1: !this.state.isModalVisible1 });

    // getting product detail
    componentDidMount() {
        let url = productdetail + productid + this.props.navigation.state.params.Id;
        return GlobalAPI(url, "GET", null, null, response => {

            if (response.status == 200) {

                this.setState({
                    fetcheddata: response.data,
                    datafetched: true,
                    Loading: false,
                    // {this.state.fetcheddata.map(img =>() )}
                    img1: response.data.product_images[0].image,

                }
                );
                console.log("203", this.state.fetcheddata)
            }
        }, error => {
            console.log(error.error)
        }
        )
    }

    getimage() {
        var image = [];
        this.state.fetcheddata.product_images.forEach((img, index) => {
            image.push(
                <TouchableOpacity key={index} onPress={() => { this.setState({ img1: img.image }) }}>
                    <Image source={{ uri: img.image }} style={{ width: 100, height: 65, marginLeft: 12, borderWidth: 1, borderColor: HeaderColor }} />
                </TouchableOpacity>
            )
        })

        return image
    }

    // set ratting
    ratingCompleted = (rating) => {
        console.log("Rating is: " + rating)
        this.setState(
            {
                Rating: rating
            }
        )
        // console.log( this.state.Rating)
    }

    quantitySubmit = () => {
        // alert("Thanks for rating.")
        let formData = new FormData();
        formData.append(' product_id', this.state.fetcheddata.id);
        formData.append(' quantity', this.state.Quntity);

        this.setState({ isModalVisible: false })
    }

    ratingsubmit = () => {
        let formData = new FormData();
        formData.append(' product_id', this.state.fetcheddata.id);
        formData.append('rating', this.state.Rating);
        GlobalAPI(productrating, "POST", formData, null, response => {
            if (response.status == 200) {
                alert(response.message)
                this.setState({ isModalVisible: false, Loading: false })
            }
            else
                alert(response.user_msg)
        },
            error => {
                console.log(error)
            })
    }

    async buysubmit() {
        var getdata = await AsyncStorage.getItem('ResponseData');
        console.log(getdata)
        getdata = JSON.parse(getdata)
        let formData = new FormData();
        formData.append(' product_id', this.state.fetcheddata.id);
        formData.append(' quantity', this.state.Quntity);

        await GlobalAPI(addtocart, "POST", formData, getdata.data.access_token, response => {
            if (response.status == 200) {
                alert(response.message)
                this.setState({ isModalVisible1: false, Loading: false })
            }
            else
                alert(response.user_msg)

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
                        <Left>
                            <Button transparent onPress={() => this.props.navigation.goBack()}>
                                <Icon name="chevron-left" size={22} color={White} />
                            </Button>
                        </Left>
                        <Body>
                            <Text style={styles.headertitle}>{this.props.navigation.state.params.Title}</Text>
                        </Body>
                        <Right>
                            <Icon name="search" size={22} color="#f9fbff" style={{ marginRight: 10 }} />
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
                                    <Icon name="share-alt" size={27} color="#7F7F7F" style={{ marginTop: 35 }} />
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


                                        <Rating
                                            type='custom'
                                            showRating
                                            fractions={0}
                                            onFinishRating={this.ratingCompleted}
                                            ratingColor='#e91b1a'
                                            ratingBackgroundColor='#7F7F7F'
                                            imageSize={47}
                                            onFinishRating={this.ratingCompleted}
                                            style={{ paddingVertical: 10 }}
                                        />

                                        <View style={{ flexDirection: 'row', }}>
                                            <TouchableOpacity onPress={() => this.ratingsubmit()} style={styles.ratingbutton}>
                                                <Text style={styles.ratingbuttontext}>SUBMIT</Text>
                                            </TouchableOpacity>
                                            <View style={styles.popupbutton}>
                                                <TouchableOpacity style={styles.popupback} onPress={() => this.ratingmodalback()}>
                                                    <Text style={styles.popupbutton}>BACK</Text>
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                    </View>
                                </Modal>
                            </View>

                            {/* Buy Modal */}

                            <View style={styles.modalview4}>

                                <Modal isVisible={this.state.isModalVisible1}>
                                    <View style={styles.modalview5}>
                                        <Text style={styles.buypopupname}>{this.state.fetcheddata.name}</Text>
                                        <Image source={{ uri: this.state.img1 }} style={styles.buypopupimage} />
                                        <Text style={styles.buypopuptext}>Enter Qty</Text>
                                        <TextInput onChangeText={(text) => this.setState({ Quntity: text })} style={styles.textinput} keyboardType="phone-pad" />
                                        <View style={{ flexDirection: 'row', }}>
                                            <TouchableOpacity onPress={() => this.buysubmit()} style={styles.ratingbutton}>
                                                <Text style={styles.ratingbuttontext}>SUBMIT</Text>
                                            </TouchableOpacity>
                                            <View style={styles.popupbutton}>
                                                <TouchableOpacity style={styles.popupback} onPress={() => this.buymodalback()}>
                                                    <Text style={styles.popupbutton}>BACK</Text>
                                                </TouchableOpacity>
                                            </View>
                                        </View>
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
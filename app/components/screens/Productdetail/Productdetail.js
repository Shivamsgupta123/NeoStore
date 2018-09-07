import React, { Component } from 'react';
import { ActivityIndicator, Alert, Platform, TextInput, Text, View, Image, ScrollView, Dimensions, TouchableOpacity, Share, Vibration } from 'react-native';
import { Rating } from 'react-native-elements';
import { Icon } from '../../../utils/Icon/Icon';
import { Container, Header, Left, Body, Right, Button, Toast } from 'native-base';
import styles from './Styles';
import { White, HeaderColor, } from '../../../utils/Colors';
import { AsyncStorage } from 'react-native';
import Modal from "react-native-modal";
import { login, productid, addtocart, productdetail, productrating, } from '../../../lib/api';
import { GlobalAPI } from '../../../lib/Globals';
import Stars from 'react-native-stars';
import ImageZoom from 'react-native-image-pan-zoom';
import { connect } from "react-redux";
// import Vibration from 'react-native-vibration;'
// var Vibration = require('react-native-vibration');
// const DURATION = 10000

const addUpdateData = (data) => {
    return {
        type: 'ADD_UPDATE_DATA',
        data
    }
}
class Productdetail extends Component {
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
    closeRatePopup = () =>
        this.setState({ isModalVisible: !this.state.isModalVisible });


    closeBuyPopup = () =>
        this.setState({ isModalVisible1: !this.state.isModalVisible1 });

    openImageModal = () =>
        this.setState({ isModalVisible2: !this.state.isModalVisible2 })

    closeImageModal = () =>
        this.setState({ isModalVisible2: !this.state.isModalVisible2 })

    // getting product detail
    componentDidMount() {
        this.fetchResult()
    }
    fetchResult() {
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
            // alert("No Internet Connection!")
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
                Vibration.vibrate(200)
                this.setState({ Loader: false })
                Toast.show({
                    text: response.message,
                    duration: 3000,
                    type: "success"

                })
                this.setState({ isModalVisible: false, Loading: false })
                // alert(response.message)

            }
            else
                alert(response.user_msg)
        },
            error => {
                alert("No Internet Connection!")
                console.log(error)
            })
    }

    async buysubmit() {
        // if (this.state.Quntity == '' || this.state.Quntity.match(/^[0-9a-zA-Z]+$/))
        //     alert('No Internet Connection!')
        // else {
        this.setState({ Loader: true })
        var getdata = await AsyncStorage.getItem('ResponseData');
        getdata = JSON.parse(getdata)
        let formData = new FormData();
        formData.append(' product_id', this.state.fetcheddata.id);
        formData.append(' quantity', this.state.Quntity);
        await GlobalAPI(addtocart, "POST", formData, getdata.data.access_token, response => {
            if (response.status == 200) {
                Vibration.vibrate(200)
                this.setState({ Loader: false })
                Toast.show({
                    text: response.message,
                    duration: 3000,
                    type: "success"
                })
                this.props.addUpdateData({ total_carts: response.total_carts })
                this.setState({ isModalVisible1: false, Loading: false })

            }
            else {
                alert(response.user_msg)
                this.setState({ Loader: false })
            }

        }, error => {
            Toast.show({
                text: 'No Internet Connection!',
                duration: 3000,

            })
            console.log(error)
            this.setState({ Loader: false })
        })
        // }
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
                            <TouchableOpacity onPress={this.openImageModal}>
                                <View style={styles.subview3}>
                                    <Image source={{ uri: this.state.img1 }} style={styles.productimage} />
                                </View>
                            </TouchableOpacity>
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
                                {/* {console.log("b")} */}
                            </View>
                            {/* {console.log("c")} */}
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

                            {/* Image Zoom Modal */}
                            {/* <View style={{ flex: 1, height: "50%", width: "80%", justifyContent: "center", alignItems: "center", backgroundColor: "white" }}> */}
                            <Modal isVisible={this.state.isModalVisible2}>
                                <View style={styles.imagezoomview}>
                                    <TouchableOpacity onPress={this.closeImageModal} >
                                        <Icon name="close" size={27} style={styles.imagezoomclose} />
                                    </TouchableOpacity>

                                    <ImageZoom cropWidth={350}
                                        cropHeight={280}
                                        imageWidth={450}
                                        imageHeight={280}>
                                        <Image style={{ width: 450, height: 280 }}
                                            source={{ uri: this.state.img1 }} />
                                    </ImageZoom>

                                    {/* <View>
                                        <Image source={{ uri: this.state.img1 }} style={styles.imazezoom} />
                                    </View> */}
                                </View>
                            </Modal>
                            {/* </View> */}

                        </View>
                    </ScrollView>
                </View >
                :
                null
        );
    }
}
const mapStateToProps = (state) => {
    console.log(" productdetail state", state)
    return {
        state
    }
}
export default connect(mapStateToProps, { addUpdateData })(Productdetail)
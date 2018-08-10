import React, { Component } from 'react';
import { AppRegistry, FlatList, ImageBackground, TextInput, StyleSheet, Text, Platform, View, KeyboardAvoidingView, Image, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import { Rating } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Container, Header, Left, Body, Right, Button, Title } from 'native-base';
import styles from './Styles';
import { White, ProductProducer, DetailScreenFont, ButtonText, PlusIconBackground, HeaderColor, ProductlistFont } from '../../../utils/Colors';
import { LogoSize, LogoFontWeight, LogoPadding, TextInputFont, RegularFon, HeaderTextFontWeight, HeaderText, ButtonTextSize, ProductlistTitle } from '../../../utils/FontSizes';
import { AsyncStorage } from 'react-native';
// import Modal from 'react-native-modalbox';
import Modal from "react-native-modal";
import { login, fetchaccountdetail, prductlist, productdetail, productrating, register, changepassword } from '../../../lib/api';

export default class Productdetail extends Component {

    constructor(props) {
        super(props)
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
        }
    }

    rate = () =>
        this.setState({ isModalVisible: !this.state.isModalVisible });

    buy = () =>
        this.setState({ isModalVisible1: !this.state.isModalVisible1 });


    componentDidMount() {
        let url = productdetail + "?product_id=" + this.props.navigation.state.params.Id;

        return fetch(url, {
            method: 'GET',
        })
            .then((response) => response.json())
            .then((responseJson) => {
                if (responseJson.status == 200) {
                    this.setState({
                        fetcheddata: responseJson.data,
                        datafetched: true,
                        img1: responseJson.data.product_images[0].image,
                        // img2: responseJson.data.product_images[1].image, 
                        // img3: responseJson.data.product_images[2].image, 
                        // img4: responseJson.data.product_images[3].image, 
                    }
                    );


                }


            })

            .catch((error) => {
                console.error(error);
            });

    }

    ratingCompleted(rating) {

        //  this.setState({
        //     Rating:rating

        // })
        console.log("Rating is: " + rating)
        // this.setState(
        //     {
        //         Rating:rating
        //     }
        // )
        // console.log(Rating)

    }

    submit = () => {
        // alert("Thanks for rating.")
        this.setState({ isModalVisible: false })
    }

    async buysubmit() {
        //    try{
        //     var getdata = await AsyncStorage.getItem('ResponseData');   
        //     console.log(getdata)

        //     getdata = JSON.parse(getdata)


        //     let formData = new FormData();
        //     formData.append(' product_id', this.state.fetcheddata.id);
        //     formData.append(' quantity', this.state.Quntity);



        //     await fetch(
        //       'http://staging.php-dev.in:8844/trainingapp/api/addToCart', {
        //            method: 'POST',
        //            body: formData,
        //            headers:{
        //              access_token: getdata.data.access_token

        //            }
        //         })
        //         .then(response => response.json()  )
        //         .then(  response =>{
        //             if(response.status == 200)
        //             {
        //              alert(response.message)
        this.setState({ isModalVisible1: false })
        //             }
        //             else
        //              alert(response.user_msg)

        //         }
        //         ) 
        //     }
        //     catch(error){
        //         console.log(error)
        //     }   


    }



    render() {
        return (
            this.state.datafetched ?
                <View style={{ flex: 1, marginBottom: 10 }}>

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

                    <ScrollView>

                        <View style={{ flex: 1, backgroundColor: White }}>
                            <Text style={{ color: DetailScreenFont, fontSize: 30, fontWeight: '600', marginLeft: 8, marginTop: 4 }}>{this.state.fetcheddata.name}</Text>

                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: "95%" }}>
                                <Text style={{ color: ProductProducer, fontSize: 20, marginLeft: 8 }}>{this.state.fetcheddata.producer} </Text>

                                <Rating
                                    type="custom"
                                    fractions={0}
                                    startingValue={this.state.fetcheddata.rating}
                                    readonly
                                    imageSize={20}
                                    ratingBackgroundColor='#7F7F7F'

                                />
                            </View>

                            <View style={{ flex: 1, flexDirection: 'row', marginLeft: 15, alignItems: 'center', justifyContent: 'space-between', width: "90%" }}>
                                <Text style={{ color: HeaderColor, fontSize: 30, marginTop: 35, fontWeight: '600' }}>Rs. {this.state.fetcheddata.cost}</Text>
                                <TouchableOpacity>
                                    <Icon name="share-alt" size={30} color="#7F7F7F" style={{ marginTop: 35 }} />
                                </TouchableOpacity>
                            </View>

                            <View style={{ flex: 1, alignItems: 'center', padding: 10 }}>
                                <Image source={{ uri: this.state.img1 }} style={{ width: 270, height: 170, marginTop: 12, }} />
                            </View>

                            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', paddingBottom: 15 }}>
                                <TouchableOpacity>
                                    <Image source={{ uri: this.state.img1 }} style={{ width: 110, height: 70, marginLeft: 12, borderWidth: 1, borderColor: HeaderColor }} />
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Image source={{ uri: this.state.img1 }} style={{ width: 110, height: 70, borderWidth: 1, borderColor: HeaderColor }} />
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Image source={{ uri: this.state.img1 }} style={{ width: 110, height: 70, marginRight: 12, borderWidth: 1, borderColor: HeaderColor }} />
                                </TouchableOpacity>
                            </View>

                            <View styel={{ flex: 1, paddingBottom: 15 }}>
                                <Text style={{ color: "#111111", fontSize: 30, fontWeight: '600', marginLeft: 12 }}>Descrition</Text>
                                <Text style={{ color: "#333333", fontSize: 20, marginLeft: 12, marginRight: 12 }}>{this.state.fetcheddata.description}</Text>
                            </View>

                            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', padding: Platform.OS == 'ios' ? 10 : 0 }}>
                                <TouchableOpacity style={styles.button} onPress={this.buy}>
                                    <Text style={styles.buttontext}>BUY NOW</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.button1} onPress={this.rate}>
                                    <Text style={styles.buttontext1}>RATE</Text>
                                </TouchableOpacity>
                            </View>

                            <View style={{ flex: 1, justifyContent: 'center', width: "95%", height: 50 }}>
                                <Modal isVisible={this.state.isModalVisible}>
                                    <View style={{ flex: 1, backgroundColor: White, justifyContent: 'center', alignItems: 'center' }}>
                                        <Text style={{ fontSize: 30, fontWeight: "700", paddingBottom: 40 }}>{this.state.fetcheddata.name}</Text>
                                        <Image source={{ uri: this.state.img1 }} style={{ width: 250, height: 160, marginTop: 12, }} />


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


                                        <TouchableOpacity onPress={() => this.submit()} style={styles.ratingbutton}>
                                            <Text style={styles.ratingbuttontext}>SUBMIT</Text>
                                        </TouchableOpacity>
                                    </View>
                                </Modal>
                            </View>
                            {/* <ScrollView style = {{height:Dimensions.get(window).height}}> */}

                            <View style={{ flex: 1, justifyContent: 'center', width: "95%", height: 50 }}>
                                <Modal isVisible={this.state.isModalVisible1}>
                                    <View style={{ flex: 1, backgroundColor: White, justifyContent: 'center', alignItems: 'center' }}>
                                        <Text style={{ fontSize: 30, fontWeight: "700", paddingBottom: 40 }}>{this.state.fetcheddata.name}</Text>
                                        <Image source={{ uri: this.state.img1 }} style={styles.buypopupimage} />
                                        <Text style={styles.buypopuptext}>Enter Qty</Text>
                                        <TextInput onChangeText={(text) => this.setState({ Quntity: text })} style={styles.textinput} keyboardType="phone-pad" />

                                        <TouchableOpacity onPress={() => this.buysubmit()} style={styles.ratingbutton}>
                                            <Text style={styles.ratingbuttontext}>SUBMIT</Text>
                                        </TouchableOpacity>
                                    </View>
                                </Modal>
                            </View>
                            {/* </ScrollView> */}

                        </View>
                    </ScrollView>
                </View>
                :
                null
        );


    }
}
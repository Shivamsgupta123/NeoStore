import React, { Component } from 'react';
import { AppRegistry, FlatList, ImageBackground, TextInput, StyleSheet, Text, Platform, View, KeyboardAvoidingView, Image, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
// import StarRatingBar from 'react-native-star-rating-view/StarRatingBar';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Container, Header, Left, Body, Right, Button, Title } from 'native-base';
import styles from './Styles';
import { Rating } from 'react-native-elements';
import { White, ButtonText, PlusIconBackground, HeaderColor, ProductlistFont } from '../../../utils/Colors';
import { LogoSize, LogoFontWeight, LogoPadding, TextInputFont, RegularFon, HeaderTextFontWeight, HeaderText, ButtonTextSize, ProductlistTitle } from '../../../utils/FontSizes';
import Productdetail from '../Productdetail/Productdetail';
import { login, detail, productid, product_category, fetchaccountdetail, prductlist, productdetail, productrating, register, changepassword } from '../../../lib/api';
import { GlobalAPI } from '../../../lib/Globals';

export default class Productlist extends Component {

    constructor(props) {
        super(props)
        console.log('1234', props)
        this.state = { fetcheddata: [] }
    }


    componentDidMount() {
        let url = prductlist + product_category + this.props.navigation.state.params.Id;

        return GlobalAPI(url, "GET", null, null, response => {
            if (response.status == 200) {
                // console.log('prodlist', response)
                this.setState({
                    fetcheddata: response.data,
                }
                );
            }
        },
            error => {
                console.log(error.error)

            }

        )







        // return Globals(url, { method: 'GET' }, response => {
        //     if (response.status == 200) {
        //         this.setState({
        //             fetcheddata: response.data,
        //         }



        //         );

        //     }
        // })


        // return fetch(url, {
        //     method: 'GET',
        // })
        //     .then((response) => response.json())
        //     .then((responseJson) => {
        //         if (responseJson.status == 200) {
        //             this.setState({
        //                 fetcheddata: responseJson.data,
        //             }



        //             );

        //         }

        //     })
        // this.productdetail()

    }
    // productdetail() {
    //     console.log("hello")
    //     let api = detail + this.props.navigation.state.params.Id;
    //     return GlobalAPI(api, "GET", null, null, response => {
    //         if (response.status == 200) {
    //             console.log('prodlist', response)

    //         }
    //     },
    //         error => {
    //             console.log(error.error)

    //         }

    //     )

    // }


    render() {


        return (
            <View style={{ flex: 1, }}>
                <Header style={{ backgroundColor: HeaderColor }}>
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.goBack()}>
                            <Icon name="chevron-left" size={26} color={White} />
                        </Button>
                    </Left>

                    <Text style={{ color: White, fontSize: HeaderText, marginLeft: Platform.OS === 'ios' ? 0 : 65, fontWeight: HeaderTextFontWeight, marginTop: Platform.OS === 'ios' ? 5 : 10 }}>{this.props.navigation.state.params.Title}</Text>
                    <Right>
                        <Icon name="search" size={22} color="#f9fbff" style={{ marginRight: 13.3 }} />
                    </Right>

                </Header>


                <View style={{ flex: 1, backgroundColor: White }}>
                    <FlatList
                        data={this.state.fetcheddata}
                        renderItem={({ item }) =>
                            (
                                <TouchableOpacity onPress={() => this.props.navigation.navigate('Productdetail', { Title: item.name, Id: item.id, })}>
                                    <View style={{ flex: 1, flexDirection: 'row', padding: 15, borderWidth: 1, borderColor: 'green' }}>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Image source={{ uri: item.product_images }} style={{ height: 100, width: 100 }} />
                                        </View>
                                        <View>
                                            <Text style={{ fontSize: ProductlistTitle, color: ProductlistFont, padding: 5 }}> {item.name}</Text>


                                            <Text style={{ fontSize: 15, color: ProductlistFont, paddingLeft: 9 }}>{item.producer}</Text>
                                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: "77%" }}>
                                                <Text style={{ fontSize: ProductlistTitle, color: HeaderColor, padding: 7 }}>Rs. {item.cost}</Text>

                                                <Rating

                                                    type="custom"
                                                    fractions={1}
                                                    startingValue={item.rating}
                                                    readonly
                                                    imageSize={20}

                                                    ratingBackgroundColor='#7F7F7F'
                                                // style={{ paddingVertical: 10 ,marginLeft:30}}
                                                />
                                                {/* </View> */}


                                            </View>
                                        </View>

                                    </View>
                                </TouchableOpacity>

                            )

                        }
                        keyExtractor={(item, index) => index}
                    />
                </View>

            </View>
        );
    }
}
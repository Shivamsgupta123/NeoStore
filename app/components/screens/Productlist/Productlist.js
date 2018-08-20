import React, { Component } from 'react';
import { AppRegistry, FlatList, ImageBackground, TextInput, StyleSheet, Text, Platform, View, KeyboardAvoidingView, Image, ScrollView, Dimensions, TouchableOpacity, ActivityIndicator } from 'react-native';
// import StarRatingBar from 'react-native-star-rating-view/StarRatingBar';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Container, Header, Left, Body, Right, Button, Title } from 'native-base';
import styles from './Styles';
import { Rating } from 'react-native-elements';
import { White, ButtonText, PlusIconBackground, HeaderColor, ProductlistFont } from '../../../utils/Colors';
import { LogoSize, LogoFontWeight, LogoPadding, TextInputFont, RegularFon, HeaderTextFontWeight, HeaderText, ButtonTextSize, ProductlistTitle } from '../../../utils/FontSizes';
import Productdetail from '../Productdetail/Productdetail';
import { login, detail, productlimit, productid, product_category, fetchaccountdetail, prductlist, productdetail, productrating, register, changepassword } from '../../../lib/api';
import { GlobalAPI, Console } from '../../../lib/Globals';
import ReactList from 'react-list';
import LazyLoading from 'react-list-lazy-load';
import Loader from '../../Loader/Loader';


export default class Productlist extends Component {

    constructor(props) {
        super(props)
        // console.log('1234', props)

        this.state = { fetcheddata: [], loader: false, list: [], page: 1, limit: 7, isdata: false, loader1: true }
        // this.fetchResult();
    }

    // LazyLoading
    // componentWillMount() {
    //     let url = prductlist + product_category + this.props.navigation.state.params.Id
    //     return GlobalAPI(url, "GET", null, null, response => {
    //         if (response.status == 200) {
    //             Console("itemcount", response.data)
    //             this.setState({ list: response.data })

    //         }

    //     }, error => {
    //         console.log(error)

    //     })


    // }
    componentDidMount() {
        this.fetchResult()
        this.setState({ loader1: false })

    }

    fetchResult = () => {
        if (!this.state.isdata) {
            this.setState({ loader: true })

            let url = prductlist + product_category + this.props.navigation.state.params.Id + "&limit=7&page=" + this.state.page;
            Console("url", url)
            const { limit, page, fetcheddata } = this.state;
            return GlobalAPI(url, "GET", null, null, response => {
                this.setState({ loader: false })
                // Console("res", response)
                if (response.status == 401)
                    this.setState({ isdata: true })
                // Console("prodlist123", response)
                if (response.status == 200) {

                    // Console("prodlist123", response)
                    this.setState({

                        fetcheddata: fetcheddata.concat(response.data),
                        page: page + 1,
                        // limit: limit + 7,
                        loader: false,

                    })
                    Console("fetchdata", this.state.fetcheddata.length)
                }
            },
                error => {
                    console.log("res2", error)

                }
            )
        }

    }





    // componentWillMount() {
    //     let url = prductlist + product_category + this.props.navigation.state.params.Id;

    //     return GlobalAPI(url, "GET", null, null, response => {
    //         if (response.status == 200) {
    //             // console.log('prodlist', response)
    //             this.setState({
    //                 fetcheddata: response.data,
    //                 Loading: false,
    //             }
    //             );
    //         }
    //     },
    //         error => {
    //             console.log(error)

    //         }
    //     )
    // }

    render() {
        if (this.state.loader1) { return <ActivityIndicator style={{ flex: 1, justifyContent: 'center' }} size="large" color="#e91b1a" /> }


        return (

            <View style={{ flex: 1, }}>
                <Header style={{ backgroundColor: HeaderColor }}>
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.goBack()}>
                            <Icon name="chevron-left" size={22} color={White} />
                        </Button>
                    </Left>

                    <Text style={{ color: White, fontSize: HeaderText, marginLeft: Platform.OS === 'ios' ? -3 : 65, marginTop: Platform.OS === 'ios' ? 10 : 13, fontWeight: HeaderTextFontWeight, }}>{this.props.navigation.state.params.Title}</Text>

                    <Right>
                        <Icon name="search" size={20} color="#f9fbff" />
                    </Right>

                </Header>



                <View style={{ flex: 1, backgroundColor: White }}>


                    <FlatList
                        onEndReached={() => this.fetchResult()}


                        data={this.state.fetcheddata}
                        onEndReachedThreshold={0.01}
                        renderItem={({ item }) =>
                            (
                                <TouchableOpacity onPress={() => this.props.navigation.navigate('Productdetail', { Title: item.name, Id: item.id, })}>
                                    <View style={styles.mainview}>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Image source={{ uri: item.product_images }} style={styles.productimage} />
                                        </View>
                                        <View>
                                            <Text style={styles.productname}> {item.name}</Text>


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
                        keyExtractor={(item, index) => '' + index}


                    />


                    <View style={{ alignItems: "center" }}>
                        {this.state.loader ? <Loader /> :
                            <Text style={styles.itemcount}>{this.state.fetcheddata.length} of {this.state.fetcheddata.length}</Text>}
                    </View>


                </View>

            </View>
        );
    }
}
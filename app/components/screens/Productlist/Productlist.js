import React, { Component } from 'react';
import { AppRegistry, FlatList, ImageBackground, TextInput, StyleSheet, Text, Platform, View, KeyboardAvoidingView, Image, ScrollView, Dimensions, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Icon } from '../../../utils/Icon/Icon';
import { Container, Header, Left, Body, Right, Button, Title } from 'native-base';
import styles from './Styles';
import { Rating } from 'react-native-elements';
import { White, ButtonText, PlusIconBackground, HeaderColor, ProductlistFont } from '../../../utils/Colors';
import { login, detail, productlimit, productid, product_category, fetchaccountdetail, prductlist, productdetail, productrating, register, changepassword } from '../../../lib/api';
import { GlobalAPI, Console } from '../../../lib/Globals';
import Loader from '../../Loader/Loader';


export default class Productlist extends Component {
    constructor(props) {
        super(props)
        this.state = { fetcheddata: [], loader: false, list: [], page: 1, limit: 7, isdata: false, loader1: true }
    }

    componentDidMount() {
        this.fetchResult()
        this.setState({ loader1: false })

    }

    // fetching product list
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
                        loader: false,
                    })
                    Console("fetchdata", this.state.fetcheddata.length)
                }
            },
                error => {
                    alert("No Internet Connection!")
                    this.setState({ loader: false })
                    console.log("res2", error)
                }
            )
        }
    }

    render() {
        if (this.state.loader1) { return <ActivityIndicator style={{ flex: 1, justifyContent: 'center' }} size="large" color={HeaderColor} /> }
        return (
            <View style={{ flex: 1, }}>
                <Header style={{ backgroundColor: HeaderColor }}>
                    <Left style={{ marginLeft: Platform.OS === 'ios' ? 10 : -10 }}>
                        <Button transparent onPress={() => this.props.navigation.goBack()}>
                            <Icon name="angle-left" size={22} color={White} />
                        </Button>
                    </Left>

                    <Text style={styles.headertext}>{this.props.navigation.state.params.Title}</Text>

                    <Right style={{ paddingRight: 10 }}>
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
                                            <Text style={styles.productproducer}>{item.producer}</Text>
                                            <View style={styles.ratingview}>
                                                <Text style={styles.productcost1}>Rs. {item.cost}</Text>
                                                <Rating
                                                    type="custom"
                                                    fractions={1}
                                                    startingValue={item.rating}
                                                    readonly
                                                    imageSize={20}
                                                    ratingBackgroundColor='#7F7F7F'
                                                />
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
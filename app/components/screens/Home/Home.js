import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, Platform, View, Image, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import styles from './Styles';
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Container, Header, Left, Body, Right, Button, Title } from 'native-base';
import { White, ButtonText, PlusIconBackground, HeaderColor } from '../../../utils/Colors';
import { LogoSize, LogoHeaderText, LogoFontWeight, LogoPadding, TextInputFont, RegularFon, HeaderTextFontWeight, HeaderText, ButtonTextSize } from '../../../utils/FontSizes';
import { Calendar } from 'react-native-calendars';
import Productlist from '../Productlist/Productlist';
import { AsyncStorage } from 'react-native';
import { _login, fetchaccountdetail, prductlist, productdetail, productrating, register, changepassword } from '../../../lib/api';

export default class Home extends Component {

    state = {
        length: 5
    }
    constructor(props) {
        super(props)
        console.log('Home', props)
        // console.log(this.props.navigation.state.params.data.product_categories[1].icon_image)


    }
    // componentWillMount = async () => {
    //     var getdata = await AsyncStorage.getItem('ResponseData');
    //     getdata = JSON.parse(getdata)
    //     await fetch(
    //         fetchaccountdetail
    //         , {
    //             method: 'GET',
    //             headers: {
    //                 access_token: getdata.data.access_token
    //             }
    //         }
    //     )
    //         .then(response => response.json())
    //         .then(response => {
    //             if (response.status == 200) {
    //                 // alert("success")


    //                 AsyncStorage.setItem("ResData", JSON.stringify(response))
    //                 this.props.navigation.navigate('Home')
    //             }
    //             else
    //                 alert(response.user_msg)

    //         }
    //         )
    // }
    render() {
        return (


            <View style={{ height: Dimensions.get('window').height }}>

                <Header style={{ backgroundColor: HeaderColor }}>
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.openDrawer()}>
                            <Icon name="bars" size={22} color="#f9fbff" style={{ marginLeft: 13.3 }} />
                        </Button>
                    </Left>

                    <Text style={styles.headerText}>NeoSTORE</Text>

                    <Right>
                        <Icon name="search" size={22} color="#f9fbff" style={{ marginRight: 13.3 }} />
                    </Right>

                </Header>

                {/* <ScrollView> */}

                <View>
                    <View style={styles.swiperimage}>
                        <Swiper >
                            {this.props.navigation.state.params.data.product_categories.map(img => (
                                <View key={img.icon_image} style={{ flex: 1 }}>
                                    <Image resizeMode="stretch" style={styles.swiperimage} source={{ uri: img.icon_image }} />

                                </View>

                            ))}
                            {/* <View style={{ flex: 1 }}>
                                    <Image resizeMode="stretch" style={styles.swiperimage} source={require('../../../assets/images/cupboard.jpg')} />
                                </View>
                                <View style={{ flex: 1 }}>
                                    <Image resizeMode="stretch" style={styles.swiperimage} source={require('../../../assets/images/table.jpg')} />
                                </View> */}
                        </Swiper>
                    </View>


                    <View style={styles.iconview}>
                        <View style={styles.containerbottom}>
                            <View style={styles.boxrow}>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate('Productlist', { Title: 'Tables', Id: "1" })} style={[styles.boxtop,]} >
                                    <Text style={styles.icontext1}>Tables</Text>
                                    <Icon name='table' style={{ textAlign: 'left' }} color="#ffffff" size={80} />

                                </TouchableOpacity >
                                <TouchableOpacity onPress={() => this.props.navigation.navigate('Productlist', { Title: 'Sofas', Id: "3" })} style={[styles.boxtop,]}>
                                    <Icon style={{ textAlign: 'right' }} name='lock' color="#ffffff" size={80} />
                                    <Text style={styles.icontext2}>Sofas</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.boxrow}>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate('Productlist', { Title: 'Chairs', Id: "2" })} style={[styles.boxbottom,]}>
                                    <Text style={styles.icontext2}>Chairs</Text>
                                    <Icon name='wheelchair' color="#ffffff" style={{ textAlign: 'right' }} size={75} />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate('Productlist', { Title: 'Cupboards', Id: "5" })} style={[styles.boxbottom,]}>
                                    <Icon name='lock' style={{ textAlign: 'left' }} color="#ffffff" size={80} />
                                    <Text style={styles.icontext1}>Cupboards</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>






                </View>
                {/* </ScrollView> */}
            </View >




        );
    }
}

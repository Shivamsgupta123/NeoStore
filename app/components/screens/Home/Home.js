import React, { Component } from 'react';
import { Text, View, Image, Dimensions, TouchableOpacity, Vibration, BackHandler, ScrollView, Platform, Alert } from 'react-native';
import styles from './Styles';
import Swiper from 'react-native-swiper';
import { Icon } from '../../../utils/Icon/Icon';
import { Container, Header, Left, Body, Right, Button, Title } from 'native-base';
import { HeaderColor } from '../../../utils/Colors';
import SplashScreen from 'react-native-splash-screen';
import { UserObject } from '../../../lib/UserProvider';

export default class Home extends Component {
    constructor(props) {
        super(props)
    }

    // Ask the user to exit from app or not
    handleBackButton = () => {
        if (!this.props.navigation.isFocused()) return false;
        Vibration.vibrate(100)
        Alert.alert(
            'Exit App',
            'Exiting the application?', [{
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel'
            }, {
                text: 'OK',
                onPress: () => BackHandler.exitApp()
            },], {
                cancelable: false
            }
        )
        return true;
    }

    componentDidMount() {
        // console.log("method")
        SplashScreen.hide()
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
    }

    render() {
        return (
            <View>
                <Header style={{ backgroundColor: HeaderColor }}>
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.openDrawer()}>
                            <Icon name="menu" size={22} style={styles.headreicon1} />
                        </Button>
                    </Left>
                    <Text style={styles.headerText}>NeoSTORE</Text>
                    <Right>
                        {/* <Icon name="search" size={22} style={styles.headericon2} /> */}
                    </Right>
                </Header>

                {/* <ScrollView> */}

                <View>
                    <View style={styles.swiperimage}>
                        <Swiper dotColor={HeaderColor} autoplay={true} activeDotColor="grey">
                            {UserObject.product_categories.map(img => (
                                <View key={img.icon_image} style={{ flex: 1 }}>
                                    <Image resizeMode="stretch" style={styles.swiperimage} source={{ uri: img.icon_image }} />
                                </View>
                            ))}
                        </Swiper>
                    </View>

                    <View style={styles.iconview}>
                        <View style={styles.containerbottom}>
                            <View style={styles.boxrow}>
                                {/* <TouchableOpacity onPress={this.move} style={[styles.boxtop1,]}> */}
                                <TouchableOpacity onPress={() => this.props.navigation.navigate('Productlist', { Title: 'Tables', Id: "1" })} style={[styles.boxtop1,]} >
                                    <Text style={styles.icontext1}>Tables</Text>
                                    <Icon name='table' style={styles.tableicon} size={80} />

                                </TouchableOpacity >
                                <TouchableOpacity onPress={() => this.props.navigation.navigate('Productlist', { Title: 'Sofas', Id: "3" })} style={[styles.boxtop2,]}>
                                    <Icon style={styles.sofaicon} name='sofa' size={80} />
                                    <Text style={styles.icontext2}>Sofas</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.boxrow}>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate('Productlist', { Title: 'Chairs', Id: "2" })} style={[styles.boxbottom1,]}>
                                    <Text style={styles.icontext2}>Chairs</Text>
                                    <Icon name='chair' style={styles.sofaicon} size={70} />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate('Productlist', { Title: 'Cupboards', Id: "5" })} style={[styles.boxbottom2,]}>
                                    <Icon name='cupboard' style={styles.tableicon} size={65} />
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

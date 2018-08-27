import React, { Component } from 'react';
import { Text, View, Image, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import styles from './Styles';
import Swiper from 'react-native-swiper';
import { Icon } from '../../../utils/Icon/Icon';
import { Container, Header, Left, Body, Right, Button, Title } from 'native-base';
import { HeaderColor } from '../../../utils/Colors';
import SplashScreen from 'react-native-splash-screen';
export default class Home extends Component {

    state = {
        length: 5
    }
    constructor(props) {
        super(props)
        console.log('Home', props)
        // console.log(this.props.navigation.state.params.data.product_categories[1].icon_image)
    }
    componentDidMount() {
        SplashScreen.hide();
    }

    render() {
        return (
            <View style={{ height: Dimensions.get('window').height }}>
                <Header style={{ backgroundColor: HeaderColor }}>
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.openDrawer()}>
                            <Icon name="menu" size={22} color="#f9fbff" style={styles.headreicon1} />
                        </Button>
                    </Left>
                    <Text style={styles.headerText}>NeoSTORE</Text>
                    <Right>
                        <Icon name="search" size={22} color="#f9fbff" style={styles.headericon2} />
                    </Right>
                </Header>

                {/* <ScrollView> */}

                <View>
                    <View style={styles.swiperimage}>
                        <Swiper dotColor={HeaderColor} activeDotColor="grey">
                            {this.props.navigation.state.params.data.product_categories.map(img => (
                                <View key={img.icon_image} style={{ flex: 1 }}>
                                    <Image resizeMode="stretch" style={styles.swiperimage} source={{ uri: img.icon_image }} />
                                </View>
                            ))}
                        </Swiper>
                    </View>

                    <View style={styles.iconview}>
                        <View style={styles.containerbottom}>
                            <View style={styles.boxrow}>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate('Productlist', { Title: 'Tables', Id: "1" })} style={[styles.boxtop1,]} >
                                    <Text style={styles.icontext1}>Tables</Text>
                                    <Icon name='table' style={{ textAlign: 'left' }} color="#ffffff" size={80} />

                                </TouchableOpacity >
                                <TouchableOpacity onPress={() => this.props.navigation.navigate('Productlist', { Title: 'Sofas', Id: "3" })} style={[styles.boxtop2,]}>
                                    <Icon style={{ textAlign: 'right' }} name='sofa' color="#ffffff" size={80} />
                                    <Text style={styles.icontext2}>Sofas</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.boxrow}>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate('Productlist', { Title: 'Chairs', Id: "2" })} style={[styles.boxbottom1,]}>
                                    <Text style={styles.icontext2}>Chairs</Text>
                                    <Icon name='chair' color="#ffffff" style={{ textAlign: 'right', }} size={70} />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate('Productlist', { Title: 'Cupboards', Id: "5" })} style={[styles.boxbottom2,]}>
                                    <Icon name='cupboard' style={{ textAlign: 'left' }} color="#ffffff" size={65} />
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

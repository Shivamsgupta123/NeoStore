import React, { Component } from 'react';
import {AppRegistry,  StyleSheet,  Text, Platform, View, Image, Dimensions,TouchableOpacity,ScrollView} from 'react-native';
import styles from './Styles';
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Container, Header, Left, Body, Right, Button, Title } from 'native-base';
import {White,ButtonText,PlusIconBackground,HeaderColor} from '../../../utils/Colors';
import {LogoSize,LogoFontWeight,LogoPadding,TextInputFont,RegularFon,HeaderTextFontWeight,HeaderText,ButtonTextSize} from '../../../utils/FontSizes';


 

  
  export default class Home extends Component{
    render() {
        return (
        
          
          <View>
            
        <Header style = {{backgroundColor:HeaderColor}}>
          <Left>
            <Button transparent onPress={() => this.props.navigation.openDrawer()}>
            <Icon name="bars" size={22}  color="#f9fbff" style = {{marginLeft:40/3}} />
            </Button>
          </Left>
          {/* <Body> */}
          <Text style = {{ color:White,fontSize:HeaderText,marginLeft:Platform.OS === 'ios'? 0 : 65, fontWeight:HeaderTextFontWeight,marginTop:Platform.OS === 'ios'? 5:10}}>NeoSTORE</Text>
          {/* </Body> */}
          <Right>
          <Icon name="search" size={22}  color="#f9fbff" style = {{marginRight:40/3}} />
          </Right>
          
        
        </Header>
        <ScrollView style = {{height:Dimensions.get('window').height}}>
          

          
         <View>
          <View style = {styles.swiperimage}>   
          <Swiper >
            <View style = {{flex:1}}>
                <Image resizeMode="stretch" style = {styles.swiperimage} source={require('../../../assets/images/sofa.jpeg')}/>

                
              
            </View>
            <View style = {{flex:1}}>
                 <Image resizeMode="stretch" style = {styles.swiperimage} source={require('../../../assets/images/cupboard.jpg')}/>
            </View>
            <View style = {{flex:1}}>
                  <Image resizeMode="stretch" style = {styles.swiperimage} source={require('../../../assets/images/table.jpg')}/>
            </View>
          </Swiper>
          </View>


         <View style = {{height:Platform.OS === 'ios' ? 380 : 340}}>
          <View style={ styles.containerbottom }>
             <View style={styles.boxrow}>
                <TouchableOpacity style={[styles.boxtop,]} >
                  <Text style={styles.homescreenboxtext1}>Tables</Text>
                  <Icon name='table' style={{textAlign: 'left' }} color="#ffffff" size={80} />
                </TouchableOpacity>
                <TouchableOpacity style={[styles.boxtop,]}>
                  <Icon style={{textAlign: 'right' }} name='sofa' color="#ffffff" size={80} />
                  <Text style={styles.homescreenboxtext2}>Sofas</Text>
                </TouchableOpacity>
             </View>
             <View style={styles.boxrow}>
               <TouchableOpacity style={[styles.boxbottom,]}>
                  <Text style={styles.homescreenboxtext2}>Chairs</Text>
                  <Icon name='lock' color="#ffffff" style={{textAlign: 'right' }} size={80} />
               </TouchableOpacity>
               <TouchableOpacity style={[styles.boxbottom,]}>
                  <Icon name='lock' style={{textAlign: 'left' }} color="#ffffff" size={80} />
                  <Text style={styles.homescreenboxtext1}>Cupboards</Text>
                </TouchableOpacity>
             </View>
         </View>
         </View>




         

          </View>
          </ScrollView>
          </View>



          
        );
      }
    }

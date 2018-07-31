import React, { Component } from 'react';
import {AppRegistry,  StyleSheet,  Text,  View, Image, Dimensions,TouchableOpacity} from 'react-native';
import styles from '../Styles';
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/FontAwesome';

 

  
  export default class Home extends Component{
    render() {
        return (
         <View>
          <View style = {styles.swiperimage}>   
          <Swiper >
            <View style = {{flex:1}}>
                <Image resizeMode="stretch" style = {styles.swiperimage} source={require('../../assets/images/sofa.jpeg')}/>

                
              
            </View>
            <View style = {{flex:1}}>
                 <Image resizeMode="stretch" style = {styles.swiperimage} source={require('../../assets/images/cupboard.jpg')}/>
            </View>
            <View style = {{flex:1}}>
                  <Image resizeMode="stretch" style = {styles.swiperimage} source={require('../../assets/images/table.jpg')}/>
            </View>
          </Swiper>
          </View>


         <View style = {{height:380}}>
          <View style={ styles.containerbottom }>
             <View style={styles.boxrow}>
                <TouchableOpacity style={[styles.boxtop,]} >
                  <Text style={{textAlign: 'right' ,fontWeight: '500', fontSize: 25, color: '#ffffff' }}>Tables</Text>
                  <Icon name='table' style={{textAlign: 'left' }} color="#ffffff" size={80} />
                </TouchableOpacity>
                <TouchableOpacity style={[styles.boxtop,]}>
                  <Icon style={{textAlign: 'right' }} name='sofa' color="#ffffff" size={80} />
                  <Text style={{textAlign: 'left',fontWeight: '500' , fontSize: 25, color: '#ffffff' }}>Sofas</Text>
                </TouchableOpacity>
             </View>
             <View style={styles.boxrow}>
               <TouchableOpacity style={[styles.boxbottom,]}>
                  <Text style={{textAlign: 'left',fontWeight: '500', fontSize: 25,  color: '#ffffff' }}>Chairs</Text>
                  <Icon name='lock' color="#ffffff" style={{textAlign: 'right' }} size={80} />
               </TouchableOpacity>
               <TouchableOpacity style={[styles.boxbottom,]}>
                  <Icon name='lock' style={{textAlign: 'left' }} color="#ffffff" size={80} />
                  <Text style={{textAlign: 'right',fontWeight: '500' , fontSize: 25, color: '#ffffff' }}>Cupboards</Text>
                </TouchableOpacity>
             </View>
         </View>
         </View>




         


          </View>



          
        );
      }
    }

import React, { Component } from 'react';
import {AppRegistry,FlatList,ImageBackground, TextInput, StyleSheet,  Text, Platform, View,KeyboardAvoidingView, Image, ScrollView,Dimensions,TouchableOpacity} from 'react-native';
// import StarRatingBar from 'react-native-star-rating-view/StarRatingBar';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Container, Header, Left, Body, Right, Button, Title } from 'native-base';
// import styles from './Styles';
import { Rating } from 'react-native-elements';
import {White,ButtonText,PlusIconBackground,HeaderColor,ProductlistFont} from '../../../utils/Colors';
import {LogoSize,LogoFontWeight,LogoPadding,TextInputFont,RegularFon,HeaderTextFontWeight,HeaderText,ButtonTextSize, ProductlistTitle} from '../../../utils/FontSizes';
import Productdetailscreen from '../Productdetailscreen/Productdetailscreen';

export default class Productlist extends Component{

    constructor(props)
    {
     super(props)
     this.state ={fetcheddata:[]}
    }


    componentDidMount(){
        let url ="http://staging.php-dev.in:8844/trainingapp/api/products/getList?product_category_id="+this.props.navigation.state.params.Id;
        
        return fetch(url,{
            method: 'GET',
        })
        .then((response) => response.json())
        .then((responseJson) => {
          if (responseJson.status == 200) {
            this.setState({
                fetcheddata: responseJson.data,
            }
        
      
        
        );
        
        }
          else {
        
          }
        })
        .catch((error) =>{
          console.error(error);
        });
    }

    render(){

        
        return(
            <View style={{flex:1,}}>
                <Header style = {{backgroundColor:HeaderColor}}>
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.navigate('Homescreen')}>
                            <Icon name="chevron-left" size={26}  color={White} />
                        </Button>
                    </Left>
                
                    <Text style = {{ color:White,fontSize:HeaderText,marginLeft:Platform.OS === 'ios'? 0 : 65, fontWeight:HeaderTextFontWeight,marginTop:Platform.OS === 'ios'? 5:10}}>{this.props.navigation.state.params.Title}</Text>
                    <Right>
                        <Icon name="search" size={22}  color="#f9fbff" style = {{marginRight:13.3}} />
                    </Right>
            
                </Header>

            
                <View style={{flex:1,backgroundColor:White}}>
                    <FlatList
                         data={this.state.fetcheddata}
                         renderItem={({item}) => 
                         (    
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Productdetailscreen',{Title:item.name, Id:item.id,})}>
                            <View style = {{flex:1, flexDirection:'row',padding:15, borderWidth:1, borderColor:'green'}}>
                             <View style = {{ flexDirection:'row'}}>
                             <Image source={{uri: item.product_images}} style = {{height:100, width:100}}/>
                        </View>
                         <View>
                          <Text style = {{fontSize:ProductlistTitle, color:ProductlistFont, padding:5}}> {item.name }</Text>
                
                
                    <Text style = {{fontSize:15, color:ProductlistFont,paddingLeft:9}}>{item.producer}</Text>
                    <View style = {{flexDirection:'row', justifyContent:'space-between',alignItems:'center',width:"77%"}}>
                    <Text style = {{fontSize:ProductlistTitle, color:HeaderColor, padding:7}}>Rs. {item.cost}</Text>
                            
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
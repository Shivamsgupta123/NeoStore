import React, { Component } from 'react';
import {AppRegistry,FlatList,ImageBackground, TextInput, StyleSheet,  Text, Platform, View,KeyboardAvoidingView, Image, ScrollView,Dimensions,TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import { Container, Header, Left, Body, Right, Button, Title } from 'native-base';
// import styles from './Styles';
import {White,ButtonText,PlusIconBackground,HeaderColor} from '../../../utils/Colors';
import {LogoSize,LogoFontWeight,LogoPadding,TextInputFont,RegularFon,HeaderTextFontWeight,HeaderText,ButtonTextSize} from '../../../utils/FontSizes';

export default class Tables extends Component{

constructor(props)
{
    super(props)
    this.state ={fetcheddata:[]}
}


    componentDidMount(){
        let url ="http://staging.php-dev.in:8844/trainingapp/api/products/getList?product_category_id=1";
        
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
        console.log(this.state.fetcheddata)
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
         
           <Text style = {{ color:White,fontSize:HeaderText,marginLeft:Platform.OS === 'ios'? 0 : 65, fontWeight:HeaderTextFontWeight,marginTop:Platform.OS === 'ios'? 5:10}}>Tables</Text>
           <Right>
          <Icon name="search" size={22}  color="#f9fbff" style = {{marginRight:13.3}} />
          </Right>
          
        
        </Header>

        
        <View style={{flex:1, height:100, width:100}}>
        <FlatList
          data={this.state.fetcheddata}
          renderItem={({item}) => 
        
        {
            
            <Image source={{uri: item.product_images}} style = {{height:100, width:100}}/>
        


        }
        
        
        
        
        }
          keyExtractor={(item, index) => index}
        />
                  </View>
                  
</View>
        );
    }
}
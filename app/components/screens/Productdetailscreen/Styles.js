import {Platform, StyleSheet,Dimensions} from 'react-native';
import {White,ButtonText,PlusIconBackground, HeaderColor} from '../../../utils/Colors';
import {HeaderTextFontWeight,HeaderText,LogoSize,LogoFontWeight,LogoPadding,TextInputFont,RegularFont,ButtonTextSize} from '../../../utils/FontSizes';

export default styles = StyleSheet.create({

button:{
    
    borderWidth:1,
    backgroundColor:HeaderColor,
    height: 60,
    width:170,
    marginTop:18,
    borderRadius:10,
    fontSize:5,
    borderColor: White,
    justifyContent:"center",
    alignItems:"center",
    marginLeft:Platform.OS == 'ios'? 0 : 8,
    

    
    
},
buttontext:{
        
    color:White,
    fontWeight: "bold",
    fontSize:ButtonTextSize

},
headertitle:{
    color:White,
    textAlign:'center',
    fontSize:HeaderText,
    width:250,
    fontWeight:HeaderTextFontWeight
},

button1:{
    
    borderWidth:1,
    backgroundColor:"#c8cbd1",
    height: 60,
    width:170,
    marginTop:18,
    borderRadius:10,
    fontSize:5,
    borderColor: White,
    justifyContent:"center",
    alignItems:"center",
    marginRight:Platform.OS == 'ios'? 0 : 8,
    

    
    
 },
 buttontext1:{
        
    color:"#7F7F7F",
    fontWeight: "bold",
    fontSize:ButtonTextSize

},

ratingbutton:{
    
    borderWidth:1,
    backgroundColor:HeaderColor,
    height: 60,
    width:240,
    marginTop:18,
    borderRadius:10,
    fontSize:5,
    borderColor: White,
    justifyContent:"center",
    alignItems:"center",
    
    

    
    
},
buypopupimage:{
    
    width: 250,
     height: 160,
     marginTop:12,
     borderWidth:2,
     borderColor:"#7F7F7F"

},
ratingbuttontext:{
        
    color:White,
    fontWeight: "bold",
    fontSize:ButtonTextSize

},
buypopuptext:{
    fontSize:27,
    paddingTop:12,
    paddingBottom:10
},
textinput:{
    textAlign:'center',
    // padding:20,
    height:50,
    width:130,
    borderWidth:2,
    borderColor:"green",
    fontSize:30
}




});
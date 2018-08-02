import {Platform, StyleSheet,Dimensions} from 'react-native';


export default styles = StyleSheet.create({

    neostore:{
        fontSize: 40,
        fontWeight: 'bold',
        color: 'white',
        // padding:30,
        alignItems:'center'
        

    },
    view3:{
        height:45,
        width:280, 
        borderColor: 'white',
         borderWidth: 1,
         padding:10,
        margin:6,
        
    
        flexDirection: 'row'

    },

    textinput:{
        
        marginLeft:10,
        color: "white",
        fontSize:20

    },
    loginbutton:{
    
       borderWidth:1,
       backgroundColor:"white",
       height: 55,
       width:280,
       marginTop:18,
       borderRadius:10,
       fontSize:5,
       borderColor: "white",
       justifyContent:"center",
       alignItems:"center"
       
    },
    buttontext:{
        
        color:"red",
        fontWeight: "bold",
        fontSize:25

    },
    forgotpassword:{
      color:"white",
      fontSize:20,
      marginTop:6
    },
    newaccount:{
        color:"white",
        fontWeight:"bold",
        fontSize:18,
        // marginTop:90,
        marginLeft:2,
        justifyContent:'center'

    },
    view1:{
        justifyContent:"center",
        alignItems:"center",
        flex: 1
    

    },
    view2:{
        marginBottom:30,
        marginLeft:10

    },

    genderview:{
        height:45,
        width:280, 
        // borderColor: 'white',
        // borderWidth: 1,
         padding:10,
        margin:6,
        flexDirection:'row'

    },
    keyboardview: {
        // height:"100%",
        flex:1
    } ,
    swiperimage:{
        height:240 ,
        width: Dimensions.get('window').width,
        
    },


    containerbottom: {
        flex: 3,
        justifyContent: 'space-between',
        
        flexDirection: 'column',
        marginHorizontal: 40/3,
        marginVertical: 45/3,
        marginBottom: 15,
        
      },
      boxrow:{
        
            flex:1,
            flexDirection: 'column',
            justifyContent: 'space-between',
            width: '100%',
            
          },
      boxrow:{
    
        flex:1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        
      },
      boxtop: {
        padding: 60/3,

        justifyContent: 'space-between',
        width: '48%',
        height: '90%',
        
        
        backgroundColor: '#e91c1a',
      },
      boxbottom: {
          padding: 60/3,
          justifyContent: 'space-between',
        
        width: '48%',
        height: '90%',
        backgroundColor: '#e91c1a',
      },
      homescreenboxtext1:{
        textAlign: 'right' ,
        fontWeight: '500',
         fontSize: Platform.OS === 'ios' ? 25 : 23, 
         color: '#ffffff'
      },
      homescreenboxtext2:{
        textAlign: 'left',
        fontWeight: '500' ,
         fontSize: 25, 
        color: '#ffffff'

      }




        
       
    

});
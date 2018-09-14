import { Platform, StyleSheet, Dimensions } from 'react-native';
import { White, ButtonText, PlusIconBackground, HeaderColor } from '../../../utils/Colors';
import { LogoSize, LogoFontWeight, LogoPadding, TextInputFont, RegularFon, HeaderTextFontWeight, HeaderText, ButtonTextSize } from '../../../utils/FontSizes';
import { FontBold, FontMedium, FontBook } from '../../../utils/Fonts';


export default styles = StyleSheet.create({

    neostore: {
        fontSize: 40,
        fontWeight: 'bold',
        color: White,
        padding: 15,
        alignItems: 'center',
        fontFamily: FontBold,
        textShadowColor: 'black',
        textShadowOffset: { width: 1, height: 2 },
        textShadowRadius: 5


    },
    view3: {
        height: Platform.OS === 'ios' ? 45 : 38,
        width: 280,
        borderColor: White,
        borderWidth: 1,
        padding: Platform.OS === 'ios' ? 10 : 0,
        margin: 6,



        flexDirection: 'row'

    },

    textinput: {
        flex: 1,
        marginLeft: 10,
        color: White,
        fontSize: Platform.OS === 'ios' ? 20 : 15,
        height: Platform.OS === 'ios' ? 37 : 48,
        width: Platform.OS === 'ios' ? 37 : 47,
        marginTop: -5,
        fontFamily: FontMedium,
        textShadowColor: 'black',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 5

    },
    loginbutton: {
        borderWidth: 1,
        backgroundColor: White,
        height: 55,
        width: 280,
        marginTop: 18,
        borderRadius: 10,
        fontSize: 5,
        borderColor: White,
        justifyContent: "center",
        alignItems: "center"

    },
    buttontext: {
        color: ButtonText,
        fontWeight: 'bold',
        fontSize: 25,
        fontFamily: FontBold,
        paddingTop: Platform.OS === 'ios' ? 7 : 0,
        textShadowColor: 'black',
        textShadowOffset: { width: 1, height: 2 },
        textShadowRadius: 5

    },
    forgotpassword: {
        color: White,
        fontSize: 20,
        marginTop: 6,


    },
    newaccount: {
        color: White,
        fontWeight: "bold",
        fontSize: 18,
        // marginTop:90,
        marginLeft: 2,
        justifyContent: 'center'

    },
    view1: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1


    },
    view2: {
        marginBottom: 30,
        marginLeft: 10

    },

    genderview: {
        height: 45,
        width: 280,
        // borderColor: 'white',
        // borderWidth: 1,
        padding: 10,
        margin: 6,
        flexDirection: 'row'

    },
    keyboardview: {
        // height:"100%",
        flex: 1
    },


    iconpadding: {
        padding: Platform.OS === 'ios' ? 0 : 5,
    },
    lockicon: {
        paddingLeft: Platform.OS === 'ios' ? 0 : 5,
        paddingTop: Platform.OS === 'ios' ? 0 : 5,
        color: White,
        textShadowColor: 'black',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 5


    },
    unlockicon: {
        paddingLeft: Platform.OS === 'ios' ? 0 : 8,
        paddingTop: Platform.OS === 'ios' ? 0 : 5,
        color: "#FFFFFF",
        textShadowColor: 'black',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 5
    },
    rowFlex: {

        flex: 1,
        flexDirection: 'row',
        // alignItems:'center',
        // justifyContent:'center',
    },
    radio: {
        flex: 7,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        color: White,
    },
    radioTitle: {
        fontSize: Platform.OS === 'ios' ? 20 : 17,
        color: White,
        paddingBottom: 5,
        paddingRight: 20,
        paddingLeft: 5,
        fontFamily: FontMedium,
        textShadowColor: 'black',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 5
        // fontWeight:'bold',
    },
    HeaderText: {
        color: White,
        fontSize: HeaderText,
        marginLeft: Platform.OS === 'ios' ? 0 : 65,
        fontWeight: HeaderTextFontWeight,
        marginTop: Platform.OS === 'ios' ? 5 : 10,
        fontFamily: FontBold,
        textShadowColor: 'black',
        textShadowOffset: { width: 1, height: 2 },
        textShadowRadius: 5

    },
    radiobuttonlable: {
        fontSize: Platform.OS === 'ios' ? 20 : 17,
        color: "#ffffff", padding: 4,
        fontFamily: FontMedium
    },
    circle: {
        width: 15,
        height: 15,
        marginRight: 10,
        borderColor: '#ffffff',
        borderWidth: 1,
        borderRadius: 15 / 2,
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

    },
    square: {
        width: 7,
        height: 7,
    },
    checkboxView: {
        width: 12,
        height: 12,
        borderColor: '#ffffff',
        borderWidth: 1,
        padding: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    checkboxlable: {
        fontSize: 17,
        marginRight: 10,
        fontWeight: 'bold',
        fontFamily: FontMedium,
        padding: 1
    },
    checkboxClick: {
        color: "white",
        fontWeight: 'bold',
        fontSize: 14,
        textShadowColor: 'black',
        textShadowOffset: { width: 1, height: 2 },
        textShadowRadius: 5
    },
    backicon: {
        textShadowColor: 'black',
        textShadowOffset: { width: 1, height: 2 },
        textShadowRadius: 5,
        color: White
    }








});
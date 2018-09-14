import { Platform, StyleSheet, Dimensions } from 'react-native';
import { White, ButtonText, PlusIconBackground, HeaderColor } from '../../../utils/Colors';
import { HeaderText, LogoSize, LogoFontWeight, LogoPadding, TextInputFont, RegularFont, ButtonTextSize } from '../../../utils/FontSizes';
import { FontBold, FontMedium, FontBook } from '../../../utils/Fonts';


export default styles = StyleSheet.create({

    neostore: {
        padding: 20,
        fontSize: 50,
        fontWeight: LogoFontWeight,
        color: White,
        paddingBottom: LogoPadding,
        alignItems: 'center',
        // marginTop:20,
        textShadowColor: 'black',
        textShadowOffset: { width: 1, height: 2 },
        textShadowRadius: 5,
    },
    backbutton: {
        color: "#FFFFFF",
        textShadowColor: 'black',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 5,
    },
    headertitle: {
        color: White,
        fontSize: HeaderText,
        textAlign: 'center', width: 250,
        fontWeight: "700",
        fontFamily: FontBook,
        textShadowColor: 'black',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 5,

    },
    icon: {
        // padding: Platform.OS === 'ios' ? 0 : 5,
        paddingTop: Platform.OS === 'ios' ? 0 : 10,
        paddingLeft: Platform.OS === 'ios' ? 0 : 7,
        width: 35,
        color: "#FFFFFF"
        // color="#FFFFFF"
    },
    view3: {
        height: 45,
        width: 280,
        borderColor: 'white',
        borderWidth: 1,
        padding: Platform.OS === 'ios' ? 10 : 0,
        margin: 6,


        flexDirection: 'row'

    },

    textinput: {
        flex: 1,
        marginLeft: 10,
        color: "white",
        fontSize: 20,
        height: Platform.OS === 'ios' ? 37 : 48,
        width: Platform.OS === 'ios' ? 37 : 47,
        marginTop: Platform.OS === 'ios' ? -5 : -3,
        fontFamily: FontMedium

    },
    loginbutton: {

        borderWidth: 1,
        backgroundColor: "white",
        height: 55,
        width: 280,
        marginTop: 18,
        borderRadius: 10,
        fontSize: 5,
        borderColor: "white",
        justifyContent: "center",
        alignItems: "center"

    },
    buttontext: {

        color: ButtonText,
        fontWeight: "bold",
        fontSize: ButtonTextSize,
        fontFamily: FontBook,
        paddingTop: Platform.OS === 'ios' ? 7 : 0,
        textShadowColor: 'black',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 5,

    },
    forgotpassword: {
        color: "white",
        fontSize: 20,
        marginTop: 6
    },
    newaccount: {
        color: "white",
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
    swiperimage: {
        height: 300,
        width: Dimensions.get('window').width,

    },


    containerbottom: {
        flex: 3,
        justifyContent: 'space-between',

        flexDirection: 'column',
        marginHorizontal: 40 / 3,
        marginVertical: 45 / 3,
        marginBottom: 15,

    },
    boxrow: {

        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',

    },
    boxrow: {

        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',

    },
    boxtop: {
        padding: 60 / 3,

        justifyContent: 'space-between',
        width: '48%',
        height: '90%',


        backgroundColor: '#e91c1a',
    },
    boxbottom: {
        padding: 60 / 3,
        justifyContent: 'space-between',

        width: '48%',
        height: '90%',
        backgroundColor: '#e91c1a',
    },
    homescreenboxtext1: {
        textAlign: 'right',
        fontWeight: '500',
        fontSize: 25,
        color: '#ffffff'
    },
    homescreenboxtext2: {
        textAlign: 'left',
        fontWeight: '500',
        fontSize: 25,
        color: '#ffffff'

    },
    backgroundimage: {
        flex: 1,
        borderColor: "red",
        borderWidth: 1
    }









});
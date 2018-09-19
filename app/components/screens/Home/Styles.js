import { Platform, StyleSheet, Dimensions } from 'react-native';
import { White, ButtonText, PlusIconBackground, HeaderColor } from '../../../utils/Colors';
import { LogoSize, LogoHeaderText, LogoFontWeight, LogoPadding, TextInputFont, RegularFon, HeaderTextFontWeight, HeaderText, ButtonTextSize } from '../../../utils/FontSizes';
import { FontBold, FontMedium, FontBook } from '../../../utils/Fonts';


export default styles = StyleSheet.create({

    neostore: {
        fontSize: 40,
        fontWeight: 'bold',
        color: 'white',
        // padding:30,
        alignItems: 'center'


    },
    view3: {
        height: 45,
        width: 280,
        borderColor: 'white',
        borderWidth: 1,
        padding: 10,
        margin: 6,


        flexDirection: 'row'

    },

    textinput: {

        marginLeft: 10,
        color: "white",
        fontSize: 20

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

        color: "red",
        fontWeight: "bold",
        fontSize: 25

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
        height: Platform.OS === 'ios' ? 240 : 215,
        width: Dimensions.get('window').width,

    },
    headerText: {
        color: White,
        fontSize: LogoHeaderText,
        marginLeft: Platform.OS === 'ios' ? 0 : 65,
        fontWeight: HeaderTextFontWeight,
        marginTop: 10,
        fontFamily: FontMedium,
        textAlign: 'center',
        textShadowColor: 'black',
        textShadowOffset: { width: 1, height: 2 },
        textShadowRadius: 5
    },

    containerbottom: {
        flex: 3,
        justifyContent: 'space-between',

        flexDirection: 'column',
        marginHorizontal: 40 / 3,
        marginVertical: 15,
        marginBottom: 15,

    },
    iconview: {
        height: Platform.OS === 'ios' ? 380 : Dimensions.get('window').height - 280,
        width: Dimensions.get('window').width

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
    boxtop1: {
        padding: 20,

        justifyContent: 'space-between',
        width: '48%',
        height: '90%',
        backgroundColor: '#fe3f3f',
        shadowOpacity: 0.75,
        shadowRadius: 5,
        shadowColor: "black",
        shadowOffset: { height: 5, width: 5 },
        elevation: 5

    },
    boxtop2: {
        // padding: Platform.OS === 'ios' ? 20 : 15,
        paddingLeft: Platform.OS === 'ios' ? 30 : 20,
        paddingTop: Platform.OS === 'ios' ? 15 : 5,
        paddingBottom: Platform.OS === 'ios' ? 15 : 9,
        paddingRight: Platform.OS === 'ios' ? 15 : 12,
        justifyContent: 'space-between',
        width: '48%',
        height: '90%',
        backgroundColor: '#bb0100',
        shadowOpacity: 0.75,
        shadowRadius: 5,
        shadowColor: "black",
        shadowOffset: { height: 5, width: 5 },
    },
    boxbottom1: {
        paddingLeft: Platform.OS === 'ios' ? 20 : 16,
        paddingRight: Platform.OS === 'ios' ? 20 : 20,
        paddingTop: Platform.OS === 'ios' ? 20 : 14,
        paddingBottom: Platform.OS === 'ios' ? 20 : 20,
        justifyContent: 'space-between',

        width: '48%',
        height: '90%',
        backgroundColor: '#e91b1a',
        shadowOpacity: 0.75,
        shadowRadius: 5,
        shadowColor: "black",
        shadowOffset: { height: 5, width: 5 },
    },
    boxbottom2: {
        paddingTop: Platform.OS === 'ios' ? 20 : 20,
        paddingLeft: Platform.OS === 'ios' ? 20 : 12,
        paddingRight: Platform.OS === 'ios' ? 20 : 20,
        paddingBottom: Platform.OS === 'ios' ? 20 : 18,
        justifyContent: 'space-between',

        width: '48%',
        height: '90%',
        backgroundColor: '#9e0100',
        shadowOpacity: 0.75,
        shadowRadius: 5,
        shadowColor: "black",
        shadowOffset: { height: 5, width: 5 },
    },
    icontext1: {
        textAlign: 'right',
        fontWeight: '500',
        fontSize: Platform.OS === 'ios' ? 23 : 23,
        color: '#ffffff',
        fontFamily: FontMedium,
        // marginTop: 5
        textShadowColor: 'black',
        textShadowOffset: { width: 1, height: 2 },
        textShadowRadius: 5
    },
    icontext2: {
        textAlign: 'left',
        fontWeight: '500',
        fontSize: 25,
        color: '#ffffff',
        fontFamily: FontMedium,
        textShadowColor: 'black',
        textShadowOffset: { width: 1, height: 2 },
        textShadowRadius: 5

    },
    headreicon1: {
        marginLeft: Platform.OS === 'ios' ? 10 : 0,
        textShadowColor: 'black',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 5,
        color: White
    },
    headericon2: {
        marginRight: 13.3,
        color: White,
        textShadowColor: 'black',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 5
    },
    sofaicon: {
        textShadowColor: 'black',
        textShadowOffset: { width: 1, height: 2 },
        textShadowRadius: 5,
        textAlign: 'right',
        color: White
    },
    tableicon: {
        textShadowColor: 'black',
        textShadowOffset: { width: 1, height: 2 },
        textShadowRadius: 5,
        textAlign: 'left',
        color: White
    }








});
import { Platform, StyleSheet, Dimensions } from 'react-native';
import { White, ButtonText, PlusIconBackground, HeaderColor } from '../../../utils/Colors';
import { LogoSize, LogoFontWeight, LogoPadding, TextInputFont, RegularFon, HeaderTextFontWeight, HeaderText, ButtonTextSize } from '../../../utils/FontSizes';



export default styles = StyleSheet.create({

    neostore: {
        fontSize: 40,
        fontWeight: 'bold',
        color: 'white',
        padding: 15,
        alignItems: 'center'


    },
    view3: {
        height: Platform.OS === 'ios' ? 45 : 38,
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
        fontSize: Platform.OS === 'ios' ? 20 : 15,

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
        fontWeight: 'bold',
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
    iconpadding: {
        padding: Platform.OS === 'ios' ? 0 : 5,
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
        // fontWeight:'bold',
    },








});
import { Platform, StyleSheet, Dimensions } from 'react-native';
import { White, ButtonText, PlusIconBackground } from '../../../utils/Colors';
import { LogoSize, LogoFontWeight, LogoPadding, TextInputFont, RegularFont, ButtonTextSize } from '../../../utils/FontSizes';
import { FontBold, FontMedium, FontBook } from '../../../utils/Fonts';

export default styles = StyleSheet.create({

    neostore: {
        fontSize: LogoSize,
        fontWeight: LogoFontWeight,
        color: White,
        padding: LogoPadding,
        alignItems: 'center',
        fontFamily: FontBold


    },
    view3: {
        height: 45,

        width: 280,
        borderColor: White,
        borderWidth: 1,
        padding: Platform.OS === 'ios' ? 10 : 0,
        margin: 6,


        flexDirection: 'row'

    },

    textinput: {
        flex: 1,
        height: 55,
        marginLeft: 10,
        color: White,
        fontSize: TextInputFont,
        paddingBottom: Platform.OS === "ios" ? 30 : 20,
        fontFamily: FontMedium

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
        fontWeight: "bold",
        fontSize: ButtonTextSize,
        fontFamily: FontMedium,
        paddingTop: Platform.OS === 'ios' ? 7 : 0

    },
    forgotpassword: {
        color: White,
        fontSize: 20,
        marginTop: 6,
        fontFamily: FontMedium,
        paddingTop: Platform.OS === 'ios' ? 3 : 0

    },
    newaccount: {
        color: White,
        fontWeight: "bold",
        fontSize: RegularFont,
        // marginTop:90,
        marginLeft: 2,
        justifyContent: 'center',
        fontFamily: FontMedium,

    },
    view1: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1


    },
    view2: {
        marginBottom: Platform.OS === 'ios' ? 5 : 30,
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
    // keyboardview: {
    //     // height:"100%",
    //     flex:1
    // } ,
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
        borderWidth: 1,
        height: Dimensions.get("window").height
    },
    mainview: {
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width
    },
    icon: {
        paddingTop: Platform.OS === 'ios' ? 0 : 8,
        paddingLeft: Platform.OS === 'ios' ? 0 : 5,
        color: White

    },
    addaccount: {
        marginRight: 15,
        backgroundColor: PlusIconBackground,
        padding: 5,
        color: White,

    }
});
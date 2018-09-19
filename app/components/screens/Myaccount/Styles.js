import { Platform, StyleSheet, Dimensions } from 'react-native';
// import { ButtonText } from '../../../Utils/Colors';
import { White, ButtonText, PlusIconBackground, HeaderColor } from '../../../utils/Colors';
import { LogoSize, LogoFontWeight, LogoPadding, TextInputFont, RegularFon, HeaderTextFontWeight, HeaderText, ButtonTextSize } from '../../../utils/FontSizes';
import { FontBold, FontMedium, FontBook } from '../../../utils/Fonts';

export default styles = StyleSheet.create({

    iconpadding: {
        paddingLeft: Platform.OS === 'ios' ? 0 : 7,
        paddingTop: Platform.OS === 'ios' ? 0 : 6,
        height: 50,
        width: Platform.OS === 'ios' ? 30 : 35,
        // textAlign:Platform.OS === 'ios' ? ,'center'
        justifyContent: "center",
        color: "#f9fbff",

    },
    icon: {
        color: "#f9fbff",
        textShadowColor: 'black',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 5,
    },

    view3: {
        height: Platform.OS === 'ios' ? 45 : 40,
        width: 280,
        borderColor: 'white',
        borderWidth: 1,
        padding: Platform.OS === 'ios' ? 10 : 0,
        marginTop: Platform.OS === 'ios' ? 20 : 13,
        flexDirection: 'row'

    },
    profileimage: {

        width: 110,
        height: 110,
        borderRadius: 55,
        // borderWidth: 2,
        // borderColor: White
    },
    backgroundimage: {
        flex: 1, borderColor: "red",
        borderWidth: 1,
        height: Dimensions.get('window').height

    },
    headertitle: {
        color: White, textAlign: 'center',
        fontSize: HeaderText,
        width: 250,
        fontWeight: HeaderTextFontWeight,
        fontFamily: FontBold,
        textShadowColor: 'black',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 5,
    },

    textinput: {
        flex: 1,
        marginLeft: 10,
        color: "white",
        fontSize: Platform.OS === 'ios' ? 20 : 15,
        // fontWeight: Platform.OS === 'ios' ? '500' : '500',
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
        borderColor: "white",
        justifyContent: "center",
        alignItems: "center",

    },
    buttontext: {

        color: ButtonText,
        fontWeight: "bold",
        fontSize: ButtonTextSize,
        fontFamily: FontMedium,
        paddingTop: Platform.OS === 'ios' ? 7 : 0,
        textShadowColor: 'black',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 5,

    },

    resetpasswordbutton: {

        borderWidth: 1,
        backgroundColor: White,
        height: 55,
        width: Dimensions.get('window').width,
        // marginTop: 18,

        fontSize: 5,
        borderColor: "white",
        justifyContent: "center",
        alignItems: "center"
    },
    resetpasswordbuttontext: {
        color: "#7F7F7F",
        // fontWeight: "bold",
        fontSize: ButtonTextSize,
        textShadowColor: 'black',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 5,
    },
    mainview: {
        alignItems: 'center',
        padding: Platform.OS === 'ios' ? 10 : 2,
        height: Dimensions.get('window').height
    },
    mobileicon: {
        color: "#f9fbff",
        height: 45,
        width: Platform.OS === 'ios' ? 30 : 35,
        justifyContent: "center",
        alignItems: "center",
        paddingLeft: Platform.OS === 'ios' ? 0 : 6,
        paddingTop: Platform.OS === "ios" ? 0 : 6
    },
    mailicon: {
        color: "#f9fbff",
        height: 45,
        width: Platform.OS === 'ios' ? 30 : 35,
        justifyContent: "center",
        alignItems: "center",
        paddingLeft: Platform.OS === 'ios' ? 0 : 8,
        paddingTop: Platform.OS === "ios" ? 0 : 6
    },
    cakeicon: {
        color: "#f9fbff",
        height: 50,
        width: Platform.OS === 'ios' ? 30 : 35,
        justifyContent: "center",
        paddingTop: Platform.OS === 'ios' ? 0 : 8,
        paddingLeft: Platform.OS === 'ios' ? 0 : 10
    }



});

import { Platform, StyleSheet, Dimensions } from 'react-native';
import { White, ButtonText, PlusIconBackground, HeaderColor } from '../../../utils/Colors';
import { LogoSize, LogoFontWeight, LogoPadding, TextInputFont, RegularFon, HeaderTextFontWeight, HeaderText, ButtonTextSize } from '../../../utils/FontSizes';
import { FontBold, FontMedium, FontBook } from '../../../utils/Fonts';

export default styles = StyleSheet.create({
    headertitle: {
        color: White,
        textAlign: 'center',
        fontSize: HeaderText,
        width: 250,
        fontWeight: HeaderTextFontWeight,
        paddingRight: Platform.OS === 'ios' ? 0 : 14,
        fontFamily: FontMedium

    },
    address: {
        fontSize: 17,
        color: "#1C1C1C",
        fontWeight: "400",
        fontFamily: FontMedium
    },
    textinput: {
        height: 80,
        backgroundColor: "white",
        padding: 5,
        fontFamily: FontBook
    },
    landmarktextinput: {
        height: 45,
        backgroundColor: "white",
        padding: 5,
        fontFamily: FontMedium
    },
    state: {
        fontSize: 17,
        color: "#1C1C1C",
        fontWeight: "400",
        paddingLeft: 135,
        fontFamily: FontMedium
    },
    citytextinput: {
        height: 45,
        backgroundColor: "white",
        width: 155,
        padding: 5,
        fontFamily: FontMedium
    },
    statetextinput: {
        height: 45,
        backgroundColor: "white",
        marginLeft: 20,
        width: Platform.OS === 'ios' ? 170 : 155,
        padding: 5,
        fontFamily: FontMedium
    },
    country: {
        fontSize: 17,
        color: "#1C1C1C",
        fontWeight: "400",
        paddingLeft: 92,
        fontFamily: FontMedium
    },
    buttonview: {
        justifyContent: 'center',
    },
    saveaddressbutton: {
        borderWidth: 1,
        backgroundColor: ButtonText,
        height: 55,
        width: Platform.OS === 'ios' ? 347 : 330,
        marginTop: 25,
        borderRadius: 10,
        fontSize: 5,
        borderColor: White,
        justifyContent: "center",
        alignItems: "center"
    },
    saveaddressbuttontext: {
        color: White,
        fontWeight: "bold",
        fontSize: ButtonTextSize,
        fontFamily: FontMedium,
        paddingTop: Platform.OS === 'ios' ? 7 : 0
    },
    keyboard: {
        flex: 1,
        height: Dimensions.get('window').height,

    }
})
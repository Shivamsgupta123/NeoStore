import { Platform, StyleSheet, Dimensions } from 'react-native';
import { White, ButtonText, PlusIconBackground, HeaderColor } from '../../../utils/Colors';
import { LogoSize, LogoFontWeight, LogoPadding, TextInputFont, RegularFon, HeaderTextFontWeight, HeaderText, ButtonTextSize } from '../../../utils/FontSizes';

export default styles = StyleSheet.create({
    headertitle: {
        color: White,
        textAlign: 'center',
        fontSize: HeaderText,
        width: 250,
        fontWeight: HeaderTextFontWeight,
        paddingRight: Platform.OS === 'ios' ? 0 : 14

    },
    address: {
        fontSize: 17,
        color: "#1C1C1C",
        fontWeight: "400"
    },
    textinput: {
        height: 80,
        backgroundColor: "white",
        padding: 5
    },
    landmarktextinput: {
        height: 45,
        backgroundColor: "white",
        padding: 5
    },
    state: {
        fontSize: 17,
        color: "#1C1C1C",
        fontWeight: "400",
        paddingLeft: 140
    },
    citytextinput: {
        height: 45,
        backgroundColor: "white",
        width: 155,
        padding: 5
    },
    statetextinput: {
        height: 45,
        backgroundColor: "white",
        marginLeft: 20,
        width: Platform.OS === 'ios' ? 170 : 155,
        padding: 5
    },
    country: {
        fontSize: 17,
        color: "#1C1C1C",
        fontWeight: "400",
        paddingLeft: 102
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
        fontSize: ButtonTextSize
    },
    keyboard: {
        flex: 1,
        height: Dimensions.get('window').height
    }
})
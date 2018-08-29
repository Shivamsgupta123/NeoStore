import { Platform, StyleSheet, Dimensions } from 'react-native';
import { White, ButtonText, PlusIconBackground, HeaderColor } from '../../../utils/Colors';
import { LogoSize, LogoFontWeight, LogoPadding, TextInputFont, RegularFon, HeaderTextFontWeight, HeaderText, ButtonTextSize } from '../../../utils/FontSizes';

export default styles = StyleSheet.create({
    mainview: {
        flex: 1
    },
    header: {
        backgroundColor: HeaderColor
    },
    headerleft: {
        paddingRight: -10
    },
    headertitle: {
        color: White,
        textAlign: 'center',
        fontSize: HeaderText,
        width: 250,
        fontWeight: HeaderTextFontWeight,
        paddingRight: Platform.OS === 'ios' ? 0 : 14

    },
    headerright: {
        paddingRight: 8
    },
    container: {

        height: 230,
        width: 400,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        height: 230,
        width: 400,
    },
    storename: {
        fontWeight: "500",
        color: "#1C1C1C",
        fontSize: 17
    },
    address: {
        fontSize: 15,
        paddingTop: 5

    },
    addressview: {
        paddingTop: 14,
        flexDirection: "row",
        borderBottomWidth: 1,
        borderColor: "grey",
        paddingBottom: 10
    },
    addressview1: {
        paddingTop: 10
    },
    addresssubview: {
        flexDirection: "row",
        borderBottomWidth: 1,
        borderColor: "grey",
        paddingBottom: 15

    },
    iconView: {
        paddingBottom: 15,
        paddingRight: 15,
        paddingLeft: 15,
        paddingTop: 6
    }

})
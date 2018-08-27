import { Platform, StyleSheet, Dimensions } from 'react-native';
// import { ButtonText } from '../../../Utils/Colors';
import { White, ButtonText, PlusIconBackground, HeaderColor } from '../../../utils/Colors';
import { LogoSize, LogoFontWeight, LogoPadding, TextInputFont, RegularFon, HeaderTextFontWeight, HeaderText, ButtonTextSize } from '../../../utils/FontSizes';


export default styles = StyleSheet.create({

    iconpadding: {
        padding: Platform.OS === 'ios' ? 0 : 7,
        height: 50,
        width: Platform.OS === 'ios' ? 30 : 35,
        // textAlign:Platform.OS === 'ios' ? ,'center'
        justifyContent: "center"
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
        fontWeight: HeaderTextFontWeight
    },

    textinput: {
        flex: 1,
        marginLeft: 10,
        color: "white",
        fontSize: Platform.OS === 'ios' ? 20 : 15,
        fontWeight: Platform.OS === 'ios' ? '500' : '500'

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
        alignItems: "center"

    },
    buttontext: {

        color: ButtonText,
        fontWeight: "bold",
        fontSize: ButtonTextSize

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
        fontSize: ButtonTextSize

    },
    mainview: {
        alignItems: 'center',
        padding: Platform.OS === 'ios' ? 10 : 2,
        height: Dimensions.get('window').height
    },
    mobileicon: {
        height: 50,
        width: Platform.OS === 'ios' ? 30 : 35,
        justifyContent: "center",
        paddingBottom: 7,
        paddingLeft: Platform.OS === 'ios' ? 0 : 8
    }




});

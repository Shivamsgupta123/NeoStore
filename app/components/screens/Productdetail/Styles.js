import { Platform, StyleSheet, Dimensions } from 'react-native';
import { ProductProducer, White, ButtonText, PlusIconBackground, HeaderColor } from '../../../utils/Colors';
import { DetailScreenFont, HeaderTextFontWeight, HeaderText, LogoSize, LogoFontWeight, LogoPadding, TextInputFont, RegularFont, ButtonTextSize } from '../../../utils/FontSizes';
import { FontBold, FontMedium, FontBook } from '../../../utils/Fonts';
// import { FontBold, FontMedium, FontBook } from '../../../utils/Fonts';

export default styles = StyleSheet.create({

    button: {

        borderWidth: 1,
        backgroundColor: HeaderColor,
        height: Platform.OS === 'ios' ? "90%" : "77%",
        width: 170,
        marginTop: 18,
        borderRadius: 10,
        fontSize: 5,
        borderColor: White,
        justifyContent: "center",
        alignItems: "center",
        marginLeft: Platform.OS == 'ios' ? 0 : 8,




    },
    buttontext: {

        color: White,
        fontWeight: "bold",
        fontSize: ButtonTextSize,
        fontFamily: FontMedium,
        paddingTop: Platform.OS === 'ios' ? 7 : 0

    },
    headertitle: {
        color: White,
        textAlign: 'center',
        fontSize: HeaderText,
        width: 230,
        fontWeight: HeaderTextFontWeight,
        fontFamily: FontBold
    },

    button1: {

        borderWidth: 1,
        backgroundColor: "#c8cbd1",
        height: 58,
        width: 170,
        marginTop: 18,
        borderRadius: 10,
        fontSize: 5,
        borderColor: White,
        justifyContent: "center",
        alignItems: "center",
        marginRight: Platform.OS == 'ios' ? 0 : 8,




    },
    buttontext1: {

        color: "#7F7F7F",
        fontWeight: "bold",
        fontSize: ButtonTextSize,
        fontFamily: FontMedium,
        paddingTop: Platform.OS == 'ios' ? 7 : 0,

    },
    popupbutton: {

        color: "#7F7F7F",
        fontWeight: "bold",
        fontSize: ButtonTextSize,
        paddingLeft: 10,
        // fontFamily: FontMedium,
        // paddingTop: Platform.OS === 'ios' ?  : 0



    },


    popupback: {

        borderWidth: 1,
        backgroundColor: "#c8cbd1",
        height: 60,
        width: 130,
        marginTop: 18,
        borderRadius: 10,
        fontSize: 5,
        borderColor: White,
        justifyContent: "center",
        alignItems: "center",
        marginRight: Platform.OS == 'ios' ? 0 : 8,

    },

    ratingbutton: {

        borderWidth: 1,
        backgroundColor: HeaderColor,
        height: 60,
        width: 130,
        marginTop: 18,
        borderRadius: 10,
        fontSize: 5,
        borderColor: White,
        justifyContent: "center",
        alignItems: "center",
    },
    buypopupimage: {

        width: 250,
        height: 140,
        marginTop: Platform.OS === 'ios' ? 5 : 12,
        borderWidth: 2,
        borderColor: "#7F7F7F"

    },
    ratingbuttontext: {

        color: White,
        fontWeight: "bold",
        fontSize: ButtonTextSize,
        fontFamily: FontMedium,
        paddingTop: Platform.OS === 'ios' ? 7 : 0


    },
    buypopuptext: {
        fontSize: 23,
        paddingTop: 12,
        paddingBottom: 10,
        fontFamily: FontBook,
        color: "#2C2B2B"
    },
    textinput: {
        textAlign: 'center',
        // padding:20,
        height: Platform.OS == 'ios' ? 40 : 50,
        width: 130,
        borderWidth: 2,
        borderColor: "green",
        fontSize: 25
    },
    productname: {
        color: "#111111",
        fontSize: Platform.OS === 'ios' ? 23 : 25,
        fontWeight: '600',
        marginLeft: 8,
        marginTop: 4,
        fontFamily: FontBold
    },
    subview1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: "95%",
        paddingBottom: 7
    },
    productproducer: {
        color: ProductProducer,
        fontSize: 17,
        marginLeft: 8,
        fontFamily: FontBook
    },
    subview2: {
        flex: 1,
        flexDirection: 'row',
        marginLeft: 15,
        alignItems: 'center',
        justifyContent: 'space-between',
        width: "90%"
    },
    productcost: {
        color: HeaderColor,
        fontSize: 25,
        marginTop: 10,
        fontWeight: '600'
    },
    subview3: {
        // flex: 1,
        alignItems: 'center',
        padding: 10
    },
    productimage: {
        width: "80%",
        height: 150,
        marginTop: 12,
        borderColor: "grey",
        borderWidth: 1
    },
    subview4: {
        // flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        paddingBottom: 15,
        alignItems: "center"
    },
    productdescription: {
        color: "#111111",
        fontSize: 23,
        fontWeight: '600',
        marginLeft: 12,
        fontFamily: FontMedium
    },
    productdetail: {
        color: "#333333",
        fontSize: Platform.OS === 'ios' ? 16 : 15,
        marginLeft: 12,
        marginRight: 12,
        paddingTop: 5,
        fontFamily: FontMedium,
        paddingBottom: 5
    },
    subview5: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        // padding: Platform.OS == 'ios' ? "3%" : 0,
        paddingTop: Platform.OS == 'ios' ? "3%" : 0,
        paddingBottom: Platform.OS == 'ios' ? "3%" : 5,
        paddingLeft: Platform.OS == 'ios' ? "3%" : 0,
        paddingRight: Platform.OS == 'ios' ? "3%" : 0,
        // paddingBottom: 5,

        height: "26%"
    },
    modalview1: {
        flex: 1,
        backgroundColor: White,
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalview2: {
        fontSize: 25,
        fontWeight: "700",
        paddingBottom: 40,
        fontFamily: FontBook,
        color: "#2C2B2B"
    },
    modalimage: {
        width: 250,
        height: 160,
        marginTop: 12,
        borderColor: "grey",
        borderWidth: 1

    },
    modalview3: {
        flex: 1,
        justifyContent: 'center',
        width: "95%",
        height: 50
    },
    modalview4: {
        flex: 1,
        justifyContent: 'center',
        width: "95%",
        height: "50%",
        // backgroundColor: "white"
    },
    buypopupname: {
        fontSize: 25,
        fontWeight: "700",
        paddingBottom: 40,
        fontFamily: FontBook,
        color: "#2C2B2B"
    },
    modalview5: {
        flex: 1,
        backgroundColor: White,
        justifyContent: 'center',
        alignItems: 'center'
    },
    mainview: {
        flex: 1,
        // backgroundColor: "red"

        height: Dimensions.get('window').height
    },
    productsubimage: {
        width: 100,
        height: 65,
        marginLeft: 12,
        borderWidth: 1,
        borderColor: "grey"
    },
    imazezoom: {
        width: 280,
        height: 280,
        marginTop: Platform.OS === 'ios' ? 5 : 12,
        // borderWidth: 2,
        // borderColor: "#7F7F7F"
    },
    imagezoomclose: {
        backgroundColor: 'red',
        width: 30,
        height: 30,
        textAlign: 'center',
        color: "white",
        marginLeft: "90%",
        marginBottom: "5%"
    },
    imagezoomview: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    borderview: {
        backgroundColor: "#c8cbd1",
        height: 5
    },
    shareicon: {
        color: "#7F7F7F",
        marginTop: 10
    }




});
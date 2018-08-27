import React, { Component } from 'react';
import { View, Text, ImageBackground, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import styles from './Styles';
import { Icon } from '../../../utils/Icon/Icon';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { White, ButtonText, PlusIconBackground, HeaderColor } from '../../../utils/Colors';
// import SplashScreen from 'react-native-splash-screen';
import { AsyncStorage } from 'react-native';
// import { login } from '../../../lib/api';
import { _login, fetchaccountdetail } from '../../../lib/api';
import { GlobalAPI } from '../../../lib/Globals';
import SplashScreen from 'react-native-splash-screen';


export default class Login extends Component {
    constructor(props) {
        super(props)
    }
    state = {
        Username: '',
        Password: '',
        Loading: false
    }

    componentWillMount = async () => {
        let user = await AsyncStorage.getItem('Username')
    }
    componentDidMount() {
        SplashScreen.hide();
    }

    // validing input field
    validate() {
        var emailreg = /\S+@\S+\.\S+/;
        var passwordreg = /^[0-9a-zA-Z]+$/;
        if (this.state.Username == "" || !this.state.Username.match(emailreg)) {
            alert("Enter Valid User Name.")
            return false
        }
        // else
        //     if (this.state.Password == "" || !this.state.Password.match(passwordreg) || this.state.Password.length < 8) {
        //         alert("Enter alphanumeric password having atleast 8 characters.")
        //         return false
        //     }
        else
            this.login()

    }


    userdetails = (access_token) => {
        SplashScreen.hide();
        this.setState({ Loading: true })
        GlobalAPI(fetchaccountdetail, "GET", null, access_token, (response) => {
            if (response.status == 200) {
                this.props.navigation.replace('MyApp', response)
            }
            else {
                alert(response.user_msg)

            }

        }, error => {
            console.log(error)
        }
        )
    }

    // user Authentication
    login() {
        let formData = new FormData();
        formData.append('email', this.state.Username);
        formData.append('password', this.state.Password);
        this.setState({ Loading: true })
        GlobalAPI(_login, "POST", formData, {}, response => {
            if (response.status == 200) {
                // console.log(response.data.access_token)
                AsyncStorage.setItem("access_token", response.data.access_token, () => {
                    this.userdetails(response.data.access_token);
                })
                AsyncStorage.setItem("ResponseData", JSON.stringify(response))
            }
            else {
                alert(response.user_msg)
                this.setState({ Loading: false })
                console.log("Loading123", this.state.Loading)
                // alert("Connection Failed!")
            }
        }, error => {
            console.log(error.error)
            alert("Connection Failed!")
            this.setState({ Loading: false })
        })

    }


    render() {

        // if (this.state.Loading)
        //     return <ActivityIndicator style={{ flex: 1, justifyContent: 'center' }} size="large" color="#e91b1a" />

        return (

            <View pointerEvents={this.state.Loading ? "none" : "auto"} style={styles.mainview}>

                <ImageBackground source={require('../../../assets/images/red_1.jpg')} style={styles.backgroundimage}>
                    {/* {this.state.Loading ? <ActivityIndicator style={{ alignSelf: 'center', margin: "100%" }} size="large" color="white" /> : null} */}

                    {/* {this.state.Loading ? <ActivityIndicator size="large" color="white" /> : null} */}



                    <View style={styles.view1}>
                        <Text style={styles.neostore}>NeoSTORE</Text>

                        <View style={styles.view3}>
                            <Icon name="user" size={25} color="#FFFFFF" style={styles.icon} />
                            <TextInput returnKeyType={"next"} onChangeText={(text) => this.setState({ Username: text })} style={styles.textinput} placeholder="Username" placeholderTextColor={White} ></TextInput>
                        </View>

                        <View style={styles.view3}>
                            <Icon name="lock" size={25} color="#FFFFFF" style={styles.icon} />
                            <TextInput onChangeText={(text) => this.setState({ Password: text })} style={styles.textinput} secureTextEntry={true} placeholder="Password" placeholderTextColor={White} ></TextInput>
                        </View>
                        {/* {this.state.Loading ? <ActivityIndicator size="large" color="white" /> : null} */}
                        <TouchableOpacity onPress={() => this.validate()} style={styles.loginbutton}>
                            {this.state.Loading ? <ActivityIndicator size="large" color="red" /> : <Text style={styles.buttontext}>LOGIN</Text>}
                            {console.log("Loading", this.state.Loading)}
                        </TouchableOpacity>
                        {this.state.Loading ? <Text style={styles.forgotpassword}>Forgot Password?</Text> :
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Forgotpassword')}>
                                <Text style={styles.forgotpassword}>Forgot Password?</Text>

                            </TouchableOpacity>
                        }
                    </View>

                    <View style={styles.view2}>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Text style={styles.newaccount}>DONT HAVE AN ACCOUNT?</Text>
                            {this.state.Loading ? <FeatherIcon style={{ marginRight: 15, backgroundColor: PlusIconBackground, padding: 2 }} name="plus" size={40} color="#FFFFFF" /> :
                                <TouchableOpacity onPress={() => this.props.navigation.navigate('Registration')}>
                                    <FeatherIcon style={{ marginRight: 15, backgroundColor: PlusIconBackground, padding: 2 }} name="plus" size={40} color="#FFFFFF" />

                                </TouchableOpacity>
                            }
                        </View>

                    </View>

                </ImageBackground>
            </View>


        );
    }


}
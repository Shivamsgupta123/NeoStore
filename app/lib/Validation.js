var emailreg = /\S+@\S+\.\S+/;
var passwordreg = /^[0-9a-zA-Z]+$/;
var phonenoreg = /^\+?([0-9]{2})\)?[-. ]?([0-9]{5})[-. ]?([0-9]{5})$/;
var namereg = /^[A-Za-z]+$/;

export const EmptyField = (data) => {
    if (data == '')
        return true
    return false
}

export const Email = (data) => {
    if (!data.match(emailreg))
        return true
    return false
}

export const Name = (data) => {
    if (!data.match(namereg))
        return true
    return false
}

export const Password = (data) => {
    if (!data.match(passwordreg))
        return true
    return false
}

export const PhoneNumber = (data) => {
    if (!data.match(phonenoreg))
        return true
    return false
}

// radio buttons
    // onPress = data => this.setState({ data });


    // selectGender(value) {
    //     value == 1 ? this.setState({ gender: "Female" }) : this.setState({ gender: "Male" })
    //     console.log("gender", value)
    // }
    // (value) => this.selectGender(value)


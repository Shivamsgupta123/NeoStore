var name = {};

export const name = (txt) => {
    var reg = /^[A-Za-z ]+$/g;
    if(txt == "") 
    {
      
    alert("Please Enter First Name")
    return name;
    }
    
    else
    
    if(!txt.match(reg))
    {
    alert("Enter Only Characters. ")   
    return name;
    } 

}

// export const name = (txt) => {
//     var reg = /^[A-Za-z ]+$/g;
//     if(txt == "") 
      
//     alert("Please Enter Last Name")
    
//     else
    
//     if(!txt.match(reg))
//     alert("Enter Only Characters. ")    

// }
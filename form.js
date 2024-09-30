function validateform(){
    let valid =true;
// clear error message
document.getElementById('email_error').innerHTML = ''
document.getElementById('password_error').innerHTML = ''
}

//validate email
let email= document.getElementById('email_error').value;

if(email === ""){
document.getElementById('email_error').innerHTML='Eroor! Email is required.'
valid = false
}
//validate password
let password= document.getElementById('password_error').value;

if(password === ""){
document.getElementById('password_error').innerHTML='password is required.'
valid = false
}
else if(password.length <6 ){
    document.getElementById('password_error').innerHTML=' Error! password must be atleast 6 characters long.'
    valid = false
 }
    return valid 

const emailHTML = document.getElementById('email');
const passwordHTML = document.getElementById('password');
const emailErrorHTML = document.getElementById('emailError');
const passwordErrorHTML = document.getElementById('passwordError');
const successTextHTML = document.getElementById('successText');
const btnHTML = document.getElementById('btn');

let isValidEmail = false;
let isValidPassword = false;

const onChangeEmail = ()=>{
    const email = emailHTML.value;
    if(email.length>3 && email.includes("@") && email.includes(".")){
        emailErrorHTML.style.display = "none";
        isValidEmail = true;
        if(isValidPassword){
            successTextHTML.style.display = 'block';
        }
    }else{
        isValidEmail = false;
        emailErrorHTML.style.display = "block";
        successTextHTML.style.display = "none";
    }
}

const onChangePassword = ()=>{
    const password = passwordHTML.value;
    if(password.length>8){
        passwordErrorHTML.style.display = "none";
        isValidPassword = true;
        if(isValidEmail){
            successTextHTML.style.display = 'block';
        }
    }else{
        isValidPassword = false;
        passwordErrorHTML.style.display = "block";
        successTextHTML.style.display = "none";
    }
}

const handleSubmit = ()=>{
    if (window.confirm(`Email: ${emailHTML.value}\nPassword: ${passwordHTML.value}`)) {
        alert("successful signup!")
    } else {
        emailHTML.value = "";
        passwordHTML.value = "";
        isValidEmail = false;
        isValidPassword = false;
        emailErrorHTML.style.display = "none";
        passwordErrorHTML.style.display = "none";
        successTextHTML.style.display = "none";
    }
}
var password=document.getElementById("password");

var carac = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var passwordLength = 15
var password = "";
var choice = passwordLength;

for (var i = 0; i <= passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * carac.length);
    password += carac.substring(randomNumber, randomNumber +1);
}

document.getElementById("password").value = password;

var password=document.getElementById("password");

function genPassword() {

    var carac = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var passwordLength = 15
    var password = "";

    alert("Select options");
    window.confirm("Do you want capital letters?");
    window.confirm("Do you want Numbers?");
    window.confirm("Do you want Special characters?");

    for (var i = 0; i <= passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * carac.length);
    password += carac.substring(randomNumber, randomNumber +1);
    } 
    alert ("your password is " + password);
}

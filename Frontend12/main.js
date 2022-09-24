
function validation(){
var user=document.getElementById("name").value
var email=document.getElementById("email").value
var address=document.getElementById("address").value;
var country=document.getElementById("country").value;
var city=document.getElementById("city").value;
var subject=document.getElementById("subject").value;


if (user=="" ){
    document.getElementById("username").innerHTML="**Please Fill The Respective Field**";
    return false;
}
if(user.length<=1 || user.length>20){
    document.getElementById("username").innerHTML="**Your username should be between 2 and 20 letters**";
    return false;
}
if(!isNaN(user)){
    document.getElementById("username").innerHTML="**Your name can only contain characters**";
    return false;
   }
if (email=="" ){
    document.getElementById("emails").innerHTML="**Please Fill The Respective Field**";
    return false;
}
if(email.charAt(0)=="@"){
    document.getElementById("emails").innerHTML="**Enter a valid email address**";
    return false;
}
if ((email.charAt(email.length-4)!='.') && (email.charAt(email.length-3)!='.' ) ){
    document.getElementById("emails").innerHTML="**Position of '.' is not correct**";
    return false;
}
if (address=="" ){
    document.getElementById("Address").innerHTML="**Please Fill The Respective Field**";
    return false;
}
if (country=="" ){
    document.getElementById("countrys").innerHTML="**Please Fill The Respective Field**";
    return false;
}
if(!isNaN(country)){
    document.getElementById("countrys").innerHTML="**Enter a valid country**";
    return false;
   }
if (city=="" ){
    document.getElementById("citys").innerHTML="**Please Fill The Respective Field**";
    return false;
}
if(!isNaN(city)){
    document.getElementById("citys").innerHTML="**Enter a valid city**";
    return false;
   }
if (subject=="" ){
    document.getElementById("subjects").innerHTML="**Please Fill The Respective Field**";
    return false;
}   

else{
    return true
}



}

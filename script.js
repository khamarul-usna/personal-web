var typed =new Typed(".typing",{
    strings:["","Web Designer","Python Developer","Web Developer","Data scientist"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})

const nav = document.querySelector(".nav"),
navList = nav.querySelectorAll("li"),
totalNavelist = navList.length;
for(let i=0; i<totalNavelist; i++)
{
    const a = navList[i].querySelector("a");
    a.addEventListener("click",function()
    {
        for(let j=0; j<totalNavelist; j++)
        {
            navList[j].querySelector("a").classList.remove("active");
        }
        this.classList.add("active")
    })
}


var nameErrorEl = document.getElementById("nameError");
var emailErrorEl= document.getElementById("emailError");
var msgErrorEl = document.getElementById("msgError");
var mobileErrorEl = document.getElementById("mobileError");
var submitBtnEl = document.getElementById("submitBtn");
var errorDisplayEl= document.getElementById("errorDisplay");

function validateName(){
    var name = document.getElementById("name").value;
    
    if(name.length == 0){
        nameErrorEl.innerHTML = "Enter name";
        return false
    
    }if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameErrorEl.innerHTML = "Enter valid name";
        return false
    }else{
        nameErrorEl.innerHTML = ''
        return true;
    }
    
}

function validateMobile(){
    var mobile = document.getElementById("mobile").value;
    
    if(mobile.length == 0){
        mobileErrorEl.innerHTML = "Enter mobile number";
        return false;
    }
    if(!mobile.match(/^[0-9]{10}$/)){
        mobileErrorEl.innerHTML = "Enter valid phone number";
        return false;
    }
    if(mobile.length !== 10 ){
        mobileErrorEl.innerHTML = "Enter valid phone number";
    }
    else{
        mobileErrorEl.innerHTML = "";
        return true;
    }
    
}

function validateEmail(){
    var email = document.getElementById("email").value;
    
    if(email.length == 0){
        emailErrorEl.innerHTML = "Enter email";
        return false;
    }
    if(!email.match(/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/)){
        emailErrorEl.innerHTML = "Enter valid email";
        return false;
    }
    else{
        emailErrorEl.innerHTML = "";
        return true;
    }
    
}


function validateMsg(){
    var msg = document.getElementById("Message").value;

    if(msg.length <= 7){
        msgErrorEl.innerHTML="Please write in detail"
        return false;
    }else{
        msgErrorEl.innerHTML = "";
        return true;
    }

}

function validateForm(){
    if( !validateName() || !validateEmail() || !validateMobile() || !validateMsg()){
        errorDisplayEl.style.display="block";
        alert("please fill the form");
        // setTimeout(function(){errorDisplayEl.style.display="none";},3000);
        return false;
    }else{
        errorDisplayEl.innerHTML="Message sent successfully";
    }
}
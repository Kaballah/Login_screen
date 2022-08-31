var u_name = document.myForm.u_name;
var u_pass = document.myForm.u_pass;
var username = "Kaballah";
var password = "1234";

var btn = document.getElementById("myButton");

function runMe() {
    if(u_name.value == username && u_pass.value == password) {
        btn.onclick = document.location = 'main.html';
    } else {
        alert("Login Error: The Username and Password do not match");
    }
}

var modal_1 = document.getElementById('id01');
var modal_2 = document.getElementById('id02');

window.onclick = function(event) {
    if (event.target == modal_1) {
        modal_1.style.display = 'none';
        
    } else if (event.target == modal_2) {
        modal_2.style.display = 'none';
    }
}

var userProfile = document.getElementsByClassName('avatar');
var maleProfile = document.getElementById('male');
var femaleProfile = document.getElementById('female');
var bothGender = document.getElementById('both');
var gender = document.getElementById('gender');

function profile() {
    if(gender.value == 'Male') {
        bothGender.style.display = 'none';
        maleProfile.style.display = 'block';
        femaleProfile.style.display = 'none';

        maleProfile.style.marginLeft = '42%';
    } 
    else if (gender.value == 'Female') {
        bothGender.style.display = 'none';
        maleProfile.style.display = 'none';
        femaleProfile.style.display = 'block';

        femaleProfile.style.marginLeft = '42%';
    } else if (gender.value == 'unknown') {
        bothGender.style.display = 'block';
        maleProfile.style.display = 'none';
        femaleProfile.style.display = 'none';

        bothGender.style.marginLeft = '42%';
    } else {
        alert("You Can't Use That Option! It's Only a Placeholder.");
        gender.value == 'Male';
    }
}

var first_name = document.getElementsByName('f_name');
var last_name = document.getElementById('lname');

// document.get

function signUp() {
    btn.onclick = document.location = 'main.html';
    // alert( "Welcome" + first_name + last_name + " to our channel." );
}

// Progression Bar

window.onscroll = function() {
    myFunction();
}

function myFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll/height) * 100;

    document.getElementById('myBar').style.width = scrolled + "%";
}



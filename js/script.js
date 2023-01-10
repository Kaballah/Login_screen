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

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}
  
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}
  
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}
  
  // Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropdown-btn')) {
      var dropdowns = document.getElementsByClassName("dropdown-container");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
}


function myFunction2() {
    var input, filter, ul, li, a, i, txtValue;

    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");

    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("p")[0];
        txtValue = a.textContent || a.innerText;

        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

// Portfolio

filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("column");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}


// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}


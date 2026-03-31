function validateForm(){

let name = document.getElementById("name").value.trim();
let email = document.getElementById("email").value;
let mobile = document.getElementById("mobile").value;
let department = document.getElementById("department").value;
let gender = document.querySelector('input[name="gender"]:checked');
let feedback = document.getElementById("feedback").value.trim();

let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let mobilePattern = /^[0-9]{10}$/;

// Name validation
if(name === ""){
alert("Name is required");
return;
}

// Email validation
if(!emailPattern.test(email)){
alert("Enter valid email");
return;
}

// Mobile validation
if(!mobilePattern.test(mobile)){
alert("Enter valid 10-digit mobile number");
return;
}

// Gender validation
if(!gender){
alert("Select gender");
return;
}

// Department validation
if(department === ""){
alert("Select department");
return;
}

// Feedback validation (minimum 10 words)
let words = feedback.split(/\s+/).filter(Boolean).length;
if(words < 10){
alert("Feedback must contain at least 10 words");
return false;
}

// Success
alert("Feedback Submitted Successfully!");
return true;
}
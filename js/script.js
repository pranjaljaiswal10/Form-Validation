//Get Element 
let form = document.getElementById("formdetail");
let fname = document.getElementById("fname");
let email = document.getElementById("femail");
let phone = document.getElementById("fphone");
let password = document.getElementById("fpassword");
let confirmp = document.getElementById("confirm");
//Add event to the submit button
form.addEventListener("submit", (e) => {
  e.preventDefault();
  formvalidation();
});
//Display errormessage
function errormessage(id, message) {
  let span = id.nextElementSibling;
  span.innerHTML = message;
}
let istrue = true;
function formvalidation() {
  if (fname.value.length < 5)//Check the name field condition 
  {
    errormessage(fname, "*Length of name is too short");
    istrue = false;
  }
  if (email.value.length > 15)//Check the email field condtion
   {
    errormessage(email, "*Email length is too long");
    istrue = false;
  }
  if (phone.value.length != 10) //Check the phone no.field condtion
  {
    errormessage(phone, "*Phone number should be of 10 digit!");
    istrue = false;
  }
  if (password.value.length < 6) //Check password field condition
  {
    errormessage(password, "*Password should be atleast 6 character long");
    istrue = false;
  }
  if (password.value != confirmp.value) //Check confirm password field condtion
  {
    errormessage(confirmp, "*Password and Confirm password should match!");
    istrue = false;
  }
}


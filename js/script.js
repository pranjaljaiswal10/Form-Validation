//Get form and form field
let form = document.getElementById("formdetail");
let fname = document.getElementById("fname");
let email = document.getElementById("femail");
let phone = document.getElementById("fphone");
let password = document.getElementById("fpassword");
let confirmp = document.getElementById("confirm");
//Add eventlistener to form submission
form.addEventListener("submit", (e) => {
  e.preventDefault();
  formValidation();
});
//Display error message for field
function errorMessage(id, message) {
  let span = id.nextElementSibling;
  span.innerHTML = message;
}

function formValidation() {
  let isValid = true;

  //Check name field condition
  if (fname.value.length < 5) {
    errorMessage(fname, "*Length of name is too short");
    isValid = false;
  }

  //Check the email field condtion
  if (email.value.length < 15) {
    errorMessage(email, "*Email length is too long");
    isValid = false;
  }

  //Check the phone no.field condtion
  if (phone.value.length != 10) {
    errorMessage(phone, "*Phone number should be of 10 digit!");
    isValid = false;
  }

   //Check password field condition
  if (password.value.length < 6) {
    errorMessage(password, "*Password should be atleast 6 character long");
    isValid = false;
  }

  //Check confirm password field condtion
  if (password.value != confirmp.value) {
    errorMessage(confirmp, "*Password and Confirm password should match!");
    isValid = false;
  }

  return isValid;
}

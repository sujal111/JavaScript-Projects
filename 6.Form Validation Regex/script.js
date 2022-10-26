function validation() {

  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("confirmPassword").value;
  let email = document.getElementById("email").value;
  let mobileNumber = document.getElementById("mobile").value;

  let userCheck = /^[A-za-z. ]{3,30}$/;
  let passwordCheck = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;
  let emailCheck = /^[A-Za-z_.]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/;
  let mobileCheck = /^[789][0-9]{9}$/;

  if (userCheck.test(username)) {
    document.getElementById("usererror").innerHTML = " ";
  }
  else {
    document.getElementById("usererror").innerHTML = "Username is Invalid";
    return false;
  }

  if (passwordCheck.test(password)) {
    document.getElementById("passworderror").innerHTML = " ";
  }
  else {
    document.getElementById("passworderror").innerHTML = "Password is Invalid";
    return false;
  }

  if (confirmPassword.match(password)) {
    document.getElementById("confirmPassword").innerHTML = " ";
  }
  else {
    document.getElementById("confirmPassword").innerHTML = "Passwords not Matching";
  }
  if (emailCheck.test(email)) {
    document.getElementById("emailerror").innerHTML = " ";
  }
  else {
    document.getElementById("emailerror").innerHTML = "Email is Invalid";
    return false;
  }

  if (mobileCheck.test(mobileNumber)) {
    document.getElementById("mobileerror").innerHTML = " ";
  }
  else {
    document.getElementById("mobileerror").innerHTML = "Mobile Number is Invalid";
    return false;
  }

}

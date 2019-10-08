function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function checkCreateEmail() {
  var crtEmail = $("#crtEmail").val();
  if(!validateEmail(crtEmail)){
      alert("Is NOT A Valid Email!");
  }
  return false;
}

function checkLoginEmail(){
    var logInEmail = $("#logInEmail").val();
    if (!validateEmail(logInEmail)){
      alert("Is NOT A Valid Email!"); 
  } 
  return false;
}
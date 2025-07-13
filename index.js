//create A LOGIN form that alert the user if the login credentials are correct or not 
//NOTE ACCEPTED CREDENTIALS 
//Email must be appclick@gmail.com
//Password must be 1234Appclick

 const emailInput = document.querySelector("#email");
 const passwordInput = document.querySelector("#password");
 const btn = document.querySelector("#submit");

 const database_email = "appclick@gmail.com";
 const database_password = "1234Appclick";

 btn.addEventListener("click",function(){
    const emailValue = emailInput.value;
    const passwordValue = passwordInput.value;


    if (emailValue === database_email && passwordValue === database_password) {
      alert("You are logged in");
    } else {
      alert("Wrong credentials");
    }
 });
    

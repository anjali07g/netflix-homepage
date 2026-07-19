function start() {

    let email = document.getElementById("email").value;

    if(email == ""){
        document.getElementById("message").innerHTML =
        "Please enter your email.";
    }

    else{
        document.getElementById("message").innerHTML =
        "Welcome! Your email is " + email;
    }

}

document.getElementById("signin").onclick = function(){

    alert("Sign In Button Clicked!");

};

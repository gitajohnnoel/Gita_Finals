
function verify() {
    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    var uname = document.getElementById('uname').value;
    var pass = document.getElementById('pass').value;
    var pass2 = document.getElementById('pass2').value;

    if(pass.length < 8) {
        alert('The password must consists of 8 characters');
        return false;
    }

    if(pass != pass2) {
        alert("Password do not match, Please Try Again");
        return false;
    }else {
        window.localStorage.setItem('uname', uname);
        window.localStorage.setItem('pass', pass);
        alert("You have Registered Successfully");
        window.location.href = "login.html";
        return true;
    }
}
function signInForm(){
    var uname = document.getElementById("uname").value;
    var password = document.getElementById("pass").value; 

    if(username != window.localStorage.getItem('uname')){
        alert("Username cannot be found!");
    }
    else{
        if(password != window.localStorage.getItem('pass')){
            alert("Wrong Credentials!");
        }
        else{
            alert("Logged In Successfuly");
           window.location.href = "productlist.html";
        }
    }
 }
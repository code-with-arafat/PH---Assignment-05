// login logic 
document.getElementById("login-btn").addEventListener("click", function () {
// username 
const inputUsername = document.getElementById("input-username")
const userName = inputUsername.value
console.log(userName)
// password 
const inputPassword = document.getElementById("input-password")
const password = inputPassword.value

if(userName == "admin" && password == "admin123") {
    alert("Login Success")
    window.location.assign("./home.html")

} else {
    alert("Login Failed")
    return ;
}


})



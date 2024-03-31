let username;
let password;

document.getElementById('submit_btn').onclick = function(){
    username = document.getElementById('user').value
    password = document.getElementById('pass').value
    console.log(password)
    document.getElementById('heading').textContent = `Welcome ${username}`
} 

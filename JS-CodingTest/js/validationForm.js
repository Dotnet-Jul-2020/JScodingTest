
function validate(){
     document.getElementById('username').innerHTML='Username should be atleast 3 character'
     document.getElementById('email').innerHTML='Email is invalid'
     document.getElementById('password').innerHTML='Password should contain atleast 6 characters'
     document.getElementById('cpassword').innerHTML='Password does not match'
     document.getElementById('username').style.color="red"
     document.getElementById('email').style.color="red"
     document.getElementById('password').style.color="red"
     document.getElementById('cpassword').style.color="red"
    
    
    
}

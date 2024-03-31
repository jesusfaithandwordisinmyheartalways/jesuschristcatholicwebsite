




const validateUsername = () => {
    let usernameError = document.getElementById('username-error')
    let userLogin = document.getElementById('user-login').value;
    let username = document.querySelector('.user-login')
   
    if(userLogin.match(/[A-Z]/) && userLogin.match(/[a-z]/) && userLogin.match(/[^a-zA-Z0-9]/) && userLogin.match(/^.{8,16}$/) && userLogin.match(/[1-9]/)) {
      usernameError.style.display = 'none';
      username.style.border = '3px solid green '

    } else {
        usernameError.style.display = 'block';
        username.style.border = '3px solid purple '
   


    }
 
}

const validateEmail = () => {

     let userEmail = document.getElementById('user-email').value;
     let userEmailSpace = document.querySelector('#user-email')
     let alertEmail = document.getElementById('email-alert')

     if(!userEmail.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
        alertEmail.style.display = 'block';
     } else {
        alertEmail.style.display = 'none'
     }

     if(userEmail.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
        alertEmail.style.display = 'none';
        userEmailSpace.style.border = '3px solid green';
     } else {
        alertEmail.style.display = 'block';
        userEmailSpace.style.border = '3px solid purple';
     }

    
}





const validateLogin = () => {
  
    if(!validateUsername() || !validateEmail()) {
        return false;
    }

    if(validateUsername() && validateEmail()) {
        return true;
    }





}
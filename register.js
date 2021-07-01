const form = document.querySelector('#form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const password2 = document.querySelector('#password2');
const checkAge = document.querySelector('#checkAge');


form.addEventListener('submit',(e) => {
    e.preventDefault();
    
    checkInputs();
});

function checkInputs() {
    //get the values form the inputs
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();
    const checkAgeValue = checkAge.value.trim();

    if (usernameValue === '') {
        //show error
        //add error class
        setErrorFor(username,'Username cannot be blank')
    }else{
        setSuccessFor(username)
    }

    if (emailValue === '') {
        //show error
        //add error class
        setErrorFor(email,'Email cannot be blank');
    }else{
        setSuccessFor(email);
    }

    if (passwordValue === '') {
        //show error
        //add error class
        setErrorFor(password,'Password cannot be blank')
    }else{
        setSuccessFor(password)
    }

    if (password2Value === '') {
        //show error
        //add error class
        setErrorFor(password2,'Conf_Password cannot be blank');
    }else if(passwordValue !== password2Value){

        setErrorFor(password2,'Password dos not match ');

    }else{
        setSuccessFor(password2);
    }
    
    if (checkAgeValue ==='' ) {
        setErrorFor(checkAge,'place enter your age');
    }else if((checkAgeValue < 18)){
        setErrorFor(checkAge,'place enter your age check');
    }else{
        setSuccessFor(checkAge);
    }
    
}


function setErrorFor(input,messge) {
    const formControl = input.parentElement; //form-control
    const small = formControl.querySelector('small');

    //add error message inside small
    small.innerText = messge;

    //add error class
    formControl.className = 'form-control error';
}
function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}


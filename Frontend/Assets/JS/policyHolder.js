
// function btn()
// {

// const editButton = document.getElementById('btn');
// const pageName = document.getElementById('page');

// editButton.addEventListener('click', ()=> {
//     pageName.innerHTML = "Edit Profile";
// });

// };


// var btn = document.getElementById("btnTest"); btn.addEventListener("click", function() {
//     alert("Do whatever needed in this function"); }
//     );

//Javascript related to profile page of policy holder
const pageLabel = document.getElementById('pageName') ;


const allInputs = document.querySelectorAll('input[readonly]');

var editProfile = "Edit Profile";
var profile = "Profile";

//When clicked Edit button in HTML page, this will change the Page name to Edit Profile
//cancel button and save changes buttons appears and Edit Profile button disappears.
const editButton = document.getElementById('editbtn') ;
editButton.addEventListener('click', ()=> {
    
    //changes page  name
    pageLabel.textContent = editProfile;

    cancelButton.classList.remove('hidden');
    saveButton.classList.remove('hidden');
    
    editButton.classList.add('hidden');
    saveButton.classList.add('button');
    cancelButton.classList.add('button');

    //by using for each loop, it itterates through all selected input element and 
    //remove att the readonly attribute.
    allInputs.forEach(input => {
        input.removeAttribute('readonly');
    });
    

});

//When clicked Cancel button in HTML page, this will change the Page name to Profile
//cancel button and save changes buttons disappears and Edit Profile button appears.
const cancelButton = document.getElementById('cancelbtn') ;
cancelButton.addEventListener('click', () => {
    
    pageLabel.textContent = profile;
    cancelButton.classList.add('hidden');
    saveButton.classList.add('hidden');
    editButton.classList.remove('hidden');

    allInputs.forEach(input => {
        input.setAttribute('readonly', true);
    });
    

});

//When clicked Cancel button in HTML page, this will change the Page name to Profile
//cancel button and save changes buttons disappears and Edit Profile button appears.
const saveButton = document.getElementById('savebtn') ;
saveButton.addEventListener('click', () => {

    pageLabel.textContent = profile;
    cancelButton.classList.add('hidden');
    saveButton.classList.add('hidden');
    editButton.classList.remove('hidden');
    submitForm();
    // const form = document.getElementById('editForm');
    // form.submit();
    




});








//Form validations
//To validate names and address input fields.
function validateText (text) {
    const validateText = /^[a-zA-Z]{50}$/;
    return validateText.test(text);
}

// To validate Date of Birth
function validateDOB () {

}

//To validate  NIC number which has 12 digits in New NIC, that will be used.
function validateNIC (NIC) {
    const validateNIC = /^[0-9]{12}$/;
    return validateNIC.test(NIC);

}

//postal code format in sri lanka which is 5 digits
function validatePostalCode (postalCode) {
    const validatePostalCode = /^[0-9]{5}$/;
    return validatePostalCode (postalCode);

}

function validatePhone (phone) {
    const validatePhone = /^[0-9]{10}$/ ;
    return validatePhone.test(phone);
}

//To validate email
function validateEmail (email) {
    const validEmail = /^[a-zA-Z0-9._]+@[a-zA-Z0-9._]+\.[a-z]{2,3}$/;
    return validEmail.test(email);

}



// this fucntion is to check whether all input fields has valid input.
function validateForm() {

    const nameInput = document.getElementById('name');
    const dobInput = document.getElementById('DOB');
    const nicInput = document.getElementById('NIC');
    const phoneInput = document.getElementById('phone');
    const emailInput = document.getElementById('email');
    const postalCodeInput = document.getElementById('postalCode');

    const isValidName = validateName(nameInput.value);
    const isValidDOB = validateDOB(dobInput.value);
    const isValidNIC = validateNIC(nicInput.value);
    const isValidPhone = validatePhone(phoneInput.value);
    const isValidEmail = validateEmail(emailInput.value);
    const isValidPostalCode = validatePostalCode(postalCodeInput.value);

    if (!isValidName || !isValidDOB || !isValidNIC || !isValidPhone || !isValidEmail || !isValidPostalCode) {

        showErrorMessage(nameInput, isValidName, 'nameError', 'Reached maximum word limit');
        // showErrorMessage(dobInput, isValidDOB, 'dobError' , '');
        showErrorMessage(nicInput, isValidNIC, 'nicError', 'Please enter 12 digit number NIC number');
        showErrorMessage(phoneInput, isValidPhone, 'phoneError', 'Please enter 10 digit number');
        showErrorMessage(emailInput, isValidEmail, 'emailError', 'Please enter correct email format (eg:-onelife@gmail.com)');
        showErrorMessage(postalCodeInput, isValidPostalCode, 'postalCodeError', 'Please enter 6 digit Postal Code');

        return false; // this will return false if the form is not valid.
    }

    return true;
    
}


//this function will show error message below the input field, if the input is not valid. this will appear inside span element

function showErrorMessage(inputElement, isValid, errorMessageID, errorMessage) {
    const errorMessageElement = document.getElementById(errorMessageID);

    if (!isValid) {
        //if there is an error, this will show the message
        errorMessageElement.textContent = errorMessage;
        inputElement.classList.add('invalid');

    } else {
        errorMessageElement.textContent = '';
        inputElement.classList.remove('invalid');
    }

}


//form submission logi
function submitForm()
{
    // event.preventDefault();
    const form = document.getElementById('editForm');
    form.submit();
    
}


//policyHolderAddBeneficiary.html  confims whether to cancel, if cancel button is clicked
// const cancel = document.getElementById('cancelButton');

// cancel.addEventListener('click', () => {

//     if (confirm('Are you sure you want to cancel ?')) {
//         console.log (' Cancellation confirmed');

//     } else {
//         console.log ('Cancellation cancelled');
//     }

// });
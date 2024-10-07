
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
    // submitForm(validate());
    // const form = document.getElementById('editForm');
    // form.submit();
const profileForm=document.getElementById('editForm');
    // validate();
    profileForm.submit();
    

});
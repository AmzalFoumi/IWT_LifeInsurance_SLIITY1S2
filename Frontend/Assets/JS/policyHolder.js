
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
    // submitForm(validate());
    // const form = document.getElementById('editForm');
    // form.submit();

    // validate();
    submitForm();
    

    




});









//form submission logi
function submitForm()
{
    // event.preventDefault();
    const form = document.getElementById('editForm');
    // form.submit();
    if (validate())
    {
        form.submit();
    }
    else {
        false;
    }
    
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

//this will validate the input fields
function validate()
{

    var vName = document.getElementById("name");
    var vUsername = document.getElementById("username");
    // var vPassword = document.getElementById("password").value;
    // var vDob = document.getElementById("dob").value;
    var vNic = document.getElementById("nic");
    var vPostalcode = document.getElementById("postalCode");
    var vPhone = document.getElementById("phone");


    //below the will have the regular expression to compare the value and expression, whether it matches

    var regxName = /^([a-zA-Z]{2,50})$/;
    var regxUsername = /^([a-zA-Z]{2,50})$/;
    var regxNic = /^([0-9]{12})$/;
    var regxPostalcode = /^([0-9]{5})$/;
    var regxPhone = /^([0-9]{5})$/;

    if (vName.value.trim()=="" || regxName.test(vName.value))    
        {
            
            vName.style.border = "solid 3px red";
            document.getElementById("lblName").style.visibility="visible";
        
            document.getElementById("lblName").innerHTML="Name field is required*";
        
            return false;
            
        } 
        else if (vUsername.value.trim()=="" || regxUsername.test(vUsername.value))
            {
                vUsername.style.border = "solid 3px red";
                document.getElementById("lblUsername").style.visibility="visible";
        
                document.getElementById("lblUsername").innerHTML="Username field is required*";
        
                return false;
            
            }
        else if (vNic.value.trim()=="" || regxNic.test(vNic.value))
            {
                vNic.style.border = "solid 3px red";
                document.getElementById("lblNic").style.visibility="visible";
        
                document.getElementById("lblNic").innerHTML="Please enter 12 digit NIC (eg:-200215501234)";
        
                return false;
            
            }
        else if (vPostalcode.value.trim()=="" || regxPostalcode.test(vPostalcode.value))
            {
                vPostalcode.style.border = "solid 3px red";
                document.getElementById("lblPostalCode").style.visibility="visible";
        
                document.getElementById("lblPostalCode").innerHTML="Postal code 5 digit (eg:-60200)";
        
                return false;
            }

        else if (vPhone.value.trim()=="" || regxPhone.test(vPhone.value))
            {
                vPhone.style.border = "solid 3px red";
                document.getElementById("lblPhone").style.visibility="visible";
        
                document.getElementById("lblPhone").innerHTML="Please enter 10 digit phone number(eg:-(076) 757 5757).";
        
                return false;
            }

        else {
            return true;
        }
        
}
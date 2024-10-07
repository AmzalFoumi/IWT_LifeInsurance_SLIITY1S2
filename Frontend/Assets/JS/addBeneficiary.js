// const baseURL = `http://localhost/IWTProject/IWT_LifeInsurance_SLIITY1S2/Backend`;

// document.getElementById("addBeneficaryForm").addEventListener("submit", function(event) {
//     // event.preventDefault();    //Prevent reloading the page

//     // const policyHolderId = 1;

//     const name = document.getElementById("name").value;
//     const nic = document.getElementsByName("nic").value;
//     const street = document.getElementById("street").value;
//     const city = document.getElementById("city").value;
//     const province = document.getElementById("province").value;
//     const country = document.getElementById("country").value;
//     const postalCode = document.getElementById("postalCode").value;
//     // const message = document.getElementById("country").value;

//     fetch('test.php',{     
//         //Specifying method as POST
//         method: "POST",
//         //Specifying that the data is being sent as URL-encoded data
//         headers: {'Content-Type' : 'application/x-www-form-urlencoded'},
//         //Data sent to server as URL encoded string, in key-value pairs.  PHP file reads the key
//         body: `nic=${nic}&name=${name}&street=${street}&postalCode=${postalCode}&city=${city}&province=${province}=&country=${country}`  
//     })
//     .then(response => response.json())       //Reads the body of the response object and parses it as JSON. Returns a promise. 
//     .then(data => {
//         // const responseDisplay = document.getElementById('responseArea'); //Assigning the retrieved HTML element to a variable
        
//         if(data){
//             responseDisplay.innerText = data.message;    //Display the response sent by the backend
//         } else {
//             responseDisplay.innerText = data.message;   //Error displayed if nothing is received from the server
//         }
        
//     })
    
// })


const addBeneficaryForm = document.getElementById('addBeneficaryForm');

addBeneficaryForm.addEventListener('submit', (event) => {
  // event.preventDefault(); // Prevent default form submission

  const name = document.getElementById('name').value.trim();
  const nic = document.getElementById('nic').value.trim();
  const postalCode = document.getElementById('postalCode').value.trim();
  const phone = document.getElementById('phone').value.trim();

  //below will get the id of the labels to show the error message


  let isValid = true;

  const phoneRegex = /^\(?([0-9]{3})\)?[-. ]([0-9]{3})[-. ]([0-9]{4})$/;
//   const phoneRegex = /^([0-9]{3})?([0-9]{3})([0-9]{4})$/;


  // Validate name
  if (name === '') {
    // alert('Please enter a name.');
    
    const Vname = document.getElementById('lblname');
    Vname.innerHTML = "Please Enter your Name.";
    document.getElementById("lblname").style.visibility="visible";

    isValid = false;
  }

  // Validate NIC this will check whether hte NIC is 12 digit long
  else if (nic.length !== 12) {
    // alert('Please enter a valid NIC number (12 digits).');
    const Vnic = document.getElementById('lblnic');
    Vnic.innerHTML = "Invalid. Enter 12 Digit NIC number.";
    document.getElementById("lblnic").style.visibility="visible";
    isValid = false;
  }

  // Validate postal code, lenght of postal code in Sri Lanka is 5 digits.
  else if (postalCode.length !== 5) {
    // alert('Please enter a valid postal code (5 digits).');
    const Vpostalcode = document.getElementById('lblpostalcode');
    Vpostalcode.innerHTML = "Invalid, Enter Postal Code(5 Digits)";
    document.getElementById("lblpostalcode").style.visibility="visible";
    isValid = false;
  }

  // Validate phone number (basic check for format)
  else if (!phoneRegex.test(phone)) {
    // alert('Please enter a valid phone number (e.g., (076) 757-1212 ).');
    const Vphone = document.getElementById('lblphone');
    Vphone.innerHTML = "Please Enter Valid Phone Number. (076 757 6461)";
    document.getElementById("lblphone").style.visibility="visible";
    isValid = false;
  }

  // Submit the form only if all fields are valid
  // if (isValid) {
  //   addBeneficaryForm.submit();
  // }
});

const addBeneficiary = document.getElementById('add') ;
addBeneficiary.addEventListener('click', () => {

    
  if (isValid) {
    addBeneficaryForm.submit();
  }


});


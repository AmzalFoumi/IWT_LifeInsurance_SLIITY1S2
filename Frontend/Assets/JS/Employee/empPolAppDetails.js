const baseURL = `http://localhost/IWTProject/IWT_LifeInsurance_SLIITY1S2`;

document.addEventListener("DOMContentLoaded", function (){
    const urlParams = new URLSearchParams(window.location.search);        
    const polAppId = urlParams.get('polAppId');  // Retrieve policy Application ID from the URL

    if (polAppId) {
        fetch(`${baseURL}/Backend/Employee/empPolAppDetails.php`,{  
            //Specifying method as POST
            method: "POST",
            //Specifying that the data is being sent as URL-encoded data
            headers: {'Content-Type' : 'application/x-www-form-urlencoded'},
            //Data sent to server as URL encoded string, in key-value pairs.  PHP file reads the key and takes in the value
            body: `polAppId=${polAppId}&function=load_page`
        })
        .then(response => response.json())
        .then(data => {
            // Populate the details on the page
            const detailsDiv = document.getElementById("loadContainer");
            detailsDiv.innerHTML = `
                <p><strong>Policy Application ID:</strong> ${data.ApplicationId}</p>
                <p><strong>Name:</strong> ${data.Name}</p>
                <p><strong>NIC:</strong> ${data.NIC}</p>
                <p><strong>DOB:</strong> ${data.DOB}</p>
                <p><strong>Income:</strong> ${data.Income}</p>
                <p><strong>Street Address:</strong> ${data.Street}</p>
                <p><strong>Postal Code Type:</strong> ${data.Postal_Code}</p>
                <p><strong>City:</strong> ${data.City}</p>
                <p><strong>Province:</strong> ${data.Province}</p>
                <p><strong>Country:</strong> ${data.Country}</p>
                <p id="empId"><strong>Employee ID:</strong> ${data.EmpId}</p>    
                <p><strong>Policy ID:</strong> ${data.PolicyId}</p>
            `;   //empId is added as an ID to the paragraph tag where the empId is suspposed to be displayed, This is for use in the next function
        })
        .catch(error => console.error("Error fetching inquiry details:", error));
    }
})

document.getElementById('assignEmp').addEventListener("click", function(){
    const urlParams = new URLSearchParams(window.location.search);        
    const polAppId = urlParams.get('polAppId');  // Retrieve inquiry ID from the URL

    fetch(`${baseURL}/Backend/Employee/empPolAppDetails.php`,{  
        method: "POST",
        headers: {'Content-Type' : 'application/x-www-form-urlencoded'},  
        body: `function=assign_employee&polAppId=${polAppId}`
    })
    .then(response => response.json())
    .then(data =>{
        const responseDisplay = document.getElementById('responseArea');
        const empIdDisplay = document.getElementById('empId');
        if(data){
            responseDisplay.innerText = data.message;
            empIdDisplay.innerHTML = `<strong>Employee ID:</strong> ${data.empIdResponse}`;
        }
    })
    .catch(error => console.error("Error assigning employee details:", error));
})


//For approving an application
document.getElementById('approveApp').addEventListener("click", function(){

    let formArea = document.getElementById('formArea');
    formArea.innerHTML = `<form id="policyholderAccForm">
                            <label for="policyHolderUsername">Enter the Username to be given to policyholder:</label>
                            <input type="text" name="policyHolderUsername" id="policyHolderUsername"> 
                            <label for="policyHolderPassword">Enter new password: </label>
                            <input type="password" name="policyHolderPassword" id="policyHolderPassword">  
                            <input type="submit" value="Add User">
                            <input type="reset" value="Cancel">
                        </form>`;

    //fetch php file when form is submitted
    document.getElementById('policyholderAccForm').addEventListener("submit", function(event){
        event.preventDefault();


        //Take username and password values from the form
        const username = document.getElementById('policyHolderUsername').value;
        const password = document.getElementById('policyHolderPassword').value;

        //validation for the form that is generated using the approve button
        if(!username && !password){
            alert("Please Enter a username and password");
            return;
        }
    
        if(!username){
            alert("Please Enter a username");
            return;
        }
    
        if(!password){
            alert("Please Enter a password");
            return;
        }
    
        if(!username){
            alert("Please Enter a username");
            return;
        }
    
        if(!isValidUsername(username)){
            alert(`"Please enter a valid one word username which starts with an alhabetical letter and then goes on to be alphanumerical. 
                    Minimum length - 5 characters`);
            return;
        }

        if(!isValidPassword(password)){
            alert("Please enter a valid password that has no whitespace and atleast 5 characters long");
            return;
        }

        //Sending message to the backend to run the policy approval function in PHP, for the applicationID in the page URL
        const urlParams = new URLSearchParams(window.location.search);        
        const polAppId = urlParams.get('polAppId');  // Retrieve inquiry ID from the URL
    
        fetch(`${baseURL}/Backend/Employee/empPolAppDetails.php`,{  
            method: "POST",
            headers: {'Content-Type' : 'application/x-www-form-urlencoded'},
            body: `function=approve_pol_app&polAppId=${polAppId}&username=${username}&password=${password}`
        })
        .then(response => response.json())
        .then(data => {
            const responseDisplay = document.getElementById('responseArea');
            if (data){
                responseDisplay.innerText = data.message;
    
                setTimeout(function () {
                    window.open(`${baseURL}/Frontend/Pages/Employee/empPolicyTable.html`, "_self")
                },600);
            }
        })
        //.catch(error => console.error("Error resolving policy application:", error));
    })
})

//Functions to validate the account creation part in the policyholder approval process
function isValidUsername(userName) {
    const usernamePattern = /^[A-Za-z][A-Za-z0-9]{4,}$/;   //Start with alphabet, then 4 or more alphanumerics
    return usernamePattern.test(userName);
}

function isValidPassword(password){
    const passwordPattern = /^[^\s]{5,}$/;    //Any character except white space, minimum 5 characters length
    return passwordPattern.test(password);
}
//End of approving application  (The button creates the form. Then form submission fetches the php file and calls the function)


//For denying an application
document.getElementById('denyApp').addEventListener("click", function(){
    const urlParams = new URLSearchParams(window.location.search);        
    const polAppId = urlParams.get('polAppId');  // Retrieve inquiry ID from the URL

    fetch(`${baseURL}/Backend/Employee/empPolAppDetails.php`,{  
        method: "POST",
        headers: {'Content-Type' : 'application/x-www-form-urlencoded'},
        body: `function=reject_pol_app&polAppId=${polAppId}`
    })
    .then(response => response.json())
    .then(data => {
        const responseDisplay = document.getElementById('responseArea');
        if (data){
            responseDisplay.innerText = data.message;

            setTimeout(function () {
                window.open(`${baseURL}/Frontend/Pages/Employee/empPolicyTable.html`, "_self")
            },600);
        }
    })
    .catch(error => console.error("Error resolving policy application:", error));
})
const baseURL = `http://localhost/IWTProject/IWT_LifeInsurance_SLIITY1S2`;

document.addEventListener("DOMContentLoaded", function (){
    const urlParams = new URLSearchParams(window.location.search);        
    const claimId = urlParams.get('claimId');  // Retrieve inquiry ID from the URL

    if (claimId) {
        fetch(`${baseURL}/Backend/Employee/empClaimDetails.php`,{  
            //Specifying method as POST
            method: "POST",
            //Specifying that the data is being sent as URL-encoded data
            headers: {'Content-Type' : 'application/x-www-form-urlencoded'},
            //Data sent to server as URL encoded string, in key-value pairs.  PHP file reads the key and takes in the value
            body: `claimId=${claimId}&function=load_page`
        })
        .then(response => response.json())
        .then(data => {
            // Populate the details on the page
            const detailsDiv = document.getElementById("loadContainer");
            detailsDiv.innerHTML = `
                <p><strong>Claim ID:</strong> ${data.ClaimId}</p>
                <p><strong>Policyholder ID:</strong> ${data.PolicyholderId}</p>
                <p><strong>Beneficiary ID:</strong> ${data.BeneficiaryId}</p>
                <p><strong>Policy ID:</strong> ${data.PolicyId}</p>
                <p id="empId"><strong>Employee ID:</strong> ${data.EmpId}</p>  
                <p><strong>NIC:</strong> ${data.NIC}</p>
            `;   //empId is added as an ID to the paragraph tag where the empId is suspposed to be displayed, This is for use in the next function
        })
        //.catch(error => console.error("Error fetching inquiry details:", error));
    }
})

document.getElementById('assignEmp').addEventListener("click", function(){
    const urlParams = new URLSearchParams(window.location.search);        
    const claimId = urlParams.get('claimId');  // Retrieve inquiry ID from the URL

    fetch(`${baseURL}/Backend/Employee/empClaimDetails.php`,{  
        method: "POST",
        headers: {'Content-Type' : 'application/x-www-form-urlencoded'},  
        body: `function=assign_employee&claimId=${claimId}`
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

document.getElementById('denyClaim').addEventListener("click", function(){
    const urlParams = new URLSearchParams(window.location.search);        
    const claimId = urlParams.get('claimId');  // Retrieve inquiry ID from the URL

    fetch(`${baseURL}/Backend/Employee/empClaimDetails.php`,{  
        method: "POST",
        headers: {'Content-Type' : 'application/x-www-form-urlencoded'},
        body: `function=deny_claim&claimId=${claimId}`
    })
    .then(response => response.json())
    .then(data => {
        const responseDisplay = document.getElementById('responseArea');
        if (data){
            responseDisplay.innerText = data.message;

            setTimeout(function () {
                window.open(`${baseURL}/Frontend/Pages/Employee/empClaimTable.html`, "_self")
            },600);
        }
    })
    .catch(error => console.error("Error in resolving the claim:", error));
})


document.getElementById('approveClaim').addEventListener("click", function(){
    const urlParams = new URLSearchParams(window.location.search);        
    const claimId = urlParams.get('claimId');  // Retrieve inquiry ID from the URL

    fetch(`${baseURL}/Backend/Employee/empClaimDetails.php`,{  
        method: "POST",
        headers: {'Content-Type' : 'application/x-www-form-urlencoded'},
        body: `function=approve_claim&claimId=${claimId}`
    })
    .then(response => response.json())
    .then(data => {
        const responseDisplay = document.getElementById('responseArea');
        if (data){
            responseDisplay.innerText = data.message;

            setTimeout(function () {
                window.open(`${baseURL}/Frontend/Pages/Employee/empClaimTable.html`, "_self")
            },1000);
        }
    })
    .catch(error => console.error("Error in resolving the claim:", error));
})
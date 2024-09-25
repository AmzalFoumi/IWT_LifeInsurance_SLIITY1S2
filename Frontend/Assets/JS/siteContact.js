const baseURL = `http://localhost/IWTProject/IWT_LifeInsurance_SLIITY1S2/Backend`;

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();    //Prevent reloading the page

    const fullName = document.getElementById("fullName").value;
    const title = document.getElementsByName("title").value;
    const mobNum = document.getElementById("mobNum").value;
    const email = document.getElementById("email").value;
    const inqType = document.getElementById("inqType").value;
    const message = document.getElementById("message").value;

    fetch(`${baseURL}/siteContact.php`,{
        //Specifying method as POST
        method: "POST",
        //Specifying that the data is being sent as URL-encoded data
        headers: {'Content-Type' : 'application/x-www-form-urlencoded'},
        //Data sent to server as URL encoded string, in key-value pairs.  PHP file reads the key
        body: `fullName=${fullName}&title=${title}&mobNum=${mobNum}&email=${email}&inqType=${inqType}&message=${message}`
    })
    .then(response => response.json())       //Reads the body of the response object and parses it as JSON. Returns a promise.
    .then(data => {
        const responseDisplay = document.getElementById('responseArea'); //Assigning the retrieved HTML element to a variable
        
        if(data){
            responseDisplay.innerText = data.reply;    //Display the response sent by the backend
        } else {
            responseDisplay.innerText = "No data received from server";   //Error displayed if nothing is received from the server
        }
        
    })
    
})





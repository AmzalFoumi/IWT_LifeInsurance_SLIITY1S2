<?php


$servername = "localhost";
$username = "root";
$password = "";
$dbname = "onelifedb";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}


// $newPolicyholderId = $_POST['policyholderId'];
$newName = $_POST['name'];
$newUsername = $_POST['username']; 
$newNic = $_POST['nic']; 
$newDob = $_POST['dob']; 
// $newIncome = $_POST['name']; 
$newStreet = $_POST['street']; 
$newPostalCode = $_POST['postalCode']; 
$newCity = $_POST['city']; 
$newProvince = $_POST['province']; 
$newCountry = $_POST['country']; 


// Prepare the update SQL statement
$sql = "UPDATE policyholder
        SET Name = '$newName', NIC = '$newNic', DOB = '$newDob', Street = '$newStreet',
                    Postal_Code = '$newPostalCode', City = '$newCity', Province = '$newProvince', Country = '$newCountry', Username = '$newUsername'
        WHERE PolicyholderId = 1";


if ($conn->query($sql)) {
    echo "Data updated successfully";
} else {
    echo "Error updating data: " . $conn->error;
}


?>

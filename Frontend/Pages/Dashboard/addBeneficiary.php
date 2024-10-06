<?php
// Database connection details
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

// if conditional will check if the form has been submitted

if (isset($_POST['submit'])) {

    //this wiil retrive data from forms and store in the variables
    $policyHolderId = "1";
    $name = $_POST['name'];
    $nic = $_POST['nic'];
    $street = $_POST['street'];
    $city = $_POST['city'];
    $province = $_POST['province'];
    $country = $_POST['country'];
    $postalCode = $_POST['postalCode'];
    // $phone = $_POST['phone'];

    // sql statement to insert data
    $sql = "INSERT INTO beneficiary( PolicyholderId, BeneficiaryId, NIC, Name , Street, Postal_Code, City, Province, Country)
            VALUE (?, ?, ?, ?, ?, ?, ?, ?, ?)";

    $stmt = $conn->prepare($sql);

    $stmt -> bind_param ("iisssssss", $policyHolderId, null, $nic, $name, $street, $postalCode, $city, $province, $country)
    
    if ($stmt->execute()) {
        echo "New Beneficary has been added.";
    } else {
        echo "Failed to add beneficary". $stmt->error;
    }

    $stmt->close
    $conn->close();

}


?>

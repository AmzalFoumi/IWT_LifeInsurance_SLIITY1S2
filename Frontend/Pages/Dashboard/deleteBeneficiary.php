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



$BeneficiaryId = $_GET['BeneficiaryId'];



// Prepare the delete query
$sql = "DELETE FROM beneficiary WHERE BeneficiaryId = $BeneficiaryId";

// Execute the query
if ($conn->query($sql) === TRUE) {
    echo "Beneficiary deleted successfully"; 
} else {
    echo "Error deleting beneficiary: " . $conn->error; 
}

$conn->close();

?>
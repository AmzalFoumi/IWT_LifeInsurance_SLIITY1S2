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


// Check if request method is POST (form submission)
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $policyHolderId = 2; // Assuming you have a way to get the policy holder ID
  
    // Collect form data
    $name = $_POST["name"];
    $nic = $_POST["nic"];
    $street = $_POST["street"];
    $city = $_POST["city"];
    $province = $_POST["province"];
    $country = $_POST["country"];
    $postalCode = $_POST["postalCode"];
  
    // Prepare SQL statement
    $sql = $conn->prepare("INSERT INTO beneficiary (PolicyholderId, NIC, Name, Street, Postal_Code, City, Province, Country) VALUES (?, ?, ?, ?, ?, ?, ?, ?)");
  
    // Bind parameters to prevent SQL injection
    $sql->bind_param("ssssssss", $policyHolderId, $nic, $name, $street, $postalCode, $city, $province, $country);
  
    // Execute statement and check result
    if ($sql->execute()) {
      echo "Beneficiary added successfully!";
    } else {
      echo "Error adding beneficiary: " . $conn->error;
    }
  
    // Close connections (optional, connection.php can handle it)
    $sql->close();
    $conn->close();
  } else {
    // Display error message if not POST request
    echo "Invalid request method.";
  }
  
?>
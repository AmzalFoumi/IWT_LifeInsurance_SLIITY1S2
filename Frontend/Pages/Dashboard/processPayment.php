<?php

session_start();


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

$policyHolderId = $_SESSION['user_id'];
// Check if request method is POST (form submission)
if ($_SERVER["REQUEST_METHOD"] == "POST") {


 

  // Collect form data
  $reference = $_POST["reference"];
  $date = $_POST["date"];
  $amount = $_POST["amount"];
  

  // Prepare SQL statement
  $sql = $conn->prepare("INSERT INTO payment (PolicyholderId, Reference, Date, Amount) VALUES (?, ?, ?, ?)");

  // Bind parameters to prevent SQL injection
  $sql->bind_param("ssss", $policyHolderId, $reference, $date, $amount);



  // Execute statement and check result
  if ($sql->execute()) {
    // $_SESSION['success_message'] = 'Payment has been made successfully.';
    header('Location: http://localhost/IWTProject/IWT_LifeInsurance_SLIITY1S2/Frontend/Pages/Dashboard/policyHolderPaymentHistory.html');
    exit();
    echo "Payment has been made successfully";
  } else {
    echo "Payment failed " . $conn->error;
  }

  // Close connections (optional, connection.php can handle it)
  $sql->close();
  $conn->close();
} else {
  // Display error message if not POST request
  echo "Invalid request method.";
}

?>

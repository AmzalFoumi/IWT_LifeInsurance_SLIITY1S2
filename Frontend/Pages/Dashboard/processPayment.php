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
} else {
    $stmt = $conn->prepare("INSERT INTO payment(PolicyholderId, PayId , Reference, Date, Amount)
                            VALUE (?,?,?,?,?)");
    
    $stmt->bind_param("iisii", $policyHolderId, $payId, $reference, $date, $amount);

   

    $stmt->close();
    $conn->close();
}

echo "hello worlds";

?>
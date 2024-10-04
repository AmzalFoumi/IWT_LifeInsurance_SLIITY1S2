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



$sql = "SELECT *
FROM policytype
WHERE PolicyId = 1";


$result = $conn->query($sql);

// Process the result set and return data in JSON format
$data = array();
if ($result->num_rows > 0) {
while ($row = $result->fetch_assoc()) {
$data[] = $row;
}
}

// Close the database connection
$conn->close();

// Return the data as JSON
header('Content-Type: application/json');
echo json_encode($data);


?>
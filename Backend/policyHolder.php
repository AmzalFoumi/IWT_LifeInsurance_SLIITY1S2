<?php
// Database connection details
// $servername = "localhost";
// $username = "root";
// $password = "";
// $dbname = "tutorial";

// // Create connection
// $conn = new mysqli($servername, $username, $password, $dbname);

// // Check connection
// if ($conn->connect_error) {
//     die("Connection failed: " . $conn->connect_error);
// }

require_once "./include/DB_connect.php";

// SQL query to fetch data
$sql = "SELECT * FROM beneficiary";
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
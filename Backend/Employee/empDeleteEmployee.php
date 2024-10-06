<?php
session_start();
require_once "../include/DB_connect.php";
$conn = DB_conn();
// Database credentials
/*$servername = "localhost";
$username = "root";
$password = "";
$dbname = "onelife_team_db";

// Create connection to MySQL database
$conn = new mysqli($servername, $username, $password, $dbname);

// Check if the connection was successful
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}*/



// Check if the employee ID is passed through a form or query string
if (isset($_POST['employee_id'])) {
    // Sanitize the input
    $employee_id = trim($_POST['employee_id']);
    
    // Check if the employee ID is not empty
    if (!empty($employee_id)) {
        // Prepare the SQL statement to delete the employee
        $sql = "DELETE FROM employees WHERE employee_id = ?";
        
        // Prepare the statement
        $stmt = $conn->prepare($sql);
        
        // Bind the employee_id to the statement
        $stmt->bind_param("s", $employee_id);
        
        // Execute the query
        if ($stmt->execute()) {
            if ($stmt->affected_rows > 0) {
                echo "Employee with ID " . $employee_id . " was successfully deleted.";
            } else {
                echo "No employee found with the given ID.";
            }
        } else {
            echo "Error: " . $stmt->error;
        }

        // Close the statement
        $stmt->close();
    } else {
        echo "Please provide a valid Employee ID.";
    }
} else {
    echo "Employee ID not provided.";
}

// Close the database connection
$conn->close();
?>

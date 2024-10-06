<?php
session_start();
require_once "../include/DB_connect.php";
$conn = DB_conn();
//crdidetials
/*$servername = "localhost";
$username = "root";
$password = "";
$dbname = "onelife_team_db";

// Create a connection to the MySQL database
$conn = new mysqli($servername, $username, $password, $dbname);

//connection was successful
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}*/

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    

    $employee_id = trim($_POST['employee-id']);
    $username = trim($_POST['username']);
    $password = trim($_POST['password']);
    $roles = isset($_POST['role']) ? $_POST['role'] : [];
    
    // Re-Check if required fields are filled
    if (empty($employee_id) || empty($username) || empty($password) || empty($roles)) {
        echo "All fields are required. Please go back and fill in all the details.";
        exit;
    }
    
    // Hash the password before storing it in the database
    $hashed_password = password_hash($password, PASSWORD_DEFAULT);
    
    // Insert user into database
    $sql = "INSERT INTO users (employee_id, username, password) VALUES (?, ?, ?)";
    
    //bind
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("sss", $employee_id, $username, $hashed_password);
    
    if ($stmt->execute()) {
        // Get the last inserted user id (for assigning roles)
        $user_id = $stmt->insert_id;
        
        // Insert roles into a separate roles table
        $role_insert_sql = "INSERT INTO user_roles (user_id, role_name) VALUES (?, ?)";
        $role_stmt = $conn->prepare($role_insert_sql);
        
        foreach ($roles as $role) {
            $role_stmt->bind_param("is", $user_id, $role);
            $role_stmt->execute();
        }
        
        echo "Registration successful!";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    // Close the statement and connection
    $stmt->close();
    $conn->close();
}
?>

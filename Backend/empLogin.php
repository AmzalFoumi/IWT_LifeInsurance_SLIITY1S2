<?php
    session_start();

    require_once "./include/DB_connect.php";
    
    if ($_SERVER["REQUEST_METHOD"] === "POST") {
        $username = $_REQUEST['userName'];
        $password = $_REQUEST['password'];

        $connection = DB_conn();

        $sql = "SELECT empId, password, username FROM Employee WHERE username = ?";        

        $stmt = $connection->prepare($sql);   //same as mysqli_prepare($connection,$sql);

        $stmt->bind_param("s", $username);    //same as mysqli_stmt_bind_param($stmt,"s",$username);

        $stmt->execute();     //Executing the query

        $stmt->store_result();   //Storing the result set retrived from DB
                                

        if ($stmt->num_rows > 0) {

            $stmt->bind_result($id, $hash, $empName);          //The columns for policyholderId, password and employee name are bound to the variables within the brackets

            $stmt->fetch();            //Now the values of the first row of the result set are fetched and assigned to the variables bound to the columns previously
            
            // Verify password using password_verify()
            if (password_verify($password, $hash)) {
                // Password is correct, start session and store UserID and Employee Name
                $_SESSION['user_id'] = $id;
                $_SESSION['user_name'] = $empName;
                
                echo json_encode(["success" => true, "message" => "Login successful"]);
            } else {
                echo json_encode(["success" => false, "message" => "Invalid password"]);
            }
        } else {
            echo json_encode(["success" => false, "message" => "User not found"]);   //This is only if $stmt->num_rows = 0
                                                                                    // Means no result was returned from DB, that is, the Username was not found
        }
        
        
        $connection->close();
    }
    
?>
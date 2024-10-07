<?php
    require_once "./include/DB_connect.php";
?>

<?php

$policyId = 1;

$conn = DB_conn();

$sql = $conn -> prepare("SELECT * FROM Policytype WHERE PolicyId = ?") ;

$sql -> bind_param("i", $policyId);

$sql->execute();

$result = $sql->get_result();

while ($row = $result->fetch_assoc()) { 
    
    echo "PolicyId: " . $row['PolicyId'] . "<br>";
    echo "PolicyName: " . $row['PolicyName'] . "<br>";
    echo "Coverage: ". $row['Coverage'] . "<br>";
    echo "Premium" . $row['Premium'] . "<br>";

}


$conn->close();

?>
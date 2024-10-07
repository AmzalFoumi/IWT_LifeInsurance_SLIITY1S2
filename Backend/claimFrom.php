<?php

$name = $_POST['Name'];
$nic = $_POST['NIC'];

try {
    $pdo = new PDO('mysql:host=localhost;dbname=your_database_name', 'username', 'password');
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $stmt = $pdo->prepare("SELECT * FROM Beneficiary WHERE NIC = :nic");
    $stmt->execute(['nic' => $nic]);

    if ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
 
        $policyholderId = $row['PolicyholderId'];
        $beneficiaryId = $row['BeneficiaryId'];
        $policyId = 123; 

        $insertStmt = $pdo->prepare("INSERT INTO Claim (policyholderId, beneficiaryId, policyId, NIC, Name) 
                                     VALUES (:policyholderId, :beneficiaryId, :policyId, :nic, :name)");
        
        $insertStmt->execute([
            'policyholderId' => $policyholderId,
            'beneficiaryId' => $beneficiaryId,
            'policyId' => $policyId,
            'nic' => $nic,
            'name' => $name
        ]);
        echo json_encode(['success' => true, 'message' => 'Claim submitted successfully!']);
    } else {
        echo json_encode(['success' => false, 'message' => 'Beneficiary not found']);
    }

} catch (PDOException $e) {
    echo json_encode(['success' => false, 'message' => 'Database error: ' . $e->getMessage()]);
}
?>

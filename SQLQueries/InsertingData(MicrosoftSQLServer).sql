-- Insert Policy table
INSERT INTO Policy (PolicyName, Coverage, Premium) VALUES 
('OneLife', 1000000, 5000),
('OneLife+', 2000000, 7500),
('OneLifePremium', 5000000, 12000);

-- Insert Policy Benefits
INSERT INTO Policy_Benefits (PolicyId, Benefit) VALUES
(1, 'Natural Death Coverage'),
(1, 'Accidental Death Coverage'),
(2, 'Natural Death Coverage'),
(2, 'Accidental Death Coverage'),
(2, 'Critical Illness Coverage'),
(3, 'Natural Death Coverage'),
(3, 'Accidental Death Coverage'),
(3, 'Critical Illness Coverage'),
(3, 'Disability Coverage');

-- Insert Employee data
INSERT INTO Employee (Role, Username, Password) VALUES
('Admin', 'admin_kumar', 'P9#kR4$mN2vX'),
('Claims Processor', 'claims_silva', 'L5@jH8*pW3nQ'),
('Underwriter', 'under_perera', 'T7#mB2$vK9xS'),
('Insurance Agent', 'agent_fernando', 'Y4$nJ6@cF8mD'),
('Claims Processor', 'claims_bandara', 'R3#wL7$tH5pX');

-- Insert Policyholder data
INSERT INTO Policyholder (PolicyId, NIC, Name, DOB, Income, Street, Postal_Code, City, Province, Country, Username, Password) VALUES
(1, '200345987612', 'Malith Dissanayake', '2003-05-15', 75000, '45/2 Temple Road', 10300, 'Colombo', 'Western', 'Sri Lanka', 'malith_d', 'M8#pK4$nB2vL'),
(2, '200578123469', 'Kumari Perera', '2005-08-22', 85000, '78 Galle Road', 80000, 'Galle', 'Southern', 'Sri Lanka', 'kumari_p', 'W5@hJ9$mT3xN'),
(1, '200289674523', 'Nuwan Bandara', '2002-03-10', 65000, '123 Kandy Road', 20000, 'Kandy', 'Central', 'Sri Lanka', 'nuwan_b', 'Q7#kL2$pR5vM'),
(3, '200467812354', 'Dilshan Silva', '2004-11-30', 120000, '56 Marine Drive', 10400, 'Colombo', 'Western', 'Sri Lanka', 'dilshan_s', 'B4@nH6$tK8xL'),
(2, '200634789512', 'Chamari Atapattu', '2006-07-25', 95000, '34 Beach Road', 70000, 'Matara', 'Southern', 'Sri Lanka', 'chamari_a', 'V3#mP7$wJ5nX');

-- Insert Policyholder phone numbers
INSERT INTO Policyholder_phone (PolicyholderId, PhoneNumber, Type) VALUES
(1, 0771234567, 'Mobile'),
(1, 0112234567, 'Home'),
(2, 0772345678, 'Mobile'),
(3, 0773456789, 'Mobile'),
(4, 0774567890, 'Mobile'),
(4, 0114567890, 'Home'),
(5, 0775678901, 'Mobile');

-- Insert Beneficiary data
INSERT INTO Beneficiary (PolicyholderId, NIC, Name, Street, Postal_Code, City, Province, Country) VALUES
(1, '200445987613', 'Samantha Dissanayake', '45/2 Temple Road', 10300, 'Colombo', 'Western', 'Sri Lanka'),
(2, '200678123470', 'Rajith Perera', '78 Galle Road', 80000, 'Galle', 'Southern', 'Sri Lanka'),
(3, '200389674524', 'Kamani Bandara', '123 Kandy Road', 20000, 'Kandy', 'Central', 'Sri Lanka'),
(4, '200567812355', 'Tharushi Silva', '56 Marine Drive', 10400, 'Colombo', 'Western', 'Sri Lanka'),
(5, '200734789513', 'Dasun Atapattu', '34 Beach Road', 70000, 'Matara', 'Southern', 'Sri Lanka');

-- Insert Beneficiary phone numbers
INSERT INTO Benefeciary_phone (PolicyholderId, BeneficiaryId, PhoneNumber, Type) VALUES
(1, 1, 0761234567, 'Mobile'),
(2, 2, 0762345678, 'Mobile'),
(3, 3, 0763456789, 'Mobile'),
(4, 4, 0764567890, 'Mobile'),
(5, 5, 0765678901, 'Mobile');

-- Insert Payment records
INSERT INTO Payment (PolicyholderId, Reference, Date, Amount) VALUES
(1, 'PAY/2024/001', '2024-01-15', 5000),
(2, 'PAY/2024/002', '2024-01-20', 7500),
(3, 'PAY/2024/003', '2024-02-01', 5000),
(4, 'PAY/2024/004', '2024-02-15', 12000),
(5, 'PAY/2024/005', '2024-03-01', 7500);

-- Insert Policy Applications
INSERT INTO Policy_Application (PolicyId, EmpId, NIC, Name, DOB, Income, Street, Postal_Code, City, Province, Country) VALUES
(1, 4, '200545987614', 'Ravindu Jayawardena', '2005-06-15', 70000, '23/A First Lane', 10500, 'Colombo', 'Western', 'Sri Lanka'),
(2, 4, '200678123471', 'Hashini Fernando', '2006-09-22', 80000, '45 Beach Road', 80000, 'Galle', 'Southern', 'Sri Lanka'),
(1, 4, '200389674525', 'Kasun Rathnayake', '2003-04-10', 65000, '78 Hill Street', 20000, 'Kandy', 'Central', 'Sri Lanka'),
(3, 4, '200467812356', 'Malsha Dissanayake', '2004-12-30', 110000, '90 Park Road', 10400, 'Colombo', 'Western', 'Sri Lanka'),
(2, 4, '200634789514', 'Thisara Perera', '2006-08-25', 95000, '12 Main Street', 70000, 'Matara', 'Southern', 'Sri Lanka');

-- Insert Claims
INSERT INTO Claim (PolicyholderId, BeneficiaryId, PolicyId, EmpId, NIC, Name, Street, Postal_Code, City, Province, Country) VALUES
(1, 1, 1, 2, '200445987613', 'Samantha Dissanayake', '45/2 Temple Road', 10300, 'Colombo', 'Western', 'Sri Lanka'),
(2, 2, 2, 2, '200678123470', 'Rajith Perera', '78 Galle Road', 80000, 'Galle', 'Southern', 'Sri Lanka'),
(3, 3, 1, 2, '200389674524', 'Kamani Bandara', '123 Kandy Road', 20000, 'Kandy', 'Central', 'Sri Lanka'),
(4, 4, 3, 2, '200567812355', 'Tharushi Silva', '56 Marine Drive', 10400, 'Colombo', 'Western', 'Sri Lanka'),
(5, 5, 2, 2, '200734789513', 'Dasun Atapattu', '34 Beach Road', 70000, 'Matara', 'Southern', 'Sri Lanka');

-- Insert Inquiries
INSERT INTO Inquiry (Name, Title, Email, Phone, Message, InqType, EmpId, PolicyId) VALUES
('Roshan Gunasekara', 'Mr.', 'roshan.g@email.com', 0771234567, 'Need information about premium payments', 'Payment', 4, 1),
('Dilini Rajapakse', 'Mrs.', 'dilini.r@email.com', 0762345678, 'Query about policy coverage', 'Coverage', 4, 2),
('Asanka Gunawardena', 'Mr.', 'asanka.g@email.com', 0753456789, 'Want to upgrade my policy', 'Upgrade', 4, 1),
('Shamali Fernando', 'Ms.', 'shamali.f@email.com', 0774567890, 'Claim process inquiry', 'Claims', 2, 3),
('Pradeep Jayasinghe', 'Mr.', 'pradeep.j@email.com', 0765678901, 'Policy renewal information needed', 'Renewal', 4, 2);

-- Insert Process Records for Policy Applications
INSERT INTO Processes_emp_polApp (EmpId, ApplicationId, DateAccessed) VALUES
(3, 1, '2024-01-15'),
(3, 2, '2024-01-20'),
(3, 3, '2024-02-01'),
(3, 4, '2024-02-15'),
(3, 5, '2024-03-01');

-- Insert Process Records for Inquiries
INSERT INTO Processes_emp_inquiry (EmpId, InqId, DateAccessed) VALUES
(4, 1, '2024-01-16'),
(4, 2, '2024-01-21'),
(4, 3, '2024-02-02'),
(2, 4, '2024-02-16'),
(4, 5, '2024-03-02');

-- Insert Process Records for Claims
INSERT INTO Processes_emp_claim (EmpId, ClaimId, DateAccessed) VALUES
(2, 1, '2024-01-17'),
(2, 2, '2024-01-22'),
(2, 3, '2024-02-03'),
(2, 4, '2024-02-17'),
(2, 5, '2024-03-03');
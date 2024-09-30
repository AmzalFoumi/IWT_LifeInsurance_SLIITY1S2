/*Creating Policy table*/
CREATE TABLE Policy (
	PolicyId INT AUTO_INCREMENT,   
	PolicyType VARCHAR (50),
	Coverage INT,
	Premium INT,
	CONSTRAINT policy_pk PRIMARY KEY (PolicyId),
)

/*Creating Policy Benefits table which is a multivalued attribute which refers to Policy table*/
CREATE TABLE Policy_Benefits(
	PolicyId INT,
	Benefit VARCHAR(200),
	CONSTRAINT policyBenefits_pk PRIMARY KEY (PolicyId,Benefit),
	CONSTRAINT policyBenefits_fk FOREIGN KEY(PolicyId) REFERENCES Policy(PolicyId),
)

/*Creating Policyholder table*/
CREATE TABLE Policyholder (
	PolicyholderId INT AUTO_INCREMENT,   
	PolicyId INT,
	NIC VARCHAR(20) UNIQUE NOT NULL,
	Name VARCHAR(100),
	DOB DATE,   /*YYYY.MM.DD*/
	Income INT,
	Street VARCHAR(200),
	Postal_Code INT,
	City VARCHAR(20),
	Province VARCHAR(25),
	Country VARCHAR(50),
	Username VARCHAR(20) UNIQUE NOT NULL,
	Password VARCHAR(20) NOT NULL,
	CONSTRAINT policyholder_pk PRIMARY KEY (PolicyholderId),
	CONSTRAINT policyholder_fk FOREIGN KEY(PolicyId) REFERENCES Policy(PolicyId),
)

CREATE TABLE Policyholder_phone (
	PolicyholderId INT,
	PhoneNumber INT,
	Type VARCHAR(10),
	CONSTRAINT policyholderPhone_pk PRIMARY KEY (PolicyholderId,PhoneNumber),
	CONSTRAINT policyholderPhone_fk FOREIGN KEY (PolicyholderId) REFERENCES Policyholder(PolicyholderId),
)

CREATE TABLE Beneficiary (
	PolicyholderId INT,
	BeneficiaryId INT AUTO_INCREMENT,   
	NIC VARCHAR(20) UNIQUE NOT NULL,
	Name VARCHAR(100),
	Street VARCHAR(200),
	Postal_Code INT,
	City VARCHAR(20),
	Province VARCHAR(25),
	Country VARCHAR(50),
	CONSTRAINT beneficiary_pk PRIMARY KEY (PolicyholderId, BeneficiaryId),
)


CREATE TABLE Benefeciary_phone (
	PolicyholderId INT,
	BeneficiaryId INT,
	PhoneNumber INT,
	Type VARCHAR(10),
	CONSTRAINT beneficiaryPhone_pk PRIMARY KEY (PolicyholderId,BeneficiaryId,PhoneNumber),
	CONSTRAINT beneficiaryPhone_fk FOREIGN KEY (PolicyholderId,BeneficiaryId) REFERENCES Beneficiary(PolicyholderId,BeneficiaryId),
)

CREATE TABLE Payment (
	PolicyholderId INT,
	PayId INT AUTO_INCREMENT,   
	Reference VARCHAR (25),
	Date DATE,
	Amount INT NOT NULL,
	CONSTRAINT payment_pk PRIMARY KEY (PolicyholderId, PayId),
	CONSTRAINT payment_fk FOREIGN KEY (PolicyholderId) REFERENCES Policyholder (PolicyholderId),
)

CREATE TABLE Policy_Application (
	ApplicationId INT AUTO_INCREMENT,   
	PolicyId INT,
	NIC VARCHAR(20) UNIQUE NOT NULL,
	Name VARCHAR(100),
	DOB DATE,   /*YYYY.MM.DD*/
	Income INT,
	Street VARCHAR(200),
	Postal_Code INT,
	City VARCHAR(20),
	Province VARCHAR(25),
	Country VARCHAR(50),
	CONSTRAINT policyApplication_pk PRIMARY KEY (ApplicationId),
	CONSTRAINT policyApplication_fk FOREIGN KEY(PolicyId) REFERENCES Policy(PolicyId),
)

CREATE TABLE Claim (
	ClaimId INT AUTO_INCREMENT,
	PolicyholderId INT,
	BeneficiaryId INT,
	PolicyId INT,
	NIC VARCHAR(20) UNIQUE NOT NULL,
	Name VARCHAR(100),
	Street VARCHAR(200),  /*Should we take address again when claiming or should it load when they insert NIC?*/
	Postal_Code INT,
	City VARCHAR(20),
	Province VARCHAR(25),
	Country VARCHAR(50),
	CONSTRAINT claim_pk PRIMARY KEY (ClaimId),
	CONSTRAINT claim_fk_1 FOREIGN KEY (PolicyholderId, BeneficiaryId) REFERENCES Beneficiary(PolicyholderId, BeneficiaryId),
	CONSTRAINT claim_fk_2 FOREIGN KEY (PolicyId) REFERENCES Policy(PolicyId),
)

CREATE TABLE Employee (
	EmpId INT AUTO_INCREMENT,
	Role VARCHAR(50),
	Username VARCHAR(20) UNIQUE NOT NULL,
	Password VARCHAR(20) UNIQUE NOT NULL,
	CONSTRAINT employee_pk PRIMARY KEY (EmpId),
)

CREATE TABLE Inquiry (
	InqId INT AUTO_INCREMENT,
	Name VARCHAR(50) NOT NULL,
	Title VARCHAR(5),
	Email VARCHAR(50),
	Phone INT,
	Message VARCHAR(500),
	InqType VARCHAR(15),
	EmpId INT,
	PolicyId INT,
	CONSTRAINT inquiry_pk PRIMARY KEY (InqId),
	CONSTRAINT inquiry_pk_1 FOREIGN KEY (EmpId) REFERENCES Employee(EmpId),
	CONSTRAINT inquiry_pk_2 FOREIGN KEY (PolicyId) REFERENCES Policy(PolicyId),
)

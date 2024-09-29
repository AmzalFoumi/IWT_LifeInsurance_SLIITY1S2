/*Creating Policy table*/
CREATE TABLE Policy (
	PolicyId INT IDENTITY(1,1),   /*IDENTITY for Microsoft SQL server.  AUTO_INCREMENT for MySQL*/
	PolicyType VARCHAR (50),
	Coverage INT,
	Premium INT,
	CONSTRAINT policy_pk_policyId PRIMARY KEY (PolicyId)
)

/*Creating Policy Benefits table which refers to Policy table*/
CREATE TABLE Policy_Benefits(
	PolicyId INT,
	Benefit VARCHAR(200),
	CONSTRAINT policyBenefits_fk_policyId FOREIGN KEY(PolicyId) REFERENCES Policy(PolicyId)
)

CREATE TABLE Policyholder (
	PolicyholderId INT,
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
	CONSTRAINT policyholder_pk_policyholderId PRIMARY KEY (PolicyholderId),
	CONSTRAINT policyholder_fk_policyId FOREIGN KEY(PolicyId) REFERENCES Policy(PolicyId)
)


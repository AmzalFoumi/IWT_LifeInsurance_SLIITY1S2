/*Creating Policy table*/
CREATE TABLE Policy (
	PolicyId INT IDENTITY(1,1),   /*IDENTITY for Microsoft SQL server.  AUTO_INCREMENT for MySQL*/
	PolicyType VARCHAR (50),
	Coverage INT,
	Premium INT,
	
)
ALTER TABLE Policy ADD CONSTRAINT policy_pk_policyId PRIMARY KEY (PolicyId); 

/*Creating Policy Benefits table which refers to Policy table*/
CREATE TABLE Policy_Benefits(
	PolicyId INT,
	Benefit VARCHAR(200),
)
ALTER TABLE Policy_Benefits ADD CONSTRAINT policyBenefits_fk_policyId FOREIGN KEY(PolicyId) REFERENCES Policy(PolicyId);



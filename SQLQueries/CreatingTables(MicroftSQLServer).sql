CREATE TABLE Policy (
	PolicyId INT IDENTITY(1,1),   /*IDENTITY for Microsoft SQL server.  AUTO_INCREMENT for MySQL*/
	PolicyType VARCHAR (50),
	Coverage INT,
	Premium INT,
	
)

ALTER TABLE Policy ADD CONSTRAINT pk_policyId PRIMARY KEY (PolicyId); 

-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 30, 2024 at 01:25 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `onelifedb`
--

-- --------------------------------------------------------

--
-- Table structure for table `benefeciary_phone`
--

CREATE TABLE `benefeciary_phone` (
  `PolicyholderId` int(11) NOT NULL,
  `BeneficiaryId` int(11) NOT NULL,
  `PhoneNumber` int(11) NOT NULL,
  `Type` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `beneficiary`
--

CREATE TABLE `beneficiary` (
  `PolicyholderId` int(11) NOT NULL,
  `BeneficiaryId` int(11) NOT NULL,
  `NIC` varchar(20) NOT NULL,
  `Name` varchar(100) NOT NULL,
  `Street` varchar(200) DEFAULT NULL,
  `Postal_Code` int(11) DEFAULT NULL,
  `City` varchar(25) DEFAULT NULL,
  `Province` varchar(25) DEFAULT NULL,
  `Country` varchar(25) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `claim`
--

CREATE TABLE `claim` (
  `ClaimId` int(11) NOT NULL,
  `PolicyholderId` int(11) NOT NULL,
  `BeneficiaryId` int(11) NOT NULL,
  `PolicyId` int(11) NOT NULL,
  `EmpId` int(11) DEFAULT NULL,
  `NIC` varchar(20) NOT NULL,
  `Name` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `employee`
--

CREATE TABLE `employee` (
  `EmpId` int(11) NOT NULL,
  `Role` varchar(50) NOT NULL,
  `Username` int(11) NOT NULL,
  `Password` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `inquiry`
--

CREATE TABLE `inquiry` (
  `InqId` int(11) NOT NULL,
  `Name` varchar(50) NOT NULL,
  `Title` varchar(5) DEFAULT NULL,
  `Email` varchar(50) DEFAULT NULL,
  `Phone` int(11) DEFAULT NULL,
  `Message` varchar(500) DEFAULT NULL,
  `InqType` varchar(15) DEFAULT NULL,
  `EmpId` int(11) DEFAULT NULL,
  `PolicyId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `policyholder`
--

CREATE TABLE `policyholder` (
  `PolicyholderId` int(11) NOT NULL,
  `PolicyId` int(11) NOT NULL,
  `NIC` varchar(20) NOT NULL,
  `Name` varchar(100) NOT NULL,
  `DOB` date NOT NULL,
  `Income` int(11) NOT NULL,
  `Street` varchar(200) NOT NULL,
  `Postal_Code` int(11) NOT NULL,
  `City` varchar(25) NOT NULL,
  `Province` varchar(25) NOT NULL,
  `Country` varchar(25) NOT NULL,
  `Username` varchar(20) NOT NULL,
  `Password` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `policyholder_phone`
--

CREATE TABLE `policyholder_phone` (
  `PolicyholderId` int(11) NOT NULL,
  `PhoneNumber` int(11) NOT NULL,
  `Type` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `policytype`
--

CREATE TABLE `policytype` (
  `PolicyId` int(11) NOT NULL,
  `PolicyName` varchar(50) NOT NULL,
  `Coverage` int(11) NOT NULL,
  `Premium` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `policy_application`
--

CREATE TABLE `policy_application` (
  `ApplicationId` int(11) NOT NULL,
  `PolicyId` int(11) DEFAULT NULL,
  `EmpId` int(11) DEFAULT NULL,
  `NIC` varchar(20) NOT NULL,
  `Name` varchar(100) DEFAULT NULL,
  `DOB` date DEFAULT NULL,
  `Income` int(11) DEFAULT NULL,
  `Street` varchar(200) DEFAULT NULL,
  `Postal_Code` int(11) DEFAULT NULL,
  `City` varchar(20) DEFAULT NULL,
  `Province` varchar(25) DEFAULT NULL,
  `Country` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `benefeciary_phone`
--
ALTER TABLE `benefeciary_phone`
  ADD PRIMARY KEY (`PolicyholderId`,`BeneficiaryId`,`PhoneNumber`);

--
-- Indexes for table `beneficiary`
--
ALTER TABLE `beneficiary`
  ADD PRIMARY KEY (`BeneficiaryId`,`PolicyholderId`),
  ADD UNIQUE KEY `NIC` (`NIC`),
  ADD KEY `beneficiary_fk` (`PolicyholderId`);

--
-- Indexes for table `claim`
--
ALTER TABLE `claim`
  ADD PRIMARY KEY (`ClaimId`),
  ADD UNIQUE KEY `claim_nic` (`NIC`),
  ADD KEY `claim_fk_1` (`PolicyholderId`,`BeneficiaryId`),
  ADD KEY `claim_fk_2` (`PolicyId`),
  ADD KEY `claim_fk_3` (`EmpId`);

--
-- Indexes for table `employee`
--
ALTER TABLE `employee`
  ADD PRIMARY KEY (`EmpId`),
  ADD UNIQUE KEY `emp_username_unique` (`Username`);

--
-- Indexes for table `inquiry`
--
ALTER TABLE `inquiry`
  ADD PRIMARY KEY (`InqId`),
  ADD KEY `inquiry_fk_1` (`EmpId`),
  ADD KEY `inquiry_fk_2` (`PolicyId`);

--
-- Indexes for table `policyholder`
--
ALTER TABLE `policyholder`
  ADD PRIMARY KEY (`PolicyholderId`),
  ADD UNIQUE KEY `NIC` (`NIC`),
  ADD UNIQUE KEY `Username` (`Username`),
  ADD KEY `policyholder_fk` (`PolicyId`);

--
-- Indexes for table `policyholder_phone`
--
ALTER TABLE `policyholder_phone`
  ADD PRIMARY KEY (`PolicyholderId`,`PhoneNumber`);

--
-- Indexes for table `policytype`
--
ALTER TABLE `policytype`
  ADD PRIMARY KEY (`PolicyId`);

--
-- Indexes for table `policy_application`
--
ALTER TABLE `policy_application`
  ADD PRIMARY KEY (`ApplicationId`),
  ADD UNIQUE KEY `NIC` (`NIC`),
  ADD KEY `policyApplication_fk_1` (`PolicyId`),
  ADD KEY `policyApplication_fk_2` (`EmpId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `beneficiary`
--
ALTER TABLE `beneficiary`
  MODIFY `BeneficiaryId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `claim`
--
ALTER TABLE `claim`
  MODIFY `ClaimId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `employee`
--
ALTER TABLE `employee`
  MODIFY `EmpId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `inquiry`
--
ALTER TABLE `inquiry`
  MODIFY `InqId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `policyholder`
--
ALTER TABLE `policyholder`
  MODIFY `PolicyholderId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `policytype`
--
ALTER TABLE `policytype`
  MODIFY `PolicyId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `policy_application`
--
ALTER TABLE `policy_application`
  MODIFY `ApplicationId` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `benefeciary_phone`
--
ALTER TABLE `benefeciary_phone`
  ADD CONSTRAINT `beneficiaryPhone_fk` FOREIGN KEY (`PolicyholderId`,`BeneficiaryId`) REFERENCES `beneficiary` (`PolicyholderId`, `BeneficiaryId`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `beneficiary`
--
ALTER TABLE `beneficiary`
  ADD CONSTRAINT `beneficiary_fk` FOREIGN KEY (`PolicyholderId`) REFERENCES `policyholder` (`PolicyholderId`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `claim`
--
ALTER TABLE `claim`
  ADD CONSTRAINT `claim_fk_1` FOREIGN KEY (`PolicyholderId`,`BeneficiaryId`) REFERENCES `beneficiary` (`PolicyholderId`, `BeneficiaryId`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `claim_fk_2` FOREIGN KEY (`PolicyId`) REFERENCES `policytype` (`PolicyId`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `claim_fk_3` FOREIGN KEY (`EmpId`) REFERENCES `employee` (`EmpId`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `inquiry`
--
ALTER TABLE `inquiry`
  ADD CONSTRAINT `inquiry_fk_1` FOREIGN KEY (`EmpId`) REFERENCES `employee` (`EmpId`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `inquiry_fk_2` FOREIGN KEY (`PolicyId`) REFERENCES `policytype` (`PolicyId`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `policyholder`
--
ALTER TABLE `policyholder`
  ADD CONSTRAINT `policyholder_fk` FOREIGN KEY (`PolicyId`) REFERENCES `policytype` (`PolicyId`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `policyholder_phone`
--
ALTER TABLE `policyholder_phone`
  ADD CONSTRAINT `policyholderPhone_fk` FOREIGN KEY (`PolicyholderId`) REFERENCES `policyholder` (`PolicyholderId`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `policy_application`
--
ALTER TABLE `policy_application`
  ADD CONSTRAINT `policyApplication_fk_1` FOREIGN KEY (`PolicyId`) REFERENCES `policytype` (`PolicyId`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `policyApplication_fk_2` FOREIGN KEY (`EmpId`) REFERENCES `employee` (`EmpId`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;


SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


--
-- Database: `dda`
--

-- --------------------------------------------------------

--
-- Table structure for table `aimdata`
--

CREATE TABLE `aimdata` (
  `aimdata_id` bigint(64) NOT NULL,
  `email` varchar(128) DEFAULT NULL,
  `driver_id` int(16) DEFAULT NULL,
  `customer_id` int(16) DEFAULT NULL,
  `contract_Id` int(16) DEFAULT NULL,
  `has_contract` int(1) DEFAULT '1',
  `has_fines` int(1) DEFAULT '1',
  `has_fuel` int(1) DEFAULT '1',
  `updated_at` datetime DEFAULT NULL,
  `inserted_at` datetime DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `contracts`
--

CREATE TABLE `contracts` (
  `contract_id` int(16) NOT NULL,
  `email` varchar(128) DEFAULT NULL,
  `driver_id` int(16) DEFAULT NULL,
  `customer_id` int(45) DEFAULT NULL,
  `reference` varchar(128) DEFAULT NULL,
  `start_date` date DEFAULT NULL,
  `end_date` date DEFAULT NULL,
  `leasing_company` varchar(256) DEFAULT NULL,
  `is_greenfield` int(1) DEFAULT NULL,
  `product` varchar(256) DEFAULT NULL,
  `duration` decimal(16,0) DEFAULT NULL,
  `km_year` decimal(16,0) DEFAULT NULL,
  `lease_price` decimal(24,2) DEFAULT NULL,
  `more_milage` decimal(24,2) DEFAULT NULL,
  `less_milage` decimal(24,2) DEFAULT NULL,
  `tires` int(1) DEFAULT NULL,
  `license_plate` varchar(16) DEFAULT NULL,
  `description` varchar(320) DEFAULT NULL,
  `fuel_type` varchar(256) DEFAULT NULL,
  `fule_type_sec` varchar(256) DEFAULT NULL,
  `car_tax` decimal(24,2) DEFAULT NULL,
  `inspection_date` date DEFAULT NULL,
  `fuel_consumption` decimal(16,5) DEFAULT NULL,
  `fuel_consumption_real` decimal(16,0) DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `inserted_at` datetime DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `fines`
--

CREATE TABLE `fines` (
  `fine_id` int(11) NOT NULL,
  `driver_id` int(16) DEFAULT NULL,
  `contract_Id` int(16) DEFAULT NULL,
  `reference` varchar(64) DEFAULT NULL,
  `fee` decimal(16,2) DEFAULT NULL,
  `location` varchar(256) DEFAULT NULL,
  `fine_date` timestamp(6) NULL DEFAULT NULL,
  `description` varchar(256) DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `inserted_at` datetime DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `fuelings`
--

CREATE TABLE `fuelings` (
  `fueling_id` bigint(128) NOT NULL,
  `contract_id` int(16) DEFAULT NULL,
  `driver_id` int(16) DEFAULT NULL,
  `customer_id` int(16) DEFAULT NULL,
  `fuel_type` varchar(256) DEFAULT NULL,
  `quantity` decimal(16,2) DEFAULT NULL,
  `price` decimal(16,2) DEFAULT NULL,
  `milage` varchar(45) DEFAULT NULL,
  `location` varchar(45) DEFAULT NULL,
  `fueling_date` timestamp(6) NULL DEFAULT NULL,
  `is_highway` int(1) DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `inserted_at` datetime DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `aimdata`
--
ALTER TABLE `aimdata`
  ADD PRIMARY KEY (`aimdata_id`),
  ADD KEY `driver_id` (`driver_id`,`contract_Id`);

--
-- Indexes for table `contracts`
--
ALTER TABLE `contracts`
  ADD PRIMARY KEY (`contract_id`),
  ADD KEY `contract_id` (`driver_id`,`contract_id`);

--
-- Indexes for table `fines`
--
ALTER TABLE `fines`
  ADD PRIMARY KEY (`fine_id`),
  ADD KEY `driver_id` (`driver_id`,`contract_Id`);

--
-- Indexes for table `fuelings`
--
ALTER TABLE `fuelings`
  ADD PRIMARY KEY (`fueling_id`),
  ADD KEY `contract_id` (`driver_id`,`contract_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `aimdata`
--
ALTER TABLE `aimdata`
  MODIFY `aimdata_id` bigint(64) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `fines`
--
ALTER TABLE `fines`
  MODIFY `fine_id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;


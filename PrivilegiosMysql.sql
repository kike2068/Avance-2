CREATE DATABASE IF NOT EXISTS CONTACTS;

USE CONTACTS;

CREATE TABLE `CONTACTS` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `last` varchar(50) DEFAULT NULL,
  `phone` varchar(50) NOT NULL,
  `email` varchar(50) DEFAULT NULL,
  `isActive` tinyint(1) NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `CONTACTS` (`id`, `name`, `last`, `phone`, `email`, `isActive`, `timestamp`) VALUES
(1, 'Marny', 'Lopez', '88888888', 'malopez@isthmusit.com', 1, '2020-10-27 21:41:14'),
(2, 'Mario', 'Lopez', '77777777', 'malopez@isthmusit.com', 0, '2020-10-27 21:41:14');

ALTER TABLE `CONTACTS`
  ADD PRIMARY KEY (`id`);
  
  ALTER TABLE `CONTACTS`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
  
  SELECT * FROM CONTACTS;
  
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'root';

FLUSH PRIVILEGES;


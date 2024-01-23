-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 22-01-2024 a las 16:31:32
-- Versión del servidor: 8.2.0
-- Versión de PHP: 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `test`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `dni` varchar(8) COLLATE utf8mb4_general_ci NOT NULL,
  `phone` varchar(15) COLLATE utf8mb4_general_ci NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `mail` varchar(200) COLLATE utf8mb4_general_ci NOT NULL,
  `carPlate` varchar(10) COLLATE utf8mb4_general_ci NOT NULL,
  `carModel` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `carBrand` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `minInsuranceValue` int NOT NULL,
  `maxInsuranceValue` int NOT NULL,
  `tireStolen` tinyint(1) NOT NULL,
  `collisionInsurance` tinyint(1) NOT NULL,
  `pedestrianInsurance` tinyint(1) NOT NULL,
  `monto_seguro` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `dni`, `phone`, `name`, `mail`, `carPlate`, `carModel`, `carBrand`, `minInsuranceValue`, `maxInsuranceValue`, `tireStolen`, `collisionInsurance`, `pedestrianInsurance`, `monto_seguro`) VALUES
(1, '12345678', '123456789', 'John Doe', 'test@gmail.com', 'ABC123', 'Model XYZ', 'Brand ABC', 12000, 15900, 0, 1, 0, 35),
(2, '87654321', '987654321', 'Jane Doe', 'test2@gmail.com', 'XYZ789', 'Model ABC', 'Brand XYZ', 13000, 16500, 1, 0, 1, -95),
(3, '11223344', '111222333', 'Alice Smith', 'test3@gmail.com', 'LMN456', 'Model PQR', 'Brand LMN', 12500, 16000, 0, 1, 1, 20),
(4, '44556677', '444555666', 'Bob Johnson', 'test4@gmail.com', 'JKL789', 'Model RST', 'Brand JKL', 14000, 17000, 1, 1, 0, 20),
(5, '98765432', '987654321', 'Eva Davis', 'test5@gmail.com', 'OPQ123', 'Model UVW', 'Brand OPQ', 13000, 16500, 0, 0, 1, 20),
(6, '33445566', '333444555', 'Charlie Brown', 'test6@gmail.com', 'XYZ456', 'Model LMN', 'Brand XYZ', 13500, 16300, 0, 1, 0, 20),
(7, '11223399', '111222999', 'Olivia Taylor', 'test7@gmail.com', 'JKL456', 'Model GHI', 'Brand JKL', 12050, 15950, 1, 0, 1, 20),
(8, '77889900', '777888999', 'Sam Wilson', 'test8@gmail.com', 'ABC456', 'Model DEF', 'Brand ABC', 12200, 16000, 0, 1, 0, 20),
(9, '66554433', '666555444', 'Sophia Martinez', 'test9@gmail.com', 'DEF123', 'Model MNO', 'Brand DEF', 12500, 16200, 1, 0, 1, 20);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

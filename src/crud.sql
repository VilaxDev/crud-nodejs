-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 18-04-2025 a las 01:25:17
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `crud`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `user` varchar(50) NOT NULL,
  `rol` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `user`, `rol`, `email`, `password`) VALUES
(1, 'Juan Perez', 'Supervisor', '', ''),
(2, 'Yolandi Iziba', 'Gerente', '', ''),
(4, 'Carolina del Norte', 'Moderador', '', ''),
(9, 'gerger', 'Admin', '', ''),
(10, 'hghryhrth', 'Supervisor', '', ''),
(11, 'perri', 'Admin', '', ''),
(14, 'coki', 'Supervisor', 'coki@gmail.com', '123456789'),
(16, 'Jenny', 'Admin', 'jenny@gmail.com', '$2b$10$e9WCEyovarBI5GNIdaKtkuf9dHcPcw6tfYtOVZZ0M5teD/2bbh0W6'),
(17, 'demo', 'Admin', 'demo@gmail.com', '$2b$10$McYfcYd6FTtkv5wRQNJiZu4PMcwtLfSQ4h6XDxNEtWMOOXzUZPxjq'),
(18, 'asdasd', 'Supervisor', '', ''),
(19, 'Brayan', 'Admin', 'braya@gmail.com', '$2b$10$vfP.x24TD3DleCmlGEb1WO5/h1y0L7GllSlQIwN8Hr6G85xjJKyrq'),
(20, 'admin', 'Admin', 'admin@gmail.com', '$2b$10$4f952GGbrwGUbdhFpuD3YOs3DuDKSi3eem4Pd80fgpNjzfDDTF7g2'),
(21, 'Broly', 'Supervisor', '', '');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

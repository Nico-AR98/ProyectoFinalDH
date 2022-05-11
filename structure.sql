CREATE DATABASE `proyectoDH`;
USE `proyectoDH`;

CREATE TABLE `usuarios` (
  `id` smallint(4) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `nombreCompleto` varchar(30) NOT NULL,
  `email` varchar(30) NOT NULL UNIQUE,
  `password` mediumtext NOT NULL,
  `imagen` text NOT NULL,
  `telefono` varchar(15) NOT NULL,
  `is_admin` tinyint NOT NULL DEFAULT 0
 );
 
CREATE TABLE `productos` (
  `id` smallint(4) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `nombre` varchar(30) NOT NULL,
  `precio` smallint NOT NULL,
  `descripcion` text NULL,
  `talle` enum("XS","S","M","L","XL") NOT NULL,
  `color` varchar(30) NOT NULL,
  `categoria` varchar(30) NOT NULL,
  `imagen` text NOT NULL,
  `stock` mediumint NOT NULL
 );

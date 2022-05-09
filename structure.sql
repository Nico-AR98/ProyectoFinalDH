CREATE DATABASE `proyectoDH`;
USE `proyectoDH`;

CREATE TABLE `usuarios` (
  `id` smallint(4) NOT NULL,
  `nombreCompleto` varchar(30) NOT NULL,
  `email` varchar(30) NOT NULL UNIQUE,
  `password` varchar(15) NOT NULL,
  `is_admin` tinyint NOT NULL DEFAULT 0,
  PRIMARY KEY(`id`)
  );
 
CREATE TABLE `categorias` (
  `id` smallint(4) NOT NULL ,
  `nombre` varchar(30) NOT NULL,
   PRIMARY KEY(`id`)
 );


CREATE TABLE `productos` (
  `id` smallint(4) NOT NULL,
  `id_categoria` smallint(4) NOT NULL,
  `nombre` varchar(30) NOT NULL,
  `precio` smallint NOT NULL,
  `descripcion` text NULL,
  `talles` set("XS","S","M","L","XL") NOT NULL,
  `color` enum("Negro","Rojo","Blanco","Celeste","Rosado","Gris","Naranja","Azul","Amarillo","Verde","Combinado","Tricolor") NOT NULL,
  `imagen` text NOT NULL,
  `stock` mediumint NOT NULL,
 PRIMARY KEY(`id`),
 FOREIGN KEY (`id_categoria`) REFERENCES categorias(`id`)
  );
  	
  	


const express=require("express");
const router = express.Router();

const productoController = require('../controllers/productoController');

router.get("/",productoController.catalogo);

router.get("/detalle/:idProducto",productoController.detalle);

router.get("/create",productoController.crear);

router.get("/edit/:idProducto",productoController.editar);

module.exports=router;
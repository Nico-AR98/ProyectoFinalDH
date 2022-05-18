const express=require("express");
const router = express.Router();
const {validacionesProducto} = require('../../middlewares/validacionesProductoMiddleware');
const productoController = require('../controllers/productoController');
const fileUpload = require('../../middlewares/multerProductoMiddleware');


//Muestra todos los productos
router.get("/",productoController.catalogo);

//Detalle del producto
router.get("/detalle/:idProducto",productoController.detalle);

//Formulario de creación de producto
router.get("/create",productoController.crear);

//Procesamiento formulario de creación
router.post("/create",fileUpload.single('img'),validacionesProducto, productoController.registrarCreacion);

//Formulario de edición de producto
router.get("/edit/:idProducto",productoController.editar);

//Procesamiento formulario de edición
router.put("/edit/:idProducto",fileUpload.single('img'),validacionesProducto,productoController.registrarEdicion);

//Borrado de producto
router.post("/delete/:idProducto",productoController.borrar);

module.exports=router;
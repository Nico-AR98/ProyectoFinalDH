const express=require("express");
const router = express.Router();
const {body} = require("express-validator");
const multer = require("multer");
const productoController = require('../controllers/productoController');
const path = require('path');

//validaciones
const validacionProducto=[
    body('nombre').notEmpty(),
    body('descripcion').notEmpty(),
    body('categoria').notEmpty(),
    body('talles').notEmpty(),
]

//Config de multer
let multerDiskStorage = multer.diskStorage({
    destination:(req,file,callback)=>{
        let folder = path.join(__dirname,'../../public/images/productos');
        callback(null,folder);
    },
    filename:(req,file,callback)=>{
        let imageName = Date.now() + path.extname(file.originalname);
        callback(null,imageName);
    }
});

let fileUpload = multer({storage: multerDiskStorage});

//Muestra todos los productos
router.get("/",productoController.catalogo);

//Detalle del producto
router.get("/detalle/:idProducto",productoController.detalle);

//Formulario de creación de producto
router.get("/create",productoController.crear);

//Procesamiento formulario de creación
router.post("/create",fileUpload.single('img'), productoController.registrarCreacion);

//Formulario de edición de producto
router.get("/edit/:idProducto",productoController.editar);

//Procesamiento formulario de edición
router.put("/edit/:idProducto",fileUpload.single('img'),productoController.registrarEdicion);

//Borrado de producto
router.delete("/delete/:idProducto",productoController.borrar);

module.exports=router;
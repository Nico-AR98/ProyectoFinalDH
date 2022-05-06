const express=require("express");

const router = express.Router();

const fileUpload = require('../../middlewares/multerMiddleware');

const userController = require('../controllers/userController');

const {validacionesLogin,validacionesRegistro} = require('../../middlewares/validacionesUserMiddleware');

router.get("/login",userController.login);

//Formulario de registro de usuario
router.get("/registro",userController.registro);

//Formulario de login de usuario
router.get("/login",userController.login);

//Procesamiento formulario de login
router.post("/login",validacionesLogin, userController.processLogin)

//Procesamiento formulario de registro
router.post("/registro",fileUpload.single('img'),validacionesRegistro, userController.registrarUsuario);

module.exports=router;
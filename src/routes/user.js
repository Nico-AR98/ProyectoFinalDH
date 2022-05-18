const express=require("express");

const router = express.Router();

const fileUpload = require('../../middlewares/multerUserMiddleware');

const userController = require('../controllers/userController');

const {validacionesLogin,validacionesRegistro} = require('../../middlewares/validacionesUserMiddleware');

const guestMiddleware = require('../../middlewares/guestMiddleware');

const authMiddleware = require('../../middlewares/authMiddleware');

router.get("/login",userController.login);

//Formulario de registro de usuario
router.get("/registro",guestMiddleware,userController.registro);

//Formulario de login de usuario
router.get("/login",guestMiddleware,userController.login);

//Procesamiento formulario de login
router.post("/login",validacionesLogin, userController.processLogin)

//Procesamiento logout
router.get("/logout", userController.processLogout)

//Procesamiento formulario de registro
router.post("/registro",fileUpload.single('img'),validacionesRegistro, userController.registrarUsuario);

module.exports=router;
const express=require("express");
const router = express.Router();
const usuario = require('../apis/usuario');
const producto = require('../apis/producto');

router.get("/user",usuario.list);

router.get("/product",producto.list);

router.get("/product/:id",producto.show);

module.exports=router;
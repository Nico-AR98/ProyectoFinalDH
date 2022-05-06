const express=require("express");
const req = require("express/lib/request");
const router = express.Router();

const mainController = require('../controllers/mainController');

router.get("/",mainController.home);

module.exports=router;
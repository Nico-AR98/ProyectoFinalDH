const multer = require("multer");
const path = require('path');

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

let fileUpload = multer({
    storage: multerDiskStorage,
    limits:{fileSize:200000},
    fileFilter: (req,file,callback) => { //Esto permite validar si el archivo tiene una extensión válida, de lo contrario no se sube
        let type = file.mimetype.startsWith('image/');
        if (type){
            callback(null,true)
        } 
        callback(null,false)
}});

module.exports = fileUpload;
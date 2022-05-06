const multer = require("multer");
const path = require('path');

//Config de multer
let multerDiskStorage = multer.diskStorage({
    destination:(req,file,callback)=>{
        let folder = path.join(__dirname,'../../public/images/users');
        callback(null,folder);
    },
    filename:(req,file,callback)=>{
        let imageName = Date.now() + path.extname(file.originalname);
        callback(null,imageName);
    }
});

let fileUpload = multer({storage: multerDiskStorage});

module.exports = fileUpload;
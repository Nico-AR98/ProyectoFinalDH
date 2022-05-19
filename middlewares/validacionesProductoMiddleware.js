const {body} = require("express-validator");
const validacionesProducto = [
    body('nombre').notEmpty().isLength({min:5}).withMessage('El nombre del producto debe tener al menos 5 caracteres'),
    body('descripcion').isLength({min:20}).withMessage('La descripción del producto debe tener al menos 20 caracteres.'),
    body('precio').notEmpty().withMessage('Debes ingresar el precio del producto'),
    body('stock').notEmpty().withMessage('Debes ingresar el stock disponible'),
    body('imagen').custom((filename)=>{
       var file = new String(filename);
       extension = file.split('.');
       extension = extension[1]
       
        if (extension=='.jpg'|| extension=='.jpeg'||extension=='.png'){
            return true;
        } else {
            return false;
        }
    }).notEmpty().withMessage('Debes cargar la imagen del producto en formato .jpeg , .png o .jpg'),

];

module.exports = {
    validacionesProducto,
}
const {body} = require("express-validator");
const validacionesRegistro = [
    body('nombreCompleto').notEmpty().withMessage('Debes ingresar tu nombre y apellido'),
    body('email').isEmail().withMessage('Debes ingresar una dirección de correo válida'),
    body('telefono').notEmpty().withMessage('Debes ingresar un número de teléfono'),
    body('password').notEmpty().isLength({min:8}).withMessage('Debes ingresar una contraseña con un mínimo de 8 caracteres'),
    body('passwordConfirm').custom((value, { req }) => {
        if (value !== req.body.password) {
          throw new Error('Las contraseñas ingresadas no coinciden');
        } else {
            return true;
        }
      }),
      body('img').custom((filename)=>{
        var file = new String(filename);
        extension = file.split('.');
        extension = extension[1]
        
         if (extension=='.jpg'|| extension=='.jpeg'||extension=='.png'){
             return true;
         } else {
             return false;
         }
     }).notEmpty().withMessage('Debes cargar la imagen de perfil en formato .jpeg , .png o .jpg'),

];

const validacionesLogin = [
    body('email').isEmail().withMessage('Debes ingresar una dirección de correo válida'),
    body('password').notEmpty().isLength({min:8}).withMessage('Debes ingresar una contraseña con un mínimo de 8 caracteres'),
];

module.exports = {
  validacionesLogin,
  validacionesRegistro,
}
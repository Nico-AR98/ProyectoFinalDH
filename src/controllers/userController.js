const fs = require("fs");
const bcrypt = require("bcrypt");
const { validationResult } = require("express-validator");
let db = require('../../database/models'); //Importo la base de datos

//Importo User del módulo models
const User = require('../../models/User');

const controlador= {
    login:(req, res) => {
        res.render('login');
    },

    registro:(req, res)=>{
        res.render('register');
    },

    registrarUsuario:(req,res)=>{
        let errores = validationResult(req);  
  
        if(!errores.isEmpty()){
            return res.render('register',{
                errores:errores.array(),
                old: req.body
            });
        } else {

            db.usuarios.create({
                nombreCompleto:req.body.nombreCompleto ,
                email:req.body.email ,
                telefono: req.body.telefono,
                password:bcrypt.hashSync(req.body.password,6),
                imagen:"/images/users/" + req.file.filename,
            })

            res.redirect("/");
        }

    },

    processLogin: (req,res)=>{
        let errores = validationResult(req);
        if(errores.isEmpty()){

            //let usuarioALoguearse = User.filtrarPorEmail(req.body.email);

            db.usuarios.findOne({
                where: {
                    email: req.body.email
                }
            }) .then((usuarioALoguearse)=>{
                if (usuarioALoguearse && bcrypt.compareSync(req.body.password,usuarioALoguearse.password)){
                    delete usuarioALoguearse.password; //Esto borra la contraseña del user en session
                    req.session.user = usuarioALoguearse;
    
                    //Esto permite recordar al usuario
                    if(req.body.recordarme){
                        res.cookie('userEmail',req.body.email,{maxAge:86400});
                    }  

                    res.redirect('/');
            }})
        } else {
            return res.render(
                'login',
                {errores: [{msg: 'Credenciales inválidas'}]}
            )
        }
    },

    processLogout:(req,res)=>{
        req.session.destroy();
        return res.redirect('/');
    }
};

module.exports=controlador;
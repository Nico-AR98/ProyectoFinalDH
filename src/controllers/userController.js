const fs = require("fs");
const bcrypt = require("bcrypt");
const { validationResult } = require("express-validator");
//const { render, redirect } = require("express/lib/response");
//const users = JSON.parse(fs.readFileSync("../data/users.json","utf-8"));

//Importo User del módulo models
const User = require('../../models/User');

/*Funciones

function modificarJSON(res){
    arrayModificado = users;

    //Añadir el nuevo producto al archivo JSON

    fs.writeFileSync("../data/users.json",JSON.stringify(arrayModificado));

    res.redirect("/");
};

function filtrarPorEmail(email){
    for(let i=0;i<users.length;i++){
        if (users[i].email == email) {
            let usuario = users[i];
            return usuario;
        }
    }
};*/

const controlador= {
    login:(req, res) => {
        res.render('login');
    },

    registro:(req, res)=>{
        res.render('register');
    },

    registrarUsuario:(req,res)=>{
        let errores = validationResult(req);  
        //let form = req.body;

        /*for(let i=0;i<users.length;i++){
            if (users[i].email ==form.email){
                errores = errores['errors'].push({"msg":"La dirección de correo electrónico ya está en uso"})
            }
        } Esto verifica si el email ya esta registrado en la db*/

        if(!errores.isEmpty()){
            return res.render('register',{
                errores:errores.array(),
                old: req.body
            });
        };

        /* Solucionar caso en que el usuario ya esta registrado en la DB
        let usuarioEnDB = User.filtrarPorEmail(req.body.email);
        
        if (usuarioEnDB){
            return res.render('register',{
                errores:{
                    email: {
                        msg: 'Esta dirección de correo electrónico ya esta registrado'
                    }
                },
                old: req.body
            });
        }*/

        User.create(req);

        res.redirect("/");

        /*let nuevoUsuario= {
            id: users.length+1,
            nombreCompleto:form.nombreCompleto ,
            email:form.email ,
            telefono: form.telefono,
            password:bcrypt.hashSync(form.password,10),
            img:"/images/users/" + req.file.filename,
        }
        users.push(nuevoUsuario);
        modificarJSON(res);*/

    },

    processLogin: (req,res)=>{
        let errores = validationResult(req);
        if(errores.isEmpty()){

            let usuarioALoguearse = User.filtrarPorEmail(req.body.email);

            if (usuarioALoguearse){

            }

            /*
            let usuarioALoguearse = filtrarPorEmail(req.body.email);

            if (usuarioALoguearse && bcrypt.compareSync(req.body.password,usuarioALoguearse.password)){
                req.session.usuarioLogueado = usuarioALoguearse;
                res.redirect('/');
            } else {

                res.send("Credenciales inválidas");

            }

            /*for(let i=0;i<users.length;i++){
                if (users[i].email ==req.body.email && bcrypt.compareSync(req.body.password,users[i].password)){
                    let usuarioALoguearse = users[i];
                    req.session.usuarioLogueado = usuarioALoguearse;
                    res.send("El usuario logueado es: " + req.session.usuarioLogueado.email)
                    break
                } else {

                    return res.render(
                        'login',
                        {errores: [{msg: 'Credenciales inválidas'}]}
                    )

                }
            }
            else {

            return res.render('login',{errores:errores.array()})
        }*/

        } else {

            res.send(errores['errors']['msg']);
        }
    }
};

module.exports=controlador;
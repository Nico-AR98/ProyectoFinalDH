const fs = require("fs");

const bcrypt = require("bcrypt");

const User = {

    fileName:'../data/users.json',

    getData: ()=>{
        return JSON.parse(fs.readFileSync(User.fileName,'utf-8'));
    }, 

    generarId: function(){
        let usuarios = User.listarUsuarios();
        let ultimoUsuario = usuarios.pop();
        if (ultimoUsuario){
            return ultimoUsuario.id + 1
        }
        return 1; 
    },

    listarUsuarios: function(){
        return User.getData();
    }, 

    filtrarPorPk:(id)=>{
        let usuarios = User.listarUsuarios();
        let usuarioBuscado = usuarios.find(usuario => usuario.id ===id);
        return usuarioBuscado;
    },

    filtrarPorEmail:(email)=>{
        let usuarios = User.listarUsuarios();
        let usuarioBuscado = usuarios.find(usuario => usuario.email ===email);
        return usuarioBuscado;
    },

    create: (req) => {
        let usuarios = User.listarUsuarios();
        let nuevoUsuario = {
            id:User.generarId(),
            nombreCompleto:req.body.nombreCompleto ,
            email:req.body.email ,
            telefono: req.body.telefono,
            password:bcrypt.hashSync(req.body.password,10),
            img:"/images/users/" + req.file.filename,
        }
        usuarios.push(nuevoUsuario);
        fs.writeFileSync(User.fileName,JSON.stringify(usuarios,null,''));
        return nuevoUsuario;
    },

    delete: (id)=> {
        let usuarios = User.listarUsuarios();
        let usuariosModificado = usuarios.filter(usuario => usuario.id !==id);
        fs.writeFileSync(User.fileName,JSON.stringify(usuariosModificado,null,''));
        return true;
    }

}

module.exports = User;
let db = require('../../database/models'); //Importo la base de datos

const controlador = {
    home: (req,res)=>{
        db.productos.findAll()
            .then(function(productos){
                res.render('index',{'productos':productos});
        })   
    },
}

module.exports=controlador;
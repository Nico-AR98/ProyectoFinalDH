const db = require('../../database/models'); //Importo la base de datos
const op = db.sequelize.op;

module.exports = {
    list: (req,res)=> {
        db.productos
            .findAll()
            .then(productos => {
                return res.status(200).json({
                    count: productos.length,
                    products: productos,
                    status:200
                })
        })
    },
    show: (req,res)=>{
        db.productos
            .findByPk(req.params.id)
            .then(producto =>{
                return res.status(200).json({
                    product: producto,
                    status:200
                })
        })
    }
}
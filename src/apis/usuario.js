const db = require('../../database/models'); //Importo la base de datos
const op = db.sequelize.op;

module.exports = {
    list: (req,res)=> {
        db.usuarios
            .findAll()
            .then(usuarios => {
                return res.status(200).json({
                    count: usuarios.length,
                    users: usuarios,
                    status:200
                })
            })
    },
}
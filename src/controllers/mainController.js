const fs = require("fs");

const productos = JSON.parse(fs.readFileSync("../data/products.json","utf-8"));


const controlador = {
    home:(req, res) => {
        res.render('index',{'productos':productos});
    },
}

module.exports=controlador;
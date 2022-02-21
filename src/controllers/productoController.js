const fs = require("fs");

const productos = JSON.parse(fs.readFileSync("../data/products.json"));

const controlador= {
    
    catalogo: (req,res)=>{
        res.render("catalogoDeProductos",{'productos':productos});
    },

    detalle: (req, res) => {
        let idProducto =req.params.idProducto;
        var producto;
        for(let i=0;i<productos.length;i++){
            if (productos[i].id==idProducto){
                producto = productos[i]
            }
        }
        let precioCuota = ((producto.precio)/12).toFixed(2)
        res.render('productDetail',{'producto':producto,'precioCuota':precioCuota})
    },

    crear:(req,res)=>{
        res.render("creacionproducto");
    },

    editar:(req, res) => {
        let idProducto =req.params.idProducto;
        var producto;
        for(let i=0;i<productos.length;i++){
            if (productos[i].id==idProducto){
                producto = productos[i]
            }
        }
        res.render('editarprod',{'producto':producto});
    },


};

module.exports=controlador;
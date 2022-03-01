const { redirect } = require("express/lib/response");
const fs = require("fs");

const productos = JSON.parse(fs.readFileSync("../data/products.json","utf-8"));

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

    registrar:(req,res)=>{
        let nuevoProducto = {
            id: productos.length+1,
            nombre:req.body.nombre ,
            descripcion:req.body.descripcion ,
            talles:req.body.talles,
            composicion: req.body.composicion,
            categoria:req.body.categoria ,
            precio: req.body.precio,
            imagen:"/images/productos/" + req.file.filename,
        }

        productos.push(nuevoProducto);

        arrayModificado = productos;

        //Añadir el nuevo producto al archivo JSON

        fs.writeFileSync("../data/products.json",JSON.stringify(arrayModificado));

        res.redirect("/producto");

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

    borrar: (req,res)=>{
        let idProducto =req.params.idProducto;
        for(let i=0;i<productos.length;i++){
            if (productos[i].id==idProducto){
                productos.splice(i)
            }
        }
        res.redirect("/");
    }
};

module.exports=controlador;
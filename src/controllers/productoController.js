const { redirect } = require("express/lib/response");
const fs = require("fs");

const productos = JSON.parse(fs.readFileSync("../data/products.json","utf-8"));

const categorias = ["Hombres","Mujeres","Accesorios"];

const talles = ["XS","S","M","L","XL"];

const colores = ["Negro","Rojo","Blanco","Celeste","Rosado","Gris","Naranja","Azul","Amarillo","Verde","Combinado","Tricolor"];

const campos = ["id","nombre","descripcion","color","talles","categoria","precio"];


//Funciones

function modificarJSON(res){
    arrayModificado = productos;

    //Añadir el nuevo producto al archivo JSON

    fs.writeFileSync("../data/products.json",JSON.stringify(arrayModificado));

    res.redirect("/producto");
};

const controlador= {
 
    catalogo: (req,res)=>{
        res.render("catalogoDeProductos",{'productos':productos});
    },

    detalle: (req, res) => {
        let idProducto =req.params.idProducto;
        var producto = productos[idProducto-1];
        let precioCuota = ((producto.precio)/12).toFixed(2)
        res.render('productDetail',{producto,precioCuota})
    },

    crear:(req,res)=>{
        res.render("creacionproducto",{categorias,talles,colores});
    },

    registrarCreacion:(req,res)=>{
        let form = req.body;
        let nuevoProducto = {
            id: productos.length+1,
            nombre:form.nombre ,
            descripcion:form.descripcion ,
            color: form.color,
            talles:form.talles,
            categoria:form.categoria ,
            precio: form.precio,
            imagen:"/images/productos/" + req.file.filename,
        }
        productos.push(nuevoProducto);
        modificarJSON(res);
    },

    editar:(req, res) => {
        let idProducto =req.params.idProducto;

        var producto = productos[idProducto-1];

        res.render('editarprod',{producto,categorias,talles,colores});

    },

    registrarEdicion:(req,res)=>{
        let form = req.body;
        let idProducto = req.params.idProducto;
        let producto=productos[idProducto-1];
        let productoEditado = {
            id: producto.id,
            nombre:form.nombre ,
            descripcion:form.descripcion ,
            color: form.color,
            talles:form.talles,
            categoria:form.categoria ,
            precio: form.precio,
        }
        if(!req.file){
            var imagen = {imagen: producto.imagen};
            
        } else {
            var imagen = {imagen: "/images/productos/" + req.file.filename};
        }
        productoEditado = Object.assign(productoEditado,imagen);

        productos[idProducto-1]=productoEditado;
        
        modificarJSON(res);
    },

    borrar: (req,res)=>{
        let idProducto =req.params.idProducto;
        /*for(let i=0;i<productos.length;i++){
            if (productos[i].id==idProducto){
                productos.splice(i)
            }
        }*/
        productos.splice(productos[idProducto-1])

        modificarJSON(res);
    }
};

module.exports=controlador;
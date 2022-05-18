let db = require('../../database/models'); //Importo la base de datos

const { validationResult } = require("express-validator");

const categorias = ["Hombres","Mujeres","Accesorios"];

const talles = ["XS","S","M","L","XL"];

const colores = ["Negro","Rojo","Blanco","Celeste","Rosado","Gris","Naranja","Azul","Amarillo","Verde","Combinado","Tricolor"];

const controlador= {
 
    catalogo: (req,res)=>{
        db.productos.findAll()
            .then(function(productos){
                res.render("catalogoDeProductos",{'productos':productos});
        })   
    },

    detalle: (req, res) => {

        db.productos.findByPk(req.params.idProducto)
            .then(function(producto){
                let precioCuota = ((producto.precio)/12).toFixed(2)
                res.render("productDetail",{producto,precioCuota});
        })
    },

    crear:(req,res)=>{
        res.render("creacionproducto",{categorias,talles,colores});
    },

    registrarCreacion:(req,res)=>{
        let form = req.body;
        let errores = validationResult(req);  

        if(!errores.isEmpty()){
            return res.render('creacionproducto',{
                errores:errores.array(),
                old: req.body,
                categorias,
                talles,
                colores
            });
        } else {

            db.productos.create({
                nombre:form.nombre,
                descripcion:form.descripcion,
                talle:form.talle,
                color:form.color,
                categoria: form.categoria,
                precio:form.precio,
                stock:form.stock,
                imagen:"/images/productos/" + req.file.filename,
            });

            res.redirect('/producto')
        }
    },

    editar:(req, res) => {

        db.productos.findByPk(req.params.idProducto)
        .then(function(producto){
            res.render('editarprod',{producto,categorias,talles,colores});
        })

    },

    registrarEdicion:(req,res)=>{
        let form = req.body;
        let errores = validationResult(req);  

        if(!errores.isEmpty()){
            return res.render('editarprod',{
                errores:errores.array(),
                old: req.body,
                producto,
                categorias,
                talles,
                colores
            });
        } else {

            db.productos.update({
                    nombre:form.nombre,
                    descripcion:form.descripcion,
                    talle:form.talle,
                    color:form.color,
                    categoria: form.categoria,
                    precio:form.precio,
                    stock:form.stock,
                    imagen:"/images/productos/" + req.file.filename,
                }, {where:
                    {id: req.params.idProducto}  
                });

        
            res.redirect('/producto');
        }
    },

    borrar: (req,res)=>{

        db.productos.destroy({
            where:{
                id:req.params.idProducto
            }
        });

        res.redirect('/producto');
    }
};

module.exports=controlador;
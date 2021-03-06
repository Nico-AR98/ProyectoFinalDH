const express = require("express");
const path = require("path");
const app = express();
const methodOverride=require("method-override");
let session = require('express-session');
const userLoggedMiddleware = require('../middlewares/userLoggedMiddleware');

//Config de EJS Template Engine
app.set("view engine", "ejs")


//Config archivos estáticos
app.use(express.static("../public"));

//Config formularios
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(methodOverride("_method"));

//Config session
app.use(session({
    secret: "Ambos Seven",  
    resave: false,
    saveUninitialized: false,
}));

//Esto me sirve para acceder a la session desde las vistas
app.use(function(req, res, next) {
    res.locals.user = req.session.user;
    next();
});

app.use(userLoggedMiddleware);

//Rutas
const rutasProducto = require("./routes/producto");
const rutasMain = require("./routes/main");
const rutasUser = require("./routes/user");
const rutasCarrito = require("./routes/carrito");
const rutasApi = require("./routes/api");


app.use("/producto", rutasProducto);
app.use("/user", rutasUser);
app.use("/carrito", rutasCarrito);
app.use("/api", rutasApi);
app.use("/", rutasMain);


app.get('/productCart', (req, res) => {
    res.sendFile(__dirname + '/views/productCart.html');
});


app.listen(process.env.PORT || 3000, function() {
    console.log("Servidor corriendo en puerto 3000");
});
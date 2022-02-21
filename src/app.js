const express = require("express");
const path = require("path");
const app = express();

//Config de EJS Template Engine
app.set("view engine", "ejs")


//Config archivos estáticos
app.use(express.static("../public"));

//Rutas
const rutasProducto = require("./routes/producto");
const rutasMain = require("./routes/main");
const rutasUser = require("./routes/user");
const rutasCarrito = require("./routes/carrito");


app.use("/producto", rutasProducto);
app.use("/user", rutasUser);
app.use("/carrito", rutasCarrito);
app.use("/", rutasMain);


app.get('/productCart', (req, res) => {
    res.sendFile(__dirname + '/views/productCart.html');
});


app.listen(process.env.PORT || 3000, function() {
    console.log("Servidor corriendo en puerto 3000");
});
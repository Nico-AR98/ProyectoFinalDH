//Esta función redirige a la página de inicio si existe un user logueado
function guestMiddleware(req,res,next){
    if(req.session.user){
        return res.redirect('/')
    }
    next();
}

module.exports = guestMiddleware
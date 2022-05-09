//Este middleware redirige al login cuando alguien quiere acceder a una página que requiere autenticación

function authMiddleware(req,res,next){
    if(!req.session.user){
        return res.redirect('user/login')
    }
    next()
}
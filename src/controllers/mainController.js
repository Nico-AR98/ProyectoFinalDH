var productos=[
    {nombre: 'Ambo Arciel Blanco',
    descripcion: "Chaqueta y pantalón blanco combinación con naranja.Pantalón recto y chaqueta cuello cruzado Mao.TELA ARCIEL",
    composicion: "El Ambo Arciel Blanco (65% Polyester, 35% Viscosa) se compone de chaqueta poplin finita blanca con detalles en color naranja en bolsillos, cuello, mangas. Tiras ajustables en la espalda para estilizar el cuerpo a gusto!. Pantalón recto blanco con detalles en naranja.",
    precio: 3500.00,
    srcImg:"/images/producto1.jpg",
    },

    {nombre: 'Ambo Arciel Fucsia',
    descripcion: "Chaqueta y pantalón fucsia combinación con rosa bebé.Pantalón recto y chaqueta cuello V.TELA ARCIEL",
    composicion: "El Ambo Arciel Fucsia (50% Polyester, 50% Algodón) se compone de chaqueta poplin finita fucsia con detalles en color rosa bebé en bordes de bolsillos, cuello, mangas. Pantalón poplin fucsia con detalles en rosa bebé con cintura ajustable.",
    precio: 2500.00,
    srcImg:"/images/producto2.jpg",
    },

    {nombre: 'Ambo Spandex Combinado',
    descripcion: "Chaqueta blanca y pantalón negro.Pantalón recto y chaqueta cuello Y. TELA SPANDEX",
    composicion:"El Ambo Spandex Combinado (100% Algodón) se compone de chaqueta blanca con detalles en color negro en bolsillos, cuello, mangas. Pantalón recto negro con bolsillos.",
    precio: 4500.00,
    srcImg:"/images/producto3.jpg",
    },

    {nombre: 'Ambo Spandex Gris',
    descripcion: "Chaqueta gris combinación con rosado y pantalón gris.Pantalón recto y chaqueta cuello V.TELA SPANDEX",
    composicion:"El Ambo Spandex Gris (100% Algodón) se compone de chaqueta gris con detalles en color rosado en bolsillo, cuello y mangas. Pantalón gris con bolsillos y cintura ajustable.",
    precio: 3000.00,
    srcImg:"/images/producto4.jpg",
    },

    {nombre: 'Ambo Spandex Celeste',
    descripcion: "Chaqueta y pantalón celeste combinación con rosado.Pantalón recto y chaqueta cuello Y.TELA PRIMAVERAL",
    composicion:"El Ambo Primaveral Celeste (100% Lino) se compone de chaqueta celeste con detalles en color rosado en el cuello. Pantalón celeste con detalles en bolsillos y cintura ajustable.",
    precio: 2800.00,
    srcImg:"/images/producto5.jpg",
    },

    {nombre: 'Ambo Spandex Rosado',
    descripcion: "Chaqueta rosada y pantalón negro.Pantalón recto y chaqueta cuello V.TELA SPANDEX",
    composicion:"El Ambo Spandex Rosado (75% Algodón, 25% Polyester) se compone de chaqueta rosada con detalles en color negro en el cuello. Pantalón negro con detalles en bolsillos y cintura ajustable.",
    precio: 3500.00,
    srcImg:"/images/producto6.jpg",
    },
    
];

const controlador = {
    home:(req, res) => {
        res.render('index',{'productos':productos});
    },
}

module.exports=controlador;
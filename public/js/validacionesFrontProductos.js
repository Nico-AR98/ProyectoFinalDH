const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{5,50}$/, 
	precio: /^\d{2,10}$/,
    stock: /^\d{2,10}$/,
    color:/^[a-zA-ZÀ-ÿ\s]{5,20}$/,
};

const campos = {
	nombre: false,
    img: false,
    precio: false,
    stock: false,
    color:false,
};

const validarFormulario = (e)=>{
    switch(e.target.name){
        case 'nombre':
            validarCampo(expresiones.nombre,e.target,'nombre')
        break;

        case 'descripcion':
            validarDescripcion();
        break;

        case 'precio':
            validarCampo(expresiones.precio,e.target,'precio')
        break;

        case 'stock':
            validarCampo(expresiones.stock,e.target,'stock')
        break;

        case 'img':
            validarImg();
        break;

        case 'color':
            validarCampo(expresiones.color,e.target,'color');
        break;

    }
};

const validarDescripcion = () => {
    const inputDescripcion = document.getElementById('descripcion');
    if(inputDescripcion.value.length <20){
        validacionError('descripcion');
    } else {
        validacionOk('descripcion');
    }
}

inputs.forEach((input)=>{
    input.addEventListener('keyup',validarFormulario);
    input.addEventListener('blur',validarFormulario);
});

formulario.addEventListener('submit',(e)=>{

	if(!(campos.nombre && campos.precio && campos.stock && campos.descripcion && campos.img && campos.color )){
        e.preventDefault();
		document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
	} 
});





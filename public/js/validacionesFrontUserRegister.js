const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{2,40}$/, 
	password: /^.{8,12}$/, 
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ 
};

const campos = {
	nombreCompleto: false,
	password: false,
	email: false,
	telefono: false,
    img: false,
    passwordConfirm: false,
};

const validarFormulario = (e)=>{
    switch(e.target.name){
        case 'nombreCompleto':
            validarCampo(expresiones.nombre,e.target,'nombreCompleto')
        break;

        case 'email':
            validarCampo(expresiones.correo,e.target,'email')
        break;

        case 'telefono':
            validarCampo(expresiones.telefono,e.target,'telefono')
        break;

        case 'img':
            validarImg();
        break;

        case 'password':
            validarCampo(expresiones.password,e.target,'password');
            validarPassword();
        break;

        case 'passwordConfirm':
            validarPassword();
        break;
    }
};

const validarPassword = () => {
	const inputPassword1 = document.getElementById('password');
	const inputPassword2 = document.getElementById('passwordConfirm');

	if(inputPassword1.value !== inputPassword2.value){

        validacionError('passwordConfirm');

	} else {

        validacionOk('passwordConfirm');
	}
};

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
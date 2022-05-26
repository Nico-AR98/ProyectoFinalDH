const formulario = document.getElementById('userRegister');

const inputs = document.querySelectorAll('#userRegister input');

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

const validarCampo = (expresion,input,campo)=> {
    
    if(expresion.test(input.value)){
        validacionOk(campo);

    } else {
        validacionError(campo);
    }

};

const validacionOk = (campo)=>{
    document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
    document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
    document.querySelector(`#grupo__${campo} i`).classList.remove('ocultar'); 
    document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle'); //Con esto le quito el icono de cruz
    document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');//Con esto le quito el icono de la palomita
    document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo')
    campos[campo] = true;
};

const validacionError = (campo) => {
    document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
    document.querySelector(`#grupo__${campo} i`).classList.remove('ocultar'); 
    document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle'); 
    document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
    document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');//para que aparezca el mensaje de error
    campos[campo] = false;
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

const validarImg = ()=>{
    let archivo = document.getElementById('img').value,

    extension = archivo.substring(archivo.lastIndexOf('.'),archivo.length);

    if(document.getElementById('img').getAttribute('accept').split(',').indexOf(extension) < 0) {
        validacionError('img');
    } else {
        validacionOk('img');
    }
}


inputs.forEach((input)=>{
    input.addEventListener('keyup',validarFormulario);
    input.addEventListener('blur',validarFormulario);
});

userRegister.addEventListener('submit',(e)=>{

	if(!(campos.nombreCompleto && campos.password && campos.email && campos.telefono && campos.img && campos.passwordConfirm)){
        e.preventDefault();
		document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
	} 
});


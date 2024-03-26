// Variables
const formulario=document.querySelector('#formulario');
const listaTweet = document.querySelector('#lista-tweets');
let tweets=[];
// addEventListener
addEventListener();
function addEventListener(){
    formulario.addEventListener('submit', agregarTweet);
}
// funciones

function agregarTweet(e){
    e.preventDefault();

    const tweet= document.querySelector('#tweet').value;
    if(tweet===''){
        mostrarError('El campo no puede estar vacio');
        return;
    }
    console.log('agregando tweet');

}

function mostrarError(error){
    const mensaje=document.createElement('P');
    mensaje.textContent= error;
    mensaje.classList.add('error');

    const contenido=document.querySelector('#contenido');
    contenido.appendChild(mensaje);
}
//Actividad 1

var fotoMain = document.getElementById("img-main");
var fotoMain2 = document.getElementById("img-main-2");

fotoMain.addEventListener("mouseover", cambiarFoto);
fotoMain2.addEventListener("mouseout", revertirFoto);

function cambiarFoto(){
    fotoMain.style.display = "none",
    fotoMain2.style.display = "block"
}

function revertirFoto(){
    fotoMain.style.display = "block",
    fotoMain2.style.display = "none"
}

//Actividad 2 

document.addEventListener('DOMContentLoaded', () =>{
    const botonSaberMas = document.querySelectorAll('.boton-js');
    const tarjetasOcultas = document.querySelectorAll('.tarjeta-oculta');

    botonSaberMas.forEach((boton, index) => {
        boton.addEventListener('click', function (){
            tarjetasOcultas[index].style.display = 'block';
        });
    });

        const botonCerrar = document.querySelectorAll('.boton-cerrar');
    
        botonCerrar.forEach((boton, index) => {
            boton.addEventListener('click', function (){
                tarjetasOcultas[index].style.display = 'none';
            })
        });
    
    });

//Actividad 3 

document.addEventListener('DOMContentLoaded', () =>{
    const botonSend = document.getElementById("boton-enviado");
    const mensajeEnviado = document.getElementById("mensaje-enviado");

        botonSend.addEventListener('click', () => {
            event.preventDefault();
            if(infoRequerida()){
                mensajeEnviado.style.display = 'block';
            } else {
                alert("Por favor completa los campos requeridos");
            }
        });

//Verifico que los campos requeridos esten completos antes de enviar el mensaje oculto 
        function infoRequerida(){
            const camposRequeridos = document.querySelectorAll('[required]');
            return Array.from(camposRequeridos).every(campo => campo.value.trim() !== '');
        }

    });


//Actividad 4

let index = 0; 
const cardWidth = 230; 


function moverIzquierda() {
  if (index > 0) {
    index--;
    actualizarSlider();
  }
}


function moverDerecha() {
  const totalTarjetas = document.querySelectorAll('.tarjeta').length;
  if (index < totalTarjetas - 3) {
    index++;
    actualizarSlider();
  }
}

// Función para actualizar la posición del slider
function actualizarSlider() {
  const translateValue = -index * (cardWidth + 30); // Ancho de la tarjeta más el margen (15px * 2)
  document.querySelector('.contenido-slide').style.transform = `translateX(${translateValue}px)`;
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.boton-antes').addEventListener('click', moverIzquierda);
  document.querySelector('.boton-proximo').addEventListener('click', moverDerecha);
});

































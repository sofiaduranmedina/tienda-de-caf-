
let contadorDeProductos = 0;

let botonesAgregar = document.querySelectorAll('.order-btn');
let mensajeToast   = document.getElementById('toast');
let spanContador   = document.getElementById('cart-count');

function agregarProducto(event) {

  let boton = event.target;

  
  if (boton.textContent.trim() !== "Comprar") {
    return;
  }


  contadorDeProductos++;


  if (spanContador) {
    spanContador.textContent = contadorDeProductos;
  }


  if (mensajeToast) {
    mensajeToast.classList.add('show');

    setTimeout(function () {
      mensajeToast.classList.remove('show');
    }, 3000);
  }
}

for (let i = 0; i < botonesAgregar.length; i++) {
  botonesAgregar[i].addEventListener('click', agregarProducto);
}
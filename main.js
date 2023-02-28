document.addEventListener('DOMContentLoaded', traerProductos)

let carrito = [];
let total = 0;
let containerProducts = document.querySelector('.shop-items')

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '37543bcd28mshb27a13e7e1ea99bp1db8e3jsn49a60880b5da',
		'X-RapidAPI-Host': 'books39.p.rapidapi.com'
	}
};

async function traerProductos(){
  try {
    const resultado = await fetch('https://books39.p.rapidapi.com/CZFA4F/books', options)
    const respuesta = await resultado.json()
    
    const productos = respuesta.slice(1,11)

    pintarProductos(productos)
    console.log(productos)
  } catch (error) {
    console.log(error)
  }
}

function pintarProductos(productos){
  productos.forEach(product => {
    containerProducts.innerHTML += `
    <div class="shop-item">
                  <span class="shop-item-title">${product.TITLE}</span>
                  <img class="shop-item-image" src="">
                  <div class="shop-item-details">
                      <span class="shop-item-year">Release year: ${product.YEAR}</span>
                      <button class="btn btn-primary shop-item-button" type="button">ADD TO CART</button>
                  </div>
              </div>`
              aniadirAlCarrito()
})
}

function aniadirAlCarrito(){
    let addBtns = document.querySelectorAll('.shop-item-button')
    addBtns  = [...addBtns];
    
    addBtns.forEach(btn =>{
      btn.addEventListener('click', () => {
        console.log('hola mundo')
      })
    })
}

const contenedorModal = document.getElementsByClassName('modal-contenedor')[0]
const botonAbrir = document.getElementById('boton-carrito')
const botonCerrar = document.getElementById('carritoCerrar')
const modalCarrito = document.getElementsByClassName('modal-carrito')[0]
const finCompra = document.getElementById('finalizar-compra')


botonAbrir.addEventListener('click', ()=>{
    contenedorModal.classList.toggle('modal-active')
})
botonCerrar.addEventListener('click', ()=>{
    contenedorModal.classList.toggle('modal-active')
})

contenedorModal.addEventListener('click', (event) =>{
    contenedorModal.classList.toggle('modal-active')

})
modalCarrito.addEventListener('click', (event) => {
    event.stopPropagation() 
})

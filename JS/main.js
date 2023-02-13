const Productos = [
    {id: 1, nombre: "Lapices clásicos", tipo: "libreria", cantidad: 1, desc: "Lapiz clasico", precio: 100, img: './img/lapiz.png'},
    {id: 2, nombre: "Lapices de colores", tipo: "libreria", cantidad: 1, desc: "Lapices de colores x12u", precio: 2500, img: './img/colores.jpg'},
    {id: 3, nombre: "Fibras de colores", tipo: "librería", cantidad: 1, desc: "Fibras de colores x6u", precio: 2000, img: './img/fibras.jpg'},
    {id: 4, nombre: "Cuaderno Rivadavia", tipo: "cuadernos", cantidad: 1, desc: "Cuaderno Rivadavia hojas rayadas", precio: 560, img: './img/rivadavia.jpg'},
    {id: 5, nombre: "Cuaderno Exito", tipo: "cuadernos", cantidad: 1, desc: "Cuaderno Exito hojas rayadas", precio: 800, img: './img/exito.jpg'},
    {id: 6, nombre: "Cuadernillo hoja rayada", tipo: "cuadernillos", cantidad: 1, desc: "Cuadernillo hojas rayadas", precio: 1000, img: './img/cuadernillos.jpg'},
    {id: 7, nombre: "Cuadernillo hoja a cuadros", tipo: "cuadernillos", cantidad: 1, desc: "Cuadernillo hojas a cuadros", precio: 1000, img: './img/cuadernillos.jpg'},
    {id: 8, nombre: "Carpeta diseño variado", tipo: "carpetas", cantidad: 1, desc: "Carpetas diseño random", precio: 500, img: './img/carpetas.jpg'},
    {id: 9, nombre: "Calculadora cientifica Casio", tipo: "variado", cantidad: 1, desc: "Calculadora cientifica Casio", precio: 4500, img: './img/casio.jpg'},
    {id: 10, nombre: "Calculadora", tipo: "variado", cantidad: 1, desc: "Calculadora clásica", precio: 700, img: './img/calcu.jpg'},
    {id: 11, nombre: "Set de fibras Sharpie", tipo: "libreria", cantidad: 1, desc: "Set de fibras Sharpie x16", precio: 6000, img: './img/sharpie.jpg'},
    {id: 12, nombre: "Kit League of Legends (Carpeta + Cartuchera)", tipo: "variado", cantidad: 1, desc: "Carpeta y cartu personalizadas de LoL", precio: 3500, img: './img/lol.jpg'},
    {id: 13, nombre: "Agendas 2023", tipo: "variado", cantidad: 1, desc: "Agendas 2023", precio: 850, img: './img/agendas.jpg'},
    {id: 14, nombre: "Libro de notas", tipo: "cuadernillos", cantidad: 1, desc: "Cuaderno para notas", precio: 1400, img: './img/notas.png'},
    {id: 15, nombre: "Gomas para borrar", tipo: "libreria", cantidad: 1, desc: "Gomas", precio: 70, img: './img/gomas.jpg'},
    {id: 16, nombre: "Mochila lisa", tipo: "variado", cantidad: 1, desc: "Mochila lisa negra", precio: 6500, img: './img/mochilisa.jpg'},
    {id: 17, nombre: "Mochila animada", tipo: "variado", cantidad: 1, desc: "Mochila con animación variada", precio: 27500, img: './img/mochidiseño.png'},
    {id: 18, nombre: "Mochila diseñada", tipo: "variado", cantidad: 1, desc: "Mochila con diseño variado", precio: 10250, img: './img/mochianimada.jpg'},
]

const contenedorProductos = document.getElementById('contenedor-productos')

const contenedorCarrito = document.getElementById('carrito-contenedor')

const botonVaciar = document.getElementById('vaciar-carrito')

const contadorCarrito = document.getElementById('contadorCarrito')

const cantidad = document.getElementById('cantidad')

const precioTotal = document.getElementById('precioTotal')

const cantidadTotal = document.getElementById('cantidadTotal')

const contenedorModal = document.getElementsByClassName('modal-contenedor')[0]

const botonAbrir = document.getElementById('boton-carrito')

const botonCerrar = document.getElementById('carritoCerrar')

const modalCarrito = document.getElementsByClassName('modal-carrito')[0]

let carrito = []

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('carrito')){
        carrito = JSON.parse(localStorage.getItem('carrito'))
        actualizarCarrito()
    }
})

botonVaciar.addEventListener('click', () => {
    carrito.length = 0

    actualizarCarrito()
})

Productos.forEach((producto) => {
    const div = document.createElement('div')
    div.classList.add('producto')
    div.innerHTML = `
    <img src=${producto.img} alt= "">
    <h3>${producto.nombre}</h3>
    <p>${producto.desc}</p>
    <p class="precioProducto">Precio:$ ${producto.precio}</p>
    <button id="agregar${producto.id}" class="boton-agregar">Agregar <i class="fas fa-shopping-cart"></i></button>

    `
    contenedorProductos.appendChild(div)

    const boton = document.getElementById(`agregar${producto.id}`)


    boton.addEventListener('click', () => {
        agregarAlCarrito(producto.id)
    })
})

const agregarAlCarrito = (prodId) => {

    const existe = carrito.some (prod => prod.id === prodId) 

    if (existe){ 
        const prod = carrito.map (prod => { 
            if (prod.id === prodId){
                prod.cantidad++
            }
        })
    } else { 
        const item = Productos.find((prod) => prod.id === prodId)

        carrito.push(item)
    }
    
    actualizarCarrito() 
}

const eliminarDelCarrito = (prodId) => {
    const item = carrito.find((prod) => prod.id === prodId)

    const indice = carrito.indexOf(item) 

    carrito.splice(indice, 1) 

    actualizarCarrito() 
    console.log(carrito)
}

const actualizarCarrito = () => {
    contenedorCarrito.innerHTML = "" 
    
    carrito.forEach((prod) => {
        const div = document.createElement('div')
        div.className = ('productoEnCarrito')
        div.innerHTML = `
        <p>${prod.nombre}</p>
        <p>Precio:$${prod.precio}</p>
        <p>Cantidad: <span id="cantidad">${prod.cantidad}</span></p>
        <button onclick="eliminarDelCarrito(${prod.id})" class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
        `

        contenedorCarrito.appendChild(div)
        
        localStorage.setItem('carrito', JSON.stringify(carrito))

    })
    
    contadorCarrito.innerText = carrito.length 

    console.log(carrito)

    precioTotal.innerText = carrito.reduce((acc, prod) => acc + prod.cantidad * prod.precio, 0)
    

}

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



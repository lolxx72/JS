const Productos = [
  {
    id: 1,
    nombre: "Lapices",
    precio: 100,
  },
  {
    id: 2,
    nombre: "Cuadernillos",
    precio: 250,
  },
  {
    id: 3,
    nombre: "Lapiceras",
    precio: 150,
  },
  {
    id: 4,
    nombre: "Mochilas lisas",
    precio: 8000,
  },
  {
    id: 5,
    nombre: "Mochilas diseño variado",
    precio: 25000,
  },
];

let Carrito = [];

const divisa = "$";

const carritoItems = document.querySelector("#items");

const carritoHTML = document.querySelector("#carrito");

const totalHTML = document.querySelector("#total");

const botonVaciar = document.querySelector("#boton-vaciar");

function renderizarProductos() {
  Productos.forEach((info) => {
    const contenedor = document.createElement("div");
    contenedor.classList.add("card", "col-sm-4");

    const CardBody = document.createElement("div");
    CardBody.classList.add("card-body");

    const miTitle = document.createElement("h5");
    miTitle.classList.add("card-title");
    miTitle.textContent = info.nombre;

    const miImagen = document.createElement("img");
    miImagen.classList.add("img-fluid");
    miImagen.setAttribute("src", info.imagen);

    const miProdPrecio = document.createElement("p");
    miProdPrecio.classList.add("card-text");
    miProdPrecio.textContent = `${info.precio}${divisa}`;

    const miBoton = document.createElement("button");
    miBoton.classList.add("btn", "btn-primary");
    miBoton.textContent = "Agregar";
    miBoton.setAttribute("marcador", info.id);
    miBoton.addEventListener("click", anyadirProductoAlCarrito);

    CardBody.append(miImagen, miTitle, miProdPrecio, miBoton);

    contenedor.append(CardBody);

    carritoItems.append(contenedor);
  });
}

function anyadirProductoAlCarrito(evento) {
  Carrito.push(evento.target.getAttribute("marcador"));

  renderizarCarrito();
}

function renderizarCarrito() {
  carritoHTML.textContent = "";

  const carritoSinDuplicados = [new Set(Carrito)];
  carritoSinDuplicados.forEach((item) => {
    const miItem = Productos.filter((itemProductos) => {
      return itemProductos.id === parseInt(item);
    });

    const numeroUnidadesItem = Carrito.reduce((total, itemId) => {
      return itemId === item ? (total += 1) : total;
    }, 0);

    const miCarrito = document.createElement("li");
    miCarrito.classList.add("list-group-item", "text-right", "mx-2");
    miCarrito.textContent = `${numeroUnidadesItem} x ${miItem[0].nombre} - ${miItem[0].precio}${divisa}`;

    const miBoton = document.createElement("button");
    miBoton.classList.add("btn", "btn-danger", "mx-5");
    miBoton.textContent = "Eliminar Producto";
    miBoton.style.marginLeft = "1rem";
    miBoton.dataset.item = item;
    miBoton.addEventListener("click", borrarItemCarrito);

    miCarrito.append(miBoton);
    carritoHTML.append(miCarrito);
  });
  totalHTML.textContent = calcularTotal();
}

function borrarItemCarrito(evento) {
  const id = evento.target.dataset.item;

  Carrito = Carrito.filter((carritoId) => {
    return carritoId !== id;
  });

  renderizarCarrito();
}

function vaciarCarrito() {
  Carrito = [];

  renderizarCarrito();
}

botonVaciar.addEventListener("click", vaciarCarrito);

function calcularTotal() {
  return Carrito.reduce((total, item) => {
    const miItemTotal = Productos.filter((itemProd) => {
      return itemProd.id === parseInt(item);
    });

    return total + miItemTotal[0].precio;
  }, 0).toFixed(2);
}

renderizarProductos();
renderizarCarrito();

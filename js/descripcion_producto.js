export function llenarCajaDescripcion(producto) {
  let caja_descripcion_DOM = document.querySelector(".descripcion_del_producto");

  let hagaloUstedMismoBoton = "";
  if (producto.estado) {
    hagaloUstedMismoBoton = '<button class="boton">Hágalo usted mismo</button>';
  }

  caja_descripcion_DOM.innerHTML = `
    <img class="imagen" src="${producto.img}" alt="">
    <h1 class="titulo">${producto.titulo}</h1>
    <p class="descripcion">Descripcion: ${producto.descripcion}</p>
    <a href="index.html">
      <button class="boton">↩️</button>
    </a>
    <button class="boton">Agregar al carrito 🛒</button>
    <button class="boton">Compartir</button>
    ${hagaloUstedMismoBoton}
  `;
}



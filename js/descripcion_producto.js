export function llenarCajaDescripcion(producto) {
    let caja_descripcion_DOM = document.querySelector(".descripcion_del_producto");
  
    caja_descripcion_DOM.innerHTML = `
      <img class="imagen" src="${producto.img}" alt="">
      <h1 class="titulo">${producto.titulo}</h1>
      <p class="descripcion">Descripcion: ${producto.descripcion}</p>
      <p class="pasos"> Pasos: ${producto.pasos.join("<br>")}</p>
      <p class="herramientas">Herramientas: ${producto.herramientas.join(", ")}</p>
    `;
  }
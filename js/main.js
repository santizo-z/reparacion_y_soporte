import {data} from "./data.js"
import { llenarCajaDescripcion } from "./descripcion_producto.js";

let main_DOM = document.querySelector("#main")

data.forEach((cada_item) => {


let item = document.createElement("div")
item.className = "item";
item.id = `${cada_item.id}`;

item.innerHTML = `
   <div class="caja_img">
    <img src="${cada_item.img}">
    </div>
    <h2>${cada_item.titulo}</h2>
    <p>${cada_item.descripcion}</p>
    <span>Q100.00 </span>
`

main_DOM.appendChild(item);
// Agregar evento clic a cada_item
item.addEventListener("click", () => {
    llenarCajaDescripcion(cada_item);
    let main = document.querySelector("#main");
  main.classList.add("ocultar");

  });
});






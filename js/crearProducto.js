import { clientServices } from "./services/client-services.js";

const starwarsProductos = document.querySelector("#star-wars-productos");
const consolasProductos = document.querySelector("#consolas-productos");
const variosProductos = document.querySelector("#varios-productos");


function crearTarjetaProducto(nombre,img,precio,enlace){
    const tarjetaDeProducto = `
    <li>
        <img class="imagen-producto" src="${img}" alt="">
        <p class="info-producto">${nombre}</p>
        <p class="info-producto">${precio}</p>
        <a class="enlaceProducto" href="${enlace}">Ver producto</a>
    </li>` 
    const nuevoProducto = document.createElement('li')
    nuevoProducto.innerHTML = tarjetaDeProducto;
    return nuevoProducto
    
}   

async function mostrarData(url,seccion){
    const data = await clientServices.traerProductos(url);
    data.forEach((producto) => {
        const nuevoProducto = crearTarjetaProducto(producto.nombreProducto,producto.imgProducto,producto.precioProducto,producto.enlaceProducto)
        seccion.appendChild(nuevoProducto);
    })
}
mostrarData("https://briobarbtech.github.io/api-geek.github.io/productos.json",starwarsProductos)
mostrarData("https://briobarbtech.github.io/api-geek.github.io/consoles.json",consolasProductos)
mostrarData("https://briobarbtech.github.io/api-geek.github.io/various.json",variosProductos)
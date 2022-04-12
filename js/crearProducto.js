import { clientServices } from "./services/client-services.js";

const starwarsProductos = document.querySelector("#star-wars-productos");


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
    starwarsProductos.appendChild(nuevoProducto);
}   

async function mostrarData(){
    const data = await clientServices.traerProductos();
    data.forEach((producto) => {
        crearTarjetaProducto(producto.nombreProducto,producto.imgProducto,producto.precioProducto,producto.enlaceProducto)
    })
}
mostrarData()

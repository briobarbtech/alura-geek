import { clientServices } from "./services/client-services.js";

const starwarsProductos = document.querySelector("#star-wars-productos");
const consolasProductos = document.querySelector("#consolas-productos");
const variosProductos = document.querySelector("#varios-productos");

var veces = 6;
if(starwarsProductos.clientWidth < 800){       // Verifico el tamaño del Elemento antes de que llamen a los elementos
    veces = 4                                   // Si es menor a 800ox solo va a llamar 4 elementos de la DB
}else{
    veces = 6                                   // En caso contrario llama a 6
};

starwarsProductos.addEventListener

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
    for (let i = 0; i < veces; i++) {
        const producto = data[i];
        const nuevoProducto = crearTarjetaProducto(producto.nombreProducto,producto.imgProducto,producto.precioProducto,producto.enlaceProducto)
        seccion.appendChild(nuevoProducto);
    }
}
mostrarData("https://briobarbtech.github.io/api-geek.github.io/productos.json",starwarsProductos)
mostrarData("https://briobarbtech.github.io/api-geek.github.io/consoles.json",consolasProductos)
mostrarData("https://briobarbtech.github.io/api-geek.github.io/various.json",variosProductos)
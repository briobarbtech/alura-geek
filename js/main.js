import { sections, products } from "./env/lists.js";
import { createSection, createProduct } from "./create-section.js";

const listaDeProductos = document.getElementById('productsList');

    
sections.forEach(section => {
    listaDeProductos.appendChild(createSection(section));
});

products.forEach(sections => {
    const section = document.getElementById(sections.sectionName);
    
    const productos = sections.product;
    section.appendChild(createProduct(productos));

})



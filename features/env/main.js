import { sections, products } from "./lists.js";
import { createSection, createProduct } from "../homepage/create-section.js";

const listaDeProductos = document.getElementById('productsList');

    
sections.forEach(section => {
    listaDeProductos.appendChild(createSection(section));
});

products.forEach(sections => {
    const section = document.getElementById(sections.sectionName);
    
    const productos = sections.product;
    section.appendChild(createProduct(productos));

})



const sectionAllProducts = document.querySelector('main');
sectionAllProducts.appendChild(createSection(allProducts));
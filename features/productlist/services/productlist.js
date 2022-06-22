import { allProducts, products } from "../../env/lists.js";
import { createProduct } from "../../homepage/create-section.js";

export const createSection = sections => {
    let section = document.createElement('section');
    section.setAttribute('id', sections.id);
    section.setAttribute('name', sections.dataName);
    let nombreSeccion = document.createElement('div')
    nombreSeccion.classList.add(sections.className)
    let nameP = document.createElement('p');
    nameP.innerHTML = sections.name;
    nameP.classList.add(sections.classTitle);
    let buttonAddProduct = document.createElement('button');
    buttonAddProduct.classList.add('button-add');
    buttonAddProduct.classList.add('add-product');
    buttonAddProduct.innerHTML = 'Agregar Producto';
    nombreSeccion.appendChild(nameP);
    nombreSeccion.appendChild(buttonAddProduct);
    
    const lista = document.createElement('ul');
    lista.setAttribute('id', sections.ul);
    lista.classList.add('lista-productos');

    section.appendChild(nombreSeccion);

    section.appendChild(lista);

    return section;
}


const sectionAllProducts = document.querySelector('main');
sectionAllProducts.appendChild(createSection(allProducts));



const section = document.querySelector('#list-products')


products.forEach(product => {
    const productos = product.product;
    section.appendChild(createProduct(productos));

})
export const createSection = sections => {
    let section = document.createElement('section');
    section.setAttribute('id', sections.id);
    section.setAttribute('name', sections.dataName);
    let nombreSeccion = document.createElement('div')
    nombreSeccion.classList.add(sections.className)
    let nameP = document.createElement('p');
    nameP.innerHTML = sections.name;
    nameP.classList.add(sections.classTitle);
    let buttonSeeMore = document.createElement('button');
    buttonSeeMore.classList.add('button-ver-mas');
    buttonSeeMore.classList.add('ver-mas');
    buttonSeeMore.innerHTML = 'Ver Mas';
    nombreSeccion.appendChild(nameP);
    nombreSeccion.appendChild(buttonSeeMore);
    
    const lista = document.createElement('ul');
    lista.setAttribute('id', sections.ul);
    lista.classList.add('lista-productos');

    section.appendChild(nombreSeccion);

    section.appendChild(lista);

    return section;
}

export const createProduct = producto => {
    const productoElemento = `
        <img class="imagen-producto" src="${producto.imgProducto}" alt="">
        <p class="info-producto">${producto.nombreProducto}</p>
        <p class="info-producto">${producto.precioProducto}</p>
        <a class="enlaceProducto" href="${producto.enlaceProducto}">Ver producto</a>` 
    const nuevoProducto = document.createElement('li');
    const nuevaSeccion = document.createElement('div');
    nuevaSeccion.classList.add(producto.clase);
    nuevoProducto.innerHTML = productoElemento;
    return nuevoProducto;
};
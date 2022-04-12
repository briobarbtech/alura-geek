function traerProductos(){
    const url = "https://briobarbtech.github.io/api-geek.github.io/productos.json"
    return fetch(url).then( respuesta => {
      return respuesta.json() 
    })
}
export const clientServices = {
    traerProductos,
}
function traerProductos(url){
    return fetch(url).then( respuesta => {
      return respuesta.json() 
    })
}
export const clientServices = {
    traerProductos,
}
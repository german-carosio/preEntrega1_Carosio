const products = [
    {
        id: 1, 
        name: 'Producto 1',
        precio: 100
    },
    {
        id: 2, 
        name: 'Producto 2',
        precio: 200
    },
    {
        id: 3, 
        name: 'Producto 3',
        precio: 300
    }
]

export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout(()=> {
            resolve(products)
        }, 500)
    })
}
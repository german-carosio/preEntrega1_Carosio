const products = [
    {
        id: 1, 
        name: 'Producto 1',
        precio: 100,
        img: ''
    },
    {
        id: 2, 
        name: 'Producto 2',
        precio: 200,
        img: ''
    },
    {
        id: 3, 
        name: 'Producto 3',
        precio: 300,
        img: ''
    },
    {
        id: 4, 
        name: 'Producto 4',
        precio: 400,
        img: ''
    },
    {
        id: 5, 
        name: 'Producto 5',
        precio: 500,
        img: ''
    },
    {
        id: 6, 
        name: 'Producto 6',
        precio: 600,
        img: ''
    }
    
]

export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout(()=> {
            resolve(products)
        }, 500)
    })
}
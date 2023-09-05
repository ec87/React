const products = [
    { 
        id: '1', 
        name: 'Lavavajilla 500ml', 
        price: 100, 
        category: 'lavavajillas', 
        img: 'https://statics.dinoonline.com.ar/imagenes/large_460x460/2790050_l.jpg', 
        stock: 10, 
        description:'Descripcion de Lavavajilla 500ml'
    },
    { id: '2', name: 'Detergente 250 ml', price: 200, category: 'detergente', img:'https://http2.mlstatic.com/D_NQ_NP_855063-MLA43705451108_102020-O.webp', stock: 20, description:'Descripcion de Detergente 250 ml'},
    { id: '3', name: 'Detergente 5 L', price: 2000, category: 'detergente', img:'https://http2.mlstatic.com/D_NQ_NP_794192-MLA47248190645_082021-O.webp', stock: 20, description:'Descripcion de Detergente 250 ml'},
    { id: '4', name: 'Jabon liquido 5L', price: 1200, category: 'jabonliquido', img:'https://officejob.com.ar/wp-content/uploads/2015/11/jx5-555x555.jpg', stock: 10, description:'Descripcion de Jabon liquido 5L'},
    { id: '5', name: 'Jabon liquido 250 ml', price: 200, category: 'jabonliquido', img:'https://http2.mlstatic.com/D_NQ_NP_961802-MLA44518440999_012021-O.webp', stock: 20, description:'Descripcion de Detergente 250 ml'},
    { id: '6', name: 'Limpiavidrios', price: 500, category: 'limpiavidrios', img:'https://http2.mlstatic.com/D_NQ_NP_675252-MLA45170116428_032021-O.webp', stock: 5, description:'Descripcion de Limpiavidrios'},
    { id: '7', name: 'Alcohol al 70%', price: 600, category: 'alcohol70', img:'https://quimisur.com.ar/wp-content/uploads/2020/10/AlcoholEth70Porta.jpg', stock: 25, description:'Descripcion de Alcohol al 70%'},
    { id: '8', name: 'Alcohol en gel', price: 800, category: 'alcoholgel', img:'https://redcolon.com.ar/media/catalog/product/cache/6d0d0c64e65eeb0a50b5bdeed319dd62/n/e/neutro_250.png', stock: 10, description:'Descripcion de Alcohol en gel'},
    { id: '9', name: 'Lavandina 5L', price: 1000, category: 'lavandina', img:'https://www.ofi-z.com/img/articulos/lavandina_de_5_litros_3_imagen1.jpg', stock: 5, description:'Descripcion de Lavandina 5L'},
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 1000)
    })
}

export const getProductById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
}


const products = []

export const getProducts =() => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products)
        },500)
    })
}
export const getProductsByCategory =(categoryId) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products.filter (p=>p.category === categoryId))
        },500)
    })
}
export const getProductById =(itemId) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products.find(p=>p.id == itemId))
        },500)
    })
}

const products = [
    {id:1, name:'Figura Luffy',price: 79, category: 'figura',img: 'https://www.banpresto.es/wp-content/uploads/2023/06/bp19596_frente.jpg',stock: 18,description: 'Descripcion de Figura'},
    {id:2, name:'Figura Law', price: 45, category: 'figura', img:'https://www.banpresto.es/wp-content/uploads/2022/06/logo_60204.jpg', stock: 3, descripcion:' Descripcion de Figura'},
    {id:3, name:'Manga Haikyuu', price: 45, category: 'manga', img:'https://pack-yak.intomanga.com/images/manga/Haikyuu/chapter/326/page/1/e5bc4ffa-861f-4d9d-b3a6-4506d885084a', stock: 3, descripcion:' Descripcion de manga'},
    {id:4, name:'Remera Jujutsu Kaisen', price: 45, category: 'indumentaria', img:'https://ideasmvd.com.uy/wp-content/uploads/2022/07/jujutsu-kaisen-sukuna-02-remera-blanca-ideas-mvd-800x892.jpg', stock: 10, descripcion:' Descripcion de remera'},

]

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

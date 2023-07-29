import React from 'react';
import { getProductById } from "./ItemProducts";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { Container, Row } from 'react-bootstrap';
import './css/ItemDetail.css';
import { db } from "./config/firebase";
import { getDocs, doc, collection, query, where } from "firebase/firestore";
import { useState, useEffect } from "react";


const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)
    
    const { itemId } = useParams()

    useEffect(() => {
        setLoading(true)
        const docRef = doc(db,'Items',itemId)
        
        getDocs(docRef)
            .then(response => {
                const data = response.data()
                const productAdapted ={id : response.id, ...data}
                setProduct(productAdapted)
            })
            .catch(error => {
                console.error(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [itemId])
    return (
        <Container>
            <Row className='ItemDetailContainer'>
                <ItemDetail {...product} />
            </Row>
        </Container>
    )
}
export default ItemDetailContainer;




// import React from 'react';
// import { useEffect, useState } from "react";
// import { getProductById } from "./ItemProducts";
// import ItemDetail from "./ItemDetail";
// import { useParams } from "react-router-dom";
// import { Container, Row } from 'react-bootstrap';
// import './css/ItemDetail.css';



// const ItemDetailContainer = () => {
//     const [product, setProduct] = useState(null)

//     const { itemId } = useParams()

//     useEffect(() => {
//         getProductById(itemId)
//             .then(response => {
//                 setProduct(response)
//             })
//             .catch(error => {
//                 console.error(error)
//             })
//     }, [itemId])
//     return (
//         <Container>
//             <Row className='ItemDetailContainer'>
//                 <ItemDetail {...product} />
//             </Row>
//         </Container>
//     )
// }
// export default ItemDetailContainer;


import { useEffect, useState } from "react";
import { getProducts, getProductsByCategory } from "./ItemProducts";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import React from 'react';
import { Container, Row } from 'react-bootstrap';
import './css/ItemDetail.css';
import { db } from "./config/firebase";
import { getDocs, collection, query, where } from "firebase/firestore";
import ItemDetail from "./ItemDetail";


const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])

    const [loading, setLoading] = useState(true)
    
    const { categoryId } = useParams();

    useEffect(() => {
        // Referencia a la colección "Items" en la base de datos
        setLoading(true)

        const itemCollectionRef = collection(db, "Items");
        const collectionRef = categoryId ?
            query(itemCollectionRef, where('Category', '==', categoryId)) : itemCollectionRef

        getDocs(collectionRef)
            .then(response => {
                    // Mapea los documentos obtenidos y agrega un campo "id" a cada objeto para tener una referencia única
                    const productAdapted = response.docs.map((doc) => 
                    {
                        const data = doc.data()
                        return { id: doc.id, ...data }
                    })
                    setProducts(productAdapted)
            })
            .catch(error => {
                    console.error(error)
            })
            .finally(() => {
                setLoading(false)
            })
        
    }, [categoryId])
    return (
        <Container>
            <Row className='ItemListContainer'>
            </Row>
        </Container>
    )
}
export default ItemListContainer;


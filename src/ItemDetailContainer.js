import React from 'react';
import { useEffect, useState } from "react";
import { getProductById } from "./ItemProducts";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { Container, Row } from 'react-bootstrap';
import './ItemDetail.css';



const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)

    const { itemId } = useParams()

    useEffect(() => {
        getProductById(itemId)
            .then(response => {
                setProduct(response)
            })
            .catch(error => {
                console.error(error)
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


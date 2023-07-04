import { useEffect, useState } from "react";
import { getProducts, getProductsByCategory } from "./ItemProducts";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import React from 'react';
import { Container, Row } from 'react-bootstrap';
import './ItemDetail.css';

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])

    const { categoryId } = useParams();

    useEffect(() => {
        const func = categoryId ? getProductsByCategory : getProducts
        func(categoryId)
            .then(response => {
                setProducts(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [categoryId])
    return (
        <Container>
            <Row className='ItemListContainer'>
                <ItemList products={products} />
            </Row>
        </Container>
    )
}
export default ItemListContainer;


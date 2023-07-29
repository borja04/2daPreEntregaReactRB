import './css/ItemDetail.css';
import ItemCount from "./ItemCount";
import React from 'react';
import { Col, Card } from 'react-bootstrap';

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
    return (

        <Col xl={4}>
            <Card>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        <picture>
                            <img src={img} alt={name} className="imgProducto" />
                        </picture>

                        <p className="Info">
                            Categoria:{category}
                        </p>
                        <p className="Info">
                            Descripción:{description}
                        </p>
                        <p className="Info">
                            Precio:{price}
                        </p>

                        <footer className="ItemFooter">
                            <ItemCount initial={1} stock={stock} onAdd={(quantity => console.log('Cantidad Agregada'))} />
                        </footer>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
}
export default ItemDetail;


import './css/ItemDetail.css';
import React from 'react';
import { Col, Card } from 'react-bootstrap';
import { Link } from "react-router-dom";

const Item = ({ id, name, img, price, stock }) => {

    return (
        <Col xl={4}>
            <Card>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        <picture>
                            <img src={img} alt={name} className="imgProducto" />
                        </picture>
                        <Card.Text>
                            Precio:${price}
                        </Card.Text>
                        <Card.Text>
                            Stock Disponible{stock}
                        </Card.Text>
                        <footer className="ItemFooter">
                            <Link to={`/item/${id}`} className='Option'>
                                <button className="buttonStyle">Ver Detalle</button>
                            </Link>
                        </footer>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>

    )
}
export default Item;

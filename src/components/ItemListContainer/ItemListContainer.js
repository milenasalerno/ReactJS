import { Container } from 'react-bootstrap';
import React from 'react';
import { ProductCard } from '../ProductCard/ProductCard';
import { ItemCount } from '../ItemCount/ItemCount';
import imagenes from '../../imagenes/corset.jpg'



export const ItemListContainer = ( {greeting} ) => {

    return (
        <Container className="my-5">
            <h2>{greeting}</h2>
            <hr/>
            <ProductCard img={imagenes} stock="10" />
            <ProductCard img={imagenes} stock="10" />
            <ItemCount/>
          
        </Container>
    )
}


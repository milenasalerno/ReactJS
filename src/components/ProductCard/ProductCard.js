import React from "react";
import {Card} from "react-bootstrap";
import { ItemCount } from "../ItemCount/ItemCount";

export const ProductCard = ({img, stock}) => {
    return (
        <Card style={{ width: '12rem' }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title> Corset Emily</Card.Title>
        </Card.Body>
        <ItemCount stock="10"/>
      </Card>
    )
}

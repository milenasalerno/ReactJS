import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { pedirDatos } from "../../helpers/pedirDatos"
import { ItemList } from '../ItemList/ItemList'

export const ItemListContainer = () => {

    const [loading, setLoading] = useState(false)
    const [productos, setProductos] = useState([])

    const { catId } = useParams()

    useEffect(() => {
        
        setLoading(true)
        pedirDatos()
            .then( (resp) => {

                if (!catId) {
                    setProductos(resp)
                } else {
                    setProductos( resp.filter( prod => prod.category === catId) )
                }
            })
            .catch( (error) => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })

    }, [catId])

    return (
        <>
            {
                loading 
                    ? <h2>Cargando...</h2> 
                    : <ItemList productos={productos}/>
            }
        </>
    )
}
 import { useState, useEffect } from "react"
 import React from "react";
 import Item from "../Item/Item";
 import { getItems, items } from "../../Mock";
 

const ItemDetailContainer = (props) => {
    const [items, setItems]  = useState([])
    useEffect(() => {
        getItems()
        .then(response =>{
            setItems(response)
        })
        .catch(error => {
            console.log(error)
        })
    },[])
    

    return(
        <div>
            <h1>{items.title}</h1>
        </div>
    )
    }


export default ItemDetailContainer
import { useState, useEffect } from "react"
import Item from "../Item/Item"
import { getItems, items } from "../../Mock";



const ItemListContainer = (props) => {
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
        { items.map(item => 
        <Item 
            id = {item.id}
            title = {item.title}
            text = {item.text}
        /> 
        )}
        </div>  
        )}
        
   
export default ItemListContainer
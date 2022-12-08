import { useState, useEffect } from "react"

const items = [
    {
        id: '1',
        title: 'Item 1',
        text: 'Description'
    },
    {
        id: '2',
        title: 'Item 2',
        text: 'Description'
    }
]

 const getItems =  () => {
    return new Promise((resolve)  => {
        setTimeout(()  => {
            resolve(items)
        }, 2000)
    })
    
}

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
            <h1>{props.greeting}</h1>
            <div  style={{display: 'flex', margin: 20 }}>
            
                { items.map(items => (
                    <div>
                    <h2>{items.title}</h2>
                    <p>{items.text}</p>
                    </div>
                ))}

            </div>
        </div>
        )}
        
        
export default ItemListContainer
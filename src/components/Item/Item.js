import { Link } from "react-router-dom"
import ItemListContainer from "../ItemListContainer/ItemListContainer"

const Item = (props)  => {
    return (
        <div>
        <h1>{props.greeting}</h1>
            <Link to ={`/item/1`}>
                
                <h2>{props.title}</h2>
                
            </Link>
        <h2>
            {props.text}
        </h2>
        
        <div  style={{display: 'flex', margin: 20 }}>
        </div>
    </div>
    )

}
   

export default Item
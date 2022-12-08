import './Navbar.css'
import CardWidget from '../CardWidget/CardWidget'
import { Link } from 'react-router-dom'


const Navbar = () => {

    return  (
        <nav className='navbar'>
            <h1>MarketPlace</h1>
            <Link to='/' className='boton'>Inicio</Link>
            <Link to='/category/id' className='boton'>Categoria</Link>
            <button className='boton'>Contactanos!</button>
            <button className='boton'>Inicia</button>
            <CardWidget />
        </nav>
        
    )
}

export default Navbar
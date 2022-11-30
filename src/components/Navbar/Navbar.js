import './Navbar.css'
import CardWidget from '../CardWidget/CardWidget'
const Navbar = () => {

    return  (
        <nav className='navbar'>
            <h1>MarketPlace</h1>
            <button className='boton'>Inicio</button>
            <button className='boton'>Catalogo</button>
            <button className='boton'>Contactanos!</button>
            <button className='boton'>Inicia</button>
            <CardWidget />
        </nav>
        
    )
}

export default Navbar
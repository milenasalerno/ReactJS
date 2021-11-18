import './NavBar.css'
import { CartWidget } from '../CartWidget/CartWidget'

 export const NavBar = () => {
    
    return (
    <div className="header">

        <h1> Tiffany </h1>
         
         <nav>
            <ul>
                <li> Home </li>
                <li> Productos </li>
                <li>Contacto </li>
            </ul>

          {CartWidget}
          
         </nav>
    </div>
    )
}


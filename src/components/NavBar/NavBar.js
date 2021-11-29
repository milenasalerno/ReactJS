import React from 'react'
import { CartWidget } from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'
import '../NavBar/NavBar.css'

export const NavBar = () => {
    return (
        <div>
            <header>
                         <nav className="header">
                             <ul className="items">
                                <li> <Link to ="/">Home</Link></li>
                                <li><Link to ="/">¿Quienes somos?</Link></li>
                                <li><Link to ="/">Contacto</Link></li>
                             <CartWidget/>
                             </ul>
                             
                        </nav>
                </header>


        </div>
    )
}




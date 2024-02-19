import "./Header.css"
import { Link } from "react-router-dom"

function Header() {
    return (
        <header>
        
        <nav class="header-nav">
            <ul>
                <li><Link to="/" style={{textDecoration:"none", color:"#F1F1F1F1"}}>Accueil</Link></li>
                <li><Link to="/profil" style={{textDecoration:"none", color:"#F1F1F1F1"}}> Profil</Link></li>
                <li><Link to="/projets" style={{textDecoration:"none", color:"#F1F1F1F1"}}>Projets</Link></li>
                <li><Link to="/contact" style={{textDecoration:"none", color:"#F1F1F1F1"}}>Contact</Link></li>
            </ul>
        </nav>
        <div class="headline-container">
            <div class="headline"></div>
        </div>
    </header>
    )
}

export default Header
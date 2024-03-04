import "./ContenuAPDM.css"
import Flying from "../../Assets/Astronautes/flying.png"
import Fusee from "../../Assets/Astronautes/fusee.png"
import Moon from "../../Assets/Astronautes/moon.png"
import Download from "../../Assets/download.png" 
import { Link } from "react-router-dom"
import CV from "../../Assets/CV_GUILLAUME_DHENIN.pdf"

function ContenuAPDM() {
    return (
        <div id="contenu1">
            <h2>Général</h2>
            <p>Je m’appelle <span className="blue">Guillaume Dhenin</span>, j’ai 22 ans et je vis actuellement dans le Sud de la France, près de Salon-de-Provence. J’ai toujours vécu en France mais <span className="blue">je suis ouverte à explorer d’autres horizons</span>, en France ou à l'étranger. <br/><br/><span className="italic blue">Crédits images d'astronautes : Catalyststuff (Freepik).</span></p>
            <h2>Curriculum Vitae</h2><Link to={CV} target="_blank" download="CV_GUILLAUME_DHENIN.pdf"><img src={Download} alt=""/></Link>
            <img src={Flying} alt="Astronaute qui vole" className="astro-gauche"/>
            <img src={Fusee} alt="Astronaute sur une fusée" className="astro-planete"/>
            <img src={Moon} alt="Astronaute sur la lune" className="astro-fusee"/>
        </div>
    )
}

export default ContenuAPDM
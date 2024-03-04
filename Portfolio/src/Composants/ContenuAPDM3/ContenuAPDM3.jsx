import "./ContenuAPDM3.css"
import Astropote from "../../Assets/Astronautes/astropote.png"
import Astrotea from "../../Assets/Astronautes/tea.png"

function ContenuAPDM3() {
    return (
        <div id="contenu3">
		<h2>Parcours professionnel</h2>
		<p>Depuis mes 17 ans et assez souvent, je travaille dans le monde de l'animation en tant qu' <span className="blue">animateur en centre de loisirs</span> qui est aussi l'une de mes rare passion.
        J’ai également travaillé au sein de SFR en tant que <span className="blue">Conseiller de Vente</span>, ou encore <span className="blue">Préparateur de commandes</span> à Pro à Pro. <span className="blue"></span>
        <br/><br/>
            </p>
            <img src={Astropote} alt="Astronaute qui chill avec ses potes" className="astro-pote"/>
            <img src={Astrotea} alt="Astronaute qui boit du thé" className="astro-the"/>
	    </div>
    )
}

export default ContenuAPDM3
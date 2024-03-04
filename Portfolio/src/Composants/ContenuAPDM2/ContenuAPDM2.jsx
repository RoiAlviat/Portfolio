import "./ContenuAPDM2.css"
import Reading from "../../Assets/Astronautes/reading.png"
import Crayon from "../../Assets/Astronautes/crayon.png"

function ContenuAPDM2() {
    return (
<div id="contenu2">
		<h2>Parcours scolaire</h2>
        <p>Après mon <span className="blue">BAC STMG</span> mention assez bien, j’ai décidé de m’orienter dans une faculté de langue (Russe). Au bout de deux années de licence, j'ai commencé à coder des petits projets dans lequel j’ai pu y trouver <span className="blue">une vrai passion</span>.</p>
        <p>Dès la fin de ma deuxième année de licence, je savais que je voulais travailler dans le milieu du développement web.</p>
        <p>J’ai donc découvert <span className="blue">OpenClassRooms</span> et la <span className="blue">formation Intégrateur web.</span> J'ai fini ma formation en mars 2024.<br/><br/> <span className="span-gras">Je suis maintenant à la recherche de mon premier emploi !</span>
        </p>
        <p></p>
        <img src={Crayon} alt="" className="astro-crayon"/>
        <img src={Reading} alt="" className="astro-livre"/>
		</div>
    )
}

export default ContenuAPDM2
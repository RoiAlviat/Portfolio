import { Link } from "react-router-dom"
import "./TextProjects.css"
function TextProjects() {
    return (
        <div className="titlemain">
        <h1>MES PROJETS</h1>
        <p style={{textAlign:"center"}}>J'ai pu réalisé, que ce soit dans le cadre de ma formation ou en <span className="blue">autodidacte</span> divers projets qui m'ont permis de m'améliorer de manière général et d'apprendre de nouvelles choses tel que des libraries (Redux, GSAP, React-Router-Dom, ect..)
          Pour l'instant je maitrise <span className="blue">React, Javascript & SCSS</span> mais j'aspire à apprendre beaucoup plus que ce soit en autonomie ou lors de mon premier emploi.
          Vous pouvez trouver ci-dessous deux exemples de mes projets ainsi que le <Link to="https://github.com/RoiAlviat">Github</Link> qui répertorie d'autres projets.
        </p>
      </div>
    )
}

export default TextProjects
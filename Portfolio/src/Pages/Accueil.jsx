import Header from "../Composants/Header/Header"
import MainTitle from "../Composants/MainTitle/MainTitle"
import Sections from "../Composants/Sections/Sections"
import { Link } from "react-router-dom"

function Accueil() {
 return (
    <>
    <Header/>
    <MainTitle/>
    <div className="bloctxt-container">
     <Link style={{textDecoration:"none", color:"#F1F1F1F1"}} to="/profil"> <Sections sectionText={"Parcourez la section qui vous permettra de découvrir mon parcours et tout ce qui me concerne."} sectionName={"Profil"}/></Link>
      <Link style={{textDecoration:"none", color:"#F1F1F1F1"}} to="/projets"><Sections sectionText={"Parcourez la section qui vous permettra de découvrir mes projets réalisés."} sectionName={"Projets"} /></Link>
      <Link style={{textDecoration:"none", color:"#F1F1F1F1"}} to="/contact"><Sections sectionText={"Parcourez la section qui vous permettra de découvrir mes différents réseaux et moyens de prise de contact."} sectionName={"Contacts"}/></Link>
    </div>
    </>
 )
}

export default Accueil
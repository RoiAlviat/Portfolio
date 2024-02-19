import Header from "../Composants/Header/Header"
import MainTitle from "../Composants/MainTitle/MainTitle"
import Sections from "../Composants/Sections/Sections"

function Accueil() {
 return (
    <>
    <Header/>
    <MainTitle/>
    <div className="bloctxt-container">
      <Sections sectionText={"Parcourez la section qui vous permettra de découvrir mon parcours et tout ce qui me concerne."} sectionName={"Profil"} sectionPath={"/profil"} />
      <Sections sectionText={"Parcourez la section qui vous permettra de découvrir mes projets réalisés."} sectionName={"Projets"} sectionPath={"/projets"}/>
      <Sections sectionText={"Parcourez la section qui vous permettra de découvrir mes différents réseaux et moyens de prise de contact."} sectionName={"Contacts"} sectionPath={"/contacts"}/>
    </div>
    </>
 )
}

export default Accueil
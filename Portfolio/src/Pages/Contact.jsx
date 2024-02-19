import Header from "../Composants/Header/Header"
import MainTitle from "../Composants/MainTitle/MainTitle"
import Sections from "../Composants/Sections/Sections"

function Contact() {
    return(
        <>
        <Header/>
        <MainTitle/>
        <div className="bloctxt-container">
      <Sections sectionName={"Linkedin"} sectionPath={"/profil"} />
      <Sections sectionName={"g.dhenin01@gmail.com"} sectionPath={"/projets"}/>
      <Sections sectionName={"+33666677754"} sectionPath={"/contacts"}/>
    </div>
        </>
    )
}

export default Contact
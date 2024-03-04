import Header from "../Composants/Header/Header"
import MainTitle from "../Composants/MainTitle/MainTitle"
import Sections from "../Composants/Sections/Sections"
import { Link } from "react-router-dom"

function Contact() {
    return(
        <>
        <Header/>
        <MainTitle/>
        <div className="bloctxt-container">
      <Link style={{textDecoration:"none", color:"#F1F1F1F1"}} to="https://www.linkedin.com/in/guillaume-dhenin/"><Sections sectionName={"LinkedIn"}/></Link>
      <Sections sectionName={"g.dhenin01@gmail.com"} />
      <Sections sectionName={"+33666677754"}/>
    </div>
        </>
    )
}

export default Contact
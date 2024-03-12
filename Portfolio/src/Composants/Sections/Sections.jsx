import "./Sections.css"
import { Link } from "react-router-dom"
function Sections({sectionName, sectionText, sectionPath}) {
    return(
        <div className="bloc1">
            <div className="desc1" style={{textAlign:"center"}}>{sectionText}</div>
            <div className="h3-container">

                    <h3 style={{display:"flex", alignItems:"center", gap:"1vw"}}>{sectionName}<i className="fa-solid fa-arrow-right"></i></h3>

            </div>
        </div>
    )
}

export default Sections
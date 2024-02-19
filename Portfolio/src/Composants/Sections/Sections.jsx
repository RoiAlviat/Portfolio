import "./Sections.css"
import { Link } from "react-router-dom"
function Sections({sectionName, sectionText, sectionPath}) {
    return(
        <div class="bloc1">
            <div class="desc1">{sectionText}</div>
            <div class="h3-container">
                <Link to={sectionPath} style={{textDecoration:"none", color:"#F1F1F1F1"}}>
                    <h3>{sectionName}<i class="fa-solid fa-arrow-right"></i></h3>
                </Link>
            </div>
        </div>
    )
}

export default Sections
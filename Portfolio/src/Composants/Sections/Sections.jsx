import "./Sections.css"
import { Link } from "react-router-dom"
function Sections({sectionName, sectionText, sectionPath}) {
    return(
        <div class="bloc1">
            <div class="desc1" style={{textAlign:"center"}}>{sectionText}</div>
            <div class="h3-container">

                    <h3 style={{display:"flex", alignItems:"center", gap:"1vw"}}>{sectionName}<i class="fa-solid fa-arrow-right"></i></h3>

            </div>
        </div>
    )
}

export default Sections
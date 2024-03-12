import { Link } from "react-router-dom"
import "./ProjectsFrame.css"

function ProjectsFrame({className, pathName}) {
    return (
        <Link aria-label="Linktoproject" to={pathName} >
            
            <div className={`tp-container ${className}`}>
          </div>
          </Link>
    )
}

export default ProjectsFrame
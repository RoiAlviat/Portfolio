import Profil from "../../Assets/Profil.jpg"
import "./MainTitle.css"
function MainTitle() {
    return (
        <div className="MainTitle-container">
            <div className="h1-container">
                <img src={Profil} alt="logo"/>
            </div>

            <div className="h2-container">
                <h2>Développeur Web</h2>
                <h3>Guillaume Dhenin</h3>
            </div>
        </div>
    )
}

export default MainTitle
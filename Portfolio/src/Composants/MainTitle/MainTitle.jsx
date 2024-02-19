import Logo from "../../Assets/Profil.jpg"
import "./MainTitle.css"
function MainTitle() {
    return (
        <div className="MainTitle-container">
            <div class="h1-container">
                <img src={Logo} alt="logo"/>
            </div>

            <div class="h2-container">
                <h2>Développeur Web</h2>
                <h3>Guillaume Dhenin</h3>
            </div>
        </div>
    )
}

export default MainTitle
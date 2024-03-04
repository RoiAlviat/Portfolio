import "./ContenuAPDM5.css"
import Happy from "../../Assets/Astronautes/happy.png"
import Posing from "../../Assets/Astronautes/posing.png"

function ContenuAPDM5() {
    return (
<div id="contenu5">
    <div className="h2-Container">
		<h2>Mes jeux préférés</h2>
    </div>
		<div className="game-container">
            <img className="astro-plateau" src={Posing} alt="Astronaute est content"/>
            <img src={Happy} alt="Astronaute fait la pose" className="astro-content"/>
            <ul>
                <div className="h3-container">
                    <h3 className="blue">Jeux solo</h3>
                </div>
                <li> The Witcher 3 : Wild Hunt</li>
                <li> Horizon Zero Dawn</li>
                <li> Assassin’s Creed Odyssey</li>
                <li> The Last of Us</li>
                <li> The Legend of Zelda : The Wind Waker</li>
                <li> Life is Strange : True Colors</li>
            </ul>
        
        
            <ul>
            <div className="h3-container">
                    <h3 className="blue">Jeux multijoueurs</h3>
                </div>
                <li> Genshin Impact</li>
                <li> It Takes Two</li>
                <li> Valorant</li>
                <li> Dead By Daylight</li>
                <li> League of Legends</li>
                <li> Rainbow Six Siege</li>
            </ul>
        
       
            <ul>
            <div className="h3-container">
                    <h3 className="blue">Jeux joués récemment</h3>
                </div>
                <li> As Dusk Falls</li>
                <li> Stray</li>
                <li> Sun Haven</li>
                <li> God of War Ragnarok</li>
                <li> Kena Bridge of Spirits</li>
                <li> The Walking Dead : saison 1</li>
            </ul>
        </div>
    </div>
    )
}

export default ContenuAPDM5
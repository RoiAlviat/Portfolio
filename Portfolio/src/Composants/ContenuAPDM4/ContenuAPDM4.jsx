import "./ContenuAPDM4.css"
import Cuisine from "../../Assets/Astronautes/cooking-astronaute.avif"
import Chien from "../../Assets/Astronautes/dog-astronaute.avif"
import Read from "../../Assets/Astronautes/reading-astronaute.avif"
import Movies from "../../Assets/Astronautes/movies-astronaute.avif"
import Musique from "../../Assets/Astronautes/music-astronaute.avif"
import Gaming from "../../Assets/Astronautes/gaming-astronaute.avif"
import EscapeGame from "../../Assets/Astronautes/escapegame-astronaute.avif"
import Danse from "../../Assets/Astronautes/dancing-astronaute.avif"
import Voyage from "../../Assets/Astronautes/trip-astronaute.avif"


function ContenuAPDM4() {
    return (
    <div id="contenu4">
        <h2>Un peu plus à propos de moi</h2>
		<p>Voici mes principaux hobbies :</p>
            <div className="astronaut-container">
            <div className="image-column">
            
                <div className="image">
                    <img src={Musique}/>
                    <div className="overlay">
                        <div className="text">Musique</div>
                    </div>
                </div>
                <div className="image">
                    <img src={Movies}/>
                    <div className="overlay">
                        <div className="text">Films & Séries</div>
                    </div>
                </div>
            </div>
            
            <div className="image-column">
                <div className="image">
                    <img src={Chien}/>
                    <div className="overlay">
                        <div className="text">Animaux</div>
                    </div>
                </div>
                <div className="image">
                    <img src={Voyage}/>
                    <div className="overlay">
                        <div className="text">Voyage</div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default ContenuAPDM4
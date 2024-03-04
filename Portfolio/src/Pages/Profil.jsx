import ButtonAPDM from "../Composants/ButtonAPDM/ButtonAPDM"
import ContenuAPDM from "../Composants/ContenuAPDM/ContenuAPDM"
import ContenuAPDM2 from "../Composants/ContenuAPDM2/ContenuAPDM2"
import ContenuAPDM3 from "../Composants/ContenuAPDM3/ContenuAPDM3"
import ContenuAPDM4 from "../Composants/ContenuAPDM4/ContenuAPDM4"
import ContenuAPDM5 from "../Composants/ContenuAPDM5/ContenuAPDM5"
import Header from "../Composants/Header/Header"
import { useState } from "react"
import "./Profil.css"

function Profil() {

    let [Btn, setBtn] = useState(null)

    function clickHandler(btnName) {

        setBtn(btnName)
    }

    return (
        <>
        <Header/>
        <div className="Center-Container">
        <div className="Button-Container">
                <ButtonAPDM btnName={"Général"} onClick={() => clickHandler("Général")} />
                <ButtonAPDM btnName={"Scolaire"} onClick={() => clickHandler("Scolaire")} />
                <ButtonAPDM btnName={"Professionnel"} onClick={() => clickHandler("Professionnel")} />
                <ButtonAPDM btnName={"A propos de moi"} onClick={() => clickHandler("A propos de moi")} />
            </div>
        </div>

            <div className="Center-Container">
            {Btn === "Général" && <ContenuAPDM />}
                {Btn === "Scolaire" && <ContenuAPDM2 />}
                {Btn === "Professionnel" && <ContenuAPDM3 />}
                {Btn === "A propos de moi" && <ContenuAPDM4 />}
                {Btn === "Mes jeux préférés" && <ContenuAPDM5 />}
            </div>
        </>
    )
}

export default Profil
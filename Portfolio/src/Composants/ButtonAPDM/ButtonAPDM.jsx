import "./ButtonAPDM.css"

function ButtonAPDM({btnName, onClick}) {
    return (
        <button className="button-40" onClick={onClick}>{btnName}</button>
    )
}

export default ButtonAPDM
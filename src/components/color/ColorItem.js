import '../../css/additional.css'

//bekommt farbe übergeben
const ColorItem = ({ color, setColor, selected, disabled }) => {

    const imgUrl = process.env.REACT_APP_FRONTEND_URL + color.thumbnailUrl + ".webp";

    const setIfLegal = () => {
        return disabled ? null : setColor(color)
    }

    return (
        <div onClick={() => setIfLegal()} className="mb-3 mx-3 d-inline-block">
            <div className="d-flex">
                <button className="color-button d-block" disabled={disabled} style={{ "background": `url(${imgUrl})`, "backgroundSize": "52px 52px", "backgroundRepeat": "no-repeat" }}></button>
                {disabled ? <input type="radio" style={{ "opacity": "0" }}></input> : <input className="form-check-input" type="radio" checked={selected} readOnly={true} />}
            </div>
        </div>
    )
}

export default ColorItem;
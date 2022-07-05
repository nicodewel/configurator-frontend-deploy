import '../../css/additional.css'

const InteriorItem = ({ interior, setInterior, selected, disabled }) => {

    const imgUrl = process.env.REACT_APP_FRONTEND_URL + interior.thumbnailUrl + ".webp";

    const setIfLegal = () => {
        return disabled ? null : setInterior(interior)
    }

    return (
        <div onClick={() => setIfLegal()} className="mb-3 mx-3 d-inline-block" >
            <div className="d-flex">
                <div><button className="color-button" style={{ "background": `url(${imgUrl})`, "backgroundSize": "60px 60px" }} disabled={disabled}></button></div>
                {disabled ? <input type="radio" style={{ "opacity": "0" }}></input> : <input className="form-check-input" type="radio" checked={selected} readOnly={true} />}
            </div>
        </div>

    )

}

export default InteriorItem;
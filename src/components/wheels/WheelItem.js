
const WheelItem = ({ wheel, setWheel, selected, disabled }) => {

    const imgUrl = process.env.REACT_APP_FRONTEND_URL + wheel.thumbnailUrl + ".webp";

    const setIfLegal = () => {
        return disabled ? null : setWheel(wheel)
    }

    return (
        <div onClick={() => setIfLegal()} className="mb-3 mx-3 d-inline-block">
            <div className="d-flex">
                <button className="color-button" disabled={disabled} checked={selected} style={{ "background": `url(${imgUrl})`, "backgroundSize": "50px 50px" }} ></button>
                {disabled ? "" : <input className="form-check-input" type="radio" checked={selected} readOnly={true} />}
            </div>
        </div>
    )
}

export default WheelItem;
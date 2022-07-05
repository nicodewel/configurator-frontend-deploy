import '../../css/additional.css';

const EngineItem = ({ setEngine, engine, selected, disabled }) => {

    const engineTitle = engine.title.split(" - ");
    const engineDescription = engine.description.split(" - ");
    const enginePower = engineDescription[0].split(": ")
    const engineConsumption = engineDescription[1].split(": ")
    const engineRange = engineDescription[2].split(": ")
    var price = `${engine.priceInCents % 100}` === "0" ? `${engine.priceInCents / 100},00€` : `${engine.priceInCents}`.slice(-1) === "0" ? `${engine.priceInCents / 100}0€` : `${engine.priceInCents / 100}€`

    const setIfLegal = () => {
        return disabled ? null : setEngine(engine)
    }

    return (
        <div onClick={() => setIfLegal()} className="mb-3 mx-3" style={{ "border": "solid 2px green" }}>
            <div className="m-2">
                <h5 className="mb-3 d-inline-block col-11">{engineTitle[0]} - <small className="text-muted">{engineTitle[1]}</small>
                </h5>
                {disabled ? "" : <input className="form-check-input justify-content-end" type="radio" checked={selected} readOnly={true} />}
            </div>
            <label className="powerlabel mb-1" disabled><i className="bi bi-plug"></i>Strom</label>
            <hr className="mx-2" />
            <div className="d-flex justify-content-between mx-2">
                <div className="d-inline">
                    <div>{enginePower[0]}</div>
                    <div><strong>{enginePower[1]}</strong></div>
                </div>
                <div className="d-inline">
                    <div>{engineConsumption[0]}</div>
                    <div><strong>{engineConsumption[1]}</strong></div>
                </div>
                <div className="d-inline">
                    <div>{engineRange[0]}</div>
                    <div><strong>{engineRange[1]}</strong></div>
                </div>
            </div>
            <div className="mx-2">
                <hr className="mx-2" />
                <strong>ab Preis inkl. MwSt. {price}</strong>
            </div>
        </div>)
}
export default EngineItem;
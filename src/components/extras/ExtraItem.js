const ExtraItem = ({ collapse, option, setExtra, selected, disabled }) => {

    var price = `${option.priceInCents % 100}` === "0" ? `${option.priceInCents / 100},00€` : `${option.priceInCents}`.slice(-1) === "0" ? `${option.priceInCents / 100}0€` : `${option.priceInCents / 100}€`

    const setIfLegal = () => {
        return disabled ? null : setExtra(option)
    }

    return (

        <div onClick={() => setIfLegal()} id={collapse} className="accordion-collapse collapse hide" aria-labelledby="headingOne" data-bs-parent="#accordionExample" >
            <div className="accordion-body d-flex">
                <div className="col-11 d-flex">
                    <div className="col-8">{option.title} </div>
                    <div className="col-4"><strong >{price} </strong></div>
                </div>
                {disabled ? null : <input className="form-check-input justify-content-end" type="radio" checked={selected} readOnly={true} />}
            </div>
        </div>
    )
}

export default ExtraItem;
const SummaryListItem = ({ attribute }) => {

    return (
        <div className="mx-3 my-3">

            {attribute ?
                <div style={{ "border": "solid 2px green" }}>
                    <div className="d-flex mx-3 my-3">
                        <div className="w-50"><strong>{attribute.title}</strong></div>
                        {attribute.thumbnailUrl ?
                            <div className="w-25"><button className="color-button" style={{ "background": `url(${process.env.REACT_APP_FRONTEND_URL}${attribute.thumbnailUrl}.webp")`, "backgroundSize": "52px 52px" }}></button></div>
                            : <div className="w-25"><button className="color-button" style={{ "opacity": "0" }}></button></div>}
                        <div className="col-4"><strong> {attribute.priceInCents == 0 ? "kein Aufpreis" : ` Preis inkl. MwSt. ${attribute.priceInCents / 100}€`}</strong></div>


                    </div>

                </div>
                : ""}

        </div>

    )

}

export default SummaryListItem;
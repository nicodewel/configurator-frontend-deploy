const SummaryList = (step, attribute, count) => {

    return (
        <div className="mx-3 my-3">
            <strong>{`${i + 1}. ${step}`}</strong>
            {attribute ?
                <div style={{ "border": "solid 2px green" }}>
                    <div className="d-flex mx-3 my-3">
                        <div className="col-6"><strong>{attribute.title}</strong></div>
                        {attribute.thumbnailUrl ?
                            <div className="col-2"><button className="color-button" style={{ "background": `url(${process.env.REACT_APP_FRONTEND_URL}${attribute.thumbnailUrl}.webp")`, "backgroundSize": "52px 52px" }}></button></div>
                            : ""}
                        <div className="col-4"><strong>Preis inkl. MwSt. {attribute.priceInCents / 100}€</strong></div>


                    </div>

                </div>
                : ""}

        </div>

    )

}

export default SummaryList;
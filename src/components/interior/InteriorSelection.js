import InteriorItem from "./InteriorItem";
import '../../css/additional.css'
import { useDispatch, useSelector } from "react-redux";
import { selectInterior } from "../../actions/SelectAction";
import { getExclusionsFromPreviousSteps, getCategories } from "../../util/util";


const InteriorSelection = () => {

    const dispatch = useDispatch();
    const configuration = useSelector(state => state.config)
    const selectedInterior = useSelector(state => state.config.interior);
    const interiorExclusion = getExclusionsFromPreviousSteps(configuration, 2);
    const interiors = useSelector(state => state.attributes.interior);
    const categories = getCategories(interiors);
    var interiorCategory;
    var price = `${selectedInterior.priceInCents % 100}` === "0" ? `${selectedInterior.priceInCents / 100},00€` : `${selectedInterior.priceInCents}`.slice(-1) === "0" ? `${selectedInterior.priceInCents / 100}0€` : `${selectedInterior.priceInCents / 100}€`


    const setInterior = (option) => {
        dispatch(selectInterior(option))
    }

    return (
        <div className="col-5 bg-light">
            <h2 className="my-3 mx-3">Wählen Sie Ihr Interieur.</h2>
            <div>

                {
                    categories.map((category, j) => {
                        interiorCategory = interiors.filter(interior => interior.category === category)
                        return (
                            <div key={j}>
                                <small className="text-muted d-block mb-2">{category}</small>
                                {interiorCategory.map((interior, i) => <InteriorItem key={i} disabled={interiorExclusion.includes(interior.id)} interior={interior} setInterior={setInterior} selected={selectedInterior.id === interior.id} />)}
                            </div>
                        )
                    })
                }
            </div>

            <div className="text-center mt-3" style={{ "border": "solid 2px green" }}>

                {selectedInterior.description === undefined ? "Kein Interieur ausgewählt" : selectedInterior.description + " Preis inkl. MwSt. " + price}
            </div>
        </div>
    )

}

export default InteriorSelection;
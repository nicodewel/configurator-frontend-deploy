import WheelItem from "./WheelItem";
import { useDispatch, useSelector } from "react-redux";
import { selectWheel } from "../../actions/SelectAction";
import { getCategories } from "../../util/util";
import { getExclusionsFromPreviousSteps } from "../../util/util";

const WheelSelection = () => {

    const dispatch = useDispatch();
    const configuration = useSelector(state => state.config)
    const selectedWheel = configuration.wheels;
    const wheels = useSelector(state => state.attributes.wheels);
    const categories = getCategories(wheels);
    wheels.sort((wheel1, wheel2) => wheel1.id - wheel2.id)
    var wheelsCategory;
    var price = `${selectedWheel.priceInCents % 100}` === "0" ? `${selectedWheel.priceInCents / 100},00€` : `${selectedWheel.priceInCents}`.slice(-1) === "0" ? `${selectedWheel.priceInCents / 100}0€` : `${selectedWheel.priceInCents / 100}€`

    const setWheel = (option) => {
        dispatch(selectWheel(option))
    }
    const exclusions = getExclusionsFromPreviousSteps(configuration, 4)

    return (
        <div className="col-5 bg-light ">
            <h2 className="my-3 mx-3">Wählen Sie Ihre Räder / Reifen</h2>
            <div>
                {
                    categories.map((category, j) => {
                        wheelsCategory = wheels.filter(wheel => wheel.category === category)
                        return (
                            <div key={j}>
                                <small className="text-muted d-block mb-2">{category}</small>
                                {wheelsCategory.map((wheel, i) => <WheelItem key={i} wheel={wheel} setWheel={setWheel} selected={selectedWheel.id === wheel.id} disabled={exclusions.includes(wheel.id)} />)}
                            </div>
                        )
                    })
                }

            </div>
            <div className="text-center mt-3" style={{ "border": "solid 2px green" }}>
                {selectedWheel.description === undefined ? "Wählen Sie ihre Räder" : selectedWheel.description + " Preis inkl. MwSt. " + price}
            </div>
        </div>

    )



}

export default WheelSelection;
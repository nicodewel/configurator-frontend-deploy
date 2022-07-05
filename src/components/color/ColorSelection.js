import ColorItem from "./ColorItem";
import '../../css/additional.css'
import { useSelector, useDispatch } from "react-redux";
import { selectColor } from "../../actions/SelectAction";
import { getCategories } from "../../util/util";
import { getExclusionsFromPreviousSteps } from "../../util/util";

//bekommt Liste der zur Auswahl stehenden Farben
const ColorSelection = () => {

    const dispatch = useDispatch();
    const configuration = useSelector(state => state.config);
    const selectedColor = configuration.color;
    const colors = useSelector(state => state.attributes.colors);
    const categories = getCategories(colors);
    const exclusions = getExclusionsFromPreviousSteps(configuration, 2)
    var colorCategory;
    var price = `${selectedColor.priceInCents % 100}` === "0" ? `${selectedColor.priceInCents / 100},00€` : `${selectedColor.priceInCents}`.slice(-1) === "0" ? `${selectedColor.priceInCents / 100}0€` : `${selectedColor.priceInCents / 100}€`


    const setColor = (color) => {
        dispatch(selectColor(color))
    }

    return (
        <div className="col-5 bg-light">
            <h2 className="my-3 mx-3">Außenlackierung</h2>
            <div>


                {
                    categories.map((category, j) => {
                        colorCategory = colors.filter(color => color.category === category)
                        return (
                            <div key={j}>
                                <small className="text-muted d-block mb-2">{category}</small>
                                {colorCategory.map((color, i) => <ColorItem key={i} color={color} disabled={exclusions.includes(color.id)} setColor={setColor} selected={selectedColor.id === color.id} />)}
                            </div>
                        )
                    })
                }
            </div>
            <div className="text-center mt-1 mb-3" style={{ "border": "solid 2px green" }}>
                {selectedColor.description === undefined ? "Keine Farbe ausgewählt" : selectedColor.description + " Preis inkl. MwSt. " + price}
            </div>
        </div>
    )

}
export default ColorSelection;
import { useDispatch, useSelector } from "react-redux";
import { selectExtras } from "../../actions/SelectAction";
import ExtraItem from "./ExtraItem";
import { getCategories, getExclusionsFromPreviousSteps } from '../../util/util';


const ExtraSelection = () => {

    const dispatch = useDispatch();
    const configuration = useSelector(state => state.config)
    const selectedExtras = configuration.extra.map(extra => extra.id);
    const extras = useSelector(state => state.attributes.extras);
    const exclusions = getExclusionsFromPreviousSteps(configuration, 5);
    const category = getCategories(extras);
    var extraCategory;
    var id;

    const setExtra = (option) => {
        dispatch(selectExtras(option))
    }
    return (
        <div className="col-5 bg-light position-relative overflow-auto ">
            <h2 className="my-3 mx-3">Wählen Sie Ihre Sonderausstattung.</h2>
            {
                category.map((group, key) => {
                    id = group.replaceAll(" ", "")
                    extraCategory = extras.filter(extra => extra.category === category[key])
                    return (
                        <div key={key} className="accordion" id="accordionExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingOne">

                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={"#collapse" + id} aria-expanded="true" aria-controls={"collapse" + group}>
                                        {group}
                                    </button>
                                </h2>
                                {
                                    extraCategory.map((extra, i) => <ExtraItem key={i} disabled={exclusions.includes(extra.id)} option={extra} setExtra={setExtra} selected={selectedExtras.includes(extra.id)} collapse={"collapse" + id} />)
                                }
                            </div>
                        </div>)
                })
            }
        </div>
    )
}

export default ExtraSelection;
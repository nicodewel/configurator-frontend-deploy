
import '../../css/additional.css'
import EngineItem from './EngineItem';
import { selectEngine } from '../../actions/SelectAction';
import { useDispatch, useSelector } from 'react-redux';
import { getExclusionsFromPreviousSteps } from '../../util/util';


//hier werden die jeweiligen Konfigurationsmöglichkeiten übergeben (bspw. motorenliste)
const EngineSelection = () => {

    const dispatch = useDispatch();
    const configuration = useSelector(state => state.config);
    const selectedEngine = configuration.engine;
    const engines = useSelector(state => state.attributes.engines)
    const exclusions = getExclusionsFromPreviousSteps(configuration, 1)

    const setEngine = (engine) => {
        dispatch(selectEngine(engine))
    }

    return (
        <div className="col-5 bg-light  overflow-auto " >
            <h2 className="my-3 mx-3">Motorenauswahl</h2>
            <div>
                {engines.map((engine, i) => <EngineItem key={i} setEngine={setEngine} engine={engine} selected={engine.id === selectedEngine.id} disabled={exclusions.includes(engine.id)} />
                )}

            </div>
        </div>
    )
}

export default EngineSelection;
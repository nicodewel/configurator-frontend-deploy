import { useSelector } from 'react-redux';
import ModelVersion from './ModelVersion';


//später mit liste der Models als Übergabe
const ModelOverview = () => {

    const modelList = useSelector(state => state.attributes.models)
    modelList.sort((a, b) => (a.id > b.id) ? 1 : -1);

    return (
        <div className="d-flex mb-5" style={{ "height": "100%" }}>
            {modelList?.map((model, i) => <ModelVersion key={i} model={model} configId={i + 14} />)}
        </div>
    )
}

export default ModelOverview;
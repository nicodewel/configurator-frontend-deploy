import '../css/additional.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getNewConfig } from '../actions/FetchAction';

const ModelVersion = ({ model, configId }) => {
    const dispatch = useDispatch();

    const navigate = useNavigate();
    const getDataAndNavigate = async () => {
        await dispatch(getNewConfig(configId))
        navigate("/engineConfig")
    }

    const imgUrl = process.env.REACT_APP_FRONTEND_URL + model.imgUrl + ".webp"

    return (
        <div className="w-25 position-relative" style={{ "height": "100%" }}>
            <img className="img-fluid mb-3" src={imgUrl} alt="Modelbild" />
            <div style={{ "height": "10%" }}>
                <p className="mb-0">
                    <strong>{model.title}</strong>
                </p>
                <p>
                    {model.description}
                </p>
            </div>
            <div className="overflow-auto" style={{ "height": "35%" }}>
                <p className="text-justify pe-3" >{model.details}</p>
            </div>
            <p>
                <strong>Ab {model.priceInCents / 100} € inkl. MwSt. </strong>
            </p>
            <button onClick={() => getDataAndNavigate()} className="config-btn" >Konfigurieren</button>
        </div>
    )
}

export default ModelVersion;
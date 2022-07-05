import '../css/additional.css'
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

const ConfigMain = () => {

    const currentConfig = useSelector(state => state.config);
    const path = useLocation();
    const currentPath = path.pathname;
    const IMG_URL = process.env.REACT_APP_FRONTEND_URL;

    const imgUrl = () => {
        switch (currentPath) {
            case "/interiorConfig": return IMG_URL + currentConfig.interior.imgUrl + ".png"
            case "/wheelConfig": return IMG_URL + currentConfig.wheels.imgUrl + ".webp"
            default: return IMG_URL + currentConfig.color.imgUrl + ".webp"
        }
    }

    return (

        <div className="col-7 ">
            <h2 className="my-3">ID. Buzz</h2>
            <div> {currentConfig.model.details}</div>
            <div className="text-center">
                <img className="img-fluid h-100" src={imgUrl()} alt="buzzconfig" />
            </div>
        </div>)
}

export default ConfigMain;
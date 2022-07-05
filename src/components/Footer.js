import { NavLink } from "react-router-dom";
import '../css/additional.css'
import { useSelector } from "react-redux";
import SaveConfigButton from "./SaveConfigButton";
import { isConfigurationValidThisStep } from "../util/util";


const Footer = ({ step, linkTo, next }) => {

    const currentConfig = useSelector(state => state.config);
    return (
        <div>
            <div className="d-flex ">
                <div className="align-bottom border-top col-7 px-1 py-1">
                    <div className="col-6 d-inline-block">
                        <SaveConfigButton />
                    </div>
                    <div className="col-6 d-inline-block">
                        <strong>Preis inkl. MwSt. {currentConfig.price}</strong>
                    </div>
                </div>
                <div className=" justify-content bg-vwblue col-5 px-1 py-1">
                    <div className="d-inline-block col-6 text-white"> {step}</div>
                    <div className="d-inline-block col-6 text-end"><NavLink to={linkTo}><button disabled={!isConfigurationValidThisStep(currentConfig, step.substring(0, 1))} style={{ "disabled": `${!isConfigurationValidThisStep(currentConfig, step.substring(0, 1))} !important` }} className="vw-btn">{next} <i className="bi bi-arrow-right" /></button></NavLink></div>
                </div>
            </div>
            {
                isConfigurationValidThisStep(currentConfig, step.substring(0, 1)) ? null :
                    <div className="alert alert-danger" role="alert">Konfiguration invalide, bitte eine andere Option auswählen</div>
            }
        </div>
    )
}

export default Footer;
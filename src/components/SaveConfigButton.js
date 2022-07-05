import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { postConfiguration } from "../actions/FetchAction";
import { isConfigurationValid } from "../util/util";
import ConfigSaved from "./ConfigSaved";


const SaveConfigButton = (configId) => {
    const dispatch = useDispatch();
    const currentConfig = useSelector(state => state.config);
    let [savedConfig, setSavedConfig] = useState({ id: 0 });

    const handleClick = async () => {
        if (isConfigurationValid(currentConfig)) {
            const response = await dispatch(postConfiguration(currentConfig))
            setSavedConfig(response);
        }
        else {
            setSavedConfig(false);
        }
    }

    return (
        <div>
            <ConfigSaved savedConfig={savedConfig} />
            <button data-bs-toggle="modal" data-bs-target="#configSaved" className="btn btn-light" onClick={() => handleClick()}><i className="bi bi-download"></i> Konfiguration sichern</button>
        </div>
    )
}

export default SaveConfigButton;
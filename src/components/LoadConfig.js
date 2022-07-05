import { useDispatch } from 'react-redux';
import { getNewConfig } from '../actions/FetchAction';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoadConfig = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [configId, setConfigId] = useState("");
    const [warning, setWarning] = useState(false);


    const newConfig = async (e) => {
        let result = await dispatch(getNewConfig(configId))
        if (result) {
            setConfigId("");
            navigate("/engineConfig");
            document.getElementById("modalDissmissButton").click();
        } else {
            setWarning(configId)
        }
    }

    const handleInput = (e) => {
        setConfigId(e.target.value);
        setWarning(false);
    }

    const reset = () => {
        setWarning(false);
        setConfigId("");
    }


    return (
        <div className="modal fade modal-lg" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="staticBackdropLabel">Konfiguration laden</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => reset()}></button>
                    </div>
                    <div className="modal-body">

                        <label className="col-form-label">Konfigurations-Id:</label>
                        <input type="text" className="form-control" onChange={(e) => handleInput(e)} value={configId} />
                        {warning ? <div className="alert alert-danger" role="alert">ID {warning} existiert nicht!</div> : null}

                    </div>
                    <div className="modal-footer">
                        <button id="modalDissmissButton" type="button" onClick={() => reset()} className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="submit" className="btn btn-primary" disabled={configId ? false : true} onClick={async (e) => newConfig(e)} >Konfiguration laden</button>
                    </div>
                </div>
            </div>
        </div>
    )


}

export default LoadConfig;
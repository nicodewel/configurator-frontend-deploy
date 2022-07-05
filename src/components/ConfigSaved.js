const ConfigSaved = ({ savedConfig }) => {
    return (
        savedConfig ?
            <div className="modal fade modal-lg" id="configSaved" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="configSavedLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="configSavedLabel">Konfiguration gespeichert</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <p>
                                Der Volkswagen Code ist eine Art 'Schlüssel', der Ihre Konfigurationsdetails speichert. Auf Ihren Wunsch kann Ihr Volkswagen Nutzfahrzeuge Partner Ihre Konfiguration ebenfalls einsehen und Sie weitergehend beraten.
                            </p>
                            <label className="col-form-label">Volkswagen Code:</label>
                            <input className="form-control bg-light" type="text" value={savedConfig.id} aria-label="readonly input" readOnly></input>

                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
            :
            <div className="modal fade modal-lg" id="configSaved" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="configSavedLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="configSavedLabel">Konfiguration ungültig</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <p>
                                Konfiguration konnte nicht gespeichert werden, da die Auswahl ungültig ist.
                            </p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default ConfigSaved;
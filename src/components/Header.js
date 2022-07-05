import vwlogo from '../img/volkswagen-logo-small.jpeg'
import LoadConfig from './LoadConfig';

const Header = ({ headline }) => {

    return (
        <div className="my-3">
            <LoadConfig />
            <div className="h1 d-inline-block col-8">
                ID. Buzz
                <small className="text-muted"> {headline} </small>
            </div>
            <div className="d-inline-block text-end col-4">
                <img className="img-fluid" src={vwlogo} alt="logo" />
            </div>
            <br />
            <button data-bs-toggle="modal" data-bs-target="#staticBackdrop" className="btn btn-light mb-3"><i className="bi bi-upload"></i> Konfiguration laden</button>
        </div>
    )
}

export default Header;
import EngineSelection from "./EngineSelection";
import '../../css/additional.css'
import ConfigMain from '../ConfigMain';
import Header from '../Header.js'
import Footer from '../Footer';


const EngineConfigView = () => {

    return (
        <div>
            <div>
                <Header headline=" - Konfiguration" />
                <div className="d-flex">
                    <ConfigMain />
                    <EngineSelection />
                </div>
            </div>
            <div className="footer">
                <Footer step="1/6 Motoren" linkTo="/colorConfig" next="Farben" />
            </div>
        </div>
    )
}

export default EngineConfigView;
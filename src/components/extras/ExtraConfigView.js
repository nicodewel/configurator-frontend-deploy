import ConfigMain from "../ConfigMain";
import ExtraSelection from "./ExtraSelection";
import Header from "../Header";
import Footer from "../Footer";

const ExtraConfigView = () => {
    return (
        <div>
            <Header headline=" - Konfiguration"/>
            <div className="d-flex force-heigth">
                <ConfigMain />
                <ExtraSelection />
            </div>
            <div  className="footer">
                <Footer step="5/6 Sonderausstattung" linkTo="/summary" next="Zusammenfassung" />
            </div>

        </div>
    )


}

export default ExtraConfigView;
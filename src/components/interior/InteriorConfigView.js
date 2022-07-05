import ConfigMain from "../ConfigMain";
import InteriorSelection from "./InteriorSelection";
import Header from "../Header";
import Footer from "../Footer";

const InteriorConfigView = () => {

    return (
        <div>
            <Header headline=" - Konfiguration" />
            <div className="d-flex  position-relative">
                <ConfigMain />
                <InteriorSelection />
            </div>
            <div className="footer">
                <Footer step="3/6 Interieur" linkTo="/wheelConfig" next="Räder / Reifen" />
            </div>

        </div>
    )

}

export default InteriorConfigView;
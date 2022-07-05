import ConfigMain from "../ConfigMain";
import Header from "../Header";
import WheelSelection from"./WheelSelection";
import Footer from "../Footer";

const WheelConfigView = () => {
    return (
        <div>
            <Header headline=" - Konfiguration"/>
            <div className="d-flex force-heigth">
                <ConfigMain />
                <WheelSelection />

            </div>
            <div className="footer">
                <Footer step="4/6 Räder/Reifen" linkTo="/extraConfig" next="Sonderaustattung" />
            </div>

        </div>
    )


}

export default WheelConfigView;
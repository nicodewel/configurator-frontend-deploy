import ColorSelection from "./ColorSelection";
import ConfigMain from "../ConfigMain";
import Header from "../Header";
import Footer from "../Footer";

const ColorConfigView = () => {

return (
        <div>
            <Header headline=" - Konfiguration"/>
            <div className="d-flex force-heigth">
                <ConfigMain />
                <ColorSelection />
            </div>
            <div className="footer">
                <Footer step="2/6 Farben" linkTo="/interiorConfig" next="Interieur" />
            </div>

        </div>
    )

}
export default ColorConfigView;
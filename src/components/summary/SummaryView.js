import { useSelector } from 'react-redux';
import Header from '../Header';
import SummaryListItem from './SummaryListItem';
import SaveConfigButton from '../SaveConfigButton';
import { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import { getSummaryFromConfiguration } from '../../util/util';


const SummaryView = () => {

    const currentConfig = useSelector(state => state.config);
    const germanDescription = ["Modell", "Motor", "Außenfarbe", "Interieur", "Räder/Reifen"]
    const attributes = [currentConfig.model, currentConfig.engine, currentConfig.color, currentConfig.interior, currentConfig.wheels]
    const componentRef = useRef();
    const handlePdfPrint = useReactToPrint({
        content: () => componentRef.current,
    });
    const downloadTxtFile = () => {
        const element = document.createElement("a");
        const file = new Blob([JSON.stringify(getSummaryFromConfiguration(currentConfig))], {
            type: "text/plain"
        });
        element.href = URL.createObjectURL(file);
        element.download = "Summary.txt";
        document.body.appendChild(element);
        element.click();
    };

    return (
        <div ref={componentRef}>
            <Header />
            <div className="d-flex">
                <div className="col-5">
                    Zusammenfassung <strong>ID. Buzz</strong>
                    <p>{currentConfig.model.details}
                    </p>
                    <SaveConfigButton />
                    <button className="btn btn-light" onClick={handlePdfPrint}><i className="bi bi-printer"></i> Als PDF drucken</button>
                    <button className="btn btn-light" onClick={downloadTxtFile}><i className="bi bi-printer"></i> Als TXT drucken</button>
                </div>
                <div className="col-7 text-center"><img className="img-fluid" src={process.env.REACT_APP_FRONTEND_URL + currentConfig.color.imgUrl + ".webp"} alt={currentConfig.color.title} /></div>
            </div>
            <div>
                <div>
                    {germanDescription.map((step, i) => <div key={i}>
                        <strong>{`${i + 1}. ${step}`}</strong>
                        <SummaryListItem style={{ "break-after": "auto" }} attribute={attributes[i]} />
                    </div>)}
                    <strong>5. Sonderausstattung</strong>
                    {currentConfig.extra.map((extra, i) => <div key={i}><SummaryListItem style={{ "break-after": "auto" }} attribute={extra} /></div>)}
                </div>
                <div className="bg-light">
                    <div className="mx-3 my-3">
                        <div className="d-inline-block"> <h5>Gesamtpreis</h5></div>
                        <div className="d-flex">
                            <strong className="h4">{currentConfig.price}</strong>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SummaryView;
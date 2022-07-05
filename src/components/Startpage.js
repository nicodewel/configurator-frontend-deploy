import ModelOverview from './ModelOverview';
import Header from './Header';

const Startpage = () => {

    return (
        <div style={{"height": "100%"}}>
            <Header headline="Ausstattungslinien &amp; Aktionsmodelle" />
            <ModelOverview />
        </div>
    )
}

export default Startpage;
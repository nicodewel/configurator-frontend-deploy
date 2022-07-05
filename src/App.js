import './App.css';
import Startpage from './components/Startpage';
import { Routes, Route } from "react-router-dom";
import EngineConfigView from './components/engine/EngineConfigView';
import ColorConfigView from './components/color/ColorConfigView';
import InteriorConfigView from './components/interior/InteriorConfigView';
import WheelConfigView from './components/wheels/WheelConfigView';
import ExtraConfigView from './components/extras/ExtraConfigView';
import SummaryView from './components/summary/SummaryView';
import { useDispatch } from 'react-redux';
import { getAllAttributes } from './actions/FetchAction';
import { useEffect } from 'react';


function App() {

  const dispatch = useDispatch();

  dispatch(getAllAttributes());

  useEffect(() => {
    document.title = "ID. Buzz Konfigurators"
  }, []);

  return (
    <div className="mx-5 vh-100">
      <Routes>
        <Route path="/" exact element={<Startpage />} />
        <Route path="/engineConfig" exact element={<EngineConfigView />} />
        <Route path="/colorConfig" exact element={<ColorConfigView />} />
        <Route path="/interiorConfig" exact element={<InteriorConfigView />} />
        <Route path="/wheelConfig" exact element={<WheelConfigView />} />
        <Route path="/extraConfig" exact element={<ExtraConfigView />} />
        <Route path="/summary" exact element={<SummaryView />} />
      </Routes>
    </div>
  );
}

export default App;

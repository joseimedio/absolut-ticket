import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import LocalMinima from './components/LocalMinima';
import CurrencyData from './components/CurrencyData';
import Slider from './components/Slider';

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path='/finding_local_minima' element={<LocalMinima />}/>  
              <Route path='/currency_data'        element={<CurrencyData />}/>
              <Route path='/slider'               element={<Slider />}/>
          </Routes>
      </BrowserRouter>
  );
}

export default App;

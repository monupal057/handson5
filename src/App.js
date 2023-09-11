//import logo from './logo.svg';

import './App.css';
import Count from './Compo/Count';
import Counterclick from './Compo/Counterclick';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {Navbar} from './Compo/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/Counter' element={<Count />}></Route>
          <Route path='/HOC' element={<Counterclick />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
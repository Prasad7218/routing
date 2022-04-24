import './App.css';
import Mounting from './components/Mounting';
import Updating from './components/Updating';
import Unmounting from './components/Unmounting';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';

function App() {
  return (
     <Router>
       <h1 className="heading" align="center">Component Life Cycle</h1>
       <nav className="navbar">
         <Link to="/mounting">Mounting</Link>
         <Link to="/updating">Updating</Link>
         <Link to="/unmounting">Unmounting</Link>
       </nav>
      <Routes>

      <Route path="/mounting" element={<Mounting />}/>
      <Route path="/updating" element={<Updating />}/>
      <Route path="/unmounting" element={<Unmounting />}/>
      </Routes>
   </Router>
  );
}

export default App;

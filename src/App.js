import "./assets/fonts/DMM.ttf"
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Test from './pages/Test';
import Kartikey from "./pages/Kartikey";
import Lakshay from "./pages/Laskhay";
import Aviral from "./pages/Aviral";


function App() {
  return (
    <div className="App">
    <Router>
    <Routes>
       <Route path="/" element={<Home/>}   />
       <Route path="/test" element={<Test/>}   />
       <Route path="/aviral" element={<Aviral/>}   />
       <Route path="/lakshay" element={<Lakshay/>}   />
       <Route path="/kartikey" element={<Kartikey/>}   />
    </Routes>
    </Router>
    </div>
  );
}

export default App;

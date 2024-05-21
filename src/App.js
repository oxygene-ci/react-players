import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './Components/Home';
import About from './Components/About'
import Contact from './Components/Contact';
import Gfa from './Components/Gfa';
import Developpement from './Components/Developpement';
import Customer_feedback from './Components/Customer_feedback';
import Affichage_dynamique from './Components/Affichage_dynamique';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/gfa" element={<Gfa />} />
      <Route path="/developpement" element={<Developpement />} />
      <Route path="/customer_feedback" element={<Customer_feedback />} />
      <Route path="/affichage_dynamique" element={<Affichage_dynamique />} />
      {/* <Route path="/action5" element={<Action5 />} /> */}
    </Routes>
  );
}

export default App;

import logo from './K.png';
import './App.css';
import Navbar from './my_components/Navbar';
import Hero from './my_components/Hero';
import MyIntro from './my_components/MyIntro';
import Projects from './my_components/Projects';
import Rapping from './my_components/Rapping';
import Contact from './my_components/Contact';
import Footer from './my_components/Footer';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      
      
        <Routes>
          <Route path="/" element={<Hero/>}/>
          <Route path="/about" element={<MyIntro/>}/>
          <Route path="/Projects" element={<Projects/>}/>
          <Route path="/Rapping"element={<Rapping/>}/>
          <Route path="/Contact" element={<Contact/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;

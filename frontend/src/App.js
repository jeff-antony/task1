import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Contact from './components/Contact';
import Home from "./components/Home";
import About from './components/About';


function App() {
  return (
    <div className="App">
      <BrowserRouter> 
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/what" element={<h1>What Component</h1>}/>
        <Route path="/why" element={<h1>Why Component</h1>}/>
        <Route path="/location" element={<h1>Location Component</h1>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      
      </BrowserRouter>
      <Footer/> 
    </div>
  );
}

export default App;

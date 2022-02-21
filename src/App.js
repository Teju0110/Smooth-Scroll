import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Features from './Components/Features';
import Home from './Components/Home';
import NavBar from './Components/NavBar';
import Offer from './Components/Offer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Home/>
      <Features/>
      <Offer/>
      <About/>
      <Contact/>
    </div>
  );
}

export default App;

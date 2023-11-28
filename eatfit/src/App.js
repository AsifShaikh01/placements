import logo from './logo.svg';
import './App.css';
import Menu from './components/Menu';
import ContactUs from './components/ContactUs';
import Slider from './components/Slider';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Slider/>
       <Menu/>
      <ContactUs/>
      
    </div>
  );
}

export default App;

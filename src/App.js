import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom'
import HomeScreen from './screens/HomeScreen'
import ProjectScreen from './screens/ProjectScreen';
import AboutMeScreen from './screens/AboutMeScreen'
import CoolStuffScreen from './screens/CoolStuffScreen'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}

      <Routes>
        <Route path="/" element={<HomeScreen/>}/>
        <Route path="/projects" element={<ProjectScreen/>}/>
        <Route path="/about-me" element={<AboutMeScreen/>}/>
        <Route path="/cool-stuff" element={<CoolStuffScreen/>}/>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;

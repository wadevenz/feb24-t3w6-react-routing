
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/Homepage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import Navbar from './components/Navbar';


function App() {
  return (
    <div className="App">
      
      <BrowserRouter>

        <Navbar />
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

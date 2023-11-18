import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Personal from './components/Personal';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hospital from './components/Hospital';
import Disease from './components/Disease';
import Contact from './components/Contact';
import Chatbot from './components/Chatbot';
import Startuppage from "./pages/StartUpPage/startuppage";
import { Chat } from '@mui/icons-material';


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/personal" element={<Personal/>} />
        <Route path="/hospital" element={<Hospital/>} />
        <Route path="/disease" element={<Disease/>} />
        <Route path="/chatbot" element={<Chatbot/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/login" element={<Startuppage/>} />
        <Route path="/register" element={<Startuppage/>} />
        
        
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
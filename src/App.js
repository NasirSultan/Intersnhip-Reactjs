import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./App.css";


import Footer from './components/Footer';
import Home from './components/Home';
import Hotels from './components/Hotels';


function App() {
  return (
    <Router>
      <div>
      
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/hotels" element={<Hotels />} />
        
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
import React, { useState } from 'react';
import './App.css';
import Home from './Pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './Pages/About';
import Post from './Pages/Post';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Post" element={<Post />} />
        </Routes>
      </Router>
      <Footer/>
    </>
  );
}

export default App;

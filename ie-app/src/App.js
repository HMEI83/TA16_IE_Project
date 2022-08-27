import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/pages/homePg';
import Life from './components/pages/lifePg';
import Learning from './components/pages/learnPg';
import Entertainment from './components/pages/entertainPg';
import Contact from './components/pages/contactPg';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/life' component={<Life/>} />
        <Route path='/learning' component={<Learning/>} />
        <Route path='/entertainments' component={<Entertainment/>} />
        <Route path='/contact-us' component={<Contact/>} />
      </Routes>
    </Router>
  );
}

export default App;

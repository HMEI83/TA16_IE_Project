import React from 'react';
import Navbar from './components/general/Navbar';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/pages/homePg';
import Life from './components/pages/lifePg';
import Learning from './components/pages/learnPg';
import Entertainment from './components/pages/entertainPg';
import Contact from './components/pages/contactPg';
import GenMap from './components/landmark/map'
import SlangQuiz from './components/pages/slangQuizPg';
import Footer from "./components/general/Footer";

function App() {
  return (
    <div className='App'>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/life' element={<Life/>} />
        <Route path='/learning' element={<Learning/>} />
        <Route path='/entertainments' element={<Entertainment/>} />
        <Route path='/contact-us' element={<Contact/>} />
        <Route path='/landmark' element={<GenMap/>} />
        <Route path='/slang' element={<SlangQuiz/>} />
      </Routes>
    </Router>

    <div><Footer/></div>
    
    </div>
  );
}

export default App;

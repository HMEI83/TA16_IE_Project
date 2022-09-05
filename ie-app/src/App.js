import React from 'react';
import Navbar from './components/general/Navbar';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/pages/homePg';
import Life from './components/pages/lifePg';
import Learning from './components/pages/learnPg';
import Entertainment from './components/pages/entertainPg';
import GenMap from './components/landmark/map'
import Quizzes from './components/pages/quizzesPg';
import SlangQuiz from './components/pages/slangQuizPg';
import EnglishQuiz from './components/pages/englishQuiz';
// import Footer from "./components/general/Footer";
import VocabPg from './components/pages/VocabPg';
import WriteCheck from './components/pages/WriteCheckPg';
import Diet from './components/pages/dietPg';
import { RecipeReq } from "./components/recipe/recipeReqHandler";
import { MenuPlanner } from './components/menuplan/menuplanHandler';
import ScrollToTop from "./components/general/scrollToTop.js"
function App() {
  return (
    <div className='App'>
    <Router basename="/ie-app">
      <ScrollToTop/>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/life' element={<Life/>} />
        <Route path='/learning' element={<Learning/>} />
        <Route path='/entertainments' element={<Entertainment/>} />
        <Route path='/landmark' element={<GenMap/>} />
        <Route path='/quizzes' element={<Quizzes/>} />
        <Route path='/slang' element={<SlangQuiz/>} />
        <Route path='/english-quiz' element={<EnglishQuiz/>} />
        <Route path='/vocabularyAndWriting' element={<VocabPg />}/>
        <Route path='/writing' element={<WriteCheck />}/>
        <Route path='/diet' element={<Diet/>} />
        <Route path='/recipe' element={<RecipeReq/>} />
        <Route path='/meal-plan' element={<MenuPlanner/>} />
      </Routes>
    </Router>

    {/* <div><Footer/></div> */}
    
    </div>
  );
}

export default App;
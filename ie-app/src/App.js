import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import NavBar from "./components/Layout/Navbar";
import './App.css';
import Home from "./components/pages/Home"

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home}></Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;

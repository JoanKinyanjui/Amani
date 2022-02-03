import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import './App.css';
import About from './Components/About/About';
import Contactus from "./Components/Contact/Contactus";
import Home from './Components/Home/Home';
import Nav from "./Components/Nav/Nav";
import React from 'react';


function App() {
  return (<>

    <Router>
<div className='App'>
<Nav />
  <Routes>

    <Route exact path='/'  element={<Home />}/>
    

     <Route exact path='/about'  element={<About />}/>


    <Route exact path='/contact'  element={<Contactus />}/>

  </Routes>
</div>
</Router>
  
    </>
  );
}

export default App;

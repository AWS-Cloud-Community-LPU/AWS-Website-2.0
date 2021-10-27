import './App.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import React from "react";
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Home from './Pages/Home/Home';
import Blogs from './Pages/Blogs/Blogs';
import Recruitment from './Pages/Recruitment/Recruitment';
import Contact from './Pages/Contact/Contact';
import Events from './Pages/Events/Events';
import About from './Pages/About/About';

function App() {
  return (
    <div className="App">

      <Router>

        <Navbar/>
        <Switch>

          <Route exact path="/">
            <Home/>
          </Route>

          <Route exact path="/blogs">
            <Blogs/>
          </Route>

          <Route exact path="/events">
            <Events/>
          </Route>

          <Route exact path="/contact">
            <Contact/>
          </Route>

          <Route exact path="/about">
            <About/>
          </Route>

          <Route exact path="/recruitment">
            <Recruitment/>
          </Route>

        </Switch>
        <Footer/>

      </Router>

    </div>
  );
}

export default App;

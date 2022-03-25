import './App.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import React from "react";
import { AuthProvider } from "../src/Context/AuthContext";
import PrivateRoute from './Pages/PrivateRoute';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Home from './Pages/Home/Home';
import Blogs from './Pages/Blogs/Blogs';
import Recruitment from './Pages/Recruitment/Recruitment';
import Contact from './Pages/Contact/Contact';
import Events from './Pages/Events/Events';
import About from './Pages/About/About';
import QuizHome from './Pages/QuizHome/QuizHome';
import QuizVideo from './Pages/QuizVideo/QuizVideo';
import Quiz from './Pages/Quiz/Quiz';
import Login from './Pages/Login/Login';
import Signup from './Pages/Signup/Signup';

function App() {
  return (
    <div className="App">

      <Router>

        <Navbar/>

        <AuthProvider>
          <Switch>

            <Route exact path="/signup">
              <Signup/>
            </Route>

            <Route exact path="/login">
              <Login/>
            </Route>

            <Route exact path="/">
              <Home/>
            </Route>

            <Route exact path="/blogs">
              <Blogs/>
            </Route>

            <Route exact path="/events">
              <Events/>
            </Route>

            <Route exact path="/quiz">
              <QuizHome/>
            </Route>

            <PrivateRoute exact path="/quiz/video" component={ QuizVideo }/>
            {/* <Route exact path="/quiz/video">
              <QuizVideo/>
            </Route> */}

            <PrivateRoute exact path="/quiz/questions" component={ Quiz }/>
            {/* <Route exact path="/quiz/questions">
              <Quiz/>
            </Route> */}

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
        </AuthProvider>

        <Footer/>

      </Router>

    </div>
  );
}

export default App;

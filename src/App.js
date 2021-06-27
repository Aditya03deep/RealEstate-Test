import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import GlobalStyles from './Components/GlobalStyles';
import Dropdown from './Components/Dropdown';
import Footer from './Components/Footer';
import { BrowserRouter as Router, Switch,Route } from 'react-router-dom';
import Main from './pages/Main';
import Services from './pages/Services';
import About from './pages/About';
import Homes from './pages/Homes';
import Rentals from './pages/Rentals';

function App() {
  return (
    <>
    <Router>

      <GlobalStyles />
      <Navbar />

      <Switch>

      <Route path="/" exact component={Main}/>
      <Route path='/services' component={Services}/>
      <Route path='/about' component={About}/>
      <Route path='/homes' component={Homes}/>
      <Route path='/rentals' component={Rentals}/>
      <Footer/>

      </Switch>
      </Router>
    </>

  );
}

export default App;

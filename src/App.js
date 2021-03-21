import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import NavBar from './NavBar';
import MNavBar from './MNavBar';
import HomePage from './home_page/HomePage';
import MenuPage from './menu_page/MenuPage';
import AboutUsPage from './about_us/AboutUsPage';
import ContactUs from './contact_us/ContactUS';
import MakeOrderPage from './make_order_page/MakeOrderPage';


function App() {

  const [navClick , setNavClick] = React.useState(false);
  const [location , setLocation] = React.useState("");

  function setNavClickTrue(){setNavClick(true);}
  function setNavClickFalse(){setNavClick(false);}

  function getLocation(location){setLocation(location);}







  return (
    <div className="background">
      <NavBar setTrue={setNavClickTrue}/>
      <Router>
        <Switch>
        <Route path="/contact-us">
            <ContactUs getLocation={getLocation} />
          </Route>
          <Route path="/about-us">
            <AboutUsPage getLocation={getLocation} />
          </Route>
          <Route path="/make-order">
            <MakeOrderPage />
          </Route>
          <Route path="/menu">
            <MenuPage getLocation={getLocation}/>
          </Route>
          <Route path="/">
            <HomePage getLocation={getLocation} />
          </Route>
        </Switch>
      </Router>
      <MNavBar getLocation={location} navClick={navClick} setFalse={setNavClickFalse}/>
    </div>

  );
}

export default App;

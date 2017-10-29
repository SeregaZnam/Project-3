import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import Logo from './components/logo';
import About from './components/about';
import Contacts from './components/contacts';
import Prices from './components/prices';
import Schedule from './components/schedule';
import OurTeachers from './components/our-teachers';
import Footer from './components/footer';

class App extends Component {
  render() {
    return (
        <div>
          <div className="main">
              <Logo />
              <Router>
                  <div className='content clearfix'>
                      <div className='list'>
                          <ul>
                              <li><Link to="/about">About</Link></li>
                              <li><Link to="/our-teachers">Our Teachers</Link></li>
                              <li><Link to="/schedule">Schedule</Link></li>
                              <li><Link to="/prices">Prices</Link></li>
                              <li><Link to="/contacts">Contact Us</Link></li>
                          </ul>
                      </div>
                      <Route exact path="/about" component={About}/>
                      <Route path="/our-teachers" component={OurTeachers}/>
                      <Route path="/schedule" component={Schedule}/>
                      <Route path="/prices" component={Prices}/>
                      <Route path="/contacts" component={Contacts}/>
                  </div>
              </Router>
            </div>
          <Footer />
        </div>
    );
  }
}

export default App;

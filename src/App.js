import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import './App.css';
import Logo from './components/logo/logo';
import About from './components/about/about';
import Contacts from './components/contacts/contacts';
import Prices from './components/prices/prices';
import Schedule from './components/schedule/schedule';
import OurTeachers from './components/our-teachers/our-teachers';
import Footer from './components/footer/footer';
import { Carousel } from 'react-bootstrap';

const carouselInstance = (
    <Carousel>
        <Carousel.Item>
            <div className="content__image_main1"></div>
        </Carousel.Item>
        <Carousel.Item>
            <div className="content__image_main2"></div>
        </Carousel.Item>
        <Carousel.Item>
            <div className="content__image_main3"></div>
        </Carousel.Item>
    </Carousel>
);

class App extends Component {
  render() {
    return (
        <div>
            <div className="app__content">
                <div className="carousel__block">
                    {carouselInstance}
                </div>
                <div className="main">
                  <Logo />
                  <Router>
                      <div className='content clearfix'>
                          <div className='list'>
                              <ul>
                                  <li><NavLink exact to="/" activeClassName="active-link" activeStyle={{ color: 'white' }}>About</NavLink></li>
                                  <li><NavLink to="/our-teachers" activeClassName="active-link" activeStyle={{ color: 'white' }}>Our Teachers</NavLink></li>
                                  <li><NavLink to="/schedule" activeClassName="active-link" activeStyle={{ color: 'white' }}>Schedule</NavLink></li>
                                  <li><NavLink to="/prices" activeClassName="active-link" activeStyle={{ color: 'white' }}>Prices</NavLink></li>
                                  <li><NavLink to="/contacts" activeClassName="active-link" activeStyle={{ color: 'white' }}>Contact Us</NavLink></li>
                              </ul>
                          </div>
                          <Route exact path="/" component={About}/>
                          <Route path="/our-teachers" component={OurTeachers}/>
                          <Route path="/schedule" component={Schedule}/>
                          <Route path="/prices" component={Prices}/>
                          <Route path="/contacts" component={Contacts}/>
                      </div>
                  </Router>
                </div>
            </div>
            <Footer/>
        </div>
    );
  }
}

export default App;

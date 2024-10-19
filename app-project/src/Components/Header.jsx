import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
      <div className="main-banner">
        <div className="owl-carousel owl-banner">
          <div className="item item-1">
            <div className="header-text">
              <span className="category">Toronto, <em>Canada</em></span>
              <h2>Hurry!<br />Get the Best Villa for you</h2>
            </div>
          </div>
          <div className="item item-2">
            <div className="header-text">
              <span className="category">Melbourne, <em>Australia</em></span>
              <h2>Be Quick!<br />Get the best villa in town</h2>
            </div>
          </div>
          <div className="item item-3">
            <div className="header-text">
              <span className="category">Miami, <em>South Florida</em></span>
              <h2>Act Now!<br />Get the highest level penthouse</h2>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div id="js-preloader" className="js-preloader">
          <div className="preloader-inner">
            <span className="dot" />
            <div className="dots">
              <span />
              <span />
              <span />
            </div>
          </div>
        </div>
        {/* ***** Preloader End ***** */}
        <div className="sub-header">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-8">
                <ul className="info">
                  <li><i className="fa fa-envelope" /> info@company.com</li>
                  <li><i className="fa fa-map" /> Sunny Isles Beach, FL 33160</li>
                </ul>
              </div>
              <div className="col-lg-4 col-md-4">
                <ul className="social-links">
                  <li><a href="#"><i className="fab fa-facebook" /></a></li>
                  <li><a href="https://x.com/minthu" target="_blank"><i className="fab fa-twitter" /></a></li>
                  <li><a href="#"><i className="fab fa-linkedin" /></a></li>
                  <li><a href="#"><i className="fab fa-instagram" /></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* ***** Header Area Start ***** */}
        <header className="header-area header-sticky">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <nav className="main-nav">
                  {/* ***** Logo Start ***** */}
                  <a href="index.html" className="logo">
                    <h1>Villa</h1>
                  </a>
                  {/* ***** Logo End ***** */}
                  {/* ***** Menu Start ***** */}
                  <ul className="nav">
                    <li><Link to='/' className="active">Home</Link></li>
                    <li><Link to='/Properties'>Properties</Link></li>
                    <li><Link to='/PropertyDetails'>Property Details</Link></li>
                    <li><Link to='/Contact'>Contact Us</Link></li>
                    <li><Link to='/Login'>Login</Link></li>
                    <li><Link to='/Register'>Register</Link></li>
                    <li><a href="#"><i className="fa fa-calendar" /> Schedule a visit</a></li>
                  </ul>
                  <a className="menu-trigger">
                    <span>Menu</span>
                  </a>
                  {/* ***** Menu End ***** */}
                </nav>
              </div>
            </div>
          </div>
        </header>
      </div>


    </div>
  )
}

export default Header
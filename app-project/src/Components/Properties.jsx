import React from 'react'
import { properties } from './PropertisData'
import { Link } from 'react-router-dom'


function Properties() {
  return (
    <div>
      <div>
        <div className="page-heading header-text">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <span className="breadcrumb"><a href="#">Home</a> / Properties</span>
                <h3>Properties</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="section properties">
          <div className="container">
            <ul className="properties-filter">
              <li>
                <a className="is_active" href="#!" data-filter="*">Show All</a>
              </li>
              <li>
                <Link href="#!" data-filter=".adv">Apartment</Link>
              </li>
              <li>
                <a href="#!" data-filter=".str">Villa House</a>
              </li>
              <li>
                <a href="#!" data-filter=".rac">Penthouse</a>
              </li>
            </ul>
            <div className="row properties-box">
              {properties.map((property) => (
                <div key={property.id} className="col-lg-4 col-md-6 align-self-center mb-30 properties-items col-md-6 adv">
                  {/* {property.propImg1} */}
                  <div className="item" >
                  <img src={`/assets/images/${property.propImg1}`} alt={property.title} />
                    <span className="category">Luxury Villa</span>
                    <h6>{property.price}</h6>
                    <h4><a href="property-details.html">{property.title}</a></h4>
                    <ul>
                      <li>Bedrooms: <span>{property.Bedrooms}</span></li>
                      <li>Bathrooms: <span>{property.Bathrooms}</span></li>
                      <li>Area: <span>{property.Area}</span></li>
                      <li>Floor: <span>{property.Floor}</span></li>
                      <li>Parking: <span>{property.Parking}</span></li>
                    </ul>
                    <div className="main-button">
                      <a href="property-details.html">Schedule a visit</a>
                    </div>
                  </div>

                </div>

              ))}
            </div>
            <div className="row">
              <div className="col-lg-12">
                <ul className="pagination">
                  <li><a href="#">1</a></li>
                  <li><a className="is_active" href="#">2</a></li>
                  <li><a href="#">3</a></li>
                  <li><a href="#">&gt;&gt;</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
  )
}

export default Properties
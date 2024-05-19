import React from 'react'
import { ReactComponent as ContactIcon } from '../assets/imgs/map.svg'; // Make sure you have an SVG icon in this path
import mapImage from '../assets/imgs/map.png'; // Make sure you have a map image in this path
import './pages.css'

function ContactPage() {
  return (
    <div className="contact-container container">
      <h1>Contact Us</h1>
      <div className="d-flex jcc aie g1">
        <ContactIcon className="contact-icon" />
        <p>If you have any questions, feel free to reach out to us.</p>
      </div>
      
      <div className="map-container d-flex jcc">
        <img src={mapImage} alt="Map" className="map-image" />
      </div>
    </div>
  )

}
export default ContactPage
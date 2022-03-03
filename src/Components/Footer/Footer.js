import React from 'react'
import './footer.css'
import OurLogo from '../../asset/Images/logo1.png'

const Footer = () => {
  return (
    <div className="foorter-container">
        <img src={OurLogo} alt="Logo" />
        <span className="copyright">Designed by Oduyemi Obaloluwa</span>
    </div>
  )
}

export default Footer
import './header.css';
import data from './data';
import HeaderImage from '../../assets/header.jpg';

import React from 'react'

const Header = () => {
  return (
    <header id="header">
      <div className="container header__container">
        <div className="header__profile">
          <img src={HeaderImage} alt="Header Portrait" />
        </div>
        <h3>Batul Shahed</h3>
        <p>
          I'm a passionate developer who loves combining creativity and technical skills to create impactful projects.
          Let's connect and explore exciting opportunities together!
        </p>
        <div className="header__cta">
          <a href="#contact" className='btn primary'>Let's Talk</a>
          <a href="#portfolio" className='btn light'>My Work</a>
        </div>
        <div className="header__socials">
          {
            data.map(item => <a key={item.id} href={item.link} target="-blank" rel="noopener noreferrer">{item.icon}</a>)
          }
        </div>
      </div>
    </header>
  )
}

export default Header

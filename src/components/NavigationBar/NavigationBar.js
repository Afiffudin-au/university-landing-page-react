import React from 'react'
import './NavigationBar.scss'
import { NavLink } from 'react-router-dom'
function NavigationBar() {
  const handleNavigate = (e) => {
    const links = document.querySelectorAll('.nav-link')
    links.forEach((item) => {
      item.classList.remove('active-blue')
    })
    e.target.classList.add('active-blue')
  }
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <div className='container'>
        <a className='navbar-brand' href='#home'>
          <img src='/assets/images/Bitmap.png' alt='' />
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav ml-auto'>
            <li>
              <a onClick={handleNavigate} className='nav-link' href='#home'>
                Home
              </a>
            </li>
            <li>
              <a onClick={handleNavigate} className='nav-link' href='#about'>
                About
              </a>
            </li>
            <li>
              <a onClick={handleNavigate} className='nav-link' href='#featured'>
                Featured
              </a>
            </li>
            <li className='nav-item'>
              <a onClick={handleNavigate} className='nav-link' href='#service'>
                Our Services
              </a>
            </li>
            <li className='nav-item'>
              <a onClick={handleNavigate} className='nav-link' href='#news'>
                News
              </a>
            </li>
            <li className='nav-item'>
              <a onClick={handleNavigate} className='nav-link' href='#country'>
                Countrys
              </a>
            </li>
            <li className='nav-item'>
              <button
                style={{ width: '150px' }}
                type='button'
                className='btn btn-outline-primary rounded-pill'
              >
                Apply
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavigationBar

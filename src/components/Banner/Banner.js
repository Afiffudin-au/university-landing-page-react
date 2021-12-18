import React from 'react'
import './Banner.scss'
function Banner() {
  return (
    <div className='jumbotron jumbotron-fluid'>
      <div className='container jumbotron-container'>
        <div className='jumbotron__content'>
          <h1 className='display-4'>
            We Help to <span>Build</span> Your Dream
          </h1>
          <p className='lead'>
            We are always availed to consult on taking your higher education to
            the next level so you can stay competitive in the{' '}
          </p>
          <a href='#home' className='btn btn-primary jumbotron__apply'>
            Apply Online{' '}
            <img
              src='/assets/images/icon-navigation-arrow_forward_24px.png'
              alt=''
            />
          </a>
          <div className='jumbotron__shareNavigation'>
            <a href='#home'>
              <img src='/assets/images/facebook.svg' alt='' />
            </a>
            <a href='#home'>
              <img src='/assets/images/tweet.svg' alt='' />
            </a>
            <a href='#home'>
              <img src='/assets/images/instagram.svg' alt='' />
            </a>
          </div>
        </div>
        <img className='jumbotron__girl' src='/assets/images/girl.png' alt='' />
        <object
          aria-label='image'
          type='image/svg+xml'
          data='/assets/images/Oval.svg'></object>
      </div>
    </div>
  )
}

export default Banner

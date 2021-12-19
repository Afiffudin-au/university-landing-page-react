import React from 'react'
import './Footer.scss'
function Footer() {
  return (
    <section className='footer p-5'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-4'>
            <a className='navbar-brand' href='#'>
              <img src='/assets/images/ETI-Logo.png' alt='' />
            </a>
            <div className='address'>
              <p>
                Concord Royal Court (3rd floor) Dhanmondi, Dhaka 1209,
                Bangladesh.
              </p>
            </div>
            <div className='copyright'>
              <p>© 2020 Executive Trade International.</p>
            </div>
          </div>
          <div className='col-md-3'>
            <div className='footer__about-us'>
              <p>About Us</p>
              <p>Responsibilities</p>
              <p>Our Services</p>
              <p>Contact</p>
            </div>
          </div>
          <div className='col-md-3'>
            <div className='disclaimer'>
              <p>Disclaimer</p>
              <p>Testimonials</p>
              <p>Privacy Policy </p>
              <p>Terms of Service</p>
            </div>
          </div>
          <div className='col-md-2 d-flex align-items-end'>
            <a href='#'>
              <img
                className='mr-3'
                src='/assets/images/icon-social-facebook_24px.svg'
                alt=''
              />
            </a>
            <a href='#'>
              <img
                className='mr-3'
                src='/assets/images/icon-social-twitter_24px.svg'
                alt=''
              />
            </a>
            <a href='#'>
              <img
                className='mr-3'
                src='/assets/images/icon-social-facebook_24px copy 2.svg'
                alt=''
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer

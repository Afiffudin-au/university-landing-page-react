import React from 'react'
import './Features.scss'
function Featured() {
  return (
    <section className='featured' id='featured'>
      <div className='container'>
        <div className='row mt-5 text-center'>
          <div className='col-md-12'>
            <p className='featured-title'>Featured Universities</p>
          </div>
        </div>
        <div className='row mt-5'>
          <div className='col-lg'>
            <div
              id='carouselExampleIndicators'
              className='carousel slide'
              data-ride='carousel'>
              <ol className='carousel-indicators'>
                <li
                  data-target='#carouselExampleIndicators'
                  data-slide-to='0'
                  className='active'></li>
                <li
                  data-target='#carouselExampleIndicators'
                  data-slide-to='1'></li>
                <li
                  data-target='#carouselExampleIndicators'
                  data-slide-to='2'></li>
              </ol>
              <div className='carousel-inner'>
                <div className='carousel-item active'>
                  <div className='row'>
                    <div className='row mt-5 text-center about-us-university'>
                      <div className='col-lg-3 mb-5 university-img'>
                        <img src='/assets/images/BitmapLogo.png' alt='' />
                      </div>
                      <div className='col-lg-3 mb-5 university-img'>
                        <img src='/assets/images/logo-1.png' alt='' />
                      </div>
                      <div className='col-lg-3 mb-5 university-img'>
                        <img src='/assets/images/logo-2.png' alt='' />
                      </div>
                      <div className='col-lg-3 mb-5 university-img'>
                        <img src='/assets/images/logo-3.png' alt='' />
                      </div>
                    </div>
                  </div>
                </div>
                <div className='carousel-item'>
                  <div className='row'>
                    <div className='row mt-5 text-center about-us-university'>
                      <div className='col-lg-3 mb-5'>
                        <img src='/assets/images/BitmapLogo.png' alt='' />
                      </div>
                      <div className='col-lg-3 mb-5'>
                        <img src='/assets/images/logo-1.png' alt='' />
                      </div>
                      <div className='col-lg-3 mb-5'>
                        <img src='/assets/images/logo-2.png' alt='' />
                      </div>
                      <div className='col-lg-3 mb-5'>
                        <img src='/assets/images/logo-3.png' alt='' />
                      </div>
                    </div>
                  </div>
                </div>
                <div className='carousel-item'>
                  <div className='row'>
                    <div className='row mt-5 text-center about-us-university'>
                      <div className='col-lg-3 mb-5'>
                        <img src='/assets/images/BitmapLogo.png' alt='' />
                      </div>
                      <div className='col-lg-3 mb-5'>
                        <img src='/assets/images/logo-1.png' alt='' />
                      </div>
                      <div className='col-lg-3 mb-5'>
                        <img src='/assets/images/logo-2.png' alt='' />
                      </div>
                      <div className='col-lg-3 mb-5'>
                        <img src='/assets/images/logo-3.png' alt='' />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Featured

import React from 'react'
import './News.scss'
function News() {
  return (
    <section className='news mt-5' id='news'>
      <div className='container'>
        <div className='row text-center'>
          <div className='col-sm-12'>
            <h5>News</h5>
          </div>
        </div>
        <div className='row text-center justify-content-center'>
          <div className='col-sm-10'>
            <p className='desc'>
              Sunt autem nusquam hoc epicurus in gravissimo bello
              animadversionis metu degendae praesidia firmissima. Torquatos
              nostros? quos tu paulo ante cum teneam sententiam, quid bonum esse
              vult.
            </p>
          </div>
        </div>

        <div className='row newsCard'>
          <div className='col-md-4 mb-5'>
            <img
              className='img-card'
              src='/assets/images/Rectangle1.png'
              alt=''
            />
            <div className='cardContent'>
              <div className='date'>
                <img src='/assets/images/icon.svg' className='mr-2' alt='' />
                <span>17 apr 2021</span>
              </div>
              <p className='newsCard__desc'>
                Come On In. The Water’s Fine (Mostly).
              </p>
            </div>
          </div>
          <div className='col-md-4 mb-5'>
            <img
              className='img-card'
              src='/assets/images/Rectangle2.png'
              alt=''
            />
            <div className='cardContent'>
              <div className='date'>
                <img src='/assets/images/icon.svg' className='mr-2' alt='' />
                <span>17 apr 2022</span>
              </div>
              <p className='newsCard__desc'>
                Trump Lays Plans to Reverse Obama’s
              </p>
            </div>
          </div>
          <div className='col-md-4 mb-5'>
            <img
              className='img-card'
              src='/assets/images/Rectangle.png'
              alt=''
            />
            <div className='cardContent'>
              <div className='date'>
                <img src='/assets/images/icon.svg' className='mr-2' alt='' />
                <span>17 apr 2022</span>
              </div>
              <p className='newsCard__desc'>
                How a Little Bit of Hydra Regrows{' '}
              </p>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-12 text-center'>
            <a href='' className='btn btn-primary btn-apply'>
              Join Here
              <img
                src='assets/images/icon-navigation-arrow_forward_24px.png'
                alt=''
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default News

import React from 'react'
import './Service.scss'
function Service() {
  const handleActive = (e) => {
    const cards = document.querySelectorAll('.our-service .cardBox')
    cards.forEach((item) => {
      item.classList.remove('active-service-card')
    })
    if (e.target.classList[0] === 'cardBox') {
      e.target.classList.add('active-service-card')
    }
  }
  return (
    <section className='our-service' id='service'>
      <div className='container'>
        <div className='row text-center'>
          <div className='col-md-12'>
            <p className='title'>Our Services</p>
          </div>
        </div>
        <div className='row text-center justify-content-center'>
          <div className='col-md-10'>
            <p className='desc'>
              Executive Trade International is an University Application Centre,
              guiding Bangladeshi students to Australian, British, Canadian and
              Irish universities!
            </p>
          </div>
        </div>
        <div className='row text-center justify-content-center'>
          <div className='col-md-4 mb-5'>
            <div onClick={handleActive} className='cardBox active-service-card'>
              <img src='/assets/images/Group1.png' alt='' />
              <div className='cardContent'>
                <h5>Career Counselling</h5>
                <p>
                  Maiores voluptas laboriosam non dolorum perferendis fuga
                  repellat aut. Blanditiis quos in minus. Voluptatum.
                </p>
              </div>
              <a href='#home'>
                Learn More <img src='asset/arrow.png' alt='' />
              </a>
            </div>
          </div>
          <div className='col-md-4 mb-5'>
            <div onClick={handleActive} className='cardBox'>
              <img src='/assets/images/Group2.png' alt='' />
              <div className='cardContent'>
                <h5>University Admissions</h5>
                <p>
                  Maiores voluptas laboriosam non dolorum perferendis fuga
                  repellat aut. Blanditiis quos in minus. Voluptatum
                </p>
              </div>
              <a href='#home'>
                Learn More <img src='asset/arrow.png' alt='' />
              </a>
            </div>
          </div>
          <div className='col-md-4 mb-5'>
            <div onClick={handleActive} className='cardBox'>
              <img src='/assets/images/Group4.png' alt='' />
              <div className='cardContent'>
                <h5>Visa Consultancy</h5>
                <p>
                  Maiores voluptas laboriosam non dolorum perferendis fuga
                  repellat aut. Blanditiis quos in minus. Voluptatum
                </p>
              </div>
              <a href='#home'>
                Learn More <img src='asset/arrow.png' alt='' />
              </a>
            </div>
          </div>
        </div>
        <div
          className='row justify-content-center '
          style={{ marginTop: '100px' }}>
          <div className='col-md-4 mb-5'>
            <div onClick={handleActive} className='cardBox'>
              <img src='/assets/images/Group3.png' alt='' />
              <div className='cardContent'>
                <h5>Accommodation</h5>
                <p>
                  Maiores voluptas laboriosam non dolorum perferendis fuga
                  repellat aut. Blanditiis quos in minus. Voluptatum
                </p>
              </div>
              <a href='#home'>
                Learn More <img src='asset/arrow.png' alt='' />
              </a>
            </div>
          </div>
          <div className='col-md-4 mb-5'>
            <div onClick={handleActive} className='cardBox'>
              <img src='/assets/images/Group.png' alt='' />
              <div className='cardContent'>
                <h5>Pre-Departure Briefing</h5>
                <p>
                  Maiores voluptas laboriosam non dolorum perferendis fuga
                  repellat aut. Blanditiis quos in minus. Voluptatum
                </p>
              </div>
              <a href='#home'>
                Learn More <img src='asset/arrow.png' alt='' />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Service

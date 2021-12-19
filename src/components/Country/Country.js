import React from 'react'
import './Country.scss'
function Country() {
  return (
    <section className='countries' id='country'>
      <div className='container'>
        <div className='row text-center'>
          <div className='col-md-12'>
            <h5>Countries We Covered</h5>
          </div>
        </div>
        <div className='row justify-content-center'>
          <div className='col-md-10'>
            <p className='countries__header'>
              Sunt autem nusquam hoc epicurus in gravissimo bello
              animadversionis metu degendae praesidia firmissima. Torquatos
              nostros? quos tu paulo ante cum teneam sententiam, quid bonum esse
              vult.
            </p>
          </div>
        </div>
        <div
          id='carousel3ExampleIndicators'
          className='carousel slide'
          data-ride='carousel'
        >
          <ol className='carousel-indicators'>
            <li
              data-target='#carousel3ExampleIndicators'
              data-slide-to='0'
              className='active'
            ></li>
            <li
              data-target='#carousel3ExampleIndicators'
              data-slide-to='1'
            ></li>
            <li
              data-target='#carousel3ExampleIndicators'
              data-slide-to='2'
            ></li>
          </ol>
          <div className='carousel-inner'>
            <div className='carousel-item active'>
              <div className='row'>
                <div className='col-md-4'>
                  <img
                    className='countries__imgThumb'
                    src='/assets/images/Rectangle 4.png'
                    alt=''
                  />
                  <div className='countries__cardContent mt-4'>
                    <h6>Study In Australia</h6>
                    <p className='countries__desc'>
                      Ut aut corporis accusantium illo ullam qui laudantium.
                      Maxime rerum sunt et sequi sed qui
                    </p>
                  </div>
                </div>
                <div className='col-md-4'>
                  <img
                    className='countries__imgThumb'
                    src='/assets/images/retange3.png'
                    alt=''
                  />
                  <div className='countries__cardContent mt-4'>
                    <h6>Study In Canada</h6>
                    <p className='countries__desc'>
                      Ut aut corporis accusantium illo ullam qui laudantium.
                      Maxime rerum sunt et sequi sed qui
                    </p>
                  </div>
                </div>
                <div className='col-md-4'>
                  <img
                    className='countries__imgThumb'
                    src='/assets/images/Rectangle Copy 4.png'
                    alt=''
                  />
                  <div className='countries__cardContent mt-4'>
                    <h6>Study In UK</h6>
                    <p className='countries__desc'>
                      Ut aut corporis accusantium illo ullam qui laudantium.
                      Maxime rerum sunt et sequi sed qui
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='carousel-item'>
              <div className='row'>
                <div className='col-md-4'>
                  <img
                    className='countries__imgThumb'
                    src='/assets/images/Rectangle 4.png'
                    alt=''
                  />
                  <div className='countries__cardContent mt-4'>
                    <h6>Study In Australia</h6>
                    <p className='countries__desc'>
                      Ut aut corporis accusantium illo ullam qui laudantium.
                      Maxime rerum sunt et sequi sed qui
                    </p>
                  </div>
                </div>
                <div className='col-md-4'>
                  <img
                    className='countries__imgThumb'
                    src='/assets/images/retange3.png'
                    alt=''
                  />
                  <div className='countries__cardContent mt-4'>
                    <h6>Study In Canada</h6>
                    <p className='countries__desc'>
                      Ut aut corporis accusantium illo ullam qui laudantium.
                      Maxime rerum sunt et sequi sed qui
                    </p>
                  </div>
                </div>
                <div className='col-md-4'>
                  <img
                    className='countries__imgThumb'
                    src='/assets/images/Rectangle Copy 4.png'
                    alt=''
                  />
                  <div className='countries__cardContent mt-4'>
                    <h6>Study In UK</h6>
                    <p className='countries__desc'>
                      Ut aut corporis accusantium illo ullam qui laudantium.
                      Maxime rerum sunt et sequi sed qui
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='carousel-item'>
              <div className='row'>
                <div className='col-md-4'>
                  <img
                    className='countries__imgThumb'
                    src='/assets/images/Rectangle 4.png'
                    alt=''
                  />
                  <div className='countries__cardContent mt-4'>
                    <h6>Study In Australia</h6>
                    <p className='countries__desc'>
                      Ut aut corporis accusantium illo ullam qui laudantium.
                      Maxime rerum sunt et sequi sed qui
                    </p>
                  </div>
                </div>
                <div className='col-md-4'>
                  <img
                    className='countries__imgThumb'
                    src='/assets/images/retange3.png'
                    alt=''
                  />
                  <div className='countries__cardContent mt-4'>
                    <h6>Study In Canada</h6>
                    <p className='countries__desc'>
                      Ut aut corporis accusantium illo ullam qui laudantium.
                      Maxime rerum sunt et sequi sed qui
                    </p>
                  </div>
                </div>
                <div className='col-md-4'>
                  <img
                    className='countries__imgThumb'
                    src='/assets/images/Rectangle Copy 4.png'
                    alt=''
                  />
                  <div className='countries__cardContent mt-4'>
                    <h6>Study In UK</h6>
                    <p className='countries__desc'>
                      Ut aut corporis accusantium illo ullam qui laudantium.
                      Maxime rerum sunt et sequi sed qui
                    </p>
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

export default Country

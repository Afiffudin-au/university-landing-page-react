import React from 'react'
import './Join.scss'
function Join() {
  return (
    <section className='join'>
      <div className='container'>
        <div className='row justify-content-between'>
          <div className='col-md-6'>
            <p className='headerCaption'>Ready to chase your dreams?</p>
          </div>
          <div className='col-md-3'>
            <a href='' className='btn btn-primary apply'>
              Apply Online
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

export default Join

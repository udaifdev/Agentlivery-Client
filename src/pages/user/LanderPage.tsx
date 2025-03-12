import React from 'react'
import Land from '../../component/user/Lander/Land'
import HeaderPage from './HeaderPage'
import Footer from '../../component/user/Footer/Footer'

const LanderPage = () => {
  return (
    <div>
      <HeaderPage/>
      <div className="pt-20">
        <Land />
      </div>
      <Footer/>
    </div>
  )
}

export default LanderPage

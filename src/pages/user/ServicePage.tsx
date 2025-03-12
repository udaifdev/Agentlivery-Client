import React from 'react'
import HeaderPage from './HeaderPage'
import Footer from '../../component/user/Footer/Footer'
import Servcie from '../../component/user/Services/Service'

const ServicePage = () => {
  return (
    <div>
        <HeaderPage/>
        <div className="pt-20 bg-gradient-to-b from-black to-teal-700 text-white">
        <Servcie/>
        </div>
        <Footer/>
    </div>
  )
}

export default ServicePage

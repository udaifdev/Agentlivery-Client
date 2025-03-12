import React from 'react'
import HeaderPage from './HeaderPage'
import Footer from '../../component/user/Footer/Footer'
import Contact from '../../component/user/Contact/Contact'


const ContactPage = () => {
  return (
    <div>
        <HeaderPage/>
        <div className="pt-20 bg-gradient-to-b from-black to-teal-800 text-white">
        <Contact/>
        </div>
        <Footer/>
    </div>
  )
}

export default ContactPage

import React from 'react'
import HeaderPage from './HeaderPage'
import Footer from '../../component/user/Footer/Footer'
import Team from '../../component/user/Team/Team'


const TeamPage = () => {
  return (
    <div>
        <HeaderPage/>
        <div className="pt-20 bg-gradient-to-b from-black to-teal-800 text-white">
        <Team/>
        </div>
        <Footer/>
    </div>
  )
}

export default TeamPage

import React from 'react'
import HeaderPage from './HeaderPage'
import Footer from '../../component/user/Footer/Footer'
import Blog from '../../component/user/Blog/Blog'

const BlogPage = () => {
  return (
    <div>
        <HeaderPage/>
        <div className="pt-20 bg-gradient-to-b from-black to-teal-800 text-white">
        <Blog/>
        </div>
        <Footer/>
    </div>
  )
}

export default BlogPage

import React from 'react'
import { useLocation } from 'react-router-dom'
import BlogNavbar from './BlogNavbar'

const BlogLayout = ({ children }) => {
  const location = useLocation()

  return (
    <div className="bg-white pb-24">
      {/* activeMenu = current route path */}
      <BlogNavbar activeMenu={location.pathname} />

      <div className="container mx-auto px-5 md:px-0 mt-10">
        {children}
      </div>
    </div>
  )
}

export default BlogLayout

import React from 'react'
import BlogLayout from '../../components/layouts/BlogLayout/BlogLayout'
import { LuUsers, LuBook, LuHeart } from "react-icons/lu"
import BlogFooter from '../../components/layouts/BlogLayout/BlogFooter'
// import Logo from "../../assets/CWR2.svg"

const AboutUs = () => {
  return (
    <BlogLayout>
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center gap-8 bg-white rounded-xl shadow-md p-6 mb-12">
        <div className="w-full md:w-1/2 p-4">
          <img 
            // src={Logo}
            src="/CWR2.PNG"
            alt="About Remi Blog" 
            className="w-full h-64 object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Welcome to <span className="text-blue-600">Remi Blog</span>
          </h1>
          <p className="text-gray-600 leading-relaxed mb-6">
            Remi Blog is your go-to place for insightful articles, trending topics, 
            and practical knowledge. Our mission is to inspire, inform, and entertain 
            readers through high-quality content curated by passionate writers.
          </p>
        </div>
      </div>

      {/* Our Values Section */}
      <div className="grid md:grid-cols-3 gap-8 text-center mb-12">
        <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
          <LuUsers className="text-4xl text-blue-600 mx-auto mb-4" />
          <h2 className="text-xl font-semibold mb-2">Community First</h2>
          <p className="text-gray-600">
            We value our readers and writers alike, building a vibrant, supportive community.
          </p>
        </div>
        <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
          <LuBook className="text-4xl text-blue-600 mx-auto mb-4" />
          <h2 className="text-xl font-semibold mb-2">Knowledge Sharing</h2>
          <p className="text-gray-600">
            We aim to provide educational and insightful content that helps you grow.
          </p>
        </div>
        <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
          <LuHeart className="text-4xl text-blue-600 mx-auto mb-4" />
          <h2 className="text-xl font-semibold mb-2">Passion & Creativity</h2>
          <p className="text-gray-600">
            Every article is written with care, creativity, and a passion for delivering value.
          </p>
        </div>
      </div>

      {/* Call-to-Action Section */}
      <div className="bg-gray-50 rounded-xl p-8 text-center shadow-sm">
        <h2 className="text-2xl font-bold mb-4">Join the Remi Blog Community</h2>
        <p className="text-gray-600 mb-6">
          Stay updated with the latest articles and insights by subscribing to our newsletter. 
          Join thousands of readers who love learning, exploring, and sharing knowledge.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2.5 rounded-full transition-all">
          Subscribe Now
        </button>
      </div>

      <BlogFooter />
    </BlogLayout>
  )
}

export default AboutUs

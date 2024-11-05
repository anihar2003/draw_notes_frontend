import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Home = () => {
  return (
    <div className='bg-gray-100 min-h-screen'>
      <Navbar />
      
      {/* Hero Section */}
      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <div className='text-center'>
          <h1 className='text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl'>
            Draw Notes
          </h1>
          <p className='mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg'>
            Create, organize, and share your handwritten notes digitally
          </p>
          <div className='mt-8'>
            <button className='bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors'>
              Get Started
            </button>
          </div>
        </div>

        {/* Features Section */}
        <div className='mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'>
          <div className='bg-white p-6 rounded-lg shadow-sm'>
            <h3 className='text-lg font-medium text-gray-900'>Draw Freely</h3>
            <p className='mt-2 text-gray-500'>Create digital notes with our intuitive drawing tools</p>
          </div>
          <div className='bg-white p-6 rounded-lg shadow-sm'>
            <h3 className='text-lg font-medium text-gray-900'>Organize</h3>
            <p className='mt-2 text-gray-500'>Keep your notes organized with folders and tags</p>
          </div>
          <div className='bg-white p-6 rounded-lg shadow-sm'>
            <h3 className='text-lg font-medium text-gray-900'>Share</h3>
            <p className='mt-2 text-gray-500'>Collaborate and share notes with others easily</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home;
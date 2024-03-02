import React from 'react'

function index() {
  return (
    <nav className="sticky top-0 z-10 bg-gray">
     <div className="max-w-5xl mx-auto px-4">
    <div className="flex items-center justify-between h-16">
      <span className="text-2xl text-white font-semibold">Logo</span>
      <div className="flex space-x-4 text-white">
        <a href="#">Dashboard</a>
        
      </div>
    </div>
  </div>
</nav>
  )
}

export default index
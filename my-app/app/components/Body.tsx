import React from 'react'

function Body() {
  return (
    <main className="flex flex-col items-center text-center py-20">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Let Your Fans Choose the Beat</h2>
        <p className="text-lg text-gray-300 max-w-xl mb-6">
          Empower your audience to curate your music stream. Connect with fans like never before.
        </p>
        <div className="flex space-x-4">
          <button className="bg-purple-500 hover:bg-purple-600 text-white py-3 px-6 rounded-lg">Get Started</button>
          <button className="bg-gray-300 hover:bg-gray-400 text-black py-3 px-6 rounded-lg">Learn More</button>
        </div>
    </main>
  )
}

export default Body

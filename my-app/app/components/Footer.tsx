import React from 'react'

function Footer() {
  return (
    <section className="w-full bg-purple-800 py-12 text-center">
        <h3 className="text-2xl font-semibold mb-6">Key Features</h3>
        <div className="flex justify-center space-x-12">
          <div className="flex flex-col items-center">
            <span className="text-yellow-400 text-4xl">👥</span>
            <p>Community Driven</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-green-400 text-4xl">📡</span>
            <p>Live Streaming</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-blue-400 text-4xl">🎧</span>
            <p>Music Control</p>
          </div>
        </div>
    </section>
  )
}

export default Footer

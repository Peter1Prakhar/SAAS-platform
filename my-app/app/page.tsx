"use client"

import Appbar from "./components/Appbar"
import Body from "./components/Body"
import Footer from "./components/Footer"

export default function Home() {
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 to-purple-700 text-white flex flex-col items-center justify-center px-6">
      <Appbar/>
      <Body/>
      <Footer/>
    </div>
  )   
}

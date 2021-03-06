import React from "react"
import useSticky from "./hooks/useSticky.js"
import Welcome from "./components/Header/Welcome"
import Navbar from "./components/Header/Navbar"
import About from './components/Header/About'
import Footer from './components/Footer/Footer'

function App() {
  const { isSticky, element } = useSticky()
  return (
    <>
      <Navbar sticky={isSticky} />
      <Welcome element={element} />
      <About />
      <About />
      <About />
      <Footer />
    </>
  )
}

export default App
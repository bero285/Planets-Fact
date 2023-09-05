import React, { useState } from 'react'
import Navbar from "./components/Navbar/Navbar"
import backgroundStars from "./assets/background-stars.svg"
import { MyContext } from './Context'
import PlanetPage from './components/PlanetPage';
function App() {
  const [planet, setPlanet] = useState<string>("EARTH");

  return (
    <MyContext.Provider value={{ planet, setPlanet }}>
      <div className='max-w-screen overflow-hidden  w-full
       h-auto box-border bg-contain  bg-center bg-[hsl(240,67%,8%)]'
        style={{
          backgroundImage: `url(${backgroundStars})`
        }} >

        <Navbar />
        <PlanetPage />


      </div>
    </MyContext.Provider>
  )
}

export default App

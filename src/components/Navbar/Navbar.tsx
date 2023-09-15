import React, { useState, useContext, useEffect } from 'react'
import Hamburger from "../../assets/hamburger-icon.jpg"
import Close from "../../assets/close.png"
import { MyContext } from '../../Context'
import NavbarPlanet from './NavbarPlanet'
import { motion, AnimatePresence } from "framer-motion";
function Navbar() {
  const planetArray = [
    { name: "MERCURY", color: "white", del: 0.01 },
    { name: "VENUS", color: "BurlyWood", del: 0.05 },
    { name: "EARTH", color: "RoyalBlue", del: 0.10 },
    { name: "MARS", color: "DarkOrange", del: 0.15 },
    { name: "JUPITER", color: "orange", del: 0.20 },
    { name: "SATURN", color: "yellow", del: 0.25 },
    { name: "URANUS", color: "cyan", del: 0.30 },
    { name: "NEPTUNE", color: "DodgerBlue", del: 0.35 }]
  const [show, setShow] = useState(false)
  const { setPlanet } = useContext(MyContext)
  const [watch, setWatch] = useState(0)
  useEffect(() => {
    setWatch(() => Math.random())

  }, [show])


  return (

    <div className='w-full relative h-full'>
      <div className="h-16 bg-transparent w-full flex items-center
       justify-between px-4 border-b-[1px] border-[hsl(240,6%,54%)]
        md:flex-col md:h-32 md:gap-4 md:justify-center lg:flex-row
         lg:justify-between lg:h-20 lg:px-12">
        <h1 className='text-2xl font-antonio text-white text-700
         md:text-3xl'>THE PLANETS</h1>
        <button onClick={() => setShow(!show)}>
          <img src={show ? Close : Hamburger} className='w-5 md:hidden' />
        </button>
        <div className={`hidden md:flex gap-7 lg:h-full `}>

          {planetArray.map((data) => {
            return <NavbarPlanet name={data.name} color={data.color} />
          })}


        </div>

      </div>
      {show ? <div className='flex flex-col z-20 w-full h-[1200px] absolute
       bg-[hsl(240,67%,8%)]  md:hidden items-center   md:w-full lg:hidden'>
        {planetArray.map((data) => {
          return (
            <AnimatePresence mode='wait' >
              <motion.button
                key={watch}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 0 }}
                transition={{ duration: 0.2, delay: data.del }}
                // className='flex justify-center items-center'
                onClick={() => {
                  setPlanet(data.name)
                  setShow(false)
                }}
                className='w-11/12 h-16 border-b-[1px] border-[hsl(240,6%,54%)]
                  flex flex-row items-center justify-between'>
                <div className='flex flex-row items-center gap-5'>
                  <span className={`w-5 h-5 rounded-full bg-${data.color}`}
                    style={{ backgroundColor: `${data.color}` }}></span>
                  <NavbarPlanet name={data.name} color={data.color} /></div>
                <h1 className='text-white text-lg'
                >
                  &gt;

                </h1>
              </motion.button>
            </AnimatePresence>)
        })}
      </div> : null}

    </div>


  )
}

export default Navbar

import React, { useState, useContext, useEffect } from 'react'
import PlanetBar from './PlanetBars'
import { MyContext } from '../Context'
import planetsInfo from './PlanetsArray'
import { motion, AnimatePresence } from "framer-motion";


function PlanetPage() {


  const { planet } = useContext(MyContext)
  const [detect, setDetect] = useState(0)
  const [checkButtons, setCheckButtons] = useState(false)
  const myPlanet = planetsInfo.find((data) => data.name === planet)
  const [text, setText] = useState<string>('overview')
  // console.log(myInfo)
  useEffect(() => {
    setText("overview")
    setDetect((Prev) => Prev + 1)
    console.log(detect)
  }, [planet])

  useEffect(() => {
    setDetect((Prev) => Prev + 1)
    setCheckButtons(true)
    setTimeout(() => {
      setCheckButtons(false)
    }, 1500)
    console.log(detect)
  }, [text])


  return (

    <div>

      <div className='flex justify-around border-b-[1px]
       border-[hsl(240,6%,54%)] h-full md:hidden'>
        <button disabled={checkButtons} onClick={() => setText('overview')}
          style={{
            borderColor: `${text === "overview" ?
              myPlanet?.color : "transparent"}`
          }}
          className={`${text === "overview" ? "text-white" :
            "text-[hsl(240,6%,54%)]"}  font-spartan h-14
             border-b-4 transition-all duration-500
         `}>Overview</button>
        <button disabled={checkButtons} onClick={() => setText('internal')}
          style={{
            borderColor: `${text === "internal"
              ? myPlanet?.color : "transparent"}`
          }}
          className={`${text === "internal" ? "text-white" :
            "text-[hsl(240,6%,54%)]"} border-b-4 transition-all
             duration-500  font-spartan `}>Structure</button>
        <button disabled={checkButtons} onClick={() => setText('surface')}
          style={{
            borderColor: `${text === "surface"
              ? myPlanet?.color : "transparent"}`
          }}
          className={`${text === "surface" ? "text-white" :
            "text-[hsl(240,6%,54%)]"} border-b-4 transition-all
             duration-500 font-spartan `}>Surface</button>
      </div>


      {/* Planets start here */}
      <div className='flex justify-center flex-col items-center
       lg:flex-row lg:justify-center  lg:pb-14 lg:mt-24'>

        <div className='h-96 flex justify-center items-center lg:h-auto lg:w-[60%]'>
          <AnimatePresence mode='wait' >
            <motion.div
              key={planet}
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 180 }}
              transition={{ duration: 0.7 }}
              className='flex justify-center items-center'
            >
              <AnimatePresence mode='wait' >
                <motion.div
                  key={text}
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  exit={{ scale: 0, rotate: 180 }}
                  transition={{ duration: 0.7 }}
                  className='flex justify-center items-center'>
                  <img src={text === "overview" || text === "surface"
                    ? myPlanet?.Img : myPlanet?.Int} className='pointer-events-none
                  w-[50%]  md:w-[60%] lg:w-auto relative lg:max-h-[550px]' />
                  {text === "surface" &&
                    <img src={myPlanet?.Surf}
                      className='pointer-events-none w-24 md:w-32
                       absolute mt-52 md:mt-64 lg:mt-[430px] lg:w-40 ' />
                  }
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </AnimatePresence>
        </div>
        <AnimatePresence mode='wait' >
          <motion.div
            key={planet}
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.7, }}
            className='flex flex-col items-center gap-2 mt-6 md:flex-row w-[80%]
             md:justify-between lg:flex-col lg:w-[35%] lg:max-w-[350px]'
          >

            {/* Planet Text and Buttons */}
            <div className='flex flex-col items-center gap-3 md:items-start '>
              <h1 className='text-white font-antonio  text-4xl text-center
               text-[Antonio,sans-serif] md:text-left md:text-5xl font-bold
                tracking-wide lg:text-7xl lg:py-5'>{myPlanet?.name}</h1>
              <AnimatePresence mode='wait' >
                <motion.div
                  key={text}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 50 }}
                  transition={{ duration: 0.7 }}
                  className='flex justify-center md:justify-normal lg:justify-normal'
                >
                  <p className='leading-6 text-[hsla(0,0%,100%,0.75)]
                   font-spartan text-[13px] text-center w-11/12 max-w-[600px]
                    md:text-left  md:w-11/12 md:max-w-[450px] lg:text-[16px]
                     tracking-wide'>
                    {text === "overview" && <>{myPlanet?.overview}</>}
                    {text === "surface" && <>{myPlanet?.surface}</>}
                    {text === "internal" && <>{myPlanet?.internal}</>}
                  </p>
                </motion.div>
              </AnimatePresence>
              <div className='flex flex-row gap-2 items-center'>
                <h2 className='text-[hsl(240,6%,54%)] text-sm font-spartan'>
                  Source:</h2><a className='text-[hsl(240,6%,54%)]
                   text-sm underline font-spartan' href={myPlanet?.wikipedia}>
                  Wikipedia</a></div>
            </div>
            <div className='hidden md:flex md:flex-col gap-4 lg:w-[100%] lg:mt-8'>
              <button disabled={checkButtons} onClick={() => setText("overview")}
                style={{
                  backgroundColor: `${text === "overview" ?
                    myPlanet?.color : "transparent"}`
                }}
                className={`transition-colors duration-500
                 hover:bg-[hsl(240,17%,26%)]
              ${text === "overview" ? `bg-${myPlanet?.color}` : "transparent"} 
              border-2 flex items-center px-4 gap-4
               border-[hsl(240,6%,54%)] w-72 h-11 lg:w-[100%] lg:h-12`}>
                <h1 className='text-[hsla(0,0%,100%,0.5)] font-spartan text-xs'>
                  01
                </h1>
                <h1 className='text-[hsl(0,0%,100%)] font-spartan font-semibold
                 text-xs tracking-widest lg:text-sm'>OVERVIEW</h1>
              </button>
              <button disabled={checkButtons}
                onClick={() => setText("internal")}
                style={{
                  backgroundColor:
                    `${text === "internal" ? myPlanet?.color : "transparent"}`
                }}
                className={`transition-colors duration-500
               hover:bg-[hsl(240,17%,26%)]  text-white border-2
                flex items-center px-4 gap-4
                 border-[hsl(240,6%,54%)] w-72 h-11 lg:w-[100%] lg:h-12`}>
                <h1 className='text-[hsla(0,0%,100%,0.5)] font-spartan
                 text-xs'>02</h1>
                <h1 className='text-[hsl(0,0%,100%)] font-spartan font-semibold
                   text-xs tracking-widest lg:text-sm'>Internal Structure</h1>
              </button>
              <button disabled={checkButtons} onClick={() => setText("surface")}
                style={{
                  backgroundColor: `${text === "surface" ?
                    myPlanet?.color : "transparent"}`
                }}
                className={`transition-colors duration-500
              ${text !== "surface" ? "hover:bg-[hsl(240,17%,26%)]" : null}
               
               text-white border-2 flex items-center px-4 gap-4
                border-[hsl(240,6%,54%)]
                w-72 h-11 lg:w-[100%] lg:h-12`}>
                <h1 className='text-[hsla(0,0%,100%,0.5)] font-spartan
                 text-xs'>03</h1>
                <h1 className='text-[hsl(0,0%,100%)] font-spartan font-semibold
                   text-xs tracking-widest lg:text-sm'>Surface Geology</h1></button>
            </div>
            {/* </div> */}
          </motion.div>
        </AnimatePresence>

      </div>
      <AnimatePresence mode='wait' >
        <motion.div
          key={planet}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.7 }}

        >
          <div className='flex flex-col items-center mt-10 pb-10 md:mt-24
           md:flex-row
           md:gap-3 md:justify-center lg:mt-24 lg:pb-10'>
            <PlanetBar info="ROTATION TIME" detail={`${myPlanet?.rotation}`} />
            <PlanetBar info="REVOLUTION TIME" detail={`${myPlanet?.revolution}`} />
            <PlanetBar info="RADIUS" detail={`${myPlanet?.radius}`} />
            <PlanetBar info="AVERAGE TEMP." detail={`${myPlanet?.temp}`} />
          </div>
        </motion.div>
      </AnimatePresence>
    </div>

  )
}

export default PlanetPage

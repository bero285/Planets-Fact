import React, { useContext, useEffect, useState } from 'react';
import { MyContext } from '../../Context'
function NavbarPlanet({ name, color }: { name: string, color: string }) {

  const { planet, setPlanet } = useContext(MyContext)
  useEffect(() => {
    setDis(true)
    setTimeout(() => {
      setDis(false)
    }, 1500)
  }, [planet])
  const [dis, setDis] = useState(false)
  return (

    <button disabled={dis} style={{ borderColor: `${color}` }}
      className={`cursor-pointer
      hover:text-white
      font-spartan text-sm font-semibold
       ${planet === name ? "text-white" : "text-[hsla(0,0%,100%,0.75)]"}
             ${planet === name ? "lg:border-t-4" : null}
               lg:h-full lg:flex lg:items-center hover:lg:border-t-4
               transition-all duration-300
               `}
      onClick={() => { setPlanet(name) }}>{name}</button>

  );
}

export default NavbarPlanet;


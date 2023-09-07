import React from 'react'

function PlanetBar({ info, detail }: { info: string, detail: string }) {


  return (
    <div className='w-10/12 max-w-[600px] flex flex-row
     mt-2 items-center justify-between py-2 px-4 border-[hsl(240,6%,54%)]
      border-[1px] md:flex-col md:items-start md: md:w-[20%] md:p-5 lg:p-5
       lg:w-[20%]
       lg:gap-3'>
      <h3 className='text-[hsl(240,6%,54%)] text-xs font-spartan lg:text-sm
       font-semibold'>{info}</h3>
      <h1 className='text-white text-xl font-antonio lg:text-3xl'>
        {detail}</h1>
    </div>
  )
}

export default PlanetBar;

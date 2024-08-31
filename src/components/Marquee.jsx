import React from 'react'

function Marquee({urls}) {
  return (
    <div className='flex w-full gap-10 py-5 overflow-hidden mt-5'>
        {urls.map((item)=><img src={item} className='w-24 flex-shrink-0'></img>)}
        {urls.map((item)=><img src={item} className='w-24 flex-shrink-0'></img>)}
    </div>
  )
}

export default Marquee
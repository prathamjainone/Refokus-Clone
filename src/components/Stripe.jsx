import React from 'react'

function Stripe({val}) {
  return (
    <div className='text-white justify-between items-center flex flex-1 min-w-24 border-b-2 border-r-2 border-t-2 p-4 border-zinc-500'>
        <img src={val.url} alt="" />
        <span>{val.number}</span>
    </div>
  )
}

export default Stripe
import React from 'react'
import { IoMdReturnRight } from "react-icons/io";

const Button = ({val="Get Started"}) => {
  return (
    <div className='flex justify-between items-center bg-white w-36 px-3 py-2 rounded-full font-medium'>
        <div>{val}</div>
        <IoMdReturnRight />
    </div>
  )
}

export default Button
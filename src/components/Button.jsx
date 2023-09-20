import React from 'react'

const Button = ({label, iconUrl}) => {
  return (
    <button className='flex items-center justify-center gap-2 py-4 text-lg leading-none text-white border rounded-full px-7 font-montserrat bg-coral-red border-coral-red'>
        {label}
        <img src={iconUrl} alt="arrow right" 
        className='w-5 h-5 ml-2'/>
    </button>
  )
}

export default Button
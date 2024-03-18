import { color } from 'framer-motion'
import React from 'react'

const HighlightText = ({ text }) => {
  return (

    <span className='font-bold gradient_color'>
    <span className="bg-gradient-to-b from-[#FF512F] to-[#F09819] text-transparent bg-clip-text">
      {text}
    </span>
  </span> 
    
    
    
  )
}

export default HighlightText

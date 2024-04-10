import React from 'react'
import './style.css'
const ContainerWrapper = ({children}) => {
  return (
    <div className='containerWrapper'>
        {children}
    </div>
  )
}

export default ContainerWrapper
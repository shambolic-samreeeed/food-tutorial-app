import React from 'react'
import {NavLink} from 'react-router-dom'

const Header = () => {
  return (
    <>
        <div className='flex items-center justify-evenly bg-slate-800 text-white'>
            
                <div>
                    <h1 className='shadow-sm py-8 text-3xl font-bold'>Foods.co</h1>
                    
                </div>

                <div className='px-20 '>
                    <NavLink to='/home-page'>Home</NavLink>
                </div>
        
        </div>
    </>
  )
}

export default Header

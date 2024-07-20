import React from 'react'
import { useNavigate } from 'react-router'

const HomeCard = ({cata:{strCategory, strCategoryDescription, strCategoryThumb}}) => {
    const nav = useNavigate();
  return (
    <div className='shadow-customShadow hover:animate-pulse duration-100 '>
        <div className=''>
        <img src={strCategoryThumb} ></img>
        <h1 className='text-center p-5 text-xl'>{strCategory}</h1>
        <div className='text-center'>

        <button className='px-4 py-2 bg-gray-100 m-2 hover:translate-y-[-5px] hover:ease-in-out duration-200' onClick={()=>nav(`/meal-page/${strCategory}`)}>Explore Meals</button>

        </div>
        </div>
    </div>
  )
}

export default HomeCard

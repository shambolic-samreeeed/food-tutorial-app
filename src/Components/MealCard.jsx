import React from 'react'
import { useNavigate } from 'react-router'

const MealCard = ({neal:{strMeal,idMeal, strMealThumb}}) => {

    const nav = useNavigate();

  return (
    <div>
      <div className='shadow-customShadow text-center hover:translate-y-[-10px] hover:ease-in-out duration-200'>
        <img src={strMealThumb} className='w-[80%] m-auto pt-5'></img>
        <h1 className='p-5 font-bold'>{strMeal.substring(0,30)}</h1>

        <button className='bg-gray-100 px-5 py-2 mb-5 hover:bg-gray-300'
        onClick={()=>nav(`/tutorial-page/${idMeal}`)}>Tutorial</button>


      </div>
    </div>
  )
}

export default MealCard

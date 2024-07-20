import React from 'react'

const TutorialCard = ({tutorial:{strArea, strCategory,strMeal,strMealThumb,strInstructions,strIngredient1,strIngredient2,strIngredient3,strIngredient4,strIngredient5,strIngredient6}}) => {
   
  return (
    <>
        <div className='w-[50%] m-auto shadow-customShadow p-5'>
            
      <div className='flex justify-between'>
        <div>
        
        <h1 className='font-bold'>{strMeal}</h1>
        <ul>
        <li>Origin: {strArea}</li>
        <li>Category: {strCategory}</li>
      </ul>
      <h1 className='font-bold'>Ingredients</h1>
      <ol>
        <li>{strIngredient1}</li>
        <li>{strIngredient2}</li>
        <li>{strIngredient3}</li>
        <li>{strIngredient4}</li>
        <li>{strIngredient5}</li>
        <li>{strIngredient6}</li>
      </ol>
        </div>

        <div>
        
        <img src={strMealThumb} className='w-[30%] m-auto'></img>

        </div>
        
      </div>
      <h1 className='font-bold'>Instructions</h1>
      <p>{strInstructions}</p>

      
    </div>
    </>
  )
}

export default TutorialCard

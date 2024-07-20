import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import MealCard from '../Components/MealCard';

const Meal = () => {

    const{attr}=useParams();

    const [data, setData]=useState();

    const getData = async()=>{
        try{
            const response = await axios.get('https://www.themealdb.com/api/json/v1/1/filter.php',{
                params:{
                    c:attr
                }
            })
            console.log(response.data)
            setData(response.data);
        }catch(err){
            console.log('error aayo')
        }
    }

    useEffect(()=>{
        getData();
    },[])
    
    
  return (
    <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 w-[90%] m-auto mt-5 '>
      {data?.meals.map((meal, i)=>{
        return <MealCard neal={meal} key={i}/>
      })}
    </div>
  )
}

export default Meal

import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import MealCard from '../Components/MealCard';
import LoadingIcon from '../Assets/LoadingIcon';

const Meal = () => {

    const{attr}=useParams();

    const [data, setData]=useState();
    const [loading, setLoading]=useState(true);

    const getData = async()=>{
        try{
          setLoading(true);
            const response = await axios.get('https://www.themealdb.com/api/json/v1/1/filter.php',{
                params:{
                    c:attr
                }
            })
            console.log(response.data)
            setData(response.data);
        }catch(err){
            console.log('error aayo')
        }finally{
          setLoading(false  )
        }
    }

    useEffect(()=>{
        getData();
    },[])
    
    if(loading){
      return<div className='flex'>
              <div className='m-auto justigy-center items-center text-center'>
                  <LoadingIcon/>
                  <h1>Loading...</h1>
              </div>
              </div>
              
    }
  return (
    <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 w-[90%] m-auto mt-5 '>
      {data?.meals.map((meal, i)=>{
        return <MealCard neal={meal} key={i}/>
      })}
    </div>
  )
}

export default Meal

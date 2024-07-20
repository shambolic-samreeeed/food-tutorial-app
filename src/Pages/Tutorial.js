import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import TutorialCard from '../Components/TutorialCard';
import LoadingIcon from '../Assets/LoadingIcon';

const Tutorial = () => {
    const [data, setData]=useState();
    const {para}=useParams();
    const [loading, setLoading]=useState(true);

    const getData=async()=>{
        setLoading(true)
        try{
            const response = await axios.get('https://www.themealdb.com/api/json/v1/1/lookup.php',{
                params:{
                    i:para
                }
            })
            console.log(response.data)
            setData(response.data)
        }catch(err){
            console.log('error')
        }finally{
            setLoading(false)
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
    <div className='m-5'>
        {
            data?.meals.map((meal,i)=>{
                return<TutorialCard tutorial={meal} key={i}/>

                
            })
        }
    </div>
  )
}

export default Tutorial

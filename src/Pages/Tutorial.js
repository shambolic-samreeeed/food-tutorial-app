import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import TutorialCard from '../Components/TutorialCard';

const Tutorial = () => {
    const [data, setData]=useState();
    const {para}=useParams();

    const getData=async()=>{
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
        }
    }

    useEffect(()=>{
        getData();
    },[])

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

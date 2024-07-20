import React, { useEffect, useState } from 'react'
import axios from 'axios'
import HomeCard from '../Components/HomeCard';

const Home = () => {

    const [data, setData]= useState();

    const getData=async()=>{
        try{
            const response = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
            console.log(response.data)
            setData(response.data)
        }catch(err){
            console.log('error falyo')
        }
    }

    useEffect(()=>{
        getData();
    },[])

  return (
    <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 w-[90%] m-auto mt-5'>
      {data?.categories.map((cata, i)=>{
        return <HomeCard cata={cata} key={i}/>
      })}
    </div>
  )
}

export default Home

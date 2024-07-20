import React, { useEffect, useState } from 'react'
import axios from 'axios'
import HomeCard from '../Components/HomeCard';
import LoadingIcon from '../Assets/LoadingIcon';

const Home = () => {

    const [data, setData]= useState();
    const [loading, setLoading]=useState(true);

    useEffect(()=>{
      getData();
  },[])

    const getData=async()=>{
      setLoading(true);
        try{
            const response = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
            console.log(response.data)
            setData(response.data)
        }catch(err){
            console.log('error falyo')
        }finally{
          setLoading(false)
        }
    };

    if(loading){
      return <div className='flex'>
        <div className='m-auto justigy-center items-center text-center'>
            <LoadingIcon/>
            <h1>Loading...</h1>
        </div>
      </div>
    }
    

  return (
    <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-cols-4 gap-5 w-[90%] m-auto mt-5'>
      {data?.categories.map((cata, i)=>{
        return <HomeCard cata={cata} key={i}/>
      })}
    </div>
  )
}

export default Home

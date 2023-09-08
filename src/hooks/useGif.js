import React, { useState } from 'react'
import axios from 'axios';
import { useEffect } from "react";

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;




const useGif = (tag) => {
    const[gif,setgif]=useState('');
   const [loading,setloading]=useState('false')
    
    // this s giving the random meme
    async function fetchData(tag)
    {
        // setloading is true while network call is going on
        setloading(true);
       
      const  {data}=await axios.get(tag ? `${url}&tag= &{tag}`: url);
     const imagesource=data.data.images.downsized_large.url;
     setgif(imagesource);
      // made the loader false once network call is finshed
      setloading(false);
    }

    useEffect(()=>{
        fetchData('car');
    },[])

  return{gif,loading,fetchData};


};

export default useGif;

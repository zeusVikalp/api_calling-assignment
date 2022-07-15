import React,{useEffect} from 'react'
// import {useParams} from 'react-router-dom'
const axios = require("axios");



export const All_Data = () => {
    // const {username} = useParams()
    
        fetch('https://covid-19-statistics.p.rapidapi.com/regions',{
        method: "GET",
        headers: {
                   'X-RapidAPI-Key': '54ddc79284msh8ec7d408f87d307p1d1156jsn4b7f9972b58f',
                  'X-RapidAPI-Host': 'covid-19-statistics.p.rapidapi.com'
                },
        
    })
    .then((response) => response.json())
    .then((response) =>console.log(response.data))
    .catch((err) => console.log(err))
    
    
 
    

  return (
    <div>
        <button onClick={All_Data}>GetData</button>
    </div>
  )
}



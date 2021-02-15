import {useState, useEffect } from 'react'
import Axios, { AxiosResponse } from 'axios';
import axios from 'axios';



export const ShopView = () => {
  const [starWarsData, setStarWarsData] = useState<AxiosResponse<any>>();

  useEffect(()=>{
    getDataFromStarWarsApi()
  });

  const getDataFromStarWarsApi = () => {
    axios.get("https://swapi.dev/api/people/1")
      .then(response => setStarWarsData(response))
      .catch(err => { console.log(err) });
  }

  return (
    <div>
      <h1>HomeView</h1>
      <pre>{JSON.stringify(starWarsData,null,' ')}</pre>
      
    </div>
  )
}

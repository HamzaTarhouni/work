import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar  from './componement/Navbar';
import axios from 'axios';
import { Route,Routes } from 'react-router-dom';
import Home from './componement/Home';
import Listofitems from './componement/Listofitems';
import Infocomp from './componement/Infocomponement'

export default function App() {
  const [news,setNews]=useState([])
useEffect (()=>{
  axios.get("https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=1abd6b1e7c20451a85509ff6644d7dab")
  .then((res)=>{
  //  console.log(res.data.articles)
    setNews(res.data.articles)
  })
},[])
  return (
    
  
    <div>
      {console.log(news)}

      <Navbar/>
      <Routes>
        <Route path='/'element={<Home/>}/>
        <Route path='/product' element={<Listofitems data={news}/>} />
        <Route path='/info' element={<Infocomp  />} />
      </Routes>
    </div>
  )
}

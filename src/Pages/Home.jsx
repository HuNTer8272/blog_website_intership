import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Slider from '../Components/Slider'
import IntroBlog from '../Components/IntroBlog'

function Home() {
  return (
    <>
        <Slider/>
        <IntroBlog/>
    </>
  )
}

export default Home
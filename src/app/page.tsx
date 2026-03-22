import React from 'react'
import Header from './component/header'
import OwlSlider from './component/owlSlider'
import NewsMaruee from './component/latestNews'

export default function page() {
  return (
    <>  <Header /> 
         <OwlSlider />
         <NewsMaruee />

    </>
  )
}

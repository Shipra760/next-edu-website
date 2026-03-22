import React from 'react'
import Header from './component/header'
import OwlSlider from './component/owlSlider'
import NewsMaruee from './component/latestNews'
import Aboutus from "./component/about-us"
import Curriculum from "./component/curriculum"
import Facilities from "./component/Facilities"

export default function page() {
  return (
    <>
      <Header />
      <OwlSlider />
      <NewsMaruee />
      <Aboutus />
      <Curriculum />
      <Facilities />
      
    </>
  )
}

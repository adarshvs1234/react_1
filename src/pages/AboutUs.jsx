import React from 'react'
import AboutUs_1 from '../components/AboutUs_1'
import AboutUs_2 from '../components/AboutUs_2'


const AboutUs = ({person_3}) => {
  return (
    <>
   <AboutUs_1 man_array={person_3}/>
  <AboutUs_2  man_array={person_3}/>
    </>
  )
}

export default AboutUs

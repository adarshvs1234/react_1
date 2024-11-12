import React from 'react'
import AboutUs from '../pages/AboutUs'


const AboutUs_1 = ({man_array}) => {
  return (
    <div>
      <>
    <br/>
    <br/>
   {man_array[0].name}
   <br/>
   {man_array[0].age}
    
      </>
    </div>
  )
}

export default AboutUs_1

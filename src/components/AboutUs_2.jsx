import React from 'react'
import AboutUs from '../pages/AboutUs'


const AboutUs_2 = ({man_array}) => {
  return (
    <div>
     <>
     <br/>
     <br/>

        {man_array[1].name}
        <br/>
        {man_array[1].age}

    
     </>
    </div>
  )
}

export default AboutUs_2

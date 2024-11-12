import React from 'react'
import Homepagedata from '../components/Homepagedata'
import Homepage_1 from '../components/Homepage_1'
import Homepage_2 from '../components/Homepage_2';




const Homepage = ({person_1,person_2}) => {
  console.log(person_1);
  
  return (
    <div>
      <>
       
      <Homepage_1 man_1={person_1}/>

      <Homepage_2 man_2={person_2}/>

      </>
    </div>
  )
}

export default Homepage

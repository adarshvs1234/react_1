import React from 'react'
import Homepagedata from './Homepagedata'
import App from '../App'


const Homepage_1 = ({man_1}) => {
    //console.log(props.person_1);
    
  return (
    <div>
    {man_1.name}
    <br/>
    {man_1.age}
      </div>
  )
}

export default Homepage_1

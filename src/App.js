// import AboutUs from "./pages/AboutUs";
import Homepagedata from "./components/Homepagedata";
import AboutUs from "./pages/AboutUs";
import Homepage from "./pages/Homepage";




function App() {

  
 const data_1 ={

  name : "Henry",
  age : 22
 }

 const data_2 = {

  name:"Chacko",
  age:24
 }

 const data_array=[
  {
    name:"Ajay",
    age:23
  },

  {
    name:"Aju",
    age:24
  }

 ]

 
return(
    <>
   
    <Homepage person_1={data_1}  person_2={data_2}/>
    <AboutUs person_3={data_array}/>
 
</>
  )
 
}

export default App;

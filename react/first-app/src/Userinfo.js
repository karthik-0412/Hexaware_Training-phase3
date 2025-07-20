import { useState } from "react"
import "./App.css"
const Userinfo=()=>
{
 
 
 let [Name,setName]=useState()
  let [age,setAge]=useState()
  let [salary,setSalary]=useState()
    let [dept,setDept]=useState()
 
 
 
 
  const handleName=(e)=>
  {
   setName(e.target.value)
  }
 
 
 
  const handleAge=(e)=>
  {
   setAge(e.target.value)
  }
    const handleSalary=(e)=>    
    {
    setSalary(e.target.value)
     }
    const handleDept=(e)=>
    {
    setDept(e.target.value) 
    }
     
    return (<div className="cont">
 
 
  <input type="text" placeholder="Enter ur name" onChange={handleName}/>
 
     <input type="text" placeholder="Enter ur Age" onChange={handleAge}/>
     <input type="text" placeholder="Enter ur salary" onChange={handleSalary}/>
     <input type="text" placeholder="Enter ur dept" onChange={handleDept}/>
 
      <h1>Name{Name}</h1>
      <h2> Age{age}</h2>
        <h2> Salary{salary}</h2>
        <h2> Dept{dept}</h2>
   
    </div>)
}
export default Userinfo
 
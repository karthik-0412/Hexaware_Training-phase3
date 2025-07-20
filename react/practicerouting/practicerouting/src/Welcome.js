import React from 'react';
// import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
const Welcome = () => {
    // const data= useLocation();
    // let {Id,pass}=data.state;
    // let Id=0;
 let [Id,setId]=useState();
  useEffect(()=>
  {
    let data=localStorage.getItem("data")
 
    data=JSON.parse(data)
    setId(data.Id)
    console.log(data.Id)
  }
    ,[])
  return (<>
    
    <div>
      <h1>Welcome,{Id}</h1>
      <p>This is the welcome page where you can find information about the app.</p>
    </div>
  </>);
}
export default Welcome;
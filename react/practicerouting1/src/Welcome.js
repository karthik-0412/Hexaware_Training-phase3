import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Welcome=()=>{

    // let data = useLocation()
    // let {Id,password}=data.state

    let [Id,setId]=useState();
    useEffect(()=>{

        let data = localStorage.getItem("data")
        data=JSON.parse(data)
        setId(data.Id)
        console.log(data.Id)
    },[])


    return(<>

    {/* <h1>Welcome {Id} {password}</h1> */
    
    <h1>Welcome {Id}</h1>
    }
    
    </>)
}
export default Welcome;
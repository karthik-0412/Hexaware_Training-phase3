import { useState } from "react";
import Morning from "./Morning";
import Night from "./Night";
 
const App=()=>
{
 
 
    let [time,setTime]=useState(0);
   let [Flag,SetFlag]=useState(0)
 
    const handleTime=(e)=>
 
        {
               setTime(e.target.value)
    }
 
return(<>
 
 
<input type="text" placeholder="enter time" onChange={handleTime}/>
 
{
 
// time ==0 ?" ":time<=12 ?  <Morning/> :  <Night/>
time != 0 ? (time <= 12 ? <Morning /> : <Night />) : null
 
 
}
 
</>)
 
 
 
}
export default App;
 
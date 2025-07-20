import { useState } from "react";

const UCardDisplay=()=>{


    let [users,setUsers]=useState([{UserId:"101",Name:"asha",Salary:200},
    {UserId:"102",Name:"ajay",Salary:400},
    {UserId:"103",Name:"jatin",Salary:800}
    ,{UserId:"104",Name:"komal",Salary:700}]
  )

    return(<>

    {
      users.map((temp)=>
      <Link to={`/ucard/${temp.UserId}/${temp.Name}/${temp.Salary}`}><UCard UserId={temp.UserId} Name={temp.Name} Salary={temp.Salary}/></Link>)
      }
    
    </>)
}
export default UCardDisplay;
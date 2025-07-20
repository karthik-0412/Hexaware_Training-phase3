import { useState } from "react"
 
const Login=()=>
{
 
 
let [Id,setId]=useState()
 
 
let [pass,setPass]=useState()
let [newpass,setNewPass]=useState()
 
 const signUp=()=>
  { 
    localStorage.setItem(Id,pass)
    sessionStorage.setItem(Id,pass)
  }

//   const signIn=()=>
//   {
//     let userId = localStorage.getItem(Id)
//     let userPass = sessionStorage.getItem(Id)
//     if (userId === pass && userPass === pass) {
//       alert("Login successful");    
//     } else {
//       alert("Invalid credentials"); 
//     }
//     }
const signIn=()=>
    {
 
       let p= localStorage.getItem(Id);
       if(p==pass)
       {
        alert("Welcome")
       }
       else{
        alert("Try again")
       }
 
    }
const newPass=()=>
    {
 
       let p= localStorage.getItem(Id);
       if(p==pass)
       {
        localStorage.setItem(Id,newpass)
        alert("Password updated successfully")      
         }
         else{
        alert("Try again")
       }    
    }
 
  const handleUserId=(event)=>
  {
  setId(event.target.value)
  }
 
 
  const handleUserPass=(event)=>
  {
  setPass(event.target.value)
  }
 
    const HANDLENewPass=(event)=>
    {
    setNewPass(event.target.value)
    }
return(<>
 
 
<div className="cont">
<input type="text" placeholder="enter user id " onChange={handleUserId}/>
 
 
<input type="password" placeholder="enter Password " onChange={handleUserPass}/>
<input type="password" placeholder="enter new Password " onChange={HANDLENewPass}/>
 
<button onClick={signIn}> Sign In</button>
<button onClick={signUp}> Sign up</button>
<button onClick={newPass}> update password</button>
 
 
</div>
 
 
</>)
 
 
}
export default Login
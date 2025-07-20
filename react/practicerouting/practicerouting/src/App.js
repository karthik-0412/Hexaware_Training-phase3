// import React from 'react';
// import { Routes, Route, Link, useNavigate } from 'react-router-dom';
// import Home from './Home';
// import Contact from './Contact';
// import Faq from './FAQ';
// import SignIn from './SignIn';
// import Login from './Login';
// import Welcome from './Welcome';
// import Payslip from './Payslip';
// import './App.css';
// import ShowPayslip from './ShowPayslip';

// const App = () => {
//   const navigate = useNavigate();

//   const handleNavigation = () => {
//     navigate('/payslip');
//   };

//   return (
//     <>
//       <table style={{ border: '1px solid black' }}>
//         <tbody>
//           <tr>
//             <td><Link to="/">Home</Link></td>
//             <td><Link to="/faq">FAQ</Link></td>
//             <td><Link to="/contact">Contact</Link></td>
//             <td><Link to="/signin">SignIn</Link></td>
//             <td><Link to="/login">Login</Link></td>
//           </tr>
//         </tbody>
//       </table>

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/faq" element={<Faq />} />
//         <Route path="/signin" element={<SignIn />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/welcome" element={<Welcome />} />
//         <Route path="/payslip" element={<Payslip />} />
//         <Route path="/showpayslip" element={<ShowPayslip />} />

//         {/* Add more routes as needed */}
//       </Routes>

//       <button onClick={handleNavigation}>Payslip</button>
//     </>
//   );
// };

// export default App;
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Contact from './Contact';
import Faq from './FAQ';
import Login from './Login';
import Welcome from './Welcome';
import Routes1 from './Routes1';
import { useState } from 'react';
import UCard from './Ucard';
 
function App() {
 
 
  let [users,setUsers]=useState([{UserId:"101",Name:"asha",Salary:200},
    {UserId:"102",Name:"ajay",Salary:400},
    {UserId:"103",Name:"jatin",Salary:800}
    ,{UserId:"104",Name:"komal",Salary:700}]
  )
 
 
  return (
    <div>
 
 
    {
 
   
     users.map((temp)=>
   
      <Link to={`/ucard/${temp.UserId}/${temp.Name}/${temp.Salary}`}> <UCard UserId={temp.UserId} Name={temp.Name} Salary={temp.Salary}/> </Link>
 
   
    )
 
    }
 
 
 
 
 
 
<table border="2"> <tr>
  <Link to="/"> <td> Home</td></Link>
   <Link to="/faq">    <td>FAQ</td></Link>
 
   <Link to="/contact"> <td>Contact</td></Link>
 
   
      <Link to="/login"> <td>Login</td></Link>
 
   </tr></table>
 
   
   <Routes1/>
   
 
 
 
   
    </div>
  );
}
 
export default App;
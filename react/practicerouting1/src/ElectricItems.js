


import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import { useNavigate } from "react-router-dom"

import Home from './Home';
 
import Faq from './Faq';
import Login from './Login';
import Welcome from './Welcome';
// import Routes1 from './Routes1';
import { useState } from 'react';
import ECard from './ECard';
import { useParams } from 'react-router-dom';

const  ElectronicItems = () => {
//     let [users,setUsers]=useState([{UserId:"101",Name:"asha",Salary:200},
//     {UserId:"102",Name:"ajay",Salary:400},
//     {UserId:"103",Name:"jatin",Salary:800}
//     ,{UserId:"104",Name:"komal",Salary:700}]
//   )
const [electronicItems, setElectronicItems] = useState([
    { itemCode: 101, name: "Laptop", price: 55000, quantity: 10, city: "Delhi" },
    { itemCode: 102, name: "Smartphone", price: 25000, quantity: 30, city: "Mumbai" },
    { itemCode: 103, name: "Tablet", price: 18000, quantity: 15, city: "Bangalore" },
    { itemCode: 104, name: "Smartwatch", price: 5000, quantity: 25, city: "Hyderabad" },
    { itemCode: 105, name: "Bluetooth Speaker", price: 3000, quantity: 20, city: "Chennai" },
    { itemCode: 106, name: "Wireless Mouse", price: 700, quantity: 40, city: "Pune" },
    { itemCode: 107, name: "Keyboard", price: 1200, quantity: 35, city: "Kolkata" },
    { itemCode: 108, name: "Monitor", price: 9000, quantity: 12, city: "Ahmedabad" },
    { itemCode: 109, name: "Printer", price: 6000, quantity: 8, city: "Jaipur" },
    { itemCode: 110, name: "Router", price: 2500, quantity: 18, city: "Lucknow" },
    { itemCode: 111, name: "Headphones", price: 1500, quantity: 30, city: "Noida" },
    { itemCode: 112, name: "Webcam", price: 2200, quantity: 14, city: "Bhopal" },
    { itemCode: 113, name: "Projector", price: 15000, quantity: 5, city: "Surat" },
    { itemCode: 114, name: "External Hard Drive", price: 4500, quantity: 22, city: "Indore" },
    { itemCode: 115, name: "Power Bank", price: 1000, quantity: 28, city: "Nagpur" },
    { itemCode: 116, name: "Game Console", price: 40000, quantity: 6, city: "Patna" },
    { itemCode: 117, name: "VR Headset", price: 25000, quantity: 4, city: "Kanpur" },
    { itemCode: 118, name: "Digital Camera", price: 32000, quantity: 7, city: "Ranchi" },
    { itemCode: 119, name: "Drone", price: 60000, quantity: 3, city: "Guwahati" },
    { itemCode: 120, name: "E-Reader", price: 8000, quantity: 10, city: "Amritsar" }
  ]);

 
const nav = useNavigate()
 
    // const openSignIn=()=>
    // {
    //     nav("/login")
 
    // }
    return(<>
 
 
 
 
     {
 
   
     electronicItems.map((temp)=>
   
      <Link to={`/ecard/${temp.itemCode}/${temp.name}/${temp.price}/${temp.quantity}/${temp.city}`}> 
      <ECard itemCode={temp.itemCode} name={temp.name} price={temp.price} quantity = {temp.quantity} city={temp.city}/> </Link>
 
//    <Link to={`/ecard/${temp.itemCode}/${temp.name}/${temp.price}/${temp.quantity}/${temp.city}`} key={temp.itemCode}>
//   <ECard 
//     itemCode={temp.itemCode}
//     name={temp.name}
//     price={temp.price}
//     quantity={temp.quantity}
//     city={temp.city}
//   />
// </Link>

    )
 
    }
    </>);
};
export default ElectronicItems;


  // Function to handle the 'any' query parameter
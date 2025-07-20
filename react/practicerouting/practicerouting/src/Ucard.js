import React from 'react';
// import './Ucard.css'; // Assuming you have a CSS file for styling
import { Link } from 'react-router-dom';
// This component displays user details in a card format
// It receives UserId, Name, and Salary as props and renders them inside a styled div
// You can customize the styles in Ucard.css to match your design preferences
// Example usage: <UCard UserId="101" Name="John Doe" Salary={50000} />
// Ensure that the props passed to UCard are of the correct type
// UserId should be a string, Name should be a string, and Salary should be a
const UCard=({UserId,Name,Salary})=>
{
 
return(<div className="cont">
 
 
  <h1> {UserId}</h1>
  <h2> {Name}</h2>
  <h2>
    {Salary}
  </h2>
 
 
</div>)
 
 
}
export default UCard;
 
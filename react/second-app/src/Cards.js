import React from 'react';
import './App.css'; 
const Cars =({id, title,category,price,thumbnail}) =>{

    return (
        <div className="car">
        {/* <h3>Car ID: {id}</h3> */}
        <h2 style={{color: "blue"}}>{title}</h2>
        <p>Category: {category}</p>
        <p>Price: {price}</p>
        <img src={thumbnail } alt={title} />
        </div>
    );
}

export default Cars;
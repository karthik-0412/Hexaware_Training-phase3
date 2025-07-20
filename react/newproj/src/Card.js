import React, { useState, useEffect } from 'react';
const Card=({id,title,thumbnail,category,updateCategory, Removedata})=>
{
    const [localCategory, setLocalCategory] = useState("");
 
    return(<>
   
     <h1> {id}</h1>
     <h2>{title}</h2>
 
     <img src={thumbnail}/>
    <input type="text" placeholder="Enter new category"  value={localCategory} onChange={(e) => setLocalCategory(e.target.value)}/>
     <h2> {category}</h2>
     <button onClick={()=>Removedata(id)}>Remove</button>
     <button onClick={()=>updateCategory(id,localCategory)}>Update category</button>
  
    </>)
}
 
export default Card;
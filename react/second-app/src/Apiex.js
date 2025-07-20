import { useEffect } from "react"
import Card from "./Cards.js";
import { useState } from "react";

const Apiex=()=>{
    let [products, setProduct] = useState([]);
    let [Fproducts,setFProduct] = useState([]);
    let [search, setSearch] = useState("");
    
    const [newTitle, setNewTitle] = useState("");
    const [newCategory, setNewCategory] = useState("");
    const [newPrice, setNewPrice] = useState("");
    const [newImage, setNewImage] = useState("");

    const handleSearch = (e) => {
        setSearch(e.target.value);
    };

    const handleAddItem = () => {
        const newItem = {
            title: newTitle,
            category: newCategory,
            price: newPrice,
            thumbnail: newImage
        };
        setProduct([...products, newItem]);
        setNewTitle("");
        setNewCategory("");
        setNewPrice("");
        setNewImage("");
    }
    const RemoveData=(id)=>
    {
        setProduct(products.filter((temp)=>temp.id!=id))
    }
    useEffect(()=>{
        fetch("https://dummyjson.com/products")
        .then((res)=>res.json())
        .then((temp)=>{
            console.log(temp);
            setProduct(temp.products);
        })
        .catch((e)=>console.log(e));
    },[]);
    useEffect(()=>  
    {
          let data=products.filter((temp)=>temp.category.includes(search)||temp.title.includes(search));
         setFProduct(data)
 
    },[search, products]);

    return (
        <>
        <div className="car">
        <input type="text"  placeholder="Enter title"  value={newTitle} onChange={(e) => setNewTitle(e.target.value)}/>
        <input type="text" placeholder="Enter category" value={newCategory}onChange={(e) => setNewCategory(e.target.value)}/>
        <input type="text" placeholder="Enter price" value={newPrice} onChange={(e) => setNewPrice(e.target.value)}/>
        <input type="text" placeholder="Enter image url" value={newImage} onChange={(e) => setNewImage(e.target.value)}/>
        <button onClick={handleAddItem}>Add new item</button>
      </div>
 
 
   
 

 
 
 
        <input type="text" placeholder="search by category or title " onChange={handleSearch}/>
            {search.length> 0  ?
                          Fproducts.map((p) => <Card title={p.title} category={p.category} price={p.price} thumbnail={p.thumbnail} Removedata={RemoveData} />)
             :
            products.map((p) => <Card title={p.title} category={p.category} price={p.price} thumbnail={p.thumbnail} Removedata={RemoveData}/>)
            }
        </>
    );
}
export default Apiex;
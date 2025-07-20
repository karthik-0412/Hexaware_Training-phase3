import { useEffect } from "react"
import Card from "./Card.js";
import { useState } from "react";
import Scard from "./Scard.js";
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react'
import { Message } from 'semantic-ui-react'
import {
  Modal,
  Button,
  ModalHeader,
  ModalContent,
  ModalActions
} from 'semantic-ui-react';

const Apiex = () => {
  let [products, setProduct] = useState([]);
  let [Fproducts, setFProduct] = useState([]);
  let [search, setSearch] = useState("");

  const [newTitle, setNewTitle] = useState("");
  const [newCategory, setNewCategory] = useState("");
  const [newPrice, setNewPrice] = useState("");
  const [newImage, setNewImage] = useState("");
  let [flag, setFlag] = useState(false);
  const [open, setOpen] = useState(false);
  const [added, setAdded] = useState(false);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleAddItem = () => {
    const newItem = {
      id: products.length + 1,
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
    setAdded(true);
    setTimeout(() => setAdded(false), 3000);
  }
  const Removedata = (id) => {
    setProduct(products.filter((temp) => temp.id != id))
  }

  const updateCategory = (id, newCategory) => {
    setProduct(
      products.map((product) =>
        product.id === id ? { ...product, category: newCategory } : product
      )
    );
  };

  useEffect(() => {
    fetch("https://dummyjson.com/product")
      .then((res) => res.json())
      .then((temp) => {
        console.log(temp);
        setProduct(temp.products);
        setFlag(true);
      })
      .catch((e) => console.log(e));
  }, []);
  useEffect(() => {
    let data = products.filter((temp) => temp.category.includes(search) || temp.title.includes(search));
    setFProduct(data)

  }, [search, products]);

  return (<>
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button>Add New Product</Button>}
    >
      <ModalHeader>Add a New Product</ModalHeader>
      <ModalContent>
        <input
          type="text"
          placeholder="Enter title"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        /><br />
        <input
          type="text"
          placeholder="Enter category"
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
        /><br />
        <input
          type="text"
          placeholder="Enter price"
          value={newPrice}
          onChange={(e) => setNewPrice(e.target.value)}
        /><br />
        <input
          type="text"
          placeholder="Enter image url"
          value={newImage}
          onChange={(e) => setNewImage(e.target.value)}
        /><br />
      </ModalContent>
      <ModalActions>
        <Button color='green' onClick={() => {
          handleAddItem();
          setOpen(false); // close modal after adding
        }}>
          Add Item
        </Button>
        <Button color='red' onClick={() => setOpen(false)}>
          Cancel
        </Button>
        {added && (
          <div className="ui green message">
            <div className="header">Added Successfully</div>
          </div>
        )}

      </ModalActions>
    </Modal>

    {/* <> */}
    {/* <div className="car">
        <input type="text"  placeholder="Enter title"  value={newTitle} onChange={(e) => setNewTitle(e.target.value)}/>
        <input type="text" placeholder="Enter category" value={newCategory}onChange={(e) => setNewCategory(e.target.value)}/>
        <input type="text" placeholder="Enter price" value={newPrice} onChange={(e) => setNewPrice(e.target.value)}/>
        <input type="text" placeholder="Enter image url" value={newImage} onChange={(e) => setNewImage(e.target.value)}/>
        <button onClick={handleAddItem}>Add new item</button>
      </div> */}

    {/* <div>
    <Segment>
      <Dimmer active>
        <Loader>Loading</Loader>
      </Dimmer>
 
      <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
    </Segment>
 </div> */}




    {/* { products.map((p) => <Card id ={p.id}title={p.title} category={p.category} price={p.price} thumbnail={p.thumbnail} />)} */}
    <input type="text" placeholder="search by .... " onChange={handleSearch} />
    {flag ?
      //   Fproducts.map((p) => <Scard id={p.id} thumbnail={p.thumbnail} title={p.title} category={p.category} price={p.price}  Removedata={Removedata} updateCategory={updateCategory}/>)
      products.map((p) => <Scard id={p.id} title={p.title} thumbnail={p.thumbnail} category={p.category} price={p.price} Removedata={Removedata} updateCategory={updateCategory} />)
      :
      <div>
        <Segment>
          <Dimmer active>
            <Loader>Loading</Loader>
          </Dimmer>

          <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
        </Segment>
      </div>
    }
  </>
  );
}
export default Apiex;
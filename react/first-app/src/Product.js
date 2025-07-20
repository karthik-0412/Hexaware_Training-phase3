import './App.css';

const Product = ({ id, title, price, description, image }) => (
  <div className="container">
    <h2>ID: {id}</h2>
    <h3>Title: {title}</h3>
    <p>Price: ₹{price}</p>
    <p>Description: {description}</p>
    {image && <img src={image} alt={title} style={{ width: "150px" }} />}
  </div>
);

export default Product;

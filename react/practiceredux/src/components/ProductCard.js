const ProductCard = ({ name, price, image, onAdd }) => {
  return (
    <div style={{ border: "1px solid #ddd", padding: "10px", margin: "10px", textAlign: "center" }}>
      <img src={image} alt={name} style={{ width: "150px", height: "150px" }} />
      <h3>{name}</h3>
      <p>₹{price}</p>
      <button onClick={onAdd}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
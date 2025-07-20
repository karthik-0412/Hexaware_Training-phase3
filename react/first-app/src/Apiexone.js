import { useEffect, useState } from "react";
import Product from "./Product";

const Apiexone = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://fakestoreapi.in/api/products");
        const data = await res.json();
        console.log(data);

        // Check if data is an array directly or nested under 'products'
        if (Array.isArray(data)) {
          setProducts(data);
        } else if (Array.isArray(data.products)) {
          setProducts(data.products);
        } else {
          console.error("Invalid API response format:", data);
          setProducts([]);
        }

        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      {loading ? (
        <h2>Loading...</h2>
      ) : Array.isArray(products) && products.length > 0 ? (
        products.map((item) => (
          <Product
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            description={item.description}
            image={item.image}
          />
        ))
      ) : (
        <h2>No products found</h2>
      )}
    </div>
  );
};

export default Apiexone;

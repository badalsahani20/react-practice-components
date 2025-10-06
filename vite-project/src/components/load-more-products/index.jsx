import React, { useEffect, useState } from "react";
import "./style.css";

const LoadMoreProducts = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [disableButton, setDisableButton] = useState(false);

  async function fetchProducts() {
    try {
      setLoading(true);
      const res = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );
      const data = await res.json();
      if (data && data.products && data.products.length) {
        setProducts((prevData) => [...prevData, ...data.products]);
        setLoading(false);
      }
      console.log(data);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [count]);

  useEffect(() => {
    if(products && products.length === 150 ) setDisableButton(true)
  }, [products])

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product-container">
      <div className="product-grid">
        {products && products.length
          ? products.map((item) => (
              <div className="product" key={item.id}>
                <img src={item.thumbnail} alt={item.title} />
                <p>{item.title}</p>
              </div>
            ))
          : null}
      </div>
      <div>
        <button disabled={disableButton} className="button-container" onClick={() => setCount(count + 1)}>Load More</button>
        {disableButton ? <p>No more products</p> : null}
      </div>
    </div>
  );
};

export default LoadMoreProducts;

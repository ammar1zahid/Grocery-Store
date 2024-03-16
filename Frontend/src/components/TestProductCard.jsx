import React, { useState, useEffect } from "react";
import axios from "axios";

export default function ProductCard() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/products");
      setProducts(response.data);
      console.log("Product API Response:", response.data);
    } catch (error) {
      handleFetchError("products", error);
    }
  };

  const handleFetchError = (type, error) => {
    console.error(`Error fetching ${type}:`, error);
  };

  useEffect(() => {
    fetchProducts();
  }, []);


return (
    <div>
      {products.map((product, index) => (
        <div className="col-md-6 col-lg-4 col-xl-3" key={index}>
          <div className="rounded position-relative fruite-item">
            <div className="fruite-img">
            {console.log("Image URL:", product.image)}
              <img
                src={product.image} /*'image' is a property of your product object */
                className="img-fluid w-100 rounded-top"
                alt='product image'
              />
            </div>
            <div
              className="text-white bg-secondary px-3 py-1 rounded position-absolute"
              style={{ top: "10px", left: "10px" }}
            >
              {product.category} 
            </div>
            <div className="p-4 border border-secondary border-top-0 rounded-bottom">
              <h4>{product.name}</h4> {/* 'name' is a property of your product object */}
              <p>{product.description}</p> {/* 'description' is a property of your product object */}
              <div className="d-flex justify-content-between flex-lg-wrap">
                <p className="text-dark fs-5 fw-bold mb-0">{product.price} </p> {/*  'price' and 'unit' are properties of your product object */}
                <a
                  href="#"
                  className="btn border border-secondary rounded-pill px-3 text-primary"
                >
                  <i className="fa fa-shopping-bag me-2 text-primary" /> Add to
                  cart
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );


}

import React, { useState, useEffect } from "react";
import OwlCarousel from "react-owl-carousel";
import axios from "axios";

export default function VegitableShopTest() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/products");
      setProducts(response.data);
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
      {/* Vegitable Shop Start*/}
      <div className="container-fluid vesitable py-5">
        <div className="container py-5">
          <h1 className="mb-0">Fresh Organic Vegetables</h1>

          {/* <VegitablesProductSlider  categorySent="Vegetable" />    */}

          <OwlCarousel
            className="owl-carousel vegetable-carousel justify-content-center"
            items={4}
            autoplay
            smartSpeed={1500}
            center={false}
            dots
            loop
            margin={25}
            nav
            navText={[
              '<i class="bi bi-arrow-left"></i>',
              '<i class="bi bi-arrow-right"></i>',
            ]}
            responsiveClass
            responsive={{
              0: {
                items: 1,
              },
              576: {
                items: 1,
              },
              768: {
                items: 2,
              },
              992: {
                items: 3,
              },
              1200: {
                items: 4,
              },
            }}
          >
            {products
              .filter((items) => items.category === "Vegetable")
              .map((product, index) => (
                <div className="border border-primary rounded position-relative vesitable-item">
                  <div className="vesitable-img">
                    <img
                      src={product.image}
                      className="img-fluid w-100 rounded-top"
                      alt="product image"
                    />
                  </div>
                  <div
                    className="text-white bg-primary px-3 py-1 rounded position-absolute"
                    style={{ top: "10px", right: "10px" }}
                  >
                    Vegetable
                  </div>
                  <div className="p-4 rounded-bottom">
                    <h4>{product.name}</h4>
                    <p>{product.description}</p>
                    <div className="d-flex justify-content-between flex-lg-wrap">
                      <p className="text-dark fs-5 fw-bold mb-0">
                        {product.price}
                      </p>
                      <a
                        href="#"
                        className="btn border border-secondary rounded-pill px-3 text-primary"
                      >
                        <i className="fa fa-shopping-bag me-2 text-primary" />{" "}
                        Add to cart
                      </a>
                    </div>
                  </div>
                </div>
              ))}
          </OwlCarousel>
        </div>
      </div>
      {/* Vegitable Shop End */}
    </div>
  );
}

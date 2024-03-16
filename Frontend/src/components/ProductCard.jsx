import React, { useState, useEffect } from "react";
import axios from "axios";
import { useCart } from "react-use-cart"; // Import useCart from react-use-cart


export default function ProductCard({ categorySent }) {
  const [searchbar, setSearchbar] = useState({ name: "" });
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const { addItem } = useCart(); // Destructure addItem from useCart
  const productsPerPage = 6; // 2 rows * 3 products per row

  const handleInput = (event) => {
    setSearchbar({ name: event.target.value });
  };

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

  const getFilteredAndChunkedProducts = () => {
    const filteredProducts = products.filter(
      (item) =>
        (categorySent === "All Products" || item.category === categorySent) &&
        item.name.toLowerCase().includes(searchbar.name.toLowerCase())
    );
    const chunkedProducts = chunkArray(filteredProducts, 3);
    return chunkedProducts;
  };

  const chunkArray = (arr, size) => {
    return arr.reduce((chunks, el, i) => {
      if (i % size === 0) {
        chunks.push([el]);
      } else {
        chunks[chunks.length - 1].push(el);
      }
      return chunks;
    }, []);
  };

  const totalPages = Math.ceil(products.length / productsPerPage);

  const handleChangePage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const renderPagination = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <li className={`page-item ${currentPage === i ? "active" : ""}`} key={i}>
          <button className="page-link" onClick={() => handleChangePage(i)}>
            {i}
          </button>
        </li>
      );
    }
    return pageNumbers;
  };

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentChunkedProducts = getFilteredAndChunkedProducts().slice(
    indexOfFirstProduct / 3,
    indexOfLastProduct / 3
  );


  const handleAddToCart = (product) => {
    console.log(product)
    // addItem(product);
    addItem({ id: product._id, ...product });
    // addItem({ id: id || rest._id, ...rest });
  };


  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 d-flex justify-content-end">
            <div className="input-group w-50 mx-auto">
              <input
                type="search"
                className="form-control p-3"
                placeholder="keywords"
                aria-describedby="search-icon-1"
                value={searchbar.name}
                onChange={handleInput}
              />
              <span id="search-icon-1" className="input-group-text p-3">
                <i className="fa fa-search" />
              </span>
            </div>
          </div>
          <br></br>
        </div>

        {currentChunkedProducts.map((row, rowIndex) => (
          <div className="row" key={rowIndex}>
            {row.map((product, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <div className="rounded position-relative fruite-item">
                  <div className="fruite-img">
                    <img
                      src={product.image}
                      className="img-fluid w-100 rounded-top"
                      alt="product image"
                    />
                  </div>
                  <div
                    className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                    style={{ top: "10px", left: "10px" }}
                  >
                    {product.category}
                  </div>
                  <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                    <h4>{product.name}</h4>
                    <p>{product.description}</p>
                    <div className="d-flex justify-content-between flex-lg-wrap">
                      <p className="text-dark fs-5 fw-bold mb-0">
                        ${product.price} / kg
                      </p>
                      <button href="#" className="btn border border-secondary rounded-pill px-3 text-primary"
                      onClick={() => handleAddToCart(product)}>
                        <i className="fa fa-shopping-bag me-2 text-primary" />{" "}
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}

        <nav aria-label="Page navigation example">
          <ul className="pagination justify-content-center">
            {renderPagination()}
          </ul>
        </nav>
      </div>
    </>
  );
}

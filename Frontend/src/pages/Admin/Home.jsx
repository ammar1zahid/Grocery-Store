import React, { useState, useEffect } from "react";
import AdminNavbar from "../../components/AdminNavbar";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [searchbar, setSearchbar] = useState({ name: "" });

  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/products");
      setProducts(response.data);
    } catch (error) {
      handleFetchError("products", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleDelete =(id)=>{
    axios.delete(`http://localhost:5000/api/deleteUser/${id}`)
    .then(result => {console.log(result)
     fetchProducts()})
    // .then(result => {console.log(result)
    // window.location.reload()})
    // .catch(err => console.log(err))
    .catch(err =>{ console.log(err)
    
      console.error('Error deleting product:', err)
    })

     console.log(id)
}

const handleInput = (event) => {
  setSearchbar({ name: event.target.value });
};


const getFilteredAndChunkedProducts = () => {
  const filteredProducts = products.filter(
    (item) =>
      item.name.toLowerCase().includes(searchbar.name.toLowerCase())
  );
 
  return filteredProducts;
};

const TableProducts= getFilteredAndChunkedProducts();



  return (
    // <div className=" bg-dark">
    <div className="d-flex  bg-primary justify-content-center align-items-center">
      <AdminNavbar />

      <div className="w-90 bg-white rounded p-3" style={{ marginTop: '90px' }}>
      {/* <div className="container-fluid d-flex align-items-center justify-content-center vh-200 mt-5 text-light"> */}
        {/* <div className="col-md-6"> */}


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

          <table className="table">
            <thead>
              <tr>
                <th>S. No</th>
                <th>Name</th>
                <th>Description</th>
                <th>Image</th>
                <th>Price</th>
                <th>Category</th>
              </tr>
            </thead>
            <tbody>
              {/* {products.map((item, index) => { */}
              {TableProducts.map((item, index) => {
                return (
                  <tr>
                    <td>{index}</td>
                    <td>{item.name}</td>
                    <td>{item.description}</td>
                    <td>{item.image}</td>
                    <td>{item.price}</td>
                    <td>{item.category}</td>
                    <td>
                        <Link to={`/adminUpdateProducts/${item._id}`} className='btn btn-success'>Edit</Link>
                         <button className='btn btn-danger' onClick={(e) => handleDelete(item._id)}>Delete</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        {/* </div> */}
      </div>
    </div>
  );
}

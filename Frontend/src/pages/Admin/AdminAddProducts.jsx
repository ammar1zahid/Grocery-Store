import React, { useState } from "react";
import AdminNavbar from "../../components/AdminNavbar";
import axios from 'axios';


export default function AdminAddProducts() {

    const [productName, setProductName] = useState("");
    const [productDescription, setProductDescription] = useState("");
    const [productImage, setProductImage] = useState("");
    const [productPrice, setProductPrice] = useState("");
    const [productCategory, setProductCategory] = useState("");


    const [values, setValues]= useState({
        productName:'',
        productDescription:'',
        productImage:'',
        productPrice:'',
        productCategory:'',
    
    })

    const handleInput=(event)=>{
        // setValues(prev=>({...prev, [event.target.name]:event.target.value}))

        const { name, value } = event.target;
        // Convert category value to string if it's not already a string
        const convertedValue = name === 'productCategory' ? String(value) : value;
        setValues(prev => ({ ...prev, [name]: convertedValue }));
    }

    const [successMessage, setSuccessMessage] = useState('');
    
    const handleSubmit= async(e)=>{
        e.preventDefault();
        // console.log(values);

        // console.log(values.productCategory)
    
        try {
          // Make a POST request to the products endpoint with product data
          const response = await axios.post('http://localhost:5000/api/products', {

            name: values.productName,
            description: values.productDescription,
            image: values.productImage,
            price: values.productPrice,
            category: values.productCategory
          });
        
          setSuccessMessage('Product added successfully');
          console.log("product added")

          // Navigate to the login page after successful registration
        //   navigate('/login');
          
        } catch (error) {
          console.log(error);
          setSuccessMessage('Failed to add product');
        }
}



  return (
    <div>
    <AdminNavbar />
    <div className="container-fluid d-flex align-items-center justify-content-center vh-100 bg-dark text-light">
      <div className="col-md-6">
       
        <h2 className="text-center mb-4">Add Product</h2>
        <form id="addProductForm" onSubmit={handleSubmit} method="POST">
          <div className="form-group">
            <label htmlFor="productName">Product Name</label>
            <input
              type="text"
              className="form-control"
              id="productName"
              name="productName"
              value={values.productName}
              onChange={handleInput}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="productDescription">Product Description</label>
            <input
              className="form-control"
              type="text"
              id="productDescription"
              name="productDescription"
              required
              value={values.productDescription}
              onChange={handleInput}
            />
          </div>
          <div className="form-group">
            <label htmlFor="productImage">Product Image URL</label>
            <input
              type="text"
              className="form-control"
              id="productImage"
              name="productImage"
              required
              value={values.productImage}
              onChange={handleInput}
            />
          </div>
          <div className="form-group">
            <label htmlFor="productPrice">Product Price</label>
            <input
              type="text"
              className="form-control"
              id="productPrice"
              name="productPrice"
              required
              value={values.productPrice}
              onChange={handleInput}
            />
          </div>
          <div className="form-group">
            <label htmlFor="productCategory">Product Category</label>
            <select
              className="form-control"
              id="productCategory"
              name="productCategory"
              required
              value={values.productCategory}
              onChange={handleInput}
            >
              <option value="Vegetable">Vegetable</option>
              <option value="Fruits">Fruits</option>
              <option value="Breads">Breads</option>
              <option value="Meat">Meat</option>
             
            </select> 

          </div>
          <button type="submit" className="btn btn-primary btn-block">
            Add Product
          </button>

          {successMessage && <p>{successMessage}</p>}

        </form>
      </div>
    </div>
    </div>
  );
}

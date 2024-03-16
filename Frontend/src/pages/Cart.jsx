import React, { useEffect } from "react";
import NavBar from "../components/NavBar";
import Spinner from "../components/Spinner";
import Footer from "../components/Footer";
import ModalSearch from "../components/ModalSearch";
import ButtonToTop from "../components/ButtonToTop";
import initializeMainScript from "../script/mainFunction";
import { Link, useNavigate} from "react-router-dom";
import { useCart } from "react-use-cart"; // Import useCart from react-use-cart



export default function Cart() {

  const navigate = useNavigate();




  const { items, updateItemQuantity, removeItem } = useCart(); // Destructure items, updateItemQuantity, and removeItem from useCart

  // Calculate subtotal
  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  // Define shipping cost
  const shippingCost = 3.00;

  // Calculate total
  const total = subtotal + shippingCost;

  const handleProceedToCheckout = () => {
    // Pass items to the checkout page via state
    navigate('/checkout', { state: { items: items } }); // Use navigate function to redirect to checkout page
  };

  // console.log(items)
  return (
    <div>
      <Spinner />

      <NavBar />

      <ModalSearch />

      {/* Single Page Header start */}
      <div className="container-fluid page-header py-5">
        <h1 className="text-center text-white display-6">Cart</h1>
        <ol className="breadcrumb justify-content-center mb-0">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item">
            <a href="#">Pages</a>
          </li>
          <li className="breadcrumb-item active text-white">Cart</li>
        </ol>
      </div>
      {/* Single Page Header End */}

      {/* Cart Page Start */}
      <div className="container-fluid py-5">
        <div className="container py-5">
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Products</th>
                  <th scope="col">Name</th>
                  <th scope="col">Price</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Total</th>
                  <th scope="col">Handle</th>
                </tr>
              </thead>

              <tbody>
                
                {items.map((item) => (
                  <tr>
                    <th scope="row">
                      <div className="d-flex align-items-center">
                        <img
                          // src="img/vegetable-item-3.png"
                          src={item.image}
                          className="img-fluid me-5 rounded-circle"
                          style={{ width: "80px", height: "80px" }}
                          alt={item.name}
                        />
                      </div>
                    </th>
                    <td>
                      <p className="mb-0 mt-4">{item.name}</p>
                    </td>
                    <td>
                      <p className="mb-0 mt-4">{item.price} </p>
                    </td>
                    <td>
                      <div
                        className="input-group quantity mt-4"
                        style={{ width: "100px" }}
                      >
                        <div className="input-group-btn">
                          <button className="btn btn-sm btn-minus rounded-circle bg-light border"
                          onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>
                            <i className="fa fa-minus" />
                          </button>
                        </div>
                        <input
                          type="text"
                          className="form-control form-control-sm text-center border-0"
                          value={item.quantity}
                          // defaultValue={1}
                          readOnly
                        />
                        <div className="input-group-btn">
                          <button className="btn btn-sm btn-plus rounded-circle bg-light border"
                          onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>
                            <i className="fa fa-plus" />
                          </button>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p className="mb-0 mt-4">{(item.quantity * item.price).toFixed(2)}</p>
                    </td>
                    <td>
                      <button className="btn btn-md rounded-circle bg-light border mt-4"
                      onClick={() => removeItem(item.id)}>

                        <i className="fa fa-times text-danger" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-5">
            <input
              type="text"
              className="border-0 border-bottom rounded me-5 py-3 mb-4"
              placeholder="Coupon Code"
            />
            <button
              className="btn border-secondary rounded-pill px-4 py-3 text-primary"
              type="button"
            >
              Apply Coupon
            </button>
          </div>
          <div className="row g-4 justify-content-end">
            <div className="col-8" />
            <div className="col-sm-8 col-md-7 col-lg-6 col-xl-4">
              <div className="bg-light rounded">
                <div className="p-4">
                  <h1 className="display-6 mb-4">
                    Cart <span className="fw-normal">Total</span>
                  </h1>
                  <div className="d-flex justify-content-between mb-4">
                    <h5 className="mb-0 me-4">Subtotal:</h5>
                    <p className="mb-0">${subtotal.toFixed(2)}</p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <h5 className="mb-0 me-4">Shipping</h5>
                    <div className>
                      <p className="mb-0">Flat rate: ${shippingCost.toFixed(2)}</p>
                    </div>
                  </div>
                  <p className="mb-0 text-end">Shipping to Ukraine.</p>
                </div>
                <div className="py-4 mb-4 border-top border-bottom d-flex justify-content-between">
                  <h5 className="mb-0 ps-4 me-4">Total</h5>
                  <p className="mb-0 pe-4">${total.toFixed(2)}</p>
                </div>
                <button
                  className="btn border-secondary rounded-pill px-4 py-3 text-primary text-uppercase mb-4 ms-4"
                  type="button"
                  onClick={handleProceedToCheckout}
                >
                       Proceed to Checkout
                </button>
                {/* <Link to={{ pathname: "/checkout", state: { cartItems: items } }}>Proceed to Checkout</Link> */}
                {/* <Link to= "/checkout">Proceed to Checkout</Link> */}
              
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Cart Page End */}

      <Footer />
      <ButtonToTop />
    </div>
  );
}

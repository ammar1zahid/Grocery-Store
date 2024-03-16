import React from "react";
import NavBar from "../components/NavBar";
import Spinner from "../components/Spinner";
import Footer from "../components/Footer";
import ModalSearch from "../components/ModalSearch";
import Categories from "../components/Categories";
import SideFeaturedProducts from "../components/SideFeaturedProducts";
import { Link } from "react-router-dom";

export default function ShopPage() {
  return (
    <div>
      <Spinner />

      <NavBar />

      <ModalSearch />

      {/* Single Page Header start */}
      <div className="container-fluid page-header py-5">
        <h1 className="text-center text-white display-6">Shop</h1>
        <ol className="breadcrumb justify-content-center mb-0">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item">
            <a href="#">Pages</a>
          </li>
          <li className="breadcrumb-item active text-white">Shop</li>
        </ol>
      </div>
      {/* Single Page Header End */}

      {/* <FruitShop/> */}

      {/* Fruits Shop Start*/}
      <div className="container-fluid fruite py-5">
        <div className="container py-5">
          <h1 className="mb-4">Fresh fruits shop</h1>
          <div className="row g-4">
            <div className="col-lg-12">
              <div className="row g-4">
                <div className="col-xl-3">
                  {/* <div className="input-group w-100 mx-auto d-flex">
              <input type="search" className="form-control p-3" placeholder="keywords" aria-describedby="search-icon-1" />
              <span id="search-icon-1" className="input-group-text p-3"><i className="fa fa-search" /></span>
            </div> */}
                </div>
                <div className="col-6" />
                <div className="col-xl-3">
                  <div className="bg-light ps-3 py-3 rounded d-flex justify-content-between mb-4">
                    <label htmlFor="fruits">Default Sorting:</label>
                    <select
                      id="fruits"
                      name="fruitlist"
                      className="border-0 form-select-sm bg-light me-3"
                      form="fruitform">
                      <option value="volvo">Nothing</option>
                      <option value="saab">Popularity</option>
                      <option value="opel">Organic</option>
                      <option value="audi">Fantastic</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="row g-4">
                <div className="col-lg-3">
                  <div className="row g-4">
                    <div className="col-lg-12">
                      <Categories />
                    </div>
                    <div className="col-lg-12">
                      <div className="mb-3">
                        <h4 className="mb-2">Price</h4>
                        <input
                          type="range"
                          className="form-range w-100"
                          id="rangeInput"
                          name="rangeInput"
                          min={0}
                          max={500}
                          defaultValue={0}
                          oninput="amount.value=rangeInput.value"
                        />
                        <output
                          id="amount"
                          name="amount"
                          min-velue={0}
                          max-value={500}
                          htmlFor="rangeInput">
                          0
                        </output>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="mb-3">
                        <h4>Additional</h4>
                        <div className="mb-2">
                          <input
                            type="radio"
                            className="me-2"
                            id="Categories-1"
                            name="Categories-1"
                            defaultValue="Beverages"
                          />
                          <label htmlFor="Categories-1"> Organic</label>
                        </div>
                        <div className="mb-2">
                          <input
                            type="radio"
                            className="me-2"
                            id="Categories-2"
                            name="Categories-1"
                            defaultValue="Beverages"
                          />
                          <label htmlFor="Categories-2"> Fresh</label>
                        </div>
                        <div className="mb-2">
                          <input
                            type="radio"
                            className="me-2"
                            id="Categories-3"
                            name="Categories-1"
                            defaultValue="Beverages"
                          />
                          <label htmlFor="Categories-3"> Sales</label>
                        </div>
                        <div className="mb-2">
                          <input
                            type="radio"
                            className="me-2"
                            id="Categories-4"
                            name="Categories-1"
                            defaultValue="Beverages"
                          />
                          <label htmlFor="Categories-4"> Discount</label>
                        </div>
                        <div className="mb-2">
                          <input
                            type="radio"
                            className="me-2"
                            id="Categories-5"
                            name="Categories-1"
                            defaultValue="Beverages"
                          />
                          <label htmlFor="Categories-5"> Expired</label>
                        </div>
                      </div>
                    </div>

                    {/* Side featured products start */}
                    <SideFeaturedProducts/>
               
                  </div>
                </div>
                <div className="col-lg-9">
                  <div className="row g-4 justify-content-center">
                    <div className="col-md-6 col-lg-6 col-xl-4">
                      <div className="rounded position-relative fruite-item">
                        <div className="fruite-img">
                          <img
                            src="img/fruite-item-5.jpg"
                            className="img-fluid w-100 rounded-top"
                            alt
                          />
                        </div>
                        <div
                          className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                          style={{ top: "10px", left: "10px" }}
                        >
                          Fruits
                        </div>
                        <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                          <h4>Grapes</h4>
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit sed do eiusmod te incididunt
                          </p>
                          <div className="d-flex justify-content-between flex-lg-wrap">
                            <p className="text-dark fs-5 fw-bold mb-0">
                              $4.99 / kg
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
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-4">
                      <div className="rounded position-relative fruite-item">
                        <div className="fruite-img">
                          <img
                            src="img/fruite-item-5.jpg"
                            className="img-fluid w-100 rounded-top"
                            alt
                          />
                        </div>
                        <div
                          className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                          style={{ top: "10px", left: "10px" }}
                        >
                          Fruits
                        </div>
                        <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                          <h4>Grapes</h4>
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit sed do eiusmod te incididunt
                          </p>
                          <div className="d-flex justify-content-between flex-lg-wrap">
                            <p className="text-dark fs-5 fw-bold mb-0">
                              $4.99 / kg
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
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-4">
                      <div className="rounded position-relative fruite-item">
                        <div className="fruite-img">
                          <img
                            src="img/fruite-item-2.jpg"
                            className="img-fluid w-100 rounded-top"
                            alt
                          />
                        </div>
                        <div
                          className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                          style={{ top: "10px", left: "10px" }}
                        >
                          Fruits
                        </div>
                        <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                          <h4>Raspberries</h4>
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit sed do eiusmod te incididunt
                          </p>
                          <div className="d-flex justify-content-between flex-lg-wrap">
                            <p className="text-dark fs-5 fw-bold mb-0">
                              $4.99 / kg
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
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-4">
                      <div className="rounded position-relative fruite-item">
                        <div className="fruite-img">
                          <img
                            src="img/fruite-item-4.jpg"
                            className="img-fluid w-100 rounded-top"
                            alt
                          />
                        </div>
                        <div
                          className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                          style={{ top: "10px", left: "10px" }}
                        >
                          Fruits
                        </div>
                        <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                          <h4>Apricots</h4>
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit sed do eiusmod te incididunt
                          </p>
                          <div className="d-flex justify-content-between flex-lg-wrap">
                            <p className="text-dark fs-5 fw-bold mb-0">
                              $4.99 / kg
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
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-4">
                      <div className="rounded position-relative fruite-item">
                        <div className="fruite-img">
                          <img
                            src="img/fruite-item-3.jpg"
                            className="img-fluid w-100 rounded-top"
                            alt
                          />
                        </div>
                        <div
                          className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                          style={{ top: "10px", left: "10px" }}
                        >
                          Fruits
                        </div>
                        <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                          <h4>Banana</h4>
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit sed do eiusmod te incididunt
                          </p>
                          <div className="d-flex justify-content-between flex-lg-wrap">
                            <p className="text-dark fs-5 fw-bold mb-0">
                              $4.99 / kg
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
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-4">
                      <div className="rounded position-relative fruite-item">
                        <div className="fruite-img">
                          <img
                            src="img/fruite-item-1.jpg"
                            className="img-fluid w-100 rounded-top"
                            alt
                          />
                        </div>
                        <div
                          className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                          style={{ top: "10px", left: "10px" }}
                        >
                          Fruits
                        </div>
                        <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                          <h4>Oranges</h4>
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit sed do eiusmod te incididunt
                          </p>
                          <div className="d-flex justify-content-between flex-lg-wrap">
                            <p className="text-dark fs-5 fw-bold mb-0">
                              $4.99 / kg
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
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-4">
                      <div className="rounded position-relative fruite-item">
                        <div className="fruite-img">
                          <img
                            src="img/fruite-item-2.jpg"
                            className="img-fluid w-100 rounded-top"
                            alt
                          />
                        </div>
                        <div
                          className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                          style={{ top: "10px", left: "10px" }}
                        >
                          Fruits
                        </div>
                        <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                          <h4>Raspberries</h4>
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit sed do eiusmod te incididunt
                          </p>
                          <div className="d-flex justify-content-between flex-lg-wrap">
                            <p className="text-dark fs-5 fw-bold mb-0">
                              $4.99 / kg
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
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-4">
                      <div className="rounded position-relative fruite-item">
                        <div className="fruite-img">
                          <img
                            src="img/fruite-item-5.jpg"
                            className="img-fluid w-100 rounded-top"
                            alt
                          />
                        </div>
                        <div
                          className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                          style={{ top: "10px", left: "10px" }}
                        >
                          Fruits
                        </div>
                        <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                          <h4>Grapes</h4>
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit sed do eiusmod te incididunt
                          </p>
                          <div className="d-flex justify-content-between flex-lg-wrap">
                            <p className="text-dark fs-5 fw-bold mb-0">
                              $4.99 / kg
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
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-4">
                      <div className="rounded position-relative fruite-item">
                        <div className="fruite-img">
                          <img
                            src="img/fruite-item-1.jpg"
                            className="img-fluid w-100 rounded-top"
                            alt
                          />
                        </div>
                        <div
                          className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                          style={{ top: "10px", left: "10px" }}
                        >
                          Fruits
                        </div>
                        <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                          <h4>Oranges</h4>
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit sed do eiusmod te incididunt
                          </p>
                          <div className="d-flex justify-content-between flex-lg-wrap">
                            <p className="text-dark fs-5 fw-bold mb-0">
                              $4.99 / kg
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
                    </div>
                    <div className="col-12">
                      <div className="pagination d-flex justify-content-center mt-5">
                        <a href="#" className="rounded">
                          «
                        </a>
                        <a href="#" className="active rounded">
                          1
                        </a>
                        <a href="#" className="rounded">
                          2
                        </a>
                        <a href="#" className="rounded">
                          3
                        </a>
                        <a href="#" className="rounded">
                          4
                        </a>
                        <a href="#" className="rounded">
                          5
                        </a>
                        <a href="#" className="rounded">
                          6
                        </a>
                        <a href="#" className="rounded">
                          »
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Fruits Shop End*/}

      <Footer />
    </div>
  );
}

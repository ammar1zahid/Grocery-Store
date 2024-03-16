import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";

export default function FruitShop() {
  return (
    <div>
      {/* Fruits Shop Start*/}
      <div className="container-fluid fruite py-5">
        <div className="container py-5">
          <div className="tab-class text-center">
            <div className="row g-4">
              <div className="col-lg-8 mx-auto text-center ">
                <ul className="nav nav-pills d-inline-flex text-center mb-5">
                  <li className="nav-item">
                    <a
                      className="d-flex m-2 py-2 bg-light rounded-pill active"
                      data-bs-toggle="pill"
                      href="#tab-1"
                    >
                      <span className="text-dark" style={{ width: "130px" }}>
                        All Products
                      </span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="d-flex py-2 m-2 bg-light rounded-pill"
                      data-bs-toggle="pill"
                      href="#tab-2"
                    >
                      <span className="text-dark" style={{ width: "130px" }}>
                        Vegetables
                      </span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="d-flex m-2 py-2 bg-light rounded-pill"
                      data-bs-toggle="pill"
                      href="#tab-3"
                    >
                      <span className="text-dark" style={{ width: "130px" }}>
                        Fruits
                      </span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="d-flex m-2 py-2 bg-light rounded-pill"
                      data-bs-toggle="pill"
                      href="#tab-4"
                    >
                      <span className="text-dark" style={{ width: "130px" }}>
                        Bread
                      </span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="d-flex m-2 py-2 bg-light rounded-pill"
                      data-bs-toggle="pill"
                      href="#tab-5"
                    >
                      <span className="text-dark" style={{ width: "130px" }}>
                        Meat
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Filter tabs starts */}
            <div className="tab-content">
              {/* All products tab starts */}
              <div id="tab-1" className="tab-pane fade show p-0 active">
                <div className="row g-4">
                  <div className="col-lg-12">
                    <div className="row g-4">
                      {/* <ProductCard/> */}

                      <ProductCard categorySent="All Products" />
                    </div>
                  </div>
                </div>
              </div>

              {/* vegitable tab items starts */}

              <div id="tab-2" className="tab-pane fade show p-0">
                <div className="row g-4">
                  <div className="col-lg-12">
                    <div className="row g-4">
                      {/* <ProductCard/> */}

                      {/* <ProductCard categorySent="Vegetable" /> */}
                      <ProductCard categorySent="Vegetable" />
                    </div>
                  </div>
                </div>
              </div>
              {/* vegitable tab items ends */}

              {/* fruits tab items starts */}

              <div id="tab-3" className="tab-pane fade show p-0">
                <div className="row g-4">
                  <div className="col-lg-12">
                    <div className="row g-4">
                      {/* <ProductCard/> */}

                      <ProductCard categorySent="Fruits" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Bread tab items starts */}

              <div id="tab-4" className="tab-pane fade show p-0">
                <div className="row g-4">
                  <div className="col-lg-12">
                    <div className="row g-4">
                      {/* <ProductCard/> */}
                      <ProductCard categorySent="Breads" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Meat tab items starts */}

              <div id="tab-5" className="tab-pane fade show p-0">
                <div className="row g-4">
                  <div className="col-lg-12">
                    <div className="row g-4">
                      {/* <ProductCard/> */}
                      <ProductCard categorySent="Meat" />
                    </div>
                  </div>
                </div>
              </div>

              {/* products listing end */}
            </div>
            {/* Filter tabs end */}
          </div>
        </div>
      </div>
      {/* Fruits Shop End*/}
    </div>
  );
}

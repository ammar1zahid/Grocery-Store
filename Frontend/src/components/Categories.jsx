import React from "react";

export default function Categories() {
  return (
    <div>
      <div className="col-lg-12">

        {/* <div className="input-group w-100 mx-auto d-flex mb-4">
          <input
            type="search"
            className="form-control p-3"
            placeholder="keywords"
            aria-describedby="search-icon-1"
          />
          <span id="search-icon-1" className="input-group-text p-3">
            <i className="fa fa-search" />
          </span>
        </div> */}

        <div className="mb-4">
          <h4>Categories</h4>
          <ul className="list-unstyled fruite-categorie">
            <li>
              <div className="d-flex justify-content-between fruite-name">
                <a href="#">
                  <i className="fas fa-apple-alt me-2" />
                  Apples
                </a>
                <span>(3)</span>
              </div>
            </li>
            <li>
              <div className="d-flex justify-content-between fruite-name">
                <a href="#">
                  <i className="fas fa-apple-alt me-2" />
                  Oranges
                </a>
                <span>(5)</span>
              </div>
            </li>
            <li>
              <div className="d-flex justify-content-between fruite-name">
                <a href="#">
                  <i className="fas fa-apple-alt me-2" />
                  Strawbery
                </a>
                <span>(2)</span>
              </div>
            </li>
            <li>
              <div className="d-flex justify-content-between fruite-name">
                <a href="#">
                  <i className="fas fa-apple-alt me-2" />
                  Banana
                </a>
                <span>(8)</span>
              </div>
            </li>
            <li>
              <div className="d-flex justify-content-between fruite-name">
                <a href="#">
                  <i className="fas fa-apple-alt me-2" />
                  Pumpkin
                </a>
                <span>(5)</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

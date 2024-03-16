import React from "react";
import NavBar from "../components/NavBar";
import Spinner from "../components/Spinner";
import Footer from "../components/Footer";
import ModalSearch from "../components/ModalSearch";
import ButtonToTop from "../components/ButtonToTop";
import Categories from "../components/Categories";
import { Link } from "react-router-dom";
import SideFeaturedProducts from "../components/SideFeaturedProducts";

export default function ShopDetailPage() {
  return (
    <div>
      <Spinner />

      <NavBar />

      <ModalSearch />

      {/* Single Page Header start */}
      <div className="container-fluid page-header py-5">
        <h1 className="text-center text-white display-6">Product Detail</h1>
        <ol className="breadcrumb justify-content-center mb-0">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item">
            <a href="#">Pages</a>
          </li>
          <li className="breadcrumb-item active text-white">Product Detail</li>
        </ol>
      </div>
      {/* Single Page Header End */}

      {/* Single Product Start */}
      <div className="container-fluid py-5 mt-5">
        <div className="container py-5">
          <div className="row g-4 mb-5">
            <div className="col-lg-8 col-xl-9">
              <div className="row g-4">
                <div className="col-lg-6">
                  <div className="border rounded">
                    <a href="#">
                      <img
                        src="img/single-item.jpg"
                        className="img-fluid rounded"
                        alt="Image"
                      />
                    </a>
                  </div>
                </div>
                <div className="col-lg-6">
                  <h4 className="fw-bold mb-3">Brocoli</h4>
                  <p className="mb-3">Category: Vegetables</p>
                  <h5 className="fw-bold mb-3">3,35 $</h5>
                  <div className="d-flex mb-4">
                    <i className="fa fa-star text-secondary" />
                    <i className="fa fa-star text-secondary" />
                    <i className="fa fa-star text-secondary" />
                    <i className="fa fa-star text-secondary" />
                    <i className="fa fa-star" />
                  </div>
                  <p className="mb-4">
                    The generated Lorem Ipsum is therefore always free from
                    repetition injected humour, or non-characteristic words etc.
                  </p>
                  <p className="mb-4">
                    Susp endisse ultricies nisi vel quam suscipit. Sabertooth
                    peacock flounder; chain pickerel hatchetfish, pencilfish
                    snailfish
                  </p>
                  <div
                    className="input-group quantity mb-5"
                    style={{ width: "100px" }}
                  >
                    <div className="input-group-btn">
                      <button className="btn btn-sm btn-minus rounded-circle bg-light border">
                        <i className="fa fa-minus" />
                      </button>
                    </div>
                    <input
                      type="text"
                      className="form-control form-control-sm text-center border-0"
                      defaultValue={1}
                    />
                    <div className="input-group-btn">
                      <button className="btn btn-sm btn-plus rounded-circle bg-light border">
                        <i className="fa fa-plus" />
                      </button>
                    </div>
                  </div>
                  <a
                    href="#"
                    className="btn border border-secondary rounded-pill px-4 py-2 mb-4 text-primary"
                  >
                    <i className="fa fa-shopping-bag me-2 text-primary" /> Add
                    to cart
                  </a>
                </div>
                <div className="col-lg-12">
                  <nav>
                    <div className="nav nav-tabs mb-3">
                      <button
                        className="nav-link active border-white border-bottom-0"
                        type="button"
                        role="tab"
                        id="nav-about-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-about"
                        aria-controls="nav-about"
                        aria-selected="true"
                      >
                        Description
                      </button>
                      <button
                        className="nav-link border-white border-bottom-0"
                        type="button"
                        role="tab"
                        id="nav-mission-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-mission"
                        aria-controls="nav-mission"
                        aria-selected="false"
                      >
                        Reviews
                      </button>
                    </div>
                  </nav>
                  <div className="tab-content mb-5">
                    <div
                      className="tab-pane active"
                      id="nav-about"
                      role="tabpanel"
                      aria-labelledby="nav-about-tab"
                    >
                      <p>
                        The generated Lorem Ipsum is therefore always free from
                        repetition injected humour, or non-characteristic words
                        etc. Susp endisse ultricies nisi vel quam suscipit{" "}
                      </p>
                      <p>
                        Sabertooth peacock flounder; chain pickerel hatchetfish,
                        pencilfish snailfish filefish Antarctic icefish goldeye
                        aholehole trumpetfish pilot fish airbreathing catfish,
                        electric ray sweeper.
                      </p>
                      <div className="px-2">
                        <div className="row g-4">
                          <div className="col-6">
                            <div className="row bg-light align-items-center text-center justify-content-center py-2">
                              <div className="col-6">
                                <p className="mb-0">Weight</p>
                              </div>
                              <div className="col-6">
                                <p className="mb-0">1 kg</p>
                              </div>
                            </div>
                            <div className="row text-center align-items-center justify-content-center py-2">
                              <div className="col-6">
                                <p className="mb-0">Country of Origin</p>
                              </div>
                              <div className="col-6">
                                <p className="mb-0">Agro Farm</p>
                              </div>
                            </div>
                            <div className="row bg-light text-center align-items-center justify-content-center py-2">
                              <div className="col-6">
                                <p className="mb-0">Quality</p>
                              </div>
                              <div className="col-6">
                                <p className="mb-0">Organic</p>
                              </div>
                            </div>
                            <div className="row text-center align-items-center justify-content-center py-2">
                              <div className="col-6">
                                <p className="mb-0">Сheck</p>
                              </div>
                              <div className="col-6">
                                <p className="mb-0">Healthy</p>
                              </div>
                            </div>
                            <div className="row bg-light text-center align-items-center justify-content-center py-2">
                              <div className="col-6">
                                <p className="mb-0">Min Weight</p>
                              </div>
                              <div className="col-6">
                                <p className="mb-0">250 Kg</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane"
                      id="nav-mission"
                      role="tabpanel"
                      aria-labelledby="nav-mission-tab"
                    >
                      <div className="d-flex">
                        <img
                          src="img/avatar.jpg"
                          className="img-fluid rounded-circle p-3"
                          style={{ width: "100px", height: "100px" }}
                          alt
                        />
                        <div className>
                          <p className="mb-2" style={{ "font-size": "14px" }}>
                            April 12, 2024
                          </p>
                          <div className="d-flex justify-content-between">
                            <h5>Jason Smith</h5>
                            <div className="d-flex mb-3">
                              <i className="fa fa-star text-secondary" />
                              <i className="fa fa-star text-secondary" />
                              <i className="fa fa-star text-secondary" />
                              <i className="fa fa-star text-secondary" />
                              <i className="fa fa-star" />
                            </div>
                          </div>
                          <p>
                            The generated Lorem Ipsum is therefore always free
                            from repetition injected humour, or
                            non-characteristic words etc. Susp endisse ultricies
                            nisi vel quam suscipit{" "}
                          </p>
                        </div>
                      </div>
                      <div className="d-flex">
                        <img
                          src="img/avatar.jpg"
                          className="img-fluid rounded-circle p-3"
                          style={{ width: "100px", height: "100px" }}
                          alt
                        />
                        <div className>
                          <p className="mb-2" style={{ "font-size": "14px" }}>
                            April 12, 2024
                          </p>
                          <div className="d-flex justify-content-between">
                            <h5>Sam Peters</h5>
                            <div className="d-flex mb-3">
                              <i className="fa fa-star text-secondary" />
                              <i className="fa fa-star text-secondary" />
                              <i className="fa fa-star text-secondary" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                            </div>
                          </div>
                          <p className="text-dark">
                            The generated Lorem Ipsum is therefore always free
                            from repetition injected humour, or
                            non-characteristic words etc. Susp endisse ultricies
                            nisi vel quam suscipit{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane" id="nav-vision" role="tabpanel">
                      <p className="text-dark">
                        Tempor erat elitr rebum at clita. Diam dolor diam ipsum
                        et tempor sit. Aliqu diam amet diam et eos labore. 3
                      </p>
                      <p className="mb-0">
                        Diam dolor diam ipsum et tempor sit. Aliqu diam amet
                        diam et eos labore. Clita erat ipsum et lorem et sit
                      </p>
                    </div>
                  </div>
                </div>




                {/* Leave a Reply form */}



                <form action="#">
                  <h4 className="mb-5 fw-bold">Leave a Reply</h4>
                  <div className="row g-4">
                    <div className="col-lg-6">
                      <div className="border-bottom rounded">
                        <input
                          type="text"
                          className="form-control border-0 me-4"
                          placeholder="Yur Name *"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="border-bottom rounded">
                        <input
                          type="email"
                          className="form-control border-0"
                          placeholder="Your Email *"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="border-bottom rounded my-4">
                        <textarea
                          name
                          id
                          className="form-control border-0"
                          cols={30}
                          rows={8}
                          placeholder="Your Review *"
                          spellCheck="false"
                          defaultValue={""}
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="d-flex justify-content-between py-3 mb-5">
                        <div className="d-flex align-items-center">
                          <p className="mb-0 me-3">Please rate:</p>
                          <div
                            className="d-flex align-items-center"
                            style={{ "font-size": "12px" }}
                          >
                            <i className="fa fa-star text-muted" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                          </div>
                        </div>
                        <a
                          href="#"
                          className="btn border border-secondary text-primary rounded-pill px-4 py-3"
                        >
                          {" "}
                          Post Comment
                        </a>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>


            <div className="col-lg-4 col-xl-3">
              <div className="row g-4 fruite">

                {/* Categories of product Starts */}

                <Categories/>
              
                {/* Side feature products Starts */}
                <SideFeaturedProducts/>
                
                <div className="col-lg-12">
                  <div className="position-relative">
                    <img
                      src="img/banner-fruits.jpg"
                      className="img-fluid w-100 rounded"
                      alt
                    />
                    <div
                      className="position-absolute"
                      style={{
                        top: "50%",
                        right: "10px",
                        "-webkit-transform": "translateY(-50%)",
                        "-ms-transform": "translateY(-50%)",
                        transform: "translateY(-50%)",
                      }}
                    >
                      <h3 className="text-secondary fw-bold">
                        Fresh <br /> Fruits <br /> Banner
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

                   
     

      <Footer/>

      <ButtonToTop/>
    </div>
  );
}

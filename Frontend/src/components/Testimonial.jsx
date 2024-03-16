import React, { useEffect } from 'react';
//import initializeMainScript from '../script/mainFunction'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


export default function Testimonial() {
  
// useEffect(() => {
//   // Initialize your main script when the component mounts
//   initializeMainScript();
// }, []); // Empty dependency array means this effect runs once after the initial render

const owlOptions = {
  autoplay: true,
  smartSpeed: 2000,
  center: false,
  dots: true,
  loop: true,
  margin: 25,
  nav: true,
  navText: [
    '<i class="bi bi-arrow-left"></i>',
    '<i class="bi bi-arrow-right"></i>',
  ],
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
    },
    576: {
      items: 1,
    },
    768: {
      items: 1,
    },
    992: {
      items: 2,
    },
    1200: {
      items: 2,
    },
  },
};



  return (
    <div>
        {/* Testimonial Start */}
{/* <div className="container-fluid testimonial py-5">
  <div className="container py-5">
    <div className="testimonial-header text-center">
      <h4 className="text-primary">Our Testimonial</h4>
      <h1 className="display-5 mb-5 text-dark">Our Client Saying!</h1>
    </div>
    <div className="owl-carousel testimonial-carousel">
      <div className="testimonial-item img-border-radius bg-light rounded p-4">
        <div className="position-relative">
          <i className="fa fa-quote-right fa-2x text-secondary position-absolute" style={{"bottom":"30px","right":"0"}} />
          <div className="mb-4 pb-4 border-bottom border-secondary">
            <p className="mb-0">Lorem Ipsum is simply dummy text of the printing Ipsum has been the industry's standard dummy text ever since the 1500s,
            </p>
          </div>
          <div className="d-flex align-items-center flex-nowrap">
            <div className="bg-secondary rounded">
              <img src="img/testimonial-1.jpg" className="img-fluid rounded" style={{"width":"100px","height":"100px"}} alt />
            </div>
            <div className="ms-4 d-block">
              <h4 className="text-dark">Client Name</h4>
              <p className="m-0 pb-3">Profession</p>
              <div className="d-flex pe-5">
                <i className="fas fa-star text-primary" />
                <i className="fas fa-star text-primary" />
                <i className="fas fa-star text-primary" />
                <i className="fas fa-star text-primary" />
                <i className="fas fa-star" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="testimonial-item img-border-radius bg-light rounded p-4">
        <div className="position-relative">
          <i className="fa fa-quote-right fa-2x text-secondary position-absolute" style={{"bottom":"30px","right":"0"}} />
          <div className="mb-4 pb-4 border-bottom border-secondary">
            <p className="mb-0">Lorem Ipsum is simply dummy text of the printing Ipsum has been the industry's standard dummy text ever since the 1500s,
            </p>
          </div>
          <div className="d-flex align-items-center flex-nowrap">
            <div className="bg-secondary rounded">
              <img src="img/testimonial-1.jpg" className="img-fluid rounded" style={{"width":"100px","height":"100px"}} alt />
            </div>
            <div className="ms-4 d-block">
              <h4 className="text-dark">Client Name</h4>
              <p className="m-0 pb-3">Profession</p>
              <div className="d-flex pe-5">
                <i className="fas fa-star text-primary" />
                <i className="fas fa-star text-primary" />
                <i className="fas fa-star text-primary" />
                <i className="fas fa-star text-primary" />
                <i className="fas fa-star text-primary" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="testimonial-item img-border-radius bg-light rounded p-4">
        <div className="position-relative">
          <i className="fa fa-quote-right fa-2x text-secondary position-absolute" style={{"bottom":"30px","right":"0"}} />
          <div className="mb-4 pb-4 border-bottom border-secondary">
            <p className="mb-0">Lorem Ipsum is simply dummy text of the printing Ipsum has been the industry's standard dummy text ever since the 1500s,
            </p>
          </div>
          <div className="d-flex align-items-center flex-nowrap">
            <div className="bg-secondary rounded">
              <img src="img/testimonial-1.jpg" className="img-fluid rounded" style={{"width":"100px","height":"100px"}} alt />
            </div>
            <div className="ms-4 d-block">
              <h4 className="text-dark">Client Name</h4>
              <p className="m-0 pb-3">Profession</p>
              <div className="d-flex pe-5">
                <i className="fas fa-star text-primary" />
                <i className="fas fa-star text-primary" />
                <i className="fas fa-star text-primary" />
                <i className="fas fa-star text-primary" />
                <i className="fas fa-star text-primary" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div> */}


<div className="container-fluid testimonial py-5">
        <div className="container py-5">
          <div className="testimonial-header text-center">
            <h4 className="text-primary">Our Testimonial</h4>
            <h1 className="display-5 mb-5 text-dark">Our Client Saying!</h1>
          </div>
          <OwlCarousel
            className="owl-theme testimonial-carousel"
            {...owlOptions}
          >
            <div className="testimonial-item img-border-radius bg-light rounded p-4">
        <div className="position-relative">
          <i className="fa fa-quote-right fa-2x text-secondary position-absolute" style={{"bottom":"30px","right":"0"}} />
          <div className="mb-4 pb-4 border-bottom border-secondary">
            <p className="mb-0">Lorem Ipsum is simply dummy text of the printing Ipsum has been the industry's standard dummy text ever since the 1500s,
            </p>
          </div>
          <div className="d-flex align-items-center flex-nowrap">
            <div className="bg-secondary rounded">
              <img src="img/testimonial-1.jpg" className="img-fluid rounded" style={{"width":"100px","height":"100px"}} alt />
            </div>
            <div className="ms-4 d-block">
              <h4 className="text-dark">Client Name</h4>
              <p className="m-0 pb-3">Profession</p>
              <div className="d-flex pe-5">
                <i className="fas fa-star text-primary" />
                <i className="fas fa-star text-primary" />
                <i className="fas fa-star text-primary" />
                <i className="fas fa-star text-primary" />
                <i className="fas fa-star text-primary" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="testimonial-item img-border-radius bg-light rounded p-4">
        <div className="position-relative">
          <i className="fa fa-quote-right fa-2x text-secondary position-absolute" style={{"bottom":"30px","right":"0"}} />
          <div className="mb-4 pb-4 border-bottom border-secondary">
            <p className="mb-0">Lorem Ipsum is simply dummy text of the printing Ipsum has been the industry's standard dummy text ever since the 1500s,
            </p>
          </div>
          <div className="d-flex align-items-center flex-nowrap">
            <div className="bg-secondary rounded">
              <img src="img/testimonial-1.jpg" className="img-fluid rounded" style={{"width":"100px","height":"100px"}} alt />
            </div>
            <div className="ms-4 d-block">
              <h4 className="text-dark">Client Name</h4>
              <p className="m-0 pb-3">Profession</p>
              <div className="d-flex pe-5">
                <i className="fas fa-star text-primary" />
                <i className="fas fa-star text-primary" />
                <i className="fas fa-star text-primary" />
                <i className="fas fa-star text-primary" />
                <i className="fas fa-star text-primary" />
              </div>
            </div>
          </div>
        </div>
      </div>
            
          </OwlCarousel>
        </div>
      </div>



{/* Testimonial End */}
    </div>
  )
}

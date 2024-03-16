import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';



export default function VegitableShop() {
  const options = {
    items: 3,
    loop: true,
    margin: 10, // Adjust as needed
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  };

  
  return (
    
  <div>
 
    <div>
          {/* Vegitable Shop Start */}
          <div className="container-fluid vesitable py-5">
            <div className="container py-5">
              <h1 className="mb-0">Fresh Organic Vegetables</h1>
              <OwlCarousel className="owl-theme" {...options}>
                {/* Carousel Items */}
                <div className="item">
                  {/* Replace this with your carousel item content */}
                  <img src="img/vegetable-item-6.jpg" alt="Vegetable" />
                  <h4>Parsley</h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
                  {/* Add more content as needed */}
                </div>
                  {/* Carousel Items */}
                  <div className="item">
                  {/* Replace this with your carousel item content */}
                  <img src="img/vegetable-item-6.jpg" alt="Vegetable" />
                  <h4>Parsley</h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
                  {/* Add more content as needed */}
                </div>

                {/* Repeat similar structure for other carousel items */}
              </OwlCarousel>
            </div>
    </div>
          {/* Vegitable Shop End */}
  </div>




    </div>
  )
}

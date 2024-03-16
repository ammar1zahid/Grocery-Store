import React, { useEffect } from 'react';
import NavBar from '../components/NavBar'
import Spinner from '../components/Spinner'
import Footer from '../components/Footer'
import ModalSearch from '../components/ModalSearch'
import Testimonial from '../components/Testimonial'
import ButtonToTop from '../components/ButtonToTop'
import initializeMainScript from '../script/mainFunction'
import { Link } from 'react-router-dom';

export default function TestimonialPage() {
    useEffect(() => {
        // Initialize your main script when the component mounts
        initializeMainScript();
      }, []);
    return (
    <div>
        <Spinner/>
        <NavBar/>
        <ModalSearch/>

        {/* Single Page Header start */}
      <div className="container-fluid page-header py-5">
        <h1 className="text-center text-white display-6">Testimonial</h1>
        <ol className="breadcrumb justify-content-center mb-0">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item">
            <a href="#">Pages</a>
          </li>
          <li className="breadcrumb-item active text-white">Testimonial</li>
        </ol>
      </div>
      {/* Single Page Header End */}

        <Testimonial/>
        <Footer/>
        <ButtonToTop/>

    </div>
  )
}

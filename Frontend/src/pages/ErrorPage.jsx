import React, { useEffect } from 'react';
import NavBar from '../components/NavBar'
import Spinner from '../components/Spinner'
import Footer from '../components/Footer'
import ModalSearch from '../components/ModalSearch'
import ButtonToTop from '../components/ButtonToTop'
import initializeMainScript from '../script/mainFunction'
import { Link } from 'react-router-dom';

export default function ErrorPage() {
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
        <h1 className="text-center text-white display-6">Error</h1>
        <ol className="breadcrumb justify-content-center mb-0">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item">
            <a href="#">Pages</a>
          </li>
          <li className="breadcrumb-item active text-white">Error</li>
        </ol>
      </div>
      {/* Single Page Header End */}

        {/* 404 Start */}
        <div className="container-fluid py-5">
        <div className="container py-5 text-center">
            <div className="row justify-content-center">
            <div className="col-lg-6">
                <i className="bi bi-exclamation-triangle display-1 text-secondary" />
                <h1 className="display-1">404</h1>
                <h1 className="mb-4">Page Not Found</h1>
                <p className="mb-4">We’re sorry, the page you have looked for does not exist in our website! Maybe go to our home page or try to use a search?</p>
                <Link className="btn border-secondary rounded-pill py-3 px-5" to="/">Go Back To Home</Link>
            </div>
            </div>
        </div>
        </div>
        {/* 404 End */}

        <Footer/>
        <ButtonToTop/>

    </div>
  )
}

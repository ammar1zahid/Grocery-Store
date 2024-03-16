import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function NavBar() {
    const location = useLocation();
    
    
    const isLinkActive = (pathname) => location.pathname === pathname;
  
    return (
    <div>
    {/* Navbar start */}
        
        {/*TopBar Start */}
        <div className="container-fluid fixed-top">
        <div className="container topbar bg-primary d-none d-lg-block">
            <div className="d-flex justify-content-between">
            <div className="top-info ps-2">
                <small className="me-3"><i className="fas fa-map-marker-alt me-2 text-secondary" /> <a href="#" className="text-white">123 Street, New York</a></small>
                <small className="me-3"><i className="fas fa-envelope me-2 text-secondary" /><a href="#" className="text-white">Email@Example.com</a></small>
            </div>
            <div className="top-link pe-2">
                <a href="#" className="text-white"><small className="text-white mx-2">Privacy Policy</small>/</a>
                <a href="#" className="text-white"><small className="text-white mx-2">Terms of Use</small>/</a>
                <a href="#" className="text-white"><small className="text-white ms-2">Sales and Refunds</small></a>
            </div>
            </div>
        </div>
         {/*TopBar End */}


        <div className="container px-0">
            <nav className="navbar navbar-light bg-white navbar-expand-xl">
            <Link to="/" className="navbar-brand"><h1 className="text-primary display-6">Fruitables</h1></Link>
            <button className="navbar-toggler py-2 px-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span className="fa fa-bars text-primary" />
            </button>
            <div className="collapse navbar-collapse bg-white" id="navbarCollapse">
                <div className="navbar-nav mx-auto">
                <Link to="/" className={`nav-item nav-link ${isLinkActive('/') ? 'active' : ''}`}>Home</Link>
                <Link to="/shop" className={`nav-item nav-link ${isLinkActive('/shop') ? 'active' : ''}`}>Shop</Link>
                <Link to="/shopDetail" className={`nav-item nav-link ${isLinkActive('/shopDetail') ? 'active' : ''}`}>Product Detail</Link>
                <div className="nav-item dropdown">
                    <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                    <div className="dropdown-menu m-0 bg-secondary rounded-0">
                    <Link to="/cart" className="dropdown-item">Cart</Link>
                    <Link to="/checkout" className="dropdown-item">Checkout</Link>
                    <Link to="/testimonial" className="dropdown-item">Testimonial</Link>
                    <Link to="/error" className="dropdown-item">404 Page</Link>
                    </div>
                </div>
                <Link to="/contact" className="nav-item nav-link">Contact</Link>
                </div>
                <div className="d-flex m-3 me-0">
                <button className="btn-search btn border border-secondary btn-md-square rounded-circle bg-white me-4" data-bs-toggle="modal" data-bs-target="#searchModal"><i className="fas fa-search text-primary" /></button>
                
                
                <Link to="/cart" className="position-relative me-4 my-auto">
                    <i className="fa fa-shopping-bag fa-2x" />
                    <span className="position-absolute bg-secondary rounded-circle d-flex align-items-center justify-content-center text-dark px-1" style={{"top":"-5px","left":"15px","height":"20px"," min-width":"20px"}}>3</span>
                </Link>
                <a href="#" className="my-auto">
                    <i className="fas fa-user fa-2x" />
                </a>
                
                </div>
            </div>
            </nav>
        </div>
        </div>
    {/* Navbar End */}
    </div>
  )
}

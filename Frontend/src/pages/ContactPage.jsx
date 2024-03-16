import React from 'react'
import NavBar from '../components/NavBar'
import Spinner from '../components/Spinner'
import Footer from '../components/Footer'
import ModalSearch from '../components/ModalSearch'
import ButtonToTop from '../components/ButtonToTop'
import Contact from '../components/Contact'



export default function ContactPage() {
  return (
    <div>
        <Spinner/>

        <NavBar/>

        <ModalSearch/>

        {/* Single Page Header start */}
            <div className="container-fluid page-header py-5">
            <h1 className="text-center text-white display-6">Contact</h1>
            <ol className="breadcrumb justify-content-center mb-0">
                <li className="breadcrumb-item"><a href="#">Home</a></li>
                <li className="breadcrumb-item"><a href="#">Pages</a></li>
                <li className="breadcrumb-item active text-white">Contact</li>
            </ol>
            </div>
        {/* Single Page Header End */}

        <Contact/>

        <Footer/>    

        <ButtonToTop/>
            
    </div>
  )
}

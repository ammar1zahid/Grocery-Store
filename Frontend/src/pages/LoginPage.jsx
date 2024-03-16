import React, { useState } from 'react'
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBInput,
    MDBIcon,
    MDBCheckbox
  } from 'mdb-react-ui-kit';
  import { Link, useNavigate, useParams } from 'react-router-dom';
  import axios from 'axios';


export default function LoginPage() {
  const navigate = useNavigate();
  const [values, setValues]= useState({
      email:'',
      password:''
  })

  const handleInput=(event)=>{
      setValues(prev=>({...prev, [event.target.name]:event.target.value}))
  }

  const handleSubmit= async(e)=>{
          e.preventDefault();
          console.log(values);

          // Make a POST request to the loginUser endpoint with user credentials
           await axios.post('http://localhost:5000/api/loginUser',values)
          .then(res=>{ 
            // If the login is successful, navigate to the home page  
            navigate('/');

          })
          .catch(err=>{ console.log(err)});
  } 
  
  
  return (
    
        <MDBContainer fluid >
          <MDBCard className='text-black m-5 ' style={{ borderRadius: '25px' , backgroundColor: "#42f5da" }}>
            <MDBCardBody>
              <MDBRow>
                <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>
                  <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4"><b>Login</b> </p>
    
    
                  <div className="mb-4 d-flex align-items-center">
                    <MDBIcon fas icon="envelope me-3" size='lg' />
                    <MDBInput label='Your Email' id='form2' type='email' name='email' value={values.email} onChange={handleInput} />
                  </div>
    
                  <div className="mb-4 d-flex align-items-center">
                    <MDBIcon fas icon="lock me-3" size='lg' />
                    <MDBInput label='Password' id='form3' type='password' name='password' value={values.password} onChange={handleInput}/>
                  </div>

    
                  <MDBBtn className='mb-4' size='lg' onClick={handleSubmit}>Login</MDBBtn>

                  <div className="d-flex flex-column align-items-center">
                  <p className="mb-2">Don't have an account?</p>
                  <Link to="/signup" className={'nav-item nav-link text-primary fw-bold'}>Sign up</Link>
                </div>
                  
                </MDBCol>
    
                <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
                  <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' fluid />
                </MDBCol>
              </MDBRow>
            </MDBCardBody>
          </MDBCard>
        </MDBContainer>
      );
}

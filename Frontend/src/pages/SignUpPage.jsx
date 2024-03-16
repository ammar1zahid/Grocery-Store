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


export default function SignUpPage() {
    const navigate = useNavigate();
    const [values, setValues]= useState({
        name:'',
        email:'',
        password:'',
        repeatPassword: '' // Added repeatPassword to state for frontend validation
    })

    const handleInput=(event)=>{
        setValues(prev=>({...prev, [event.target.name]:event.target.value}))
    }

    // Function to check if the repeated password matches the original password
        const isPasswordMatch = () => {
          return values.password === values.repeatPassword;
        };

        // Function to check if all form fields are filled
          const isFormValid = () => {
            return values.name.trim() !== '' && values.email.trim() !== '' && values.password.trim() !== '' && isPasswordMatch();
          };

    const handleSubmit= async(e)=>{
            e.preventDefault();
            console.log(values);

            // Check if passwords match before making the API call
            if (!isPasswordMatch()) {
              console.log('Passwords do not match');
              return;
            }
        
            try {
              // Make a POST request to the createUser endpoint with user data
              const response = await axios.post('http://localhost:5000/api/createUser', {
                name: values.name,
                email: values.email,
                password: values.password
              });
        
              // Navigate to the login page after successful registration
              navigate('/login');
              
            } catch (error) {
              console.log(error);
            }
    }
  
    return (
    
    <MDBContainer fluid >
      <MDBCard className='text-black m-5 ' style={{ borderRadius: '25px' , backgroundColor: "#42f5da" }}>
        <MDBCardBody>
          <MDBRow>
            <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>
              <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4"><b>Sign up</b> </p>

              <div className="mb-4 d-flex align-items-center">
                <MDBIcon fas icon="user me-3" size='lg' />
                <MDBInput label='Your Name' id='form1' type='text' className='w-100'  name='name' value={values.name} onChange={handleInput} />
              </div>

              <div className="mb-4 d-flex align-items-center">
                <MDBIcon fas icon="envelope me-3" size='lg' />
                <MDBInput label='Your Email' id='form2' type='email' name='email' value={values.email} onChange={handleInput}/>
              </div>

              <div className="mb-4 d-flex align-items-center">
                <MDBIcon fas icon="lock me-3" size='lg' />
                <MDBInput label='Password' id='form3' type='password' name='password' value={values.password} onChange={handleInput}/>
              </div>

              <div className="mb-4 d-flex align-items-center">
                <MDBIcon fas icon="key me-3" size='lg' />
                <MDBInput label='Repeat your password' id='form4' type='password' value={values.repeatPassword}
              onChange={(e) => setValues((prev) => ({ ...prev, repeatPassword: e.target.value }))} />
              </div>


              <MDBBtn className='mb-4' size='lg' onClick={handleSubmit} disabled={!isFormValid()}>Register</MDBBtn>
              {!isFormValid() && <p style={{ color: 'red', fontWeight: 'bold' }}>All fields must be filled, and passwords must match</p>}


              <div className="d-flex flex-row align-items-center mt-4">
                  <p className="mb-2 mr-2">Already have an account?</p>
                  <Link to="/login" className={'nav-item nav-link text-primary fw-bold align-self-end'}>Login</Link>
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

import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';

import './Register.css';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import { useState } from 'react';
import Loading from '../../Shared/Loading/Loading';


const Register = () => {

   const [agree,setAgree]=useState(false);
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth , {sendEmailVerification:true});  

  const [updateProfile, updating, updateError] = useUpdateProfile(auth);

  
    const nameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate=useNavigate();

    
    if(user){
    //   navigate('/login')
    console.log('user',user);
    }

    if(loading || updating){
      return<Loading></Loading>
  }

    const handleSubmit= async (event)=>{
        event.preventDefault();
        const name=nameRef.current.value;
        const email=emailRef.current.value;
        const password=passwordRef.current.value;
       await createUserWithEmailAndPassword(email,password);
       await updateProfile({ displayName : name});
       navigate('/home');
      
    }

    const navigateLogin=event=>{
      navigate('/login')
    }

    return (
        <div  style={{margin:'0 auto',width:'50%', textAlign:'left'}} >
            <h1 className='text-info text-center mt-5' >Please register 😊   </h1>
          
          <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" >
        <Form.Label>Your name</Form.Label>
        <Form.Control ref={nameRef} type="text" placeholder="Enter your name" required />
        </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />

        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
      </Form.Group>
   
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check onClick={()=>setAgree(!agree)} className={`${agree ? 'text-info' : 'text-danger'}`}  type="checkbox" label="Accept Terms and Conditions" />
      </Form.Group>

      <Button 
      disabled={!agree}
      variant="info  w-50 mx-auto d-block mb-3" 
      type="submit">
       Register
      </Button>
    </Form>
    <p> you already have an acount . <Link to='/login' className=' pe-auto text-decoration-none' onClick={navigateLogin} >Please Login </Link>  </p>
    <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;
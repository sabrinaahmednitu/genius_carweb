import axios from 'axios';
import { signOut } from 'firebase/auth';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Order = () => {
    const [user]=useAuthState(auth);
    const[orders,setOrders]=useState([]); //onk gulo order asbe tai default array debo
    const navigate=useNavigate();

    // useEffect( ()=>{
    //     const email=user.email;
    //      const url=`http://localhost:5000/order?email=${email}`;
    //    try{
    //     fetch(url ,{
    //         headers:{
    //             authorization:`Bearer ${localStorage.getItem('accessToken')} `
    //         }
    //     })
    //     .then(res=>res.json())
    //     .then(data=>setOrders(data))
    //    }
    //    catch(error){
    //          console.log(error.message);
    //          if(error.reponse.status ===403 || error.reponse.status ===401){
    //               signOut(auth);
    //             navigate('/login')
    //          }
    //    }
    // },[user])

    useEffect( ()=>{

      const getOrders=async()=>{
              
        const email=user.email;
        const url=`http://localhost:5000/order?email=${email}`;
       try{
        const{data}=await axios.get(url,{
            headers: {
                authorization:`Bearer ${localStorage.getItem('accessToken')} `
            }
        });
        setOrders(data);
       }
       catch(error){
           console.log(error.message);
           if(error.reponse.status === 401 || error.reponse.status === 403){
                              signOut(auth);
                              navigate('/login')
                           
                         }
                }

        }
        getOrders();
    },[user])


    return (
        <div>
            <h2>your orders : {orders.length} </h2>
        </div>
    );
};

export default Order;
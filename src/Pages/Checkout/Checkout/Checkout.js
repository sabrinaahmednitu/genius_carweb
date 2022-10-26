 import React from 'react';
import { useParams } from 'react-router-dom';
import useServiceDetail from '../../../hooks/useServiceDetail';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import axios from 'axios';
import { toast } from 'react-toastify';
 
 const Checkout = () => {
     const {serviceId}=useParams();
     const [service]=useServiceDetail(serviceId);
     const [user] = useAuthState(auth);


     const handlePlaceOrder=event=>{
         event.preventDefault();
         const order={
             email : user.email,
             service :service.name,
             serviceId : serviceId,
             address : event.target.address.value,
             phone: event.target.phone.value
         }
         //fetch by axios start
         axios.post('http://localhost:5000/order', order)
         .then(function (response){
            //// console.log(response)
               const {data} = response;
             if(data.insertedId){
                toast('Your order is booked ! see you soon');
                event.target.reset();
             }
           })
        //fetch by axios end
     }

     return (
         <div className='w-50 mx-auto mt-5' >
             <h3 >Please order : {service.name}</h3>
             <form onSubmit={handlePlaceOrder} >
             <input className='w-75 mb-2 mt-2' type="text" value={user?.displayName} name="name"  placeholder='name' required readOnly ></input> <br />
                 <input className='w-75 mb-2' type="email" value={user?.email} name="email" placeholder='email' required readOnly ></input> <br />
                 <input className='w-75 mb-2' type="text" value={service.name} name="service" placeholder='service' readOnly ></input> <br />
                 <textarea className='w-75 mb-2' type="text"  name="address" placeholder='Address' autoComplete='off' ></textarea> <br />
                 <input className='w-75 mb-2' type="number" name="phone" placeholder='Phone number' autoComplete='off' ></input> <br />
                <input className='mb-5 btn btn-secondary' type="submit"  value="Place Order"></input>
             </form>
         </div>
     );
 };
 
 export default Checkout;
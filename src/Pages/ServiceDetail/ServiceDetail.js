import React from 'react';
import { Link, useParams } from 'react-router-dom';
import useServiceDetail from '../../hooks/useServiceDetail';

const ServiceDetail = () => {
     const {serviceId}=useParams(); 
     const [service]=useServiceDetail(serviceId);
     //ai line gulo k hook kora
    // const [service,setService]=useState({});

    // useEffect(()=>{
    //     const url=`http://localhost:5000/service/${serviceId}`;

    //     fetch(url)
    //     .then(res=>res.json())
    //     .then(data=>setService(data));
    // } ,[])
    return (
        <div>
            <h2>Welcome to detail {service.name} </h2>
           <div className='text-center' >
           <Link to={`/checkout/${serviceId}`} >
                <button className='btn btn-info'>  Proceed checkout</button>
            </Link>
           </div>
        </div>
    );
};

export default ServiceDetail;
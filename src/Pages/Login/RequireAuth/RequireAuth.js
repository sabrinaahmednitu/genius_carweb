import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';

const RequireAuth = ({children}) => {
    const [user, loading] = useAuthState(auth);
    const location=useLocation();
    if(loading){
        return <Loading></Loading>
    }
    if(!user){
        return <Navigate to="/login" state={{from:location}} replace></Navigate>
    }
    if(!user.emailVerified){
        return <div>
            <h3 className='text-danger'>Your email is not verfied !! </h3>
            <h5 className='text-success'> Please verify your email address</h5>
            <button>Send verification</button>
        </div>
    }
    return children;
};

export default RequireAuth;
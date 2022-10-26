import React from 'react';
import { useSignInWithGoogle ,useSignInWithGithub} from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import google from '../../../imags//google4.png';
import facebook from '../../../imags/facebook.png';
import github from '../../../imags/unnamed.png';
import Loading from '../../Shared/Loading/Loading';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const navigate=useNavigate();
    const location=useLocation();
    let from=location.state?.from?.pathname || "/";
    let errorElement;
    if(loading || loading1){
        return<Loading></Loading>
    }
    if (error || error1) {

       errorElement = <p className='text-danger'>Error: {error?.message} {error1?.message}</p>
        } 

      if (user || user1) {
       navigate(from ,{replace:true});
      }
    return (
        <div className='mb-5'>
            <div className='d-flex align-items-center'>
                <div style={{height:'1px'}} className='bg-secondary w-50'></div>
                 <p className='mt-2 px-2' >or</p>
                 <div style={{height:'1px'}} className='bg-secondary w-50'></div>
            </div>
            {errorElement}
            <div>
                <button onClick={() => signInWithGoogle()}
                    className=" w-50 mx-auto d-block " style={{backgroundColor:'black',marginBottom:'10px',borderRadius:'5px',padding:'10px'}}>
                    <img style={{width:'30px'}} src={google} alt="" />
                    <span className='px-2 ' style={{color:'white'}} >Continue with Google</span>
                </button>
            </div>

            <div>
                <button className=" w-50 mx-auto d-block" style={{backgroundColor:'black',marginBottom:'10px', borderRadius:'5px',padding:'10px'}}>
                    <img style={{width:'25px'}} src={facebook} alt="" />
                    <span className='px-2 ' style={{color:'white'}} >Continue with Facebook</span>
                </button>
            </div>

            <div>
                <button onClick={() => signInWithGithub()}
                className=" w-50 mx-auto d-block" style={{backgroundColor:'black',marginBottom:'10px',borderRadius:'5px',padding:'10px'}}>
                    <img style={{width:'30px'}} src={github} alt="" />
                    <span className='px-2 ' style={{color:'white'}} >Continue with GitHub</span>
                </button>
            </div>

        </div>
    );
};

export default SocialLogin;
import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import './Login.css'

const Login = () => {
    const {handleGoogleLogIn} = useAuth();

    const history = useHistory();
    const location = useLocation();

    let { from } = location.state || { from: { pathname: "/" } };

    const googleSignIn = () => {
        handleGoogleLogIn()
        .then((result) => {
            history.replace(from);
        })
    };


    return (
        <div className="">
            <div className="login-container">
                <div className="d-flex justify-content-center">  
                    <div className="login-form border p-5">
                        <button type="button" className="w-100 rounded-pill btn btn-outline-success" variant="outlined" onClick={googleSignIn}>
                            <img className="google-image" src="https://cdn-icons-png.flaticon.com/128/2702/2702602.png" alt="" />&nbsp;&nbsp; <span>Continue with Google</span>
                        </button>
                        <br /> <br />
                        <button type="button" className="w-100 rounded-pill btn btn-outline-success" variant="outlined" onClick={googleSignIn}>
                            <img className="google-image" src="https://cdn-icons.flaticon.com/png/128/2504/premium/2504839.png?token=exp=1635516311~hmac=6901e32b2a9ce5559a46e266d31fb229" alt="" />&nbsp;&nbsp; <span>Continue with Twitter</span>
                        </button>
                        <br /> <br />
                        <button type="button" className="w-100 rounded-pill btn btn-outline-success" variant="outlined" onClick={googleSignIn}>
                            <img className="google-image" src="https://cdn-icons-png.flaticon.com/512/733/733609.png" alt="" />&nbsp;&nbsp; <span>Continue with GitHub</span>
                        </button>
                        <br /><br />
                        <button type="button" className="w-100 rounded-pill btn btn-outline-success" variant="outlined" onClick={googleSignIn}>
                            <img className="google-image" src="https://cdn-icons-png.flaticon.com/128/145/145802.png" alt="" />&nbsp;&nbsp; <span>Continue with Facebook</span>
                        </button>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
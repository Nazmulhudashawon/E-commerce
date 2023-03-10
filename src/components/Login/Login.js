import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css';

const Login = () => {
    const { signInUsingGoogle, signInUsingPhone } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/shop';


    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
    }
    // const handlePhoneLogin = () => {
    //     signInUsingPhone ()
    //         .then(result => {
    //             history.push(redirect_uri);
    //         })
    // }

    return (
        <div className="login-form">
            <div>
                <h2>Login</h2>
                <form>
                    <input type="email" name="" id="" placeholder="Your Email" />
                    <br />
                    <input type="password" name="" id="" />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
               
                <button
                    className="btn-regular"
                    onClick={handleGoogleLogin}
                >Google Sign In</button>
                {/* <button
                    className="btn-regular"
                    onClick={handlePhoneLogin}
                >phone Sign In</button> */}
            </div>
        </div>
    );
};

export default Login;
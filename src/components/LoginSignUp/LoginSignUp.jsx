import React from "react";
import './LoginSignUp.css';

import user_icon from '../Assestes/person.png';
import email_icon from '../Assestes/email.png';
import password_icon from '../Assestes/password.png';
const LoginSignUp = () => {
    return(
        <div className="container">
           
            <div className="header">
                <div className="text">SignUp</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                <img src={user_icon} alt="" />
                <div className="input"><input type="text" placeholder="Enter Your Name"/></div>
            </div>
            <div className="inputs">
                <img src={email_icon} alt="" />
                <div className="input"><input type="email" placeholder="Enter your Email" /></div>
            </div>
            <div className="inputs">
                <img src={password_icon} alt="" />
                <div className="input"><input type="password" placeholder="Enter the Password"/></div>

            </div>

            <div className="forgot_password">Forgot Password? <span>Click Here!</span></div>
            <div className="submit-container">
                <div className="submit">SignUp</div>
                <div className="submit">Login</div>
            </div>
        </div>
    );
};
export default LoginSignUp;
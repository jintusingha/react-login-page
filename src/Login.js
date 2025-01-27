import './App.css';
import backgroundImage from './pexels-pixabay-268533.jpg'

import React, { useState } from 'react';import { FaFacebook } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { BsApple } from 'react-icons/bs';



const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setEmailError('');
        setPasswordError('');

        if (!email) {
            setEmailError('Email is required');
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            setEmailError('Please enter a valid email');
        }

        if (!password) {
            setPasswordError('Password cannot be empty');
        }

        if (!emailError && !passwordError) {
            console.log('Email:', email);
            console.log('Password:', password);
            setEmail('');
            setPassword('');
        }
    };

    return (
        <div className="login-container">
            <div className="login-content">
                <div className="login-form">
                    <h2 className="form-title">Sign Up </h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="form-input"
                                placeholder="example@email.com"
                            />
                            {emailError && <span className="error-text">{emailError}</span>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="form-input"
                                placeholder="Enter your password"
                            />
                            {passwordError && <span className="error-text">{passwordError}</span>}
                        </div>
                         {/* Forgot Password link */}
  <div className="forgot-password">
    <a href="/forgot-password">Forgot Password?</a>
  </div>
                        

                        <button type="submit" className="btn-submit">Sign Up</button>
                    </form>
                    <div className="alternative-login">
                        <p>or sign up with</p>
                        <div className="social-buttons">
  <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="btn-social facebook">
    <FaFacebook size={20} /> Facebook
  </a>
  <a href="https://www.google.com" target="_blank" rel="noopener noreferrer" className="btn-social google">
    <FcGoogle size={20} /> Google
  </a>
  <a href="https://www.apple.com" target="_blank" rel="noopener noreferrer" className="btn-social apple">
    <BsApple size={20} /> Apple
  </a>
</div>

                    </div>
                    <p className="login-footer">
                        Have an account? <a href="/login">Sign in</a>
                    </p>
                </div>
                <div className="login-image">
                    <img src={backgroundImage} alt="Decorative" />
                </div>
            </div>
        </div>
    );
};

export default Login; 
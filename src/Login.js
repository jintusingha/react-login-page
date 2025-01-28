import './App.css';
import backgroundImage from './pexels-pixabay-268533.jpg';
import React, { useState } from 'react';
import { FaFacebook } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { BsApple } from 'react-icons/bs';

const Login = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setNameError('');
    setEmailError('');
    setPasswordError('');
    setConfirmPasswordError('');

    // Name Validation
    if (!name) {
      setNameError('Name is required');
    }

    // Email Validation
    if (!email) {
      setEmailError('Email is required');
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError('Please enter a valid email');
    }

    // Password Validation
    if (!password) {
      setPasswordError('Password is required');
    } else if (password.length < 8) {
      setPasswordError('Password must be at least 8 characters');
    } else if (!/[A-Z]/.test(password)) {
      setPasswordError('Password must include at least one uppercase letter');
    } else if (!/[a-z]/.test(password)) {
      setPasswordError('Password must include at least one lowercase letter');
    } else if (!/[0-9]/.test(password)) {
      setPasswordError('Password must include at least one number');
    } else if (!/[!@#$%^&*]/.test(password)) {
      setPasswordError('Password must include at least one special character');
    }

    // Confirm Password Validation
    if (confirmPassword !== password) {
      setConfirmPasswordError('Passwords do not match');
    }

    // If no errors, log the inputs (or process further)
    if (!nameError && !emailError && !passwordError && !confirmPasswordError) {
      console.log('Name:', name);
      console.log('Email:', email);
      console.log('Password:', password);
      setName('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
    }
  };

  return (
    <div className="login-container">
      <div className="login-content">
        <div className="login-form">
          <h2 className="form-title">Sign Up</h2>
          <form onSubmit={handleSubmit}>
            {/* Name */}
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="form-input"
                placeholder="Enter your name"
              />
              {nameError && <span className="error-text">{nameError}</span>}
            </div>

            {/* Email */}
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

            {/* Password */}
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

            {/* Confirm Password */}
            <div className="form-group">
              <label htmlFor="confirm-password">Confirm Password</label>
              <input
                type="password"
                id="confirm-password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="form-input"
                placeholder="Re-enter your password"
              />
              {confirmPasswordError && <span className="error-text">{confirmPasswordError}</span>}
            </div>

            <button type="submit" className="btn-submit">
              Sign Up
            </button>
          </form>

          <div className="alternative-login">
            <p>or sign up with</p>
            <div className="social-buttons">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-social facebook"
              >
                <FaFacebook size={20} /> Facebook
              </a>
              <a
                href="https://www.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-social google"
              >
                <FcGoogle size={20} /> Google
              </a>
              <a
                href="https://www.apple.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-social apple"
              >
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

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {registerUser} from './../redux/register/register.actions';
import { Link } from 'react-router-dom';
import '../style/login.css'

const Register = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });
    const dispatch  = useDispatch()

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.username) {
            alert('Username is required')
            return
        }

        if (!formData.email) {
            alert('email is required')
            return
        }

        if (!formData.password) {
            alert('password is required')
            return
        }
        dispatch(registerUser(formData));
        setFormData({ username: '',
        email: '',
        password: '',});
    };
    
    return (
        <div className='register'>
            <div>
            <h2>Sign Up</h2>
            <form className='loginForm' onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="username"
                    className='formInput'
                    value={formData.username}
                    onChange={handleInputChange}
                    placeholder='Enter UserName'
                />
                <input 
                    className='formInput'
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder='Enter Your Email ID'
                />
                <input
                    type="password"
                    name="password"
                    className='formInput'
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder='Enter Your Password'
                />

                <button type="submit" className='buttonStyle'>Register</button>
                <Link style={{marginTop:"8px"}} to="/login">Already Registered? Login Here</Link>
            </form>
        </div>
        </div>
    );
};

export default Register;

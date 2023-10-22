import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { login } from '../redux/auth/auth.actions';
import { useDispatch, useSelector } from 'react-redux';
import '../style/login.css'

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const dispatch=useDispatch()
  const { isAuth } = useSelector((store) => store.auth);
  const navigate=useNavigate()
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
 
    if (!formData.email) {
        alert('email is required')
        return
    }

    if (!formData.password) {
        alert('password is required')
        return
    } 
    
    dispatch(login(formData));
        setFormData({ 
        email: '',
        password: '',});
  };
   
  if (isAuth) {
    navigate("/")
  }

  return (
    <div className='signin'>
      <h2>SIGN IN</h2>
      <form className='loginForm' onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          className='formInput'
          placeholder='Enter Email ID'
          value={formData.email}
          onChange={handleInputChange}
        />
        <input
          type="password"
          name="password"
          className='formInput'
          value={formData.password}
          onChange={handleInputChange}
          placeholder='Enter Your Password'
        />

        <button type="submit" className='buttonStyle'>Login</button>
        <Link style={{marginTop:"5px"}} to="/register">New User? Register</Link>
      </form>
    </div>
  );
};

export default Login;

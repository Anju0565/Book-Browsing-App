import React, { useEffect } from "react";
import {  NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ActionLogout } from "../redux/auth/auth.actions";
import { getBooks, updateQuery } from "../redux/books/booksActions";
import "../style/navbar.css"

const Links = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'My Books',
    path: '/mybooks',
  },
  {
    name: 'Add Book',
    path: '/addBooks',
  }

];


const Navbar = () => {
  const dispatch = useDispatch()
    const { query } = useSelector(
        (state) => state.books
    );
    let LocalToken = JSON.parse(localStorage.getItem("token"));
    useEffect(() => {

      dispatch(getBooks({ query: query}))
  }, [query]);

  const handleQueryChange = (e) => {
      const newQuery = e.target.value;
      dispatch(updateQuery(newQuery));
  };
  const handleLogout=()=>{
    alert(`Logged Out`);
    return dispatch(ActionLogout());
  }
  
    return (
        <div className="navbar">
            <img src="https://s.gr-assets.com/assets/layout/goodreads_logo_324-a908b923dc3ed9b7a13f3da4d1ffb2df.png" alt="logo" width={'200px'}/>
          <div className="navLink">{Links.map(link=><NavLink className='nav' to={link.path}>{link.name}</NavLink>)}</div>
          <div>
              <input className="searchbar" type="search" placeholder="Search books" onChange={handleQueryChange}/>
          </div>
          <button className='logBtn' onClick={handleLogout}>Login/Logout</button>
        </div>
      );
};

export default Navbar;

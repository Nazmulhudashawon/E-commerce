import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

import './Header.css';


const Header = () => {
    const { user, logOut } = useAuth();
   
    return (
        <div className="header">
            
            <nav>
                <NavLink to="/shop">Home</NavLink>
                <NavLink to="/review">Order Review</NavLink>
                <NavLink to="/inventory">Manage Inventory</NavLink>
                <NavLink to="/dashboard">Dashboard</NavLink>
                {user.email && <span style={{ color: 'white' }}>Hello {user.displayName} </span>}
                {
                    user.email ?
                        <button onClick={logOut}>log out</button>
                        :
                        <NavLink to="/login">Login</NavLink>}
                        
            </nav>
        </div>
    );
};

export default Header;
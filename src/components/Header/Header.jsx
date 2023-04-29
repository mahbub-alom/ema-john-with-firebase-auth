import React, { useContext } from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProviders';


const Header = () => {

    const { user, logOut } = useContext(AuthContext)

    const handleSignOut = () => {
        logOut()
            .then(result => { })
            .catch(error => {
                console.log(error.message);
            })
    }

    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/login">Sign In</Link>
                <Link to="/signup">Sign Up</Link>
                {
                    user && <span className='ps-2'>{user.email} <Link className='text-white' onClick={handleSignOut}>Sign Out</Link> </span>
                }
            </div>
        </nav>
    );
};

export default Header;
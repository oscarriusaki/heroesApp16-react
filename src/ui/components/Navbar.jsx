import React, { useContext } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../auth/context/AuthContext';

export const Navbar = () => {

    const navigate = useNavigate();
    const { logout, user } = useContext(AuthContext);
    const onLogout = () => {
        logout();
        navigate('/login', {
            replace:true
        })
    }

  return (
    <>
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to='/'>Heroe App</Link>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <NavLink 
                            className={({isActive}) => `nav-link ${isActive ? 'active': ''}`} 
                            to='/'>Marvel</NavLink>
                        <NavLink 
                            className={({isActive}) => `nav-link ${isActive ? 'active': ''}`}
                            to='/dc'
                            >Dc</NavLink>
                        <NavLink 
                            className={({isActive}) => `nav-link ${isActive ? 'active': ''}`}
                            to='/search'
                            >Search</NavLink>
                        <NavLink 
                            className={({isActive}) => `nav-link ${isActive ? 'active': ''}`}
                            to='/registerHero'
                            >Register</NavLink>
                    </ul>
                </div>
                <div className="collapse navbar-collapse justify-content-end">
                    <span className='nav-item nav-link text-primary'>{user?.first_name}</span>
                    <button className='btn' onClick={onLogout}>Logout</button>
                </div>

            </div>
        </nav>
    </>
  )
}

import React from 'react'
import { Link, NavLink } from 'react-router-dom'
function Navbar() {
    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className='container'>
                <NavLink className="navbar-brand" to="/">Welcome</NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <NavLink className="nav-link" to="/">Home <span className="sr-only"></span></NavLink>
                        </li>

                    </ul>
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <NavLink className="nav-link" to="/Login">Login as Student<span className="sr-only"></span></NavLink>
                        </li>

                    </ul>
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <NavLink className="nav-link" to="/Signup">Register <span className="sr-only"></span></NavLink>
                        </li>

                    </ul>
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <NavLink className="nav-link" to="/admin_login">Login as Admin <span className="sr-only"></span></NavLink>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
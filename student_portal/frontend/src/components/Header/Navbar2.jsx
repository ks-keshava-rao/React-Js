import React,{useContext} from 'react'
import { NavLink } from 'react-router-dom'
import NavbarContext from '../context/NavContext';
const Navbar2 = (props) => {
    // const navdata = props.Navdisplay
    let id = 1;
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        {/* {console.log(props)}
        {console.log(navdata)} */}
        {console.log(useContext(NavbarContext))}
            <div className='container'>
                <NavLink className="navbar-brand" to="/">Welcome</NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    {
                        props.Navdisplay.map((tab) => {
                            return(
                            <ul className="navbar-nav mr-auto">
                                <li   key={id++} className="nav-item active">
                                    {/* {console.log(tab.path,tab.pageName)} */}
                                    <NavLink className="nav-link" to={tab.path}>{tab.pageName} <span className="sr-only"></span></NavLink>
                                </li>
                            </ul>
                        )})
                    }
                </div>
            </div>
        </nav>
    )
}

export default Navbar2
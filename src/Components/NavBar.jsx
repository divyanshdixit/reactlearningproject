import React from 'react'
import {Link, NavLink} from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
            {/* we'll not use <a> tag bcz it reload page so we use <Link> tag of react router dom it'll not reload page */}
            {/* <Link to='/' > Link Home </Link>  Client side routing (page will not reload) */}
            {/* <a href="/"> A href home </a>  */} {/* server side routing (page will reload)*/}
            {/* <Link to="/about"> About </Link>
            <Link to="/services"> Services </Link>
            <Link to="/contact"> Contact </Link> */}

        <br/>
            {/* we can also use <NavLink> tag so it looks more cool as we can add exta attributes in it */}

            <NavLink exact to='/' activeClassName="active"> Home </NavLink>
            <NavLink exact to='/about' activeClassName="active"> About </NavLink>
            <NavLink exact to='/about-us' activeClassName="active"> AboutUs </NavLink>
            <NavLink exact to='/services' activeClassName="active"> Services </NavLink>
            <NavLink exact to='/contact' activeClassName="active"> Contact </NavLink>
            <NavLink exact to='/users' activeClassName="active"> Users </NavLink>
            <NavLink exact to='/search' activeClassName="active"> Search </NavLink>
        </div>
    )
}

export default NavBar;
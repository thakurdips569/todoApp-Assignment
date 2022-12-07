import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const HeaderBeforeLogin = (props) => {

    const navigate = useNavigate()
    const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('currentUser')));

    const register = () => {
        navigate('/register');
    }

    const signOut = () => {
        sessionStorage.removeItem('currentUser');
        navigate('/login');

    }

    const navigateAsSet = () => {
        switch (props.status) {
            case 'login':
                navigate('/login');
                break;
            case 'register':
                navigate('/register');
                break;
            case 'signout':
                signOut();
                break;

        }
    }

    return (
        <>
            {/* Navbar */}
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                {/* Container wrapper */}
                <div className="container-fluid">
                    {/* Toggle button */}
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-mdb-toggle="collapse"
                        data-mdb-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <i className="fas fa-bars" />
                    </button>
                    {/* Collapsible wrapper */}
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        {/* Navbar brand */}
                        {/* <a className="navbar-brand mt-2 mt-lg-0" href="#">
                            <img
                                src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
                                height={15}
                                alt="MDB Logo"
                                loading="lazy"
                            />
                        </a> */}
                        {/* Left links */}
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Todo
                                </a>
                            </li>
                            {/* <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Team
                                </a>
                            </li> */}
                            {/* <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Projects
                                </a>
                            </li> */}
                        </ul>
                        {/* Left links */}
                    </div>
                    {/* Collapsible wrapper */}
                    {/* Right elements */}
                    <div className="d-flex align-items-center">
                        {/* Icon */}
                        {/* <a className="text-reset me-3" href="#">
                            <i className="fas fa-shopping-cart" />
                        </a> */}
                        {
                            <button type="button" onClick={navigateAsSet} className="btn btn-outline-link px-3 me-2" data-mdb-ripple-color="dark">{props.status}</button>
                        }
                        {/* {(currentUser === null)
                                ? <button type="button" onClick={register} className="btn btn-outline-link px-3 me-2" data-mdb-ripple-color="dark">Register</button>
                                : <button type="button" onClick={signOut} className="btn btn-outline-danger px-3 me-4" data-mdb-ripple-color="dark">Sign Out</button>} */}
                        {/* Notifications */}
                        {/* <div className="dropdown">
                            <a
                                className="text-reset me-3 dropdown-toggle hidden-arrow"
                                href="#"
                                id="navbarDropdownMenuLink"
                                role="button"
                                data-mdb-toggle="dropdown"
                                aria-expanded="false"
                            >
                                <i className="fas fa-bell" />
                                <span className="badge rounded-pill badge-notification bg-danger">
                                    1
                                </span>
                            </a>
                            <ul
                                className="dropdown-menu dropdown-menu-end"
                                aria-labelledby="navbarDropdownMenuLink"
                            >
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Some news
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Another news
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Something else here
                                    </a>
                                </li>
                            </ul>
                        </div> */}
                        {/* Avatar */}
                        {
                            (currentUser != null)
                                ? <div className="dropdown">
                                    <a
                                        className="dropdown-toggle d-flex align-items-center hidden-arrow"
                                        href="#"
                                        id="navbarDropdownMenuAvatar"
                                        role="button"
                                        data-mdb-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        <img
                                            src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                                            className="rounded-circle"
                                            height={25}
                                            alt="Black and White Portrait of a Man"
                                            loading="lazy"
                                        />
                                    </a>
                                    <ul
                                        className="dropdown-menu dropdown-menu-end"
                                        aria-labelledby="navbarDropdownMenuAvatar"
                                    >
                                        <li>
                                            <a className="dropdown-item" href="#">
                                                <b>Full Name</b> -&gt; {currentUser.fullname}
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#">
                                                <b>Username</b> -&gt; {currentUser.username}
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#">
                                                <b>Email</b> -&gt; {currentUser.email}
                                            </a>
                                        </li>


                                    </ul>
                                    </div>
                                :<div></div>    
                        }

                    </div>
                    {/* Right elements */}
                </div>
                {/* Container wrapper */}
            </nav>
            {/* Navbar */}
        </>

    )
}

export default HeaderBeforeLogin
import React, { useContext } from 'react'
import { Form, NavLink } from "react-router-dom";
import { UserLoginContext } from '../context/UserLoginProvider';

const Header = () => {

    const { username, setUserLoginChange } = useContext(UserLoginContext);

    const handleLogout = () => {

        // alert("clicked logout")
        setUserLoginChange("", "", "")

        // reset the token by setUserLoginChange already enough to go to login page
        // window.location.href is just to change the browser's url
        window.location.href = "/";
    }

    return (
    <>
        <svg xmlns="http://www.w3.org/2000/svg" className="d-none">
        <symbol id="door-closed" viewBox="0 0 16 16">
            <path d="M3 2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v13h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3V2zm1 13h8V2H4v13z"/>
            <path d="M9 9a1 1 0 1 0 2 0 1 1 0 0 0-2 0z"/>
        </symbol>
        <symbol id="file-earmark" viewBox="0 0 16 16">
            <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z"/>
        </symbol>
        <symbol id="file-earmark-text" viewBox="0 0 16 16">
            <path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z"/>
            <path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5L9.5 0zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z"/>
        </symbol>
        <symbol id="gear-wide-connected" viewBox="0 0 16 16">
            <path d="M7.068.727c.243-.97 1.62-.97 1.864 0l.071.286a.96.96 0 0 0 1.622.434l.205-.211c.695-.719 1.888-.03 1.613.931l-.08.284a.96.96 0 0 0 1.187 1.187l.283-.081c.96-.275 1.65.918.931 1.613l-.211.205a.96.96 0 0 0 .434 1.622l.286.071c.97.243.97 1.62 0 1.864l-.286.071a.96.96 0 0 0-.434 1.622l.211.205c.719.695.03 1.888-.931 1.613l-.284-.08a.96.96 0 0 0-1.187 1.187l.081.283c.275.96-.918 1.65-1.613.931l-.205-.211a.96.96 0 0 0-1.622.434l-.071.286c-.243.97-1.62.97-1.864 0l-.071-.286a.96.96 0 0 0-1.622-.434l-.205.211c-.695.719-1.888.03-1.613-.931l.08-.284a.96.96 0 0 0-1.186-1.187l-.284.081c-.96.275-1.65-.918-.931-1.613l.211-.205a.96.96 0 0 0-.434-1.622l-.286-.071c-.97-.243-.97-1.62 0-1.864l.286-.071a.96.96 0 0 0 .434-1.622l-.211-.205c-.719-.695-.03-1.888.931-1.613l.284.08a.96.96 0 0 0 1.187-1.186l-.081-.284c-.275-.96.918-1.65 1.613-.931l.205.211a.96.96 0 0 0 1.622-.434l.071-.286zM12.973 8.5H8.25l-2.834 3.779A4.998 4.998 0 0 0 12.973 8.5zm0-1a4.998 4.998 0 0 0-7.557-3.779l2.834 3.78h4.723zM5.048 3.967c-.03.021-.058.043-.087.065l.087-.065zm-.431.355A4.984 4.984 0 0 0 3.002 8c0 1.455.622 2.765 1.615 3.678L7.375 8 4.617 4.322zm.344 7.646.087.065-.087-.065z"/>
        </symbol>
        <symbol id="house" viewBox="0 0 16 16">
            <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z"/>
        </symbol>
        <symbol id="list" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
        </symbol>
        <symbol id="check-circle" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
            <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05"/>
        </symbol>
        </svg>

        <header className="navbar sticky-top bg-dark flex-md-nowrap p-0 shadow" data-bs-theme="dark">
            <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6 text-white" href="#">{`Tasks App - Welcome ${username}!`}</a>
            <ul className="navbar-nav flex-row d-md-none">
                <li className="nav-item text-nowrap">
                    <button className="nav-link px-3 text-white" type="button" data-bs-toggle="offcanvas" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
                        <svg className="bi"><use xlinkHref="#list" /></svg>
                    </button>
                </li>
            </ul>
        </header>

        {/* <div className="container-fluid">
            <div className="row"> */}

                <div className="sidebar border border-right col-md-3 col-lg-2 p-0 bg-body-tertiary  ">
                    <div className="offcanvas-md offcanvas-end bg-body-tertiary" tabIndex="-1" id="sidebarMenu" aria-labelledby="sidebarMenuLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="sidebarMenuLabel">{`Tasks App - Welcome ${username}!`}</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" data-bs-target="#sidebarMenu" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body d-md-flex flex-column p-0 pt-lg-3 overflow-y-auto">
                            <ul className="nav flex-column">
                                <li className="nav-item">
                                <NavLink
                                    className="nav-link d-flex align-items-center gap-2"
                                    activeClassName="active"
                                    aria-current="page" to="/">
                                    <svg className="bi"><use xlinkHref="#house"/></svg>
                                    Dashboard
                                </NavLink>
                                </li>
                                <li className="nav-item">
                                <NavLink
                                    className="nav-link d-flex align-items-center gap-2"
                                    activeClassName="active"
                                    to="/tasks">
                                    <svg className="bi"><use xlinkHref="#file-earmark"/></svg>
                                    Tasks
                                </NavLink>
                                </li>
                                <li className="nav-item">
                                <NavLink
                                    className="nav-link d-flex align-items-center gap-2"
                                    activeClassName="active"
                                    to="/pending-tasks">
                                    <svg className="bi"><use xlinkHref="#file-earmark-text"/></svg>
                                    Pending Tasks
                                </NavLink>
                                </li>
                                <li className="nav-item">
                                <NavLink
                                    className="nav-link d-flex align-items-center gap-2"
                                    activeClassName="active"
                                    to="/completed-tasks">
                                    <svg className="bi"><use xlinkHref="#check-circle"/></svg>
                                    Completed Tasks
                                </NavLink>
                                </li>
                            </ul>

                            <hr className="my-3"/>

                            <ul className="nav flex-column mb-auto">
                                <li className="nav-item">
                                <a
                                    className="nav-link d-flex align-items-center gap-2"
                                    onClick={handleLogout}
                                    style={{ cursor: 'pointer' }}
                                >
                                    <svg className="bi"><use xlinkHref="#door-closed"/></svg>
                                    Logout
                                </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            {/* </div>
        </div> */}
    </>
    )
}

export default Header

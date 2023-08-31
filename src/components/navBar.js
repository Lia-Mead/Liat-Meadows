import React from "react";

import { Nav, NavLink, Bars, NavMenu } from "./navbarElements";

import logo from "../assets/images/logo.svg";

const Navbar = () => {
    return (
        <div className="nav-con">
            <a href="/" target="_blank" rel="noopener noreferrer">
                <img src={logo} className="App-logo" alt="logo" />
            </a>

            <Nav className="nav">
                {/* <Bars onClick={console.log("burger clicked")} /> */}

                <NavMenu>
                    {/* <NavLink to="/" activeStyle>
                        home
                    </NavLink> */}
                    <NavLink to="/development" activeStyle>
                        development
                    </NavLink>
                    <NavLink to="/design" activeStyle>
                        design
                    </NavLink>
                    <NavLink to="/about" activeStyle>
                        about
                    </NavLink>
                </NavMenu>
            </Nav>
        </div>
    );
};

export default Navbar;

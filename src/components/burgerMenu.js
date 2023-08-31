import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

export default function BurgerMenu({ toggleBurgerMenu }) {
    return (
        <nav className="burger">
            <NavLink
                className="nav-icon"
                activeClassName="active-b"
                onClick={toggleBurgerMenu}
                exact
                to="/development"
            >
                development
            </NavLink>

            <NavLink
                className="nav-icon"
                activeClassName="active-b"
                onClick={toggleBurgerMenu}
                to="/desin"
            >
                design
            </NavLink>

            <NavLink
                className="nav-icon"
                activeClassName="active-b"
                onClick={toggleBurgerMenu}
                to="/about"
            >
                about
            </NavLink>
        </nav>
    );
}

BurgerMenu.propTypes = {
    toggleBurgerMenu: PropTypes.func.isRequired,
};
import { useState, useEffect } from "react";
import NavBar from "./navBar";
import BurgerMenu from "../components/burgerMenu";

import close from "../assets/images/close.svg";
import burger from "../assets/images/burger.svg";
// import logo from "../assets/images/logo.svg";
import Logo from "../components/logo";

import { Link } from "react-router-dom";

export default function Header() {
    const [mQuery, setMQuery] = useState();
    const [screenSize, setScreenSize] = useState();
    const updateSize = () => {
        // console.log("size updated");
        let mql = window.matchMedia("(max-width: 1074px)");
        setMQuery(mql.matches);
        // console.log(mql.matches); // true or false
    };

    useEffect(() => {
        // componentDidMount - registers eventlistener, event fired by the browser
        window.addEventListener("resize", updateSize);
        setScreenSize(window.innerWidth);
    }, []);

    const [burgerOpen, setBurgerOpen] = useState(false);

    const toggleBurgerMenu = () => {
        console.log("toggle open");
        setBurgerOpen(!burgerOpen);
    };

    let src;
    burgerOpen ? (src = close) : (src = burger);

    return (
        <>
            <header className="nav-con">
                <Link className="logo-link" to="/">
                    <Logo onClick={toggleBurgerMenu} className="App-logo" />
                </Link>
                {/* <a href="/" target="_blank" rel="noopener noreferrer">
                <img src={logo} className="App-logo" alt="logo" />
            </a> */}
                <div className="menu-right">
                    {screenSize < 900 || mQuery ? (
                        <img
                            onClick={toggleBurgerMenu}
                            className="burger"
                            src={src}
                        />
                    ) : (
                        <NavBar />
                    )}
                </div>
            </header>

            {burgerOpen ? (
                <BurgerMenu
                    className="burger"
                    toggleBurgerMenu={toggleBurgerMenu}
                />
            ) : null}
        </>
    );
}

// import { NavLink } from "react-router-dom";

// import { Nav, NavLink, Bars, NavMenu } from "./navbarElements";
import { Nav, NavLink, Bars, NavMenu } from "../components/navElements";

const Navbar = () => {
    return (
        <div className="nav-con">
            <Nav className="nav">
                {/* <Bars onClick={console.log("burger clicked")} /> */}

                <NavMenu>
                    {/* <NavLink to="/" activeStyle>
                        home
                    </NavLink> */}
                    <NavLink to="/development">development</NavLink>
                    <NavLink to="/design">design</NavLink>
                    <NavLink to="/about">about</NavLink>
                </NavMenu>
            </Nav>
        </div>
    );
};

export default Navbar;

import { Nav, NavLink, NavMenu } from "../components/navElements";

const Navbar = () => {
    return (
        <div className="nav-con">
            <Nav className="nav">
                <NavMenu>
                    <NavLink to="/development">development</NavLink>
                    <NavLink to="/design">design</NavLink>
                    <NavLink to="/about">about</NavLink>
                </NavMenu>
            </Nav>
        </div>
    );
};

export default Navbar;

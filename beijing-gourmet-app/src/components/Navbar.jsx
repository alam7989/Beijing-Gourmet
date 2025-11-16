import "./Navbar.css"
import Logo from "./Logo"
import Nav from "./Nav"
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <header class="navbar">
            <NavLink to="/" id="logo_link">
                <Logo/>
            </NavLink>
            <Nav/>
        </header>
    )
};

export default Navbar;
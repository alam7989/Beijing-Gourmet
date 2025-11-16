import {NavLink} from "react-router-dom";

const linkClasses = ({isActive}) => {
    return (
        `text-[#f5f5f5] 
        hover:text-[#ffd900]`
    )
    
}

const Nav = () => {
    return (
        <nav className="w-1/3 p-3 flex justify-between items-center">
            <NavLink to="/" className={linkClasses}>Home</NavLink>
            <NavLink className={linkClasses} to="/menu">Menu</NavLink>
            <NavLink to="/our_story" className={linkClasses}>Our Story</NavLink>
        </nav>
    )
};

export default Nav;
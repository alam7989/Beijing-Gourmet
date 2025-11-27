import {NavLink} from "react-router-dom";

const linkClasses = ({isActive}) => {
    return (
        `text-[#f5f5f5] 
        hover:text-[#ffd900]`
    ) 
}

const Nav = ({ hamburgerOpen }) => {
    return (
        <>
            {/* landscape nav options */}
            <nav className="
                hidden md:flex
                items-center
                gap-6
                text-lg
            ">
                <NavLink to="/" className={linkClasses}>Home</NavLink>
                <NavLink to="/menu" className={linkClasses}>Menu</NavLink>
                <NavLink to="/about" className={linkClasses}>About</NavLink>
            </nav>

            {/* mobile/portriat nav dropdown */}
            { hamburgerOpen && 
                <nav className={`
                    md:hidden 
                    flex flex-col items-end
                    bg-[#7a1515]
                    absolute left-0 w-full
                    px-6 py-4
                    transition-all duration-300
                    text-lg
                    z-[50]
                    top-full
                `}>
                    <NavLink to="/" className={linkClasses}>Home</NavLink>
                    <NavLink to="/menu" className={linkClasses}>Menu</NavLink>
                    <NavLink to="/our_story" className={linkClasses}>Our Story</NavLink>
                </nav> 
            }
        </>
    );
};


export default Nav;
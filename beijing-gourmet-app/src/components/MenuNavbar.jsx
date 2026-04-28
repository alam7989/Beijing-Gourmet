const MenuNavbar = ({ categories }) => {
    return (
        <nav className="
            bg-[#7a1515] text-white 
            z-[40] /* below Navbar*/
            fixed top-0 left-0
            h-screen /* Use screen height for full coverage (for scroll capabilities)*/
            w-[23vw]
            pt-25 /* Offset content so it starts below Navbar */
            pb-10
            px-4
            overflow-y-auto
            hidden md:block
        ">
            <ul className="space-y-4">
                {categories.map((category, i) => (
                    <li key={i}>
                        <button
                            className="text-left w-full hover:text-yellow-300"
                            onClick={() => {
                                const element = document.getElementById(`${category}-card`);
                                const topPosition = element.getBoundingClientRect().top;
                                window.scrollTo({ top: element.offsetTop - 90, behavior: "smooth" });
                            }}
                        >
                            {category}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default MenuNavbar;

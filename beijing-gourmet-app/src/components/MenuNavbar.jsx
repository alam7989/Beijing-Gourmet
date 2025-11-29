const MenuNavbar = ({ categories }) => {
    return (
        <nav className="
            bg-[#7a1515] text-white 
            z-[10]
            p-4
            fixed left-0  /* height of your Navbar */
            h-full
            w-[23vw]
            overflow-y-auto /*allows scrolling*/
            pb-10
            hidden
            md:block
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

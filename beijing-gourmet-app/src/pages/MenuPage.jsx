import Navbar from "../components/Navbar";
import MenuCard from "../components/MenuCard";
import MenuNavbar from "../components/MenuNavbar";
import menuData from "../data/MenuData";

const MenuPage = () => {
    return (
        <>
            <Navbar />

            <div className="flex">
                {/* Left fixed sidenav */}
                <MenuNavbar categories={Object.keys(menuData())} />

                {/* Main content */}
                <div
                    className="
                        flex flex-col                    /* under Navbar */
                        w-full
                        mt-5
                        ml-[2vw] md:ml-[25vw]
                        mr-[2vw] md:mr-[2vw]
                        gap-2
                    "
                >
                    {Object.entries(menuData()).map(([category, value]) => (
                        <MenuCard
                            key={`${category}-card`}
                            category={category}
                            description={value.description}
                            items={value.items}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

export default MenuPage;

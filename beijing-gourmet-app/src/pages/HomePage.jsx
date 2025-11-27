import Navbar from "../components/Navbar"
import ImageCarousel from "../components/ImageCarousel";
import { NavLink } from "react-router-dom";

const HomePage = () => {
    return (
      <>
        <Navbar />
  
        <div className="w-screen">
            <section className="
                w-screen h-[70vh] md:h-screen 
                flex flex-col items-center 
                px-6 md:px-12 py-15 md:justify-center
            ">
                <div className="
                    flex
                    portrait:flex-col md:flex-row
                    justify-center items-center 
                    gap-7 max-w-[1200px]
                ">
                    <img
                        src="src/assets/images/broccoli_beef_transparent.webp"
                        className="
                        w-[60vw] max-w-[300px] 
                        md:w-[35vw] md:max-w-[450px]
                    "/>
                    <h1 className="
                        text-3xl md:text-5xl font-bold italic 
                        text-center md:text-left 
                        leading-tight
                    ">
                        Chinese cuisine,<br />fresh and delicious.
                    </h1>
                </div>
            </section>
  
            <section className="
                relative w-screen h-screen 
                bg-cover bg-center bg-[url(src/assets/images/fire.jpg)]
            ">
                <h1 className="
                    absolute 
                    top-8 md:top-12 
                    left-6 md:left-16 
                    text-3xl md:text-5xl 
                    font-bold italic 
                    text-[#9c0606]
                ">
                    Bold flavor.<br/>Wok-tossed.
                </h1>
                <div className="
                    absolute left-1/2 -translate-x-1/2 
                    top-[18%] md:top-[20%]
                    w-[85vw] md:w-[60vw] max-w-[900px]
                    bg-[#f5f5f5] 
                    p-4 md:p-8 
                    rounded-3xl shadow-xl
                    flex flex-col items-center
                ">
                    <div className="w-full h-[35vh] md:h-[45vh]">
                    <ImageCarousel />
                    </div>

                    <button className="
                        mt-4 
                        text-white 
                        bg-[#7a1515] hover:bg-[#9c0606] 
                        rounded-full px-5 py-2
                    "
                    >
                        <NavLink to="/menu" id="logo_link" className="flex items-center">
                            Explore Our Menu
                        </NavLink>
                    </button>
                </div>
            </section>
        </div>
      </>
    );
  };
  
  export default HomePage;
  
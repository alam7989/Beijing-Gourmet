import Navbar from "../components/Navbar"

const aboutPStyle = () => {
    return `text-xl md:text-2xl italic`
}

const h4Style = () => {
    return `font-bold
    bg-[#9c0606]
    p-[5px]`
}

const AboutPage = () => {
    return (
        <>
            <Navbar />
            <section className="
                w-screen h-[70vh] max-h-100 md:h-[60vh]
                flex flex-col items-center 
                px-6 md:px-12 py-10 md:py-15
                gap-5
                text-center
                text-white
                bg-black
            ">
                <h1 className="
                    text-2xl md:text-5xl font-medium italic 
                    text-center md:text-left
                ">
                    Our Story:
                </h1>
                <p className={aboutPStyle()}>
                    Since 2002, Beijing Gourmet has been serving fresh and delicious Chinese food.
                    Our talented, experienced staff works hard to create each dish from scratch.
                    Every ingredient is hand-chopped and cooked to perfection.
                    Enjoy our flavorful house-recipes with friends and family!
                </p>
            </section>

            <section className="
                w-screen
                flex flex-col
                items-center
                gap:[5vh] md:gap-[5vh]
            ">
                <h1 className="
                    mt-10
                    text-3xl md:text-5xl 
                    font-bold italic 
                    text-[#9c0606]
                ">
                    Restaurant Info:
                </h1>
                <div className=" 
                    w-screen
                    flex flex-col md:flex-row
                    md:justify-center
                    items-center
                    top-full
                    m-0
                    p-10
                    text-xl
                    italic 
                    text-black
                    gap-7
                ">
                    <div className="
                        bg-[#ffd900]
                        w-[85vw] md:w-[40vw]
                        p-4 md:p-8
                        rounded-3xl shadow-xl
                    ">
                        <strong>Notice:</strong> Due to shortage of staff, we currently only offer pick-up. Sorry for the inconvenience.
                    </div>
                    <div className="
                        flex flex-col
                        gap-2
                        w-[85vw] md:w-[50vw]
                    ">
                        <h4 className={h4Style()}>
                            Business Hours:
                        </h4>
                        <p>
                            Tuesday: Closed<br></br>
                            Mon-Fri: 11 AM - 9 PM <br></br>
                            Sat-Sun: 12 PM - 9 PM
                        </p>
                        <h4 className={h4Style()}>
                            Address:
                        </h4>
                        <p>
                            6432 Tupelo Drive, No. C6, Citrus Heights, CA
                        </p>
                        <h4 className={h4Style()}>
                            Telephone:
                        </h4>
                        <p>
                            (916)-722-1892
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutPage;
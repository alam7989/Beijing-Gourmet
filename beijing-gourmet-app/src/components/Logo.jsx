const Logo = () => {
    return (
        <div className="z-[100] bg-[#7a1515] flex items-center p-2">
            <img 
                className="w-15 h-15 mx-1" 
                src="src/assets/images/logo.png" 
                alt="logo"
            />
            <p className="text-2xl mx-1 text-[#f5f5f5]">Beijing Gourmet</p>
        </div>
    );
};

export default Logo;
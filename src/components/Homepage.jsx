import React from "react";

const Homepage = () => {
    const scrollToSection = (id) => {
        document.getElementById(id).scrollIntoView({ behavior: "smooth" });
        setNav(false);
        document.body.style.overflow = "scroll";
      };
    return (
        <div className='w-full h-screen'>
            <img className="top-0 left-0 w-full h-screen object-cover" 
            src="https://s3-eu-west-1.amazonaws.com/intercare-web-public/wysiwyg-uploads%2F1580196666465-doctor.jpg"></img>
            <div className="bg-blue-950/40 absolute top-0 left-0 w-full h-screen"/>
            <div className="absolute top-0 w-full h-full flex flex-col justify-center text-white">
                <div className="md-left-[10%] max-w-[1100px] m-auto absolute p-4">
                    <p className="font-bold font-sans text-l">Welcome to Hospital NCT</p>
                    <h1 className="font-bold text-5xl md:text-7xl drop-shadow-2xl">Your Healthcare</h1> 
                    <h1 className="font-bold text-5xl text-blue-300 md:text-7xl drop-shadow-2xl">Destination</h1>
                    <p className="max-w-[600px] drop-shadow-2xl py-2 text-xl">Here we take care of your health only if you are up to date with your insurance payments and even if you are we don't care.</p>
                    <button onClick={() => scrollToSection("schedule")} className="text-white font-bold text-xl p-4 bg-blue-300" >Schedule an appointment</button>
                </div>
            </div>
        </div>
    );
}
export default Homepage;
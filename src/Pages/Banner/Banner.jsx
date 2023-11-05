import Navbar from "../Navbar/Navbar";
// import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

const Banner = () => {



return (
  <div>
    <div className="w-full h-screen mb-8 md:mb-10 lg:mb-20 bg-no-repeat bg-cover" style={{ backgroundImage: 'url(https://i.ibb.co/qMSTvyR/Banner.jpg)', objectFit: "cover" }}>
      <Navbar></Navbar>
      <div className=""></div>
      <div className="hero-content text-center text-neutral-content mx-auto items-center h-[70vh]">
        <div className="max-w-md mx-auto">        
          <h1 className="text-2xl" >
            <span className="text-white font-bold">
              {/* Style will be inherited from the parent element */}
              <Typewriter
                words={[' Home exchange, also known as house swapping, is a form of lodging in which two parties agree to offer each.!']}
                loop={5}
                cursor
                cursorStyle='|'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h1>
        </div>
      </div>
    </div>

  </div>
);
};

export default Banner;
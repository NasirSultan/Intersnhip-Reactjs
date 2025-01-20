import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // AOS style
import Header from './Header';

const News = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: "ease-in-out", // Animation easing
      once: true, // Whether animation should happen only once
    });
  }, []);
  return (
    <>
      <div
        className="h-screen relative"
        style={{
          backgroundImage:
            'url(https://media.gadventures.com/media-server/cache/48/50/4850d7b3b1aacc51b6a0182de9ea2c35.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center ',
          height: '600px',
        }}
      >


        <Header />
        <div className=" top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center" data-aos="fade-up" style={{ marginTop: "150px" }}>
          <h1
            className="text-white text-5xl font-bold mb-4 hover:text-yellow-400 hover:scale-110 transition-all duration-300"
            style={{ fontSize: "80px", fontWeight: "bold", fontWeight: "900" }}
          >
        Blog
          </h1>
          <p
            className="text-white text-xl font-bold hover:text-gray-300 transition-all duration-300"
          >
            A free template by Colorlib. Download and share!
          </p>
        </div>
      </div>
 


    </>
  );
};

export default News;

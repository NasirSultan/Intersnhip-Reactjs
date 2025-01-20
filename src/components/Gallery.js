import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // AOS style
import Header from './Header';

const Gallery = () => {
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
            'url(https://static.vecteezy.com/system/resources/previews/037/248/582/non_2x/ai-generated-travelling-to-thailand-advertisment-background-with-copy-space-free-photo.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '600px',
        }}
      >
        <Header />
        <div
          className="text-center position-absolute top-50 start-50 translate-middle"
          data-aos="fade-up"
          style={{ marginTop: "150px" }}
        >
          <h1
            className="text-white fw-bold mb-4 hover:text-yellow-400 transition-all"
            style={{
              fontSize: "clamp(40px, 5vw, 80px)", // Responsive font size
              fontWeight: "900",
            }}
          >
            Gallery
          </h1>
          <p
            className="text-white fw-bold hover:text-gray-300 transition-all"
            style={{
              fontSize: "clamp(16px, 2.5vw, 24px)", // Responsive font size
            }}
          >
            A free template by Colorlib. Download and share!
          </p>
        </div>
      </div>

      <div className="container mt-5">
        {/* First Row with Images */}
        <div className="row g-3">
          {[
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqyeKauGFafKakd9efqtUGTQFkfcHcQpvs5w&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyLZIKIWv0PIkat5P__qyDDzJShqZ8JKiBY7HEoeq-vIOa8Tg6HgWGDjYPB5jDZMz9zoI&usqp=CAU",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDPTVacYhogPXGepUU2w7t5fGh2RsiBFpKvOciKM4-bJaVO1xdcJQqBcuJKOXIswsYDRA&usqp=CAU",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7IPlcurCx2xzL5_xx08ifSnxey3bYKbtToQ&s",
          ].map((src, index) => (
            <div key={index} className="col-6 col-md-3 p-2">
              <img
                src={src}
                alt={`Image ${index + 1}`}
                className="img-fluid rounded shadow-sm"
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                }}
              />
            </div>
          ))}
        </div>

        {/* Second Row with Larger Images */}
        <div className="row g-3 mt-4">
          {[
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-BVOqRjt-p8LX1z9fsFpq6ozR6QTCfF2v6A&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwlF4uVXd2FPA4tNJfEsbjKrGqFwSsymKFbQ&s",
          ].map((src, index) => (
            <div key={index} className="col-12 col-md-6 p-2">
              <img
                src={src}
                alt={`Image ${index + 5}`}
                className="img-fluid rounded shadow-sm"
                style={{
                  width: "100%",
                  height: "400px",
                  objectFit: "cover",
                }}
              />
            </div>
          ))}
        </div>

        {/* Third Row with Images */}
        <div className="row g-3 mt-4">
          {[
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqyeKauGFafKakd9efqtUGTQFkfcHcQpvs5w&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7IPlcurCx2xzL5_xx08ifSnxey3bYKbtToQ&s",
            "https://static.toiimg.com/photo/67382132.cms",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwlF4uVXd2FPA4tNJfEsbjKrGqFwSsymKFbQ&s",
          ].map((src, index) => (
            <div key={index} className="col-6 col-md-3 p-2">
              <img
                src={src}
                alt={`Image ${index + 7}`}
                className="img-fluid rounded shadow-sm"
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Gallery;

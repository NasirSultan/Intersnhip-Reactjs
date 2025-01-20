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
            Gallery
          </h1>
          <p
            className="text-white text-xl font-bold hover:text-gray-300 transition-all duration-300"
          >
            A free template by Colorlib. Download and share!
          </p>
        </div>
      </div>
      <div className="container text-center mt-5">
  {/* First Row with Images */}
  <div className="row row-cols-4 mt-5" >
    <div className="col p-2">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqyeKauGFafKakd9efqtUGTQFkfcHcQpvs5w&s"
        alt="Image 1"
        className="img-fluid"
        style={{
          width: '100%',
          height: '200px',
          objectFit: 'cover',
        
        }}
      />
    </div>
    <div className="col p-2">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyLZIKIWv0PIkat5P__qyDDzJShqZ8JKiBY7HEoeq-vIOa8Tg6HgWGDjYPB5jDZMz9zoI&usqp=CAU"
        alt="Image 2"
        className="img-fluid"
        style={{
          width: '100%',
          height: '200px',
          objectFit: 'cover',
        
        }}
      />
    </div>
    <div className="col p-2">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDPTVacYhogPXGepUU2w7t5fGh2RsiBFpKvOciKM4-bJaVO1xdcJQqBcuJKOXIswsYDRA&usqp=CAU"
        alt="Image 3"
        className="img-fluid"
        style={{
          width: '100%',
          height: '200px',
          objectFit: 'cover',
     
        }}
      />
    </div>
    <div className="col p-2">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7IPlcurCx2xzL5_xx08ifSnxey3bYKbtToQ&s"
        alt="Image 4"
        className="img-fluid"
        style={{
          width: '100%',
          height: '200px',
          objectFit: 'cover',
        
        }}
      />
    </div>
  </div>

  {/* Second Row with Larger Images */}
  <div className="row">
    <div className="col-6 p-2">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-BVOqRjt-p8LX1z9fsFpq6ozR6QTCfF2v6A&s"
        alt="Image 5"
        className="img-fluid"
        style={{
          width: '100%',
          height: '400px',
          objectFit: 'cover',
          borderRadius: '5px',
        }}
      />
    </div>
    <div className="col-6 p-2">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwlF4uVXd2FPA4tNJfEsbjKrGqFwSsymKFbQ&s"
        alt="Image 6"
        className="img-fluid"
        style={{
          width: '100%',
          height: '400px',
          objectFit: 'cover',
          borderRadius: '5px',
        }}
      />
    </div>
  </div>

  {/* Third Row with Images */}
  <div className="row row-cols-4 pb-4">
    <div className="col p-2">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqyeKauGFafKakd9efqtUGTQFkfcHcQpvs5w&s"
        alt="Image 7"
        className="img-fluid"
        style={{
          width: '100%',
          height: '200px',
          objectFit: 'cover',
         
        }}
      />
    </div>
    <div className="col p-2">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7IPlcurCx2xzL5_xx08ifSnxey3bYKbtToQ&s"
        alt="Image 8"
        className="img-fluid"
        style={{
          width: '100%',
          height: '200px',
          objectFit: 'cover',
      
        }}
      />
    </div>
    <div className="col p-2">
      <img
        src="https://static.toiimg.com/photo/67382132.cms"
        alt="Image 9"
        className="img-fluid"
        style={{
          width: '100%',
          height: '200px',
          objectFit: 'cover',
       
        }}
      />
    </div>
    <div className="col p-2">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwlF4uVXd2FPA4tNJfEsbjKrGqFwSsymKFbQ&s"
        alt="Image 10"
        className="img-fluid"
        style={{
          width: '100%',
          height: '200px',
          objectFit: 'cover',
       
        }}
      />
    </div>
  </div>
</div>


    </>
  );
};

export default Gallery;

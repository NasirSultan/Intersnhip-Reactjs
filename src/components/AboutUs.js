import React, { useEffect } from "react"; 
import AOS from "aos";
import "aos/dist/aos.css"; // AOS style
import Header from './Header';

const teamMembers = [
  {
    role: "CEO, Co-Founder",
    name: "Vince Richardson",
    image: "https://static.vecteezy.com/system/resources/thumbnails/036/751/167/small/ai-generated-portrait-of-a-handsome-ceo-smiling-photo.jpg",
  },
  {
    role: "CTO, Co-Founder",
    name: "Jean Love",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_hRYefmayoorLYKp83FyL_lEL6AoTC8jKlR1BT73p9aUzgemLWjZTo5VsTpIzMKqmgAA&usqp=CAU",
  },
  {
    role: "Marketer, Co-Founder",
    name: "Jeff Stark",
    image: "https://access.amartha.com/uploads/CEO_adalah_0794842526.jpg",
  },
];

const AboutUs = () => {
  // AOS initialization
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: "ease-in-out", // Animation easing
      once: true, // Whether animation should happen only once
    });
  }, []); // Empty dependency array means this runs only once when the component mounts

  return (
    <>
      <div
        className="h-screen relative"
        style={{
          backgroundImage:
            'url(https://media.istockphoto.com/id/535965483/photo/man-looking-at-beautiful-sunset-sky.jpg?s=612x612&w=0&k=20&c=zcSoXwJPnCw_9---MG-BkHvbw1dZ2SLZ88hR_nIa010=)',
          backgroundSize: 'cover',
          backgroundPosition: 'center ',
          height: '100vh',
        }}
      >


        <Header />
        <div className=" top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center" data-aos="fade-up" style={{ marginTop: "150px" }}>
          <h1
            className="text-white text-5xl font-bold mb-4 hover:text-yellow-400 hover:scale-110 transition-all duration-300"
            style={{ fontSize: "80px", fontWeight: "bold" }}
          >
            About Us
          </h1>
          <p
            className="text-white text-xl font-bold hover:text-gray-300 transition-all duration-300"
          >
            A free template by Colorlib. Download and share!
          </p>
        </div>
      </div>

      <div className="container m-5 p-5">
        <div className="row featurette">
          <div className="col-md-6 order-md-2 d-flex flex-column justify-content-center align-items-center" data-aos="fade-left">
            <h2 className="featurette-heading fw-normal lh-1 text-center">
              Welcome to Travel & Tours
            </h2>
            <p className="lead text-center">
              Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
            </p>
            <p className="pt-4">
              A small river named Duden flows by their place and supplies it with the necessary regelialia.
            </p>
          </div>

          <div className="col-md-6 order-md-1"data-aos="fade-right">
            <img
              className="featurette-image img-fluid mx-auto"
              src="https://media.cntraveler.com/photos/659d7b48862a33a7be30ce41/2:3/w_2416,h_3624,c_limit/Pack%20for%20a%20Year%20of%20Travel-2024_GettyImages-1430180814.jpg"
              alt="Beautiful Travel Destination"
              width="500"
            />
          </div>
        </div>
      </div>

      <div className="container py-5">
        <h1 className="text-black text-4xl font-bold p-4 text-center">Hotel Gallery</h1>
        <p className="col-lg-8 mx-auto lead text-black text-center">
          Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
        </p>

        {/* Carousel */}
        <div id="carouselExample" className="carousel slide py-5 m-5" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://media.istockphoto.com/id/1369171053/photo/group-of-sporty-people-walks-in-mountains-at-sunset-with-backpacks.jpg?s=612x612&w=0&k=20&c=ajQuWt2YRWd0FPaCpdKz2Tt3WX2NI1ddeZjf8HIxlwU="
                className="d-block w-100 img-fluid"
                alt="Sporty people in mountains"
                style={{ width: '600px', height: '600px', objectFit: 'cover', borderRadius: '20px' }}
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://img.freepik.com/premium-photo/exploring-market-photo-realistic-street-food-tour-group-concept-high-resolution-image_980716-196049.jpg"
                className="d-block w-100 img-fluid"
                alt="Street food market"
                style={{ width: '600px', height: '600px', objectFit: 'cover', borderRadius: '20px' }}
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://static.toiimg.com/photo/67382132.cms"
                className="d-block w-100 img-fluid"
                alt="Beautiful vacation destination"
                style={{ width: '600px', height: '600px', objectFit: 'cover', borderRadius: '20px' }}
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        {/* Team Section */}
        <div className="row justify-content-center text-center m-5 p-5">
          <div className="col-md-8">
            <h2 className="heading text-black">Team</h2>
            <p className="lead text-black">
              Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
            </p>
          </div>
        </div>

        {/* Team Members */}
        <div className="row">
          {teamMembers.map((member, index) => (
            <div className="col-md-6 col-lg-4 mb-4" key={index} style={{ backgroundColor: 'none' }}>
              <div className="card shadow-sm" style={{ border: 'none' }}>
                <img
                  src={member.image}
                  className="card-img-top"
                  alt={member.name}  // Removed redundant 'image' in alt
                  width="300"
                  height="225"
                />
                <div className="media-body mt-3 mb-3 pl-4 ">
                  <span className="meta-post">{member.role}</span>
                  <h2 className="mt-3 mb-3">
                    {/* If you don't need navigation, use a button instead */}
                    <button style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold' }}>
                      {member.name}
                    </button>
                  </h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AboutUs;

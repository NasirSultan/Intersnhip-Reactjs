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
        <section
        style={{
          backgroundImage:
            'url(https://media.gadventures.com/media-server/cache/48/50/4850d7b3b1aacc51b6a0182de9ea2c35.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          width: '100%',
          aspectRatio: '16 / 9',
          display: 'flex',
          flexDirection: 'column',
        }}// Stack items vertically

      >

        <div
          className="header-container"
          style={{
            padding: '10px 20px', // Add some spacing around the header
          }}
        >
          <Header />
        </div>


        <div
          className="container d-flex justify-content-center align-items-center flex-column text-center" data-aos="fade-up"
          style={{
            flex: 1, // Make this section take up remaining space
            padding: '20px',
          }}
        >
          <div
            className="row site-hero-inner"
            style={{
              width: '100%',
              maxWidth: '600px', // Restrict width for better readability
            }}
          >
            <div
              className="col-12"
              style={{
                padding: '20px',
              }}
            >
              <h1 className="heading text-center mb-4">
              About Us

              </h1>

              <p
                className="sub-heading mb-2"
                style={{
                  fontSize: '1.25rem',
                  color: 'black',
                }}
              >
                A free template by{' '}
                <a href="#" target="_blank" rel="noopener noreferrer">
                  Colorlib
                </a>
                . Download and share!
              </p>
              
            </div>
          </div>
        </div>
      </section>


      <div className="container mt-5">
        <div className="row featurette">
          <div className="col-12 col-md-6 order-md-2 d-flex flex-column justify-content-center align-items-center" data-aos="fade-left">
            <h2 className="featurette-heading fw-normal lh-1 text-center">
              Welcome to Travel & Tours
            </h2>
            <p className="lead text-center text-black">
              Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
            </p>
            <p className="pt-4 text-black">
              A small river named Duden flows by their place and supplies it with the necessary regelialia.
            </p>
            <p class="mt-5 text-left">
  <a href="#" class="btn btn-primary uppercase px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 transition rounded">
    Learn More
  </a>
</p>
          </div>

          <div className="col-12 col-md-6 order-md-1" data-aos="fade-right">
            <img
              className="featurette-image img-fluid mx-auto"
              src="https://media.cntraveler.com/photos/659d7b48862a33a7be30ce41/2:3/w_2416,h_3624,c_limit/Pack%20for%20a%20Year%20of%20Travel-2024_GettyImages-1430180814.jpg"
              alt="Beautiful Travel Destination"
              style={{ maxWidth: '100%', height: 'auto' }}
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
                style={{ maxWidth: '100%', height: 'auto', borderRadius: '20px' }}
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://img.freepik.com/premium-photo/exploring-market-photo-realistic-street-food-tour-group-concept-high-resolution-image_980716-196049.jpg"
                className="d-block w-100 img-fluid"
                alt="Street food market"
                style={{ maxWidth: '100%', height: 'auto', borderRadius: '20px' }}
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://static.toiimg.com/photo/67382132.cms"
                className="d-block w-100 img-fluid"
                alt="Beautiful vacation destination"
                style={{ maxWidth: '100%', height: 'auto', borderRadius: '20px' }}
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
  <div className="col-12 col-md-8 d-flex flex-column flex-md-row align-items-center">
    <h2 className="heading text-black" style={{ flex: '1' }}>
      Team
    </h2>
    <p className="lead text-black" style={{ flex: '1', marginTop: '0' }}>
      Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
    </p>
  </div>
</div>




        {/* Team Members */}

        <div className="container">
        <div className="row ">
          {teamMembers.map((member, index) => (
            <div className="col-sm-6 col-md-4 col-lg-4 mb-4" key={index}>
              <div className="card shadow-sm" style={{ border: 'none' }}>
                <img
                  src={member.image}
                  className="card-img-top img-fluid"
                  alt={member.name}
                  style={{ width: '100%', height: 'auto' }}
                />
                <div className="media-body mt-3 mb-3 pl-4 ">
                  <span className="meta-post">{member.role}</span>
                  <h2 className="mt-3 mb-3">
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
      </div>
    </>
  );
};

export default AboutUs;

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './Header';

const Hotels = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: 'ease-in-out', // Animation easing
      once: true, // Ensures animation happens only once
    });
  }, []);

  return (
    <>
      <section
        style={{
          backgroundImage:
            'url(https://t3.ftcdn.net/jpg/00/29/13/38/360_F_29133877_bfA2n7cWV53fto2BomyZ6pyRujJTBwjd.jpg)',
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
          className="container d-flex justify-content-center align-items-center flex-column text-center "
          style={{
            flex: 1, // Make this section take up remaining space
            padding: '20px',
          }}
        >
          <div
            className="row site-hero-inner" data-aos="fade-up"
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
              <h1 className="heading mb-4">
                Our Hotel
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

      <div className="container mt-5 pt-5">
        <div className="row p-3">
          <div className="col-12 col-md-4 text-center" data-aos="fade-up">
            <i className="fas fa-hotel fa-5x text-primary mb-3"></i>
            <h2 className="fw-normal">Heading</h2>
            <p className="card-text" style={{ color: 'black' }}>
              Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
            </p>
          </div>
          <div className="col-12 col-md-4 text-center" data-aos="fade-up" data-aos-delay="200">
            <i className="fas fa-swimmer fa-5x text-primary mb-3"></i>
            <h2 className="fw-normal">Heading</h2>
            <p className="card-text" style={{ color: 'black' }}>
              Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
            </p>
          </div>
          <div className="col-12 col-md-4 text-center" data-aos="fade-up" data-aos-delay="400">
            <i className="fas fa-utensils fa-5x text-primary mb-3"></i>
            <h2 className="fw-normal">Heading</h2>
            <p className="card-text" style={{ color: 'black' }}>
              Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
            </p>
          </div>
        </div>

        <div className="row p-3">
          <div className="col-12 col-md-4 text-center" data-aos="fade-up">
            <i className="fas fa-hotel fa-5x text-primary mb-3"></i>
            <h2 className="fw-normal">Heading</h2>
            <p className="card-text" style={{ color: 'black' }}>
              Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
            </p>
          </div>
          <div className="col-12 col-md-4 text-center" data-aos="fade-up" data-aos-delay="200">
            <i className="fas fa-swimmer fa-5x text-primary mb-3"></i>
            <h2 className="fw-normal">Heading</h2>
            <p className="card-text" style={{ color: 'black' }}>
              Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
            </p>
          </div>
          <div className="col-12 col-md-4 text-center" data-aos="fade-up" data-aos-delay="400">
            <i className="fas fa-utensils fa-5x text-primary mb-3"></i>
            <h2 className="fw-normal">Heading</h2>
            <p className="card-text" style={{ color: 'black' }}>
              Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
            </p>
          </div>
        </div>
      </div>

      <div className="container mt-5 pt-5">
        <div className="row featurette" data-aos="fade-up">
          <div className="col-md-6 order-md-2 d-flex flex-column justify-content-center align-items-center">
            <h2 className="featurette-heading fw-normal lh-1 text-center">
              Oh yeah, it’s that good. <span className="text-body-secondary">See for yourself.</span>
            </h2>
            <p className="lead text-black text-center">
              Another featurette? Of course. More placeholder content here to give you an idea of how this layout would work with some actual real-world content in place.
            </p>
            <p className="pt-4">
              <a
                href="https://vimeo.com/channels/staffpicks/93951774"
                data-fancybox=""
                className="btn-play d-flex align-items-center justify-content-center btn btn-outline-primary py-2 px-4"
                style={{ fontSize: '1.2rem', borderRadius: '50px', textDecoration: 'none' }}
              >
                <span className="icon mr-3"><span className="fa fa-play"></span></span>
                <span className="text">Watch The Video</span>
              </a>
            </p>
          </div>

          <div className="col-md-6 order-md-1" data-aos="zoom-in">
            <img
              className="featurette-image img-fluid mx-auto"
              src="https://media.cntraveler.com/photos/659d7b48862a33a7be30ce41/2:3/w_2416,h_3624,c_limit/Pack%20for%20a%20Year%20of%20Travel-2024_GettyImages-1430180814.jpg"
              alt="Travel Image"
              width="100%"
            />
          </div>
        </div>
      </div>

      <div class="mt-5"
        style={{
          background: "linear-gradient(to bottom, rgb(251, 251, 251), rgb(101, 101, 101), rgb(250, 248, 248))",
        }}
      >
        <div className="container">
          <div className="p-5 text-center">
            <h1 className="text-black text-4xl font-bold p-4" data-aos="fade-up">
              Full-width jumbotron
            </h1>
            <p className="col-lg-8 mx-auto lead" data-aos="fade-up">
              This takes the basic jumbotron above and makes its background edge-to-edge with a <code>.container</code> inside to align content.
            </p>
          </div>

          <div className="container py-5">
            <div id="carouselExample" className="carousel slide" data-bs-ride="carousel" data-aos="fade-up">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYQfJpTT8rz8LQ5KV_6rYS314oP8P3oa5CnA&s"
                    className="d-block w-100"
                    alt="First slide"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="https://images2.bovpg.net/r/media/1/3/1/4/5/314508.jpg"
                    className="d-block w-100"
                    alt="Second slide"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXDLFGW8y7XJlseJcUt4ws_wbt3DBuojjugPmtutUAGluylN2IQfqxA9_6VoIYoZ30bSM&usqp=CAU"
                    className="d-block w-100"
                    alt="Third slide"
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
          </div>

          <div className="row justify-content-center text-center mb-5 m-5 p-3">
            <div className="col-md-8" data-aos="fade-up">
              <h2 className="heading text-white">Experience Once In Your Lifetime</h2>
              <p className="lead" data-aos="fade-up">
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
              </p>
            </div>
          </div>

          <div className="row p-5">
            {/* Feature 1 */}
            <div className="col-md-6 col-lg-4 mb-4 hover-effect" data-aos="zoom-in">
              <div className="card shadow-sm">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNhg3gMYbklo72Rmul3aeoHN3_BdpCOew3hf8R_i1po2KnikKrmqYRPzx57f8VGm0Rw6g&usqp=CAU"
                  className="card-img-top"
                  alt="Thumbnail"
                />
                <div className="card-body">
                  <h5 className="card-title">Five Reasons to Stay at Villa Resort</h5>
                </div>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="col-md-6 col-lg-4 mb-4 hover-effect" data-aos="zoom-in" data-aos-delay="200">
              <div className="card shadow-sm">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNhg3gMYbklo72Rmul3aeoHN3_BdpCOew3hf8R_i1po2KnikKrmqYRPzx57f8VGm0Rw6g&usqp=CAU"
                  className="card-img-top"
                  alt="Thumbnail"
                />
                <div className="card-body">
                  <h5 className="card-title">Five Reasons to Stay at Villa Resort</h5>
                </div>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="col-md-6 col-lg-4 mb-4 hover-effect" data-aos="zoom-in" data-aos-delay="400">
              <div className="card shadow-sm">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNhg3gMYbklo72Rmul3aeoHN3_BdpCOew3hf8R_i1po2KnikKrmqYRPzx57f8VGm0Rw6g&usqp=CAU"
                  className="card-img-top"
                  alt="Thumbnail"
                />
                <div className="card-body">
                  <h5 className="card-title">Five Reasons to Stay at Villa Resort</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hotels;

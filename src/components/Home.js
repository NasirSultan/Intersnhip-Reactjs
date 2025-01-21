import React, { useState } from 'react';
import Header from './Header'; // Importing Header component

const Home = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  


  return (
    <>
     <section
  className="site-hero overlay"
  style={{
    backgroundImage:
      'url(https://nextvacay.com/wp-content/uploads/2022/07/KW-why-travel-is-important.jpg.webp)',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    height: 'auto',
    aspectRatio: '16 / 9', // Ensures the image maintains a 16:9 ratio
  }}
>
  <Header />

  {/* Content Section */}
  <div
  className="container d-flex justify-content-center align-items-center flex-column"
  style={{ height: '100%' }}
>
  <div
    className="row site-hero-inner justify-content-center align-items-center text-center"
    style={{ width: '100%' }}
  >
    <div
      className="col-lg-8 col-md-10 col-sm-12"
      style={{
        paddingTop: '20px',
        paddingBottom: '20px',
      }}
    >
      <h1
        className="heading mb-4"
        style={{
          marginBottom: '30px',
          fontSize: '3rem',
          lineHeight: '1.2',
        }}
      >
        Travel &amp; Tours
      </h1>
      <p
        className="sub-heading mb-2"
        style={{
          marginBottom: '10px',
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
      <p className="pt-4" style={{ marginTop: '10px' }}>
        <a
          href="#/"
          target="_blank"
          className="btn uppercase btn-outline-light d-inline-block "
          style={{
            fontSize: '1rem',
          }}
        >
          Visit Colorlib
        </a>
      </p>
    </div>
  </div>

  {/* Scroll Down Link */}
  
</div>

</section>


<div className="container my-5 py-4">
  <div className="row featurette align-items-center">
    {/* Text Content */}
    <div className="col-lg-7 col-md-12 order-md-2 d-flex flex-column justify-content-center align-items-center text-md-center text-lg-start">
      <h2 className="featurette-heading fw-normal lh-1 text-center text-lg-start">
        Oh yeah, it's that good. <span className="text-body-secondary">See for yourself.</span>
      </h2>
      <p className="lead">
        Another featurette? Of course. More placeholder content here to give you an idea of how this layout would work with some actual real-world content in place.
      </p>
      <p className="pt-4">
        <a
          href="https://vimeo.com/channels/staffpicks/93951774"
          data-fancybox=""
          className="btn-play d-flex align-items-center justify-content-center btn btn-outline-primary py-2 px-4"
          style={{
            fontSize: '1.2rem',
            borderRadius: '50px',
            textDecoration: 'none',
          }}
        >
          <span className="icon me-2">
            <i className="fa fa-play"></i>
          </span>
          <span className="text">Watch The Video</span>
        </a>
      </p>
    </div>

    {/* Image */}
    <div className="col-lg-5 col-md-12 order-md-1 text-center">
      <img
        className="featurette-image img-fluid mx-auto"
        src="https://media.cntraveler.com/photos/659d7b48862a33a7be30ce41/2:3/w_2416,h_3624,c_limit/Pack%20for%20a%20Year%20of%20Travel-2024_GettyImages-1430180814.jpg"
        alt="Travel Image"
        style={{
          maxWidth: '100%',
          height: 'auto',
          borderRadius: '10px',
        }}
      />
    </div>
  </div>
</div>


<div className="section bg-light py-5">
  <div className="container">
    {/* Section Header */}
    <div className="row justify-content-center text-center mb-5">
      <div className="col-md-8">
        <h2 className="heading aos-init aos-animate text-black" data-aos="fade-up">
          Experience Once In Your Lifetime
        </h2>
        <p className="lead aos-init aos-animate text-black" data-aos="fade-up" data-aos-delay="100">
          Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
        </p>
      </div>
    </div>

    {/* Features */}
    <div className="row">
      {/* Feature 1 */}
      <div className="col-12 col-md-6 col-lg-4 mb-4 aos-init aos-animate" data-aos="fade-up">
        <div className="d-block ftco-img-flaticon text-center">
          <i
            className="fa fa-utensils fa-3x mb-4"
            style={{ color: "#000", display: "block", margin: "0 auto" }}
          ></i>
          <h3>Good Foods</h3>
          <p className="text-black">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
          </p>
        </div>
      </div>

      {/* Feature 2 */}
      <div className="col-12 col-md-6 col-lg-4 mb-4 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
        <div className="d-block ftco-img-flaticon text-center">
          <i
            className="fa fa-globe fa-3x mb-4"
            style={{ color: "#000", display: "block", margin: "0 auto" }}
          ></i>
          <h3>Travel Anywhere</h3>
          <p className="text-black">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
          </p>
        </div>
      </div>

      {/* Feature 3 */}
      <div className="col-12 col-md-6 col-lg-4 mb-4 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
        <div className="d-block ftco-img-flaticon text-center">
          <i
            className="fa fa-plane fa-3x mb-4"
            style={{ color: "#000", display: "block", margin: "0 auto" }}
          ></i>
          <h3>Airplane</h3>
          <p className="text-black">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>


<div
  className="grad"
  style={{
    background: "linear-gradient(to bottom, rgb(213, 208, 207), rgb(255, 253, 253))",
  }}
>
  <div className="p-5 text-center">
    <div className="container py-5">
      <h1 className="text-body-emphasis">Full-width jumbotron</h1>
      <p className="col-lg-8 mx-auto lead">
        This takes the basic jumbotron above and makes its background edge-to-edge with a
        <code>.container</code> inside to align content. Similar to above, it's been recreated
        with built-in grid and utility classes.
      </p>
    </div>
  </div>
  <div className="container py-5">
    <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYQfJpTT8rz8LQ5KV_6rYS314oP8P3oa5CnA&s"
            className="d-block w-100"
            alt="First slide"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://images2.bovpg.net/r/media/1/3/1/4/5/314508.jpg"
            className="d-block w-100"
            alt="Second slide"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXDLFGW8y7XJlseJcUt4ws_wbt3DBuojjugPmtutUAGluylN2IQfqxA9_6VoIYoZ30bSM&usqp=CAU"
            className="d-block w-100"
            alt="Third slide"
            style={{ maxWidth: "100%", height: "auto" }}
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
  <div className="row py-lg-5">
    <div className="col-lg-6 col-md-8 mx-auto text-center">
      <h1 className="fw-light">Album example</h1>
      <p className="lead text-body-secondary">
        Something short and leading about the collection below—its contents, the creator, etc.
      </p>
    </div>
  </div>
  <div className="album py-5">
    <div className="container">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        {Array(3)
          .fill()
          .map((_, index) => (
            <div className="col" key={index}>
              <div className="card shadow-sm">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNhg3gMYbklo72Rmul3aeoHN3_BdpCOew3hf8R_i1po2KnikKrmqYRPzx57f8VGm0Rw6g&usqp=CAU"
                  className="card-img-top"
                  alt="Thumbnail"
                  style={{ maxWidth: "100%", height: "auto" }}
                />
                <div className="card-body">
                  <h5 className="card-title">February 26, 2018</h5>
                  <p className="text-black">45 Best Places To Unwind</p>
                  <p className="text-black">
                    Far far away, behind the word mountains, far from the countries Vokalia and
                    Consonantia, there live the blind texts.
                  </p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  </div>
</div>




<div className="section bg-light py-5">
  <div className="container">
    {/* Section Header */}
    <div className="row justify-content-center text-center mb-5">
      <div className="col-md-8">
        <h2 className="heading aos-init aos-animate" data-aos="fade-up">
          Experience Once In Your Lifetime
        </h2>
        <p className="lead aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
          {/* Add any subtext or description */}
        </p>
      </div>
    </div>

    {/* Features */}
    <div className="row">
      {/* Feature */}
      {[...Array(3)].map((_, index) => (
        <div
          key={index}
          className="col-12 col-md-6 col-lg-4 mb-4 aos-init aos-animate"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="d-flex align-items-center p-3 bg-white rounded shadow-sm">
            {/* Replace icon with image */}
            <img
              src="https://travelomoon.com//uploads/0000/1/2023/08/18/best-tours.jpg"
              alt="Feature"
              className="rounded-circle"
              style={{ width: '70px', height: '70px', marginRight: '15px' }}
            />
            <div>
              <h3 style={{ color: '#333', fontSize: '1.25rem', marginBottom: '0.5rem' }}>Airplane</h3>
              <p style={{ color: '#666', fontSize: '0.9rem', marginBottom: '0' }}>
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>


<div className="section py-5">
  <div className="container">
    {/* Section Header */}
    <div className="row justify-content-center text-center mb-5">
      <div className="col-md-8">
        <h2 className="heading aos-init aos-animate" data-aos="fade-up">
          Experience Once In Your Lifetime
        </h2>
        <p className="lead aos-init aos-animate text-black" data-aos="fade-up" data-aos-delay="100">
          Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. 
          Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
        </p>
      </div>
    </div>

    {/* Features */}
    <div className="row">
      {/* Feature 1 */}
      <div className="col-12 col-md-6 col-lg-4 mb-4 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
        <div className="d-block">
          <div className="align-items-center m-2 p-2">
            <img
              src="https://travelomoon.com//uploads/0000/1/2023/08/18/best-tours.jpg"
              alt="Airplane"
              style={{ width: '100%', height: '200px', objectFit: 'cover' }}
            />
            <div className="m-2 text-center">
              <h3 style={{ color: '#333' }}>Airplane</h3>
              <div className="d-flex justify-content-center align-items-center" style={{ color: '#ffa500' }}>
                {/* Star Rating */}
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star-half-alt"></i>
                <i className="fa-regular fa-star"></i>
                <span style={{ color: '#666', marginLeft: '10px' }}>(123 Reviews)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Feature 2 */}
      <div className="col-12 col-md-6 col-lg-4 mb-4 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
        <div className="d-block">
          <div className="align-items-center m-2 p-2">
            <img
              src="https://travelomoon.com//uploads/0000/1/2023/08/18/best-tours.jpg"
              alt="Airplane"
              style={{ width: '100%', height: '200px', objectFit: 'cover' }}
            />
            <div className="m-2 text-center">
              <h3 style={{ color: '#333' }}>Airplane</h3>
              <div className="d-flex justify-content-center align-items-center" style={{ color: '#ffa500' }}>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star-half-alt"></i>
                <i className="fa-regular fa-star"></i>
                <span style={{ color: '#666', marginLeft: '10px' }}>(123 Reviews)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Feature 3 */}
      <div className="col-12 col-md-6 col-lg-4 mb-4 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
        <div className="d-block">
          <div className="align-items-center m-2 p-2">
            <img
              src="https://travelomoon.com//uploads/0000/1/2023/08/18/best-tours.jpg"
              alt="Airplane"
              style={{ width: '100%', height: '200px', objectFit: 'cover' }}
            />
            <div className="m-2 text-center">
              <h3 style={{ color: '#333' }}>Airplane</h3>
              <div className="d-flex justify-content-center align-items-center" style={{ color: '#ffa500' }}>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star-half-alt"></i>
                <i className="fa-regular fa-star"></i>
                <span style={{ color: '#666', marginLeft: '10px' }}>(123 Reviews)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


    </>
  );
};

export default Home;

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

          height: '100vh',
        }}
      >
        <Header />

        {/* Content Section */}
        <div className="container d-flex justify-content-center align-items-center flex-column" style={{ height: '100%' }}>
          <div className="row site-hero-inner justify-content-center align-items-center" style={{ width: '100%' }}>
            <div className="col-md-10 text-center" style={{ paddingTop: '20px', paddingBottom: '20px' }}>
              <h1 className="heading mb-4 fade-up fade-up-visible" style={{ marginBottom: '30px', fontSize: '3rem' }}>
                Travel &amp; Tours
              </h1>
              <p className="sub-heading mb-5 fade-up fade-up-visible" style={{ animationDelay: '100ms', marginBottom: '20px' }}>
                A free template by <a href="#" target="_blank" rel="noopener noreferrer">Colorlib</a>. Download and share!
              </p>
              <p className="pt-4 fade-up" style={{ animationDelay: '200ms', marginTop: '20px' }}>
                <a href="#/" target="_blank" className="btn uppercase btn-outline-light d-sm-inline d-block py-3">
                  Visit Colorlib
                </a>
              </p>
            </div>
          </div>

          {/* Scroll Down Link */}
          <div className="fade-up fade-up-visible" style={{ animationDelay: '300ms' }}>
            <a href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTX-WutVG9xn-WdCRiRVB-rjKJ2Br4y4iCnV9MHOWfFbf7ArTLoOrRWbmQa028IMTSOlc&usqp=CAU" className="scroll-down smoothscroll">
              <span className="fa fa-play"></span> Scroll Down
            </a>
          </div>
        </div>
      </section>

      <div className="container my-5 py-4">
        <div className="row featurette">
          <div className="col-md-7 order-md-2 d-flex flex-column justify-content-center align-items-center">
            <h2 className="featurette-heading fw-normal lh-1 text-center">
              Oh yeah, its that good. <span className="text-body-secondary">See for yourself.</span>
            </h2>
            <p className="lead text-center">
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

          <div className="col-md-5 order-md-1">
            <img
              className="featurette-image img-fluid mx-auto"
              src="https://media.cntraveler.com/photos/659d7b48862a33a7be30ce41/2:3/w_2416,h_3624,c_limit/Pack%20for%20a%20Year%20of%20Travel-2024_GettyImages-1430180814.jpg"
              alt="Travel Image"
              width="500"
            />
          </div>
        </div>
      </div>

      <div className="section bg-light py-5">
        <div className="container">
          {/* Section Header */}
          <div className="row justify-content-center text-center mb-5">
            <div className="col-md-8">
              <h2 className="heading aos-init aos-animate" data-aos="fade-up">Experience Once In Your Lifetime</h2>
              <p className="lead aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
              </p>
            </div>
          </div>

          {/* Features */}
          <div className="row">
            {/* Feature 1 */}
            <div className="col-md-6 col-lg-4 mb-4 aos-init aos-animate" data-aos="fade-up">
              <div className="d-block ftco-img-flaticon text-center">
                <i className="fa fa-utensils fa-3x mb-4" style={{ color: '#000', display: 'block', margin: '0 auto' }}></i>
                <h3>Good Foods</h3>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="col-md-6 col-lg-4 mb-4 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
              <div className="d-block ftco-img-flaticon text-center">
                <i className="fa fa-globe fa-3x mb-4" style={{ color: '#000', display: 'block', margin: '0 auto' }}></i>
                <h3>Travel Anywhere</h3>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="col-md-6 col-lg-4 mb-4 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
              <div className="d-block ftco-img-flaticon text-center">
                <i className="fa fa-plane fa-3x mb-4" style={{ color: '#000', display: 'block', margin: '0 auto' }}></i>
                <h3>Airplane</h3>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
              </div>
            </div>

            {/* Additional features follow... */}
          </div>

        </div>
      </div>

      <div class="grad " style={{
        background: "linear-gradient(to bottom, #ff7e5f,rgb(255, 255, 255))", // Gradient colors
      }} >

        <div class="p-5 text-center ">
          <div class="container py-5">
            <h1 class="text-body-emphasis">Full-width jumbotron</h1>
            <p class="col-lg-8 mx-auto lead">
              This takes the basic jumbotron above and makes its background edge-to-edge with a <code>.container</code> inside to align content. Similar to above, it's been recreated with built-in grid and utility classes.
            </p>
          </div>
        </div>
        <div class="container py-5">
          <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYQfJpTT8rz8LQ5KV_6rYS314oP8P3oa5CnA&s"
                  className="d-block w-100"
                  alt="First slide"
                  style={{ width: '70%', height: '70%', padding: '10px', margin: '15px' }}
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://images2.bovpg.net/r/media/1/3/1/4/5/314508.jpg"
                  className="d-block w-100"
                  alt="Second slide"
                  style={{ width: '70%', height: '70%', padding: '10px', margin: '15px' }}
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXDLFGW8y7XJlseJcUt4ws_wbt3DBuojjugPmtutUAGluylN2IQfqxA9_6VoIYoZ30bSM&usqp=CAU"
                  className="d-block w-100"
                  alt="Third slide"
                  style={{ width: '70%', height: '70%', padding: '10px', margin: '15px' }}
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

        <div class="row py-lg-5">
          <div class="col-lg-6 col-md-8 mx-auto text-center">
            <h1 class="fw-light">Album example</h1>
            <p class="lead text-body-secondary">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.</p>

          </div>
        </div>

        <div class="album py-5 ">
          <div class="container">

            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

              <div class="col">
                <div class="card shadow-sm">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNhg3gMYbklo72Rmul3aeoHN3_BdpCOew3hf8R_i1po2KnikKrmqYRPzx57f8VGm0Rw6g&usqp=CAU"
                    className="card-img-top"
                    alt="Thumbnail"
                    width="300"  // fixed width in pixels
                    height="225" // fixed height in pixels
                  />
                  <div class="card-body">
                    <h5 class="card-title">February 26, 2018</h5>
                    <p class="card-text">45 Best Places To Unwind</p>
                    <p class="card-text">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                  </div>
                </div>
              </div>

              <div class="col">
                <div class="card shadow-sm">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNhg3gMYbklo72Rmul3aeoHN3_BdpCOew3hf8R_i1po2KnikKrmqYRPzx57f8VGm0Rw6g&usqp=CAU"
                    className="card-img-top"
                    alt="Thumbnail"
                    width="300"  // fixed width in pixels
                    height="225" // fixed height in pixels
                  />


                  <div class="card-body">
                    <h5 class="card-title">February 26, 2018</h5>
                    <p class="card-text">45 Best Places To Unwind</p>
                    <p class="card-text">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                  </div>
                </div>
              </div>

              <div class="col">
                <div class="card shadow-sm">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNhg3gMYbklo72Rmul3aeoHN3_BdpCOew3hf8R_i1po2KnikKrmqYRPzx57f8VGm0Rw6g&usqp=CAU"
                    className="card-img-top"
                    alt="Thumbnail"
                    width="300"  // fixed width in pixels
                    height="225" // fixed height in pixels
                  />
                  <div class="card-body">
                    <h5 class="card-title">February 26, 2018</h5>
                    <p class="card-text">45 Best Places To Unwind</p>
                    <p class="card-text">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>



      </div>



      <div className="section bg-light py-5">
        <div className="container">
          {/* Section Header */}
          <div className="row justify-content-center text-center mb-5">
            <div className="col-md-8">
              <h2 className="heading aos-init aos-animate" data-aos="fade-up">Experience Once In Your Lifetime</h2>
              <p className="lead aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">

              </p>
            </div>
          </div>

          {/* Features */}
          <div className="row">
            {/* Feature 1 */}
            <div className="col-md-6 col-lg-4 mb-4 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
              <div className="d-block ftco-img-flaticon">
                <div className="align-items-center">
                  {/* Replace icon with image */}
                  <img
                    src="https://travelomoon.com//uploads/0000/1/2023/08/18/best-tours.jpg"
                    alt="Airplane"
                    className="rounded-circle mx-3 "
                    style={{ width: '70px', height: '70px', marginRight: '15px' }}
                  />
                  <div class=" m-2 p-2">
                    <h3 style={{ color: '#333' }}>Airplane</h3>
                    <p style={{ color: '#666' }}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                  </div>
                </div>
              </div>
            </div>


            {/* Feature 2 */}
            <div className="col-md-6 col-lg-4 mb-4 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
              <div className="d-block ftco-img-flaticon">
                <div className="align-items-center">
                  {/* Replace icon with image */}
                  <img
                    src="https://travelomoon.com//uploads/0000/1/2023/08/18/best-tours.jpg"
                    alt="Airplane"
                    className="rounded-circle mx-3 "
                    style={{ width: '70px', height: '70px', marginRight: '15px' }}
                  />
                  <div class=" m-2 p-2">
                    <h3 style={{ color: '#333' }}>Airplane</h3>
                    <p style={{ color: '#666' }}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                  </div>
                </div>
              </div>
            </div>


            {/* Feature 3 */}
            <div className="col-md-6 col-lg-4 mb-4 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
              <div className="d-block ftco-img-flaticon">
                <div className="align-items-center">
                  {/* Replace icon with image */}
                  <img
                    src="https://travelomoon.com//uploads/0000/1/2023/08/18/best-tours.jpg"
                    alt="Airplane"
                    className="rounded-circle mx-3 "
                    style={{ width: '70px', height: '70px', marginRight: '15px' }}
                  />
                  <div class=" m-2 p-2">
                    <h3 style={{ color: '#333' }}>Airplane</h3>
                    <p style={{ color: '#666' }}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                  </div>
                </div>
              </div>
            </div>


            {/* Additional features follow... */}
          </div>

        </div>
      </div>

      <div className="section py-5">
        <div className="container">
          {/* Section Header */}
          <div className="row justify-content-center text-center mb-5">
            <div className="col-md-8">
              <h2 className="heading aos-init aos-animate" data-aos="fade-up">Experience Once In Your Lifetime</h2>
              <p className="lead aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
              </p>
            </div>
          </div>

          {/* Features */}
          <div className="row">
            {/* Feature 1 */}
            <div className="col-md-6 col-lg-4 mb-4 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
              <div className="d-block ftco-img-flaticon ">
                <div className="align-items-center m-2 p-2">
                  {/* Replace icon with image */}
                  <img
                    src="https://travelomoon.com//uploads/0000/1/2023/08/18/best-tours.jpg"
                    alt="Airplane"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', marginRight: 'end' }}
                  />
                  <div className="m-2">
                    <h3 style={{ color: '#333' }}>Airplane</h3>
                    <div className="d-flex align-items-center" style={{ color: '#ffa500' }}>
                      {/* Star Rating */}
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star-half-alt"></i>
                      <i class="fa-regular fa-star"></i>
                      <span style={{ color: '#666', marginLeft: 'auto' }}>(123 Reviews)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="col-md-6 col-lg-4 mb-4 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
              <div className="d-block ftco-img-flaticon">
                <div className="align-items-center m-2 p-2">
                  {/* Replace icon with image */}
                  <img
                    src="https://travelomoon.com//uploads/0000/1/2023/08/18/best-tours.jpg"
                    alt="Airplane"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', marginRight: '15px' }}
                  />
                  <div className="m-2">
                    <h3 style={{ color: '#333' }}>Airplane</h3>
                    <div className="d-flex align-items-center" style={{ color: '#ffa500' }}>
                      {/* Star Rating */}
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star-half-alt"></i>
                      <i class="fa-regular fa-star"></i>
                      <span style={{ color: '#666', marginLeft: 'auto' }}>(123 Reviews)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="col-md-6 col-lg-4 mb-4 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
              <div className="d-block ftco-img-flaticon">
                <div className="align-items-center m-2 p-2">
                  {/* Replace icon with image */}
                  <img
                    src="https://travelomoon.com//uploads/0000/1/2023/08/18/best-tours.jpg"
                    alt="Airplane"
                    style={{ width: '800%', height: '100%', objectFit: 'cover', marginRight: '15px' }}
                  />
                  <div className="m-2">
                    <h3 style={{ color: '#333' }}>Airplane</h3>
                    <div className="d-flex align-items-center" style={{ color: '#ffa500' }}>
                      {/* Star Rating */}
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star-half-alt"></i>
                      <i class="fa-regular fa-star"></i>
                      <span style={{ color: '#666', marginLeft: 'auto' }}>(123 Reviews)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            {/* Additional features follow... */}
          </div>

        </div>
      </div>

    </>
  );
};

export default Home;
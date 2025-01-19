import React from 'react';
import Header from './Header';


const Hotels = () => {
  return (
    <>
      <div
        className="h-screen relative"
        style={{
          backgroundImage:
            'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLJUGEkS5hWoalT-md1rAStTJz0WVa19-1QA&s)',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          height: '100vh',
        }}
      >
        <Header />
        <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl font-bold">
          Explore Our Hotels
        </h1>
      </div>

      <div className="container m-5 p-5">
      <div className="row p-3">
        <div className="col-lg-4 text-center hover-effect">
          {/* Icon instead of image */}
          <i className="fas fa-hotel fa-5x text-primary mb-3"></i>
          <h2 className="fw-normal">Heading</h2>
          <p>
            Some representative placeholder content for the three columns of text below the carousel. This is the first column.
          </p>
        </div>
        <div className="col-lg-4 text-center hover-effect">
          <i className="fas fa-swimmer fa-5x text-primary mb-3"></i>
          <h2 className="fw-normal">Heading</h2>
          <p>
            Some representative placeholder content for the three columns of text below the carousel. This is the first column.
          </p>
        </div>
        <div className="col-lg-4 text-center hover-effect">
          <i className="fas fa-utensils fa-5x text-primary mb-3"></i>
          <h2 className="fw-normal">Heading</h2>
          <p>And lastly this, the third column of representative placeholder content.</p>
        </div>
      </div>

      <div className="row p-3">
        <div className="col-lg-4 text-center hover-effect">
          <i className="fas fa-hotel fa-5x text-primary mb-3"></i>
          <h2 className="fw-normal">Heading</h2>
          <p>
            Some representative placeholder content for the three columns of text below the carousel. This is the first column.
          </p>
        </div>
        <div className="col-lg-4 text-center hover-effect">
          <i className="fas fa-swimmer fa-5x text-primary mb-3"></i>
          <h2 className="fw-normal">Heading</h2>
        </div>
        <div className="col-lg-4 text-center hover-effect">
          <i className="fas fa-utensils fa-5x text-primary mb-3"></i>
          <h2 className="fw-normal">Heading</h2>
          <p>And lastly this, the third column of representative placeholder content.</p>
        </div>
      </div>
    </div>

      <div className="container m-5 p-5">
        <div className="row featurette">
          <div className="col-md-6 order-md-2 d-flex flex-column justify-content-center align-items-center">
            <h2 className="featurette-heading fw-normal lh-1 text-center">
              Oh yeah, it’s that good. <span className="text-body-secondary">See for yourself.</span>
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

          <div className="col-md-6 order-md-1">
            <img
              className="featurette-image img-fluid mx-auto"
              src="https://media.cntraveler.com/photos/659d7b48862a33a7be30ce41/2:3/w_2416,h_3624,c_limit/Pack%20for%20a%20Year%20of%20Travel-2024_GettyImages-1430180814.jpg"
              alt="Travel Image"
              width="500"
            />
          </div>
        </div>
        <div className="row featurette">
          <div className="col-md-6 order-md-1 d-flex flex-column justify-content-center align-items-center">
            <h2 className="featurette-heading fw-normal lh-1 text-center">
              Oh yeah, it’s that good. <span className="text-body-secondary">See for yourself.</span>
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

          <div className="col-md-6 order-md-2">
            <img
              className="featurette-image img-fluid mx-auto"
              src="https://media.cntraveler.com/photos/659d7b48862a33a7be30ce41/2:3/w_2416,h_3624,c_limit/Pack%20for%20a%20Year%20of%20Travel-2024_GettyImages-1430180814.jpg"
              alt="Travel Image"
              width="500"
            />
          </div>
        </div>


      </div>

      <div

        style={{
          background: "linear-gradient(to bottom, rgb(251, 251, 251), rgb(137, 136, 136),rgb(8, 8, 8))", // Gradient colors
        }}
      >
        <div className="container"  >

          <div class="p-5 text-center ">
            <div class="container py-2">
              <h1 className="text-black text-4xl font-bold b p-4">
                Full-width jumbotron
              </h1>

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


          {/* Section Header */}
          <div className="row justify-content-center text-center mb-5 m-5 p-3 ">
            <div className="col-md-8">
              <h2 className="heading aos-init aos-animate text-white" data-aos="fade-up ">Experience Once In Your Lifetime</h2>
              <p className="lead aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
              </p>
            </div>
          </div>

          {/* Features */}
          <div className="row p-5">
            {/* Feature 1 */}
            <div className="col-md-6 col-lg-4 mb-4 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
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

                  </div>
                </div>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="col-md-6 col-lg-4 mb-4 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
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

                  </div>
                </div>
              </div>
            </div>
            {/* Feature 3 */}
            <div className="col-md-6 col-lg-4 mb-4 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
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

export default Hotels;

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // AOS style
import Header from './Header';

const Contact = () => {
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


      {/* //hero section */}
      <div class="container mt-3 pt-3">
        <div class="row container p-3 m-3">
          <div className="col-sm-6 m-4 p-4 themed-grid-col" >
            <div className="row g-3 p-4 m-3" style={{ border: '1px solid light', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)' }}>



              <div class="col-sm-6 " >
                <label for="firstName" class="form-label">Full name</label>
                <input type="text" class="form-control" id="firstName" placeholder="" value="" required=""></input>
                <div class="invalid-feedback">
                  Valid first name is required.
                </div>
              </div>

              <div class="col-sm-6">
                <label for="lastName" class="form-label">Phone</label>
                <input type="text" class="form-control" id="lastName" placeholder="" value="" required=""></input>
                <div class="invalid-feedback">
                  Valid last name is required.
                </div>
              </div>

              <div class="col-12">
                <label for="username" class="form-label">Username</label>
                <div class="input-group has-validation">
                  <span class="input-group-text">@</span>
                  <input type="text" class="form-control" id="username" placeholder="Username" required=""></input>
                  <div class="invalid-feedback">
                    Your username is required.
                  </div>
                </div>
              </div>

              <div class="col-12">
                <label for="email" class="form-label">Email <span class="text-body-secondary">(Optional)</span></label>
                <input type="email" class="form-control" id="email" placeholder="you@example.com"></input>
                <div class="invalid-feedback">
                  Please enter a valid email address for shipping updates.
                </div>
              </div>

              <div class="col-12">
                <label for="address" class="form-label">Address</label>
                <input type="text" class="form-control" id="address" placeholder="1234 Main St" required=""></input>
                <div class="invalid-feedback">
                  Please enter your shipping address.
                </div>
              </div>

              <div class="col-12">
                <label for="address2" class="form-label">Address 2 <span class="text-body-secondary">(Optional)</span></label>
                <input type="text" class="form-control" id="address2" placeholder="Apartment or suite"></input>
              </div>

              <div class="col-md-5">
                <label for="country" class="form-label">Country</label>
                <select class="form-select" id="country" required="">
                  <option value="">Choose...</option>
                  <option>United States</option>
                </select>
                <div class="invalid-feedback">
                  Please select a valid country.
                </div>
              </div>

              <div class="col-md-4">
                <label for="state" class="form-label">State</label>
                <select class="form-select" id="state" required="">
                  <option value="">Choose...</option>
                  <option>California</option>
                </select>
                <div class="invalid-feedback">
                  Please provide a valid state.
                </div>
              </div>

              <div class="col-md-3">
                <label for="zip" class="form-label">Zip</label>
                <input type="text" class="form-control" id="zip" placeholder="" required=""></input>
                <div class="invalid-feedback">
                  Zip code required.
                </div>
              </div>
            </div>
          </div>
          <div class="col-6 col-lg-4 themed-grid-col"><div className="container mt-4">
            <ul className="list-group p-5 ">
              <li className=" m-3 p-3">
                <strong>Address:</strong> 98 West 21st Street, Suite 721, New York NY 10016
              </li>
              <li className="m-3 p-3">
                <strong>Phone:</strong> (+1) 435 3533
              </li>
              <li className="m-3 p-3">
                <strong>Email:</strong> info@yourdomain.com
              </li>
            </ul>
          </div></div>
        </div>
      </div>
      <div className="bg-light" style={{ paddingTop: "100px" ,paddingBottom:"100px"}}>
      <div className="container b-5 ">
          {/* Section Header */}
          <div className="row justify-content-center text-center pb-5">
            <div className="col-md-8">
              <h2 className="heading aos-init aos-animate mb-3" data-aos="fade-up" 
               style={{ fontSize: "70px", fontWeight: "bold", fontWeight: "900" }}
              >Happy Customers</h2>
              <p className="lead aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">

              </p>
            </div>
          </div>

          {/* Features */}
          <div className="row bg-gray">
            {/* Feature 1 */}
            <div className="col-md-6 col-lg-4 mb-4 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
              <div className="d-block ">
                <div className="align-items-center">
                  {/* Replace icon with image */}
                  <img
                    src="https://travelomoon.com//uploads/0000/1/2023/08/18/best-tours.jpg"
                    alt="Airplane"
                    className="rounded-circle mx-3 "
                    style={{ width: '70px', height: '70px', marginRight: '15px' }}
                  />
                  <div class=" m-2 p-2">
                    <h3 style={{ color: '#18181b', fontSize: '20px',    fontFamily: 'Roboto, sans-serif', fontWeight: 'lighter' }}>“Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”</h3>
                    <p style={{ color: '#cacace' }}>— Clare Gupta</p>
                  </div>
                </div>
              </div>
            </div>


            {/* Feature 2 */}
            <div className="col-md-6 col-lg-4 mb-4 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
            <div className="d-block ">
                <div className="align-items-center">
                  {/* Replace icon with image */}
                  <img
                    src="https://travelomoon.com//uploads/0000/1/2023/08/18/best-tours.jpg"
                    alt="Airplane"
                    className="rounded-circle mx-3 "
                    style={{ width: '70px', height: '70px', marginRight: '15px' }}
                  />
                  <div class=" m-2 p-2">
                    <h3 style={{ color: '#18181b', fontSize: '20px',    fontFamily: 'Roboto, sans-serif', fontWeight: 'lighter' }}>“Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”</h3>
                    <p style={{ color: '#cacace' }}>— Clare Gupta</p>
                  </div>
                </div>
              </div>
            </div>


            {/* Feature 3 */}
            <div className="col-md-6 col-lg-4 mb-4 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
            <div className="d-block ">
                <div className="align-items-center">
                  {/* Replace icon with image */}
                  <img
                    src="https://travelomoon.com//uploads/0000/1/2023/08/18/best-tours.jpg"
                    alt="Airplane"
                    className="rounded-circle mx-3 "
                    style={{ width: '70px', height: '70px', marginRight: '15px' }}
                  />
                  <div class=" m-2 p-2">
                    <h3 style={{ color: '#18181b', fontSize: '20px',    fontFamily: 'Roboto, sans-serif', fontWeight: 'lighter' }}>“Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”</h3>
                    <p style={{ color: '#cacace' }}>— Clare Gupta</p>
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

export default Contact;

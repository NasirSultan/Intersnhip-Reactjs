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
        <section
        className="site-hero overlay"
        style={{
          backgroundImage:
            'url(https://media.gadventures.com/media-server/cache/48/50/4850d7b3b1aacc51b6a0182de9ea2c35.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          width: '100%',
          height: 'auto',
          aspectRatio: '16 / 9',
        }}
        data-aos="fade-in" // Add animation
      >
        <Header />

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
                className="heading mb-4 fade-up fade-up-visible"
                style={{
                  marginBottom: '30px',
                  fontSize: '3rem',
                  lineHeight: '1.2',
                  color: 'white',
                  fontSize: "clamp(40px, 5vw, 80px)", // Responsive font size
                  fontWeight: "900",
                }}
                data-aos="fade-up" // Add animation
              >
             Contact
              </h1>
              <p
            className="text-white text-xl font-bold " data-aos="fade-up"
          >
          
    A free template by Colorlib. Download and share!
          </p>

            </div>
          </div>
        </div>
      </section>


      {/* //hero section */}
      <div className="container-fluid mt-3 pt-3">
      <div className="row justify-content-center">
        {/* Form Section */}
        <div className="col-12 col-md-8 col-lg-6 mb-4">
          <div
            className="p-4"
            style={{
              border: '1px solid #ddd',
              boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
              borderRadius: '8px',
            }}
          >
            <div className="row g-3">
              {/* Full Name */}
              <div className="col-sm-6">
                <label htmlFor="firstName" className="form-label">Full name</label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  placeholder="Your Full Name"
                  required
                />
                <div className="invalid-feedback">Valid first name is required.</div>
              </div>

              {/* Phone */}
              <div className="col-sm-6">
                <label htmlFor="lastName" className="form-label">Phone</label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  placeholder="Your Phone Number"
                  required
                />
                <div className="invalid-feedback">Valid phone number is required.</div>
              </div>

              {/* Username */}
              <div className="col-12">
                <label htmlFor="username" className="form-label">Username</label>
                <div className="input-group has-validation">
                  <span className="input-group-text">@</span>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    placeholder="Username"
                    required
                  />
                  <div className="invalid-feedback">Your username is required.</div>
                </div>
              </div>

              {/* Email */}
              <div className="col-12">
                <label htmlFor="email" className="form-label">
                  Email <span className="text-body-secondary">(Optional)</span>
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="you@example.com"
                />
                <div className="invalid-feedback">Please enter a valid email address.</div>
              </div>

              {/* Address */}
              <div className="col-12">
                <label htmlFor="address" className="form-label">Address</label>
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  placeholder="1234 Main St"
                  required
                />
                <div className="invalid-feedback">Please enter your shipping address.</div>
              </div>

              {/* Address 2 */}
              <div className="col-12">
                <label htmlFor="address2" className="form-label">
                  Address 2 <span className="text-body-secondary">(Optional)</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="address2"
                  placeholder="Apartment or suite"
                />
              </div>

              {/* Country */}
              <div className="col-md-5">
                <label htmlFor="country" className="form-label">Country</label>
                <select className="form-select" id="country" required>
                  <option value="">Choose...</option>
                  <option>United States</option>
                </select>
                <div className="invalid-feedback">Please select a valid country.</div>
              </div>

              {/* State */}
              <div className="col-md-4">
                <label htmlFor="state" className="form-label">State</label>
                <select className="form-select" id="state" required>
                  <option value="">Choose...</option>
                  <option>California</option>
                </select>
                <div className="invalid-feedback">Please provide a valid state.</div>
              </div>

              {/* Zip */}
              <div className="col-md-3">
                <label htmlFor="zip" className="form-label">Zip</label>
                <input
                  type="text"
                  className="form-control"
                  id="zip"
                  placeholder=""
                  required
                />
                <div className="invalid-feedback">Zip code required.</div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information Section */}
        <div className="col-12 col-md-4">
          <div className="container mt-4">
            <ul
              className="list-group p-3"
              style={{
                border: '1px solid #ddd',
                borderRadius: '8px',
              }}
            >
              <li className="list-group-item">
                <strong>Address:</strong> 98 West 21st Street, Suite 721, New York NY 10016
              </li>
              <li className="list-group-item">
                <strong>Phone:</strong> (+1) 435 3533
              </li>
              <li className="list-group-item">
                <strong>Email:</strong> info@yourdomain.com
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div
  className="bg-light"
  style={{ paddingTop: "100px", paddingBottom: "100px" }}
>
  <div className="container">
    {/* Section Header */}
    <div className="row justify-content-center text-center pb-5">
      <div className="col-md-8">
        <h2
          className="heading aos-init aos-animate mb-3"
          data-aos="fade-up"
          style={{
            fontSize: "2.5rem",
            fontWeight: "900",
          }}
        >
          Happy Customers
        </h2>
        <p
          className="lead aos-init aos-animate"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Here's what our customers have to say about us!
        </p>
      </div>
    </div>

    {/* Features */}
    <div className="row bg-gray">
      {/* Feature 1 */}
      <div
        className="col-sm-12 col-md-6 col-lg-4 mb-4 aos-init aos-animate"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <div className="d-block text-center">
          <img
            src="https://travelomoon.com//uploads/0000/1/2023/08/18/best-tours.jpg"
            alt="Airplane"
            className="rounded-circle"
            style={{ width: "70px", height: "70px", marginBottom: "15px" }}
          />
          <div className="p-2">
            <h3
              style={{
                color: "#18181b",
                fontSize: "1.25rem",
                fontFamily: "Roboto, sans-serif",
                fontWeight: "400",
              }}
            >
              “Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean.”
            </h3>
            <p style={{ color: "#6c757d" }}>— Clare Gupta</p>
          </div>
        </div>
      </div>

      {/* Feature 2 */}
      <div
        className="col-sm-12 col-md-6 col-lg-4 mb-4 aos-init aos-animate"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <div className="d-block text-center">
          <img
            src="https://travelomoon.com//uploads/0000/1/2023/08/18/best-tours.jpg"
            alt="Airplane"
            className="rounded-circle"
            style={{ width: "70px", height: "70px", marginBottom: "15px" }}
          />
          <div className="p-2">
            <h3
              style={{
                color: "#18181b",
                fontSize: "1.25rem",
                fontFamily: "Roboto, sans-serif",
                fontWeight: "400",
              }}
            >
              “Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean.”
            </h3>
            <p style={{ color: "#6c757d" }}>— Clare Gupta</p>
          </div>
        </div>
      </div>

      {/* Feature 3 */}
      <div
        className="col-sm-12 col-md-6 col-lg-4 mb-4 aos-init aos-animate"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        <div className="d-block text-center">
          <img
            src="https://travelomoon.com//uploads/0000/1/2023/08/18/best-tours.jpg"
            alt="Airplane"
            className="rounded-circle"
            style={{ width: "70px", height: "70px", marginBottom: "15px" }}
          />
          <div className="p-2">
            <h3
              style={{
                color: "#18181b",
                fontSize: "1.25rem",
                fontFamily: "Roboto, sans-serif",
                fontWeight: "400",
              }}
            >
              “Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean.”
            </h3>
            <p style={{ color: "#6c757d" }}>— Clare Gupta</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  );
};

export default Contact;

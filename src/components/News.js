import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // AOS style
import Header from './Header';

const News = () => {
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
      <div class="container mt-5  ">
        <div class="row mb-3 text-center">
          <div class="col-sm-8 themed-grid-col">
            <div class="row mb-3 text-center">
              <div class="col-sm-6  themed-grid-col"><div className="card shadow-sm" style={{ border: 'none', overflow: 'hidden' }}>
                <img
                  src="https://c4.wallpaperflare.com/wallpaper/485/860/1017/photo-taken-on-brown-terrain-wallpaper-preview.jpg"
                  className="card-img-top"
                  alt="Vince Richardson"
                  style={{ width: '100%', height: '300px' }}
                />
                <div className="media-body mt-3 mb-3 text-center">
                  <span className="meta-post" style={{ fontSize: '14px', color: 'gray' }}>February 26, 2018</span>
                  <h2 className="mt-2">
                    <button
                      style={{
                        textDecoration: 'none',
                        color: 'black',
                        fontWeight: 'bold',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                      }}
                    >
                      Free Template by Colorlib
                    </button>
                  </h2>
                </div>
              </div>
              </div>
              <div class="col-6  themed-grid-col"><div className="card shadow-sm" style={{ border: 'none', overflow: 'hidden' }}>
                <img
                  src="https://static.vecteezy.com/system/resources/thumbnails/036/751/167/small/ai-generated-portrait-of-a-handsome-ceo-smiling-photo.jpg"
                  className="card-img-top"
                  alt="Vince Richardson"
                  style={{ width: '100%', height: '300px' }}
                />
                <div className="media-body mt-3 mb-3 text-center">
                  <span className="meta-post" style={{ fontSize: '14px', color: 'gray' }}>February 26, 2018</span>
                  <h2 className="mt-2">
                    <button
                      style={{
                        textDecoration: 'none',
                        color: 'black',
                        fontWeight: 'bold',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                      }}
                    >
                      Free Template by Colorlib
                    </button>
                  </h2>
                </div>
              </div>
              </div>
            </div>
            <div class="row mb-3 text-center">
              <div class="col-sm-6  themed-grid-col"><div className="card shadow-sm" style={{ border: 'none', overflow: 'hidden' }}>
                <img
                  src="https://c4.wallpaperflare.com/wallpaper/485/860/1017/photo-taken-on-brown-terrain-wallpaper-preview.jpg"
                  className="card-img-top"
                  alt="Vince Richardson"
                  style={{ width: '100%', height: '300px' }}
                />
                <div className="media-body mt-3 mb-3 text-center">
                  <span className="meta-post" style={{ fontSize: '14px', color: 'gray' }}>February 26, 2018</span>
                  <h2 className="mt-2">
                    <button
                      style={{
                        textDecoration: 'none',
                        color: 'black',
                        fontWeight: 'bold',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                      }}
                    >
                      Free Template by Colorlib
                    </button>
                  </h2>
                </div>
              </div>
              </div>
              <div class="col-6  themed-grid-col"><div className="card shadow-sm" style={{ border: 'none', overflow: 'hidden' }}>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPCVjuIOYGCAzf46Yo9Ejs7lPCpKNJGAhBWA&s"
                  className="card-img-top"
                  alt="Vince Richardson"
                  style={{ width: '100%', height: '300px' }}
                />
                <div className="media-body mt-3 mb-3 text-center">
                  <span className="meta-post" style={{ fontSize: '14px', color: 'gray' }}>February 26, 2018</span>
                  <h2 className=" p-2">
                    <button
                      style={{
                        textDecoration: 'none',
                        color: 'black',
                        fontWeight: 'bold',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                      }}
                    >
                      Free Template by Colorlib
                    </button>
                  </h2>
                </div>
              </div>
              </div>
            </div>
          </div>
          <div class="col-6 col-lg-4 themed-grid-col">

            <div class="m-2 p-3">
              <form class="col-12 col-lg-auto mb-3 mb-lg-0" role="search">
                <input type="search" class="form-control" placeholder="Search..." aria-label="Search"></input>
              </form>

            </div>

            <div class="m-2 p-2">
                      <div class="m-2 p-2 text-left font-bold"> Popular Post</div>
                      <div className="col-sm-12 ">
              <div className="card shadow-sm p-2" style={{ border: 'none', display: 'flex', flexDirection: 'row', overflow: 'hidden' }}>
                {/* Image Section */}
                <img
                  src="https://c4.wallpaperflare.com/wallpaper/485/860/1017/photo-taken-on-brown-terrain-wallpaper-preview.jpg"
                  className="card-img-top"
                  alt="Vince Richardson"
                  style={{ width: '50%', height: '100px', objectFit: 'cover' }}
                />

                {/* Text Section */}
                <div className="media-body mt-3 mb-3 text-center" style={{ paddingLeft: '20px' }}>
                  <span className="meta-post" style={{ fontSize: '14px', color: 'gray' }}>February 26, 2018</span>
                  <h2 className="">
                    <button
                      style={{
                        textDecoration: 'none',
                        color: 'black',
                        fontWeight: 'bold',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        fontSize: '14px'
                      }}
                    >
                      Free Template by Colorlib
                    </button>
                  </h2>
                </div>
              </div>
            </div><div className="col-sm-12 ">
              <div className="card shadow-sm p-2" style={{ border: 'none', display: 'flex', flexDirection: 'row', overflow: 'hidden' }}>
                {/* Image Section */}
                <img
                  src="https://c4.wallpaperflare.com/wallpaper/485/860/1017/photo-taken-on-brown-terrain-wallpaper-preview.jpg"
                  className="card-img-top"
                  alt="Vince Richardson"
                  style={{ width: '50%', height: '100px', objectFit: 'cover' }}
                />

                {/* Text Section */}
                <div className="media-body mt-3 mb-3 text-center" style={{ paddingLeft: '20px' }}>
                  <span className="meta-post" style={{ fontSize: '14px', color: 'gray' }}>February 26, 2018</span>
                  <h2 className="">
                    <button
                      style={{
                        textDecoration: 'none',
                        color: 'black',
                        fontWeight: 'bold',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        fontSize: '14px'
                      }}
                    >
                      Free Template by Colorlib
                    </button>
                  </h2>
                </div>
              </div>
            </div><div className="col-sm-12 ">
              <div className="card shadow-sm p-2" style={{ border: 'none', display: 'flex', flexDirection: 'row', overflow: 'hidden' }}>
                {/* Image Section */}
                <img
                  src="https://c4.wallpaperflare.com/wallpaper/485/860/1017/photo-taken-on-brown-terrain-wallpaper-preview.jpg"
                  className="card-img-top"
                  alt="Vince Richardson"
                  style={{ width: '50%', height: '100px', objectFit: 'cover' }}
                />

                {/* Text Section */}
                <div className="media-body mt-3 mb-3 text-center" style={{ paddingLeft: '20px' }}>
                  <span className="meta-post" style={{ fontSize: '14px', color: 'gray' }}>February 26, 2018</span>
                  <h2 className="">
                    <button
                      style={{
                        textDecoration: 'none',
                        color: 'black',
                        fontWeight: 'bold',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        fontSize: '14px'
                      }}
                    >
                      Free Template by Colorlib
                    </button>
                  </h2>
                </div>
              </div>
            </div><div className="col-sm-12 ">
              <div className="card shadow-sm p-2" style={{ border: 'none', display: 'flex', flexDirection: 'row', overflow: 'hidden' }}>
                {/* Image Section */}
                <img
                  src="https://c4.wallpaperflare.com/wallpaper/485/860/1017/photo-taken-on-brown-terrain-wallpaper-preview.jpg"
                  className="card-img-top"
                  alt="Vince Richardson"
                  style={{ width: '50%', height: '100px', objectFit: 'cover' }}
                />

                {/* Text Section */}
                <div className="media-body mt-3 mb-3 text-center" style={{ paddingLeft: '20px' }}>
                  <span className="meta-post" style={{ fontSize: '14px', color: 'gray' }}>February 26, 2018</span>
                  <h2 className="">
                    <button
                      style={{
                        textDecoration: 'none',
                        color: 'black',
                        fontWeight: 'bold',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        fontSize: '14px'
                      }}
                    >
                      Free Template by Colorlib
                    </button>
                  </h2>
                </div>
              </div>
            </div><div className="col-sm-12 ">
              <div className="card shadow-sm p-2" style={{ border: 'none', display: 'flex', flexDirection: 'row', overflow: 'hidden' }}>
                {/* Image Section */}
                <img
                  src="https://c4.wallpaperflare.com/wallpaper/485/860/1017/photo-taken-on-brown-terrain-wallpaper-preview.jpg"
                  className="card-img-top"
                  alt="Vince Richardson"
                  style={{ width: '50%', height: '100px', objectFit: 'cover' }}
                />

                {/* Text Section */}
                <div className="media-body mt-3 mb-3 text-center" style={{ paddingLeft: '20px' }}>
                  <span className="meta-post" style={{ fontSize: '14px', color: 'gray' }}>February 26, 2018</span>
                  <h2 className="">
                    <button
                      style={{
                        textDecoration: 'none',
                        color: 'black',
                        fontWeight: 'bold',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        fontSize: '14px'
                      }}
                    >
                      Free Template by Colorlib
                    </button>
                  </h2>
                </div>
              </div>
            </div>
            </div>


          </div>
        </div>

        <div class="col-md-12 pb-5 mt-mb-5 pl">
                <nav role="navigation">
                  <ul class="pagination custom-pagination pagination-lg">
                    <li class="page-item active">
                      <a class="page-link" href="#">1</a>
                    </li>
                    <li class="page-item ">
                      <a class="page-link " href="#">2</a>
                    </li>
                    <li class="page-item ">
                      <a class="page-link" href="#">3</a>
                    </li>
                  </ul>
                </nav>
              </div>

      </div>

    </>
  );
};

export default News;

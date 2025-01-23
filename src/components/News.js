import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // AOS style
import Header from "./Header";

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
      {/* Hero Section */}
      <section
        className="site-hero overlay relative"
        style={{
          backgroundImage:
            "url(https://media.gadventures.com/media-server/cache/48/50/4850d7b3b1aacc51b6a0182de9ea2c35.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "50vh",
        }}
        data-aos="fade-in"
      >
        <Header />
        <div className="container mx-auto flex justify-center items-center h-full">
          <div className="text-center">
            <h1
              className="text-white font-extrabold mb-4"
              style={{
                fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                lineHeight: "1.2",
              }}
              data-aos="fade-up"
            >
             Blog
            </h1>
            <p
              className="text-white text-lg font-medium"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              A free template by Colorlib. Download and share!
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap -mx-3">
          {/* Main Section */}
          <div className="w-full lg:w-8/12 px-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[...Array(4)].map((_, index) => (
                <div key={index} className="card shadow-md rounded-lg overflow-hidden">
                  <img
                    src="https://c4.wallpaperflare.com/wallpaper/485/860/1017/photo-taken-on-brown-terrain-wallpaper-preview.jpg"
                    alt="News"
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-4">
                    <span className="text-sm text-gray-500">
                      February 26, 2018
                    </span>
                    <h2 className="mt-2 font-bold text-lg">
                      <button className="hover:text-yellow-500 transition-all duration-200">
                        Free Template by Colorlib
                      </button>
                    </h2>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="w-full lg:w-4/12 px-3 mt-8 lg:mt-0">
            {/* Search Bar */}
            <form className="mb-8">
              <input
                type="search"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="Search..."
              />
            </form>

            {/* Popular Posts */}
            <h3 className="text-lg font-bold mb-4">Popular Posts</h3>
            {[...Array(5)].map((_, index) => (
              <div
                key={index}
                className="flex items-center mb-4 p-3 bg-white shadow-sm rounded-md"
              >
                <img
                  src="https://c4.wallpaperflare.com/wallpaper/485/860/1017/photo-taken-on-brown-terrain-wallpaper-preview.jpg"
                  alt="Post"
                  className="w-20 h-20 object-cover rounded-md"
                />
                <div className="ml-4">
                  <span className="text-sm text-gray-500">February 26, 2018</span>
                  <h4 className="mt-2 text-md font-semibold hover:text-yellow-500">
                    <button className="focus:outline-none">
                      Free Template by Colorlib
                    </button>
                  </h4>
                </div>
              </div>
            ))}

            {/* Categories */}
            <div class="mt-4">
  <h3 class="fs-5 fw-bold mb-3">Categories</h3>
  <ul class="list-unstyled">
    <li class="mb-2">
      <a href="#" class="text-secondary text-decoration-none d-flex justify-content-between">
        <span>Events</span> <span class="text-muted">(12)</span>
      </a>
    </li>
    <li class="mb-2">
      <a href="#" class="text-secondary text-decoration-none d-flex justify-content-between">
        <span>Resto bar</span> <span class="text-muted">(4)</span>
      </a>
    </li>
    <li class="mb-2">
      <a href="#" class="text-secondary text-decoration-none d-flex justify-content-between">
        <span>Celebration</span> <span class="text-muted">(23)</span>
      </a>
    </li>
    <li class="mb-2">
      <a href="#" class="text-secondary text-decoration-none d-flex justify-content-between">
        <span>Promos</span> <span class="text-muted">(8)</span>
      </a>
    </li>
  </ul>
</div>

          </div>
        </div>

        {/* Pagination */}
        <div className="mt-8 flex justify-center">
          <ul className="pagination flex">
            {[1, 2, 3].map((page) => (
              <li
                key={page}
                className="mx-1 bg-white border rounded-md shadow-sm hover:bg-yellow-500 hover:text-white transition-all"
              >
                <a
                  href="#"
                  className={`px-4 py-2 block ${
                    page === 1 ? "bg-yellow-500 text-white" : ""
                  }`}
                >
                  {page}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default News;

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
      {/* Hero Section */}
      <div
        className="relative h-[600px] bg-cover bg-center"
        style={{
          backgroundImage:
            'url(https://media.gadventures.com/media-server/cache/48/50/4850d7b3b1aacc51b6a0182de9ea2c35.jpg)',
        }}
      >
        <Header />
        <div
  className="top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center"
  data-aos="fade-up"
  style={{ marginTop: "100px" }}
>
          <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 hover:text-yellow-400 hover:scale-110 transition-all duration-300"  >
            News
          </h1>
          <p className="text-white text-lg sm:text-xl font-medium hover:text-gray-300 transition-all duration-300">
            A free template by Colorlib. Download and share!
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="flex flex-wrap -mx-3">
          {/* Main Section */}
          <div className="w-full lg:w-8/12 px-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[...Array(4)].map((_, index) => (
                <div key={index} className="card shadow-sm overflow-hidden">
                  <img
                    src="https://c4.wallpaperflare.com/wallpaper/485/860/1017/photo-taken-on-brown-terrain-wallpaper-preview.jpg"
                    alt="News"
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-4">
                    <span className="text-sm text-gray-500">February 26, 2018</span>
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
                    <button className="focus:outline-none">Free Template by Colorlib</button>
                  </h4>
                </div>
              </div>
            ))}
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

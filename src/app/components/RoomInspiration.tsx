import React from "react";

const RoomInspiration = () => {
  return (
    <section className="w-full bg-[#FBF9F6] py-16">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 px-6 items-center">
        {/* Left Section - Text */}
        <div className="flex flex-col space-y-6">
          <h1 className="text-4xl font-bold text-[#333] leading-snug">
            50+ Beautiful rooms inspiration
          </h1>
          <p className="text-lg text-[#666]">
            Our designer already made a lot of beautiful prototypes of rooms
            that inspire you.
          </p>
          <button className="w-40 py-3 bg-[#AC7A42] text-white font-semibold rounded-md hover:bg-[#8e6936]">
            Explore More
          </button>
        </div>

        {/* Right Section - Images */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Image 1 */}
          <div className="relative group rounded-lg overflow-hidden shadow-lg">
            <img
              src="/images/Rectangle 24.jpg"
              alt="Bedroom Inspiration"
              className="w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute bottom-4 left-4 bg-white px-4 py-2 rounded-md shadow-md">
              <h4 className="text-sm text-gray-600">01 — Bedroom</h4>
              <h3 className="text-lg font-semibold text-gray-800">
                Inner Peace
              </h3>
            </div>
          </div>

          {/* Image 2 */}
          <div className="relative group rounded-lg overflow-hidden shadow-lg">
            <img
              src="/images/Rectangle 25.jpg"
              alt="Living Room Inspiration"
              className="w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute bottom-4 left-4 bg-white px-4 py-2 rounded-md shadow-md">
              <h4 className="text-sm text-gray-600">02 — Living Room</h4>
              <h3 className="text-lg font-semibold text-gray-800">
                Modern Comfort
              </h3>
            </div>
          </div>

          {/* Image 3 */}
          <div className="relative group rounded-lg overflow-hidden shadow-lg">
            <img
              src="/images/Rectangle 26.jpg"
              alt="Dining Room Inspiration"
              className="w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute bottom-4 left-4 bg-white px-4 py-2 rounded-md shadow-md">
              <h4 className="text-sm text-gray-600">03 — Dining Room</h4>
              <h3 className="text-lg font-semibold text-gray-800">
                Family Time
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoomInspiration;

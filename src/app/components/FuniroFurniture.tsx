import React from "react";

const FuniroFurniture = () => {
  return (
    <section className="w-full bg-[#F9F9F9] py-16">
      <div className="max-w-[1440px] mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-2xl font-medium text-gray-700">
            Share your setup with
          </h2>
          <h1 className="text-4xl font-bold text-black mt-2">
            #FuniroFurniture
          </h1>
        </div>

        {/* Collage Layout */}
        <div className="relative grid grid-cols-12 gap-4">
          {/* Top Left Image */}
          <div className="col-span-5">
            <img
              src="/images/Rectangle 38.jpg"
              alt="Setup 1"
              className="w-full h-[350px] object-cover rounded-lg shadow-md"
            />
          </div>

          {/* Top Right Large Image */}
          <div className="col-span-7 relative">
            <img
              src="/images/scandinavian-interior-mockup-wall-decal-background 1.jpg"
              alt="Setup 2"
              className="w-full h-[350px] object-cover rounded-lg shadow-md"
            />
            
          </div>

          {/* Bottom Row - Left Column */}
          <div className="col-span-4 space-y-4">
            <img
              src="/images/Rectangle 40.jpg"
              alt="Setup 3"
              className="w-full h-[160px] object-cover rounded-lg shadow-md"
            />
            <img
              src="/images/Rectangle 37.jpg"
              alt="Setup 4"
              className="w-full h-[160px] object-cover rounded-lg shadow-md"
            />
          </div>

          {/* Bottom Center Large Image */}
          <div className="col-span-4">
            <img
              src="/images/Rectangle 43.jpg"
              alt="Setup 5"
              className="w-full h-[350px] object-cover rounded-lg shadow-md"
            />
          </div>

          {/* Bottom Row - Right Column */}
          <div className="col-span-4 space-y-4">
            <img
              src="/images/Rectangle 44.jpg"
              alt="Setup 6"
              className="w-full h-[160px] object-cover rounded-lg shadow-md"
            />
            <img
              src="/images/Rectangle 45.jpg"
              alt="Setup 7"
              className="w-full h-[160px] object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FuniroFurniture;

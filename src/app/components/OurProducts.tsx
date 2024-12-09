const OurProducts = () => {
    return (
      <section className="w-full py-16 bg-[#f9f9f9]">
        {/* Section Title */}
        <div className="relative w-full flex items-center justify-center bg-white flex-col mt-8">
          <h2 className="font-poppins text-[32px] font-bold leading-[48px] text-[#333] mb-4 text-center">
            Our Products
          </h2>
        </div>
  
        {/* Product Cards Container */}
        <div className="max-w-[1440px] mx-auto grid grid-cols-2 sm:grid-cols-4 gap-8 px-4">
          {/* Card 1 */}
          <div className="relative w-[320px] h-[400px] bg-white shadow-md rounded-lg overflow-hidden">
            <img
              src="/images/image 1.png" // Replace with the actual image path
              alt="Syltherine"
              className="w-full h-[60%] object-cover"
            />
            <div className="text-center py-4">
              <h3 className="text-lg font-semibold">Syltherine</h3>
              <p className="text-sm text-gray-600">Stylish cafe chair</p>
              <p className="text-lg font-bold text-[#AC7A42]">Rp 2.500.000</p>
              <div className="absolute top-2 right-2 bg-[#F9F9F9] text-xs font-bold text-[#AC7A42] px-2 py-1 rounded-full">
                -30%
              </div>
              <div className="absolute bottom-2 left-2 right-2 flex justify-between text-xs">
                <button className="bg-[#AC7A42] text-white px-4 py-2 rounded-full">Add to cart</button>
                <div className="flex gap-2">
                  <button className="bg-gray-200 px-2 py-1 rounded-full">Share</button>
                  <button className="bg-gray-200 px-2 py-1 rounded-full">Compare</button>
                  <button className="bg-gray-200 px-2 py-1 rounded-full">Like</button>
                </div>
              </div>
            </div>
          </div>
  
          {/* Card 2 */}
          <div className="relative w-[320px] h-[400px] bg-white shadow-md rounded-lg overflow-hidden">
            <img
              src="/images/Overlay.png" // Replace with the actual image path
              alt="Leviosa"
              className="w-full h-[60%] object-cover"
            />
            <div className="text-center py-4">
              <h3 className="text-lg font-semibold">Leviosa</h3>
              <p className="text-sm text-gray-600">Stylish cafe chair</p>
              <p className="text-lg font-bold text-[#AC7A42]">Rp 2.500.000</p>
              <div className="absolute top-2 right-2 bg-[#F9F9F9] text-xs font-bold text-[#AC7A42] px-2 py-1 rounded-full">
                -50%
              </div>
              <div className="absolute bottom-2 left-2 right-2 flex justify-between text-xs">
                <button className="bg-[#AC7A42] text-white px-4 py-2 rounded-full">Add to cart</button>
                <div className="flex gap-2">
                  <button className="bg-gray-200 px-2 py-1 rounded-full">Share</button>
                  <button className="bg-gray-200 px-2 py-1 rounded-full">Compare</button>
                  <button className="bg-gray-200 px-2 py-1 rounded-full">Like</button>
                </div>
              </div>
            </div>
          </div>
  
          {/* Card 3 */}
          <div className="relative w-[320px] h-[400px] bg-white shadow-md rounded-lg overflow-hidden">
            <img
              src="/images/image 3.png" // Replace with the actual image path
              alt="Lolito"
              className="w-full h-[60%] object-cover"
            />
            <div className="text-center py-4">
              <h3 className="text-lg font-semibold">Lolito</h3>
              <p className="text-sm text-gray-600">Luxury big sofa</p>
              <p className="text-lg font-bold text-[#AC7A42]">Rp 7.000.000</p>
              <div className="absolute top-2 right-2 bg-[#F9F9F9] text-xs font-bold text-[#AC7A42] px-2 py-1 rounded-full">
                -50%
              </div>
              <div className="absolute bottom-2 left-2 right-2 flex justify-between text-xs">
                <button className="bg-[#AC7A42] text-white px-4 py-2 rounded-full">Add to cart</button>
                <div className="flex gap-2">
                  <button className="bg-gray-200 px-2 py-1 rounded-full">Share</button>
                  <button className="bg-gray-200 px-2 py-1 rounded-full">Compare</button>
                  <button className="bg-gray-200 px-2 py-1 rounded-full">Like</button>
                </div>
              </div>
            </div>
          </div>
  
          {/* Card 4 */}
          <div className="relative w-[320px] h-[400px] bg-white shadow-md rounded-lg overflow-hidden">
            <img
              src="/images/image 4.png" // Replace with the actual image path
              alt="Respira"
              className="w-full h-[60%] object-cover"
            />
            <div className="text-center py-4">
              <h3 className="text-lg font-semibold">Respira</h3>
              <p className="text-sm text-gray-600">Outdoor bar table and stool</p>
              <p className="text-lg font-bold text-[#AC7A42]">Rp 500.000</p>
              <div className="absolute top-2 right-2 bg-[#F9F9F9] text-xs font-bold text-[#AC7A42] px-2 py-1 rounded-full">
                New
              </div>
              <div className="absolute bottom-2 left-2 right-2 flex justify-between text-xs">
                <button className="bg-[#AC7A42] text-white px-4 py-2 rounded-full">Add to cart</button>
                <div className="flex gap-2">
                  <button className="bg-gray-200 px-2 py-1 rounded-full">Share</button>
                  <button className="bg-gray-200 px-2 py-1 rounded-full">Compare</button>
                  <button className="bg-gray-200 px-2 py-1 rounded-full">Like</button>
                </div>
              </div>
            </div>
          </div>
  
          {/* Card 5 */}
          <div className="relative w-[320px] h-[400px] bg-white shadow-md rounded-lg overflow-hidden">
            <img
              src="/images/image 4.png" // Replace with the actual image path
              alt="Grifo"
              className="w-full h-[60%] object-cover"
            />
            <div className="text-center py-4">
              <h3 className="text-lg font-semibold">Grifo</h3>
              <p className="text-sm text-gray-600">Night lamp</p>
              <p className="text-lg font-bold text-[#AC7A42]">Rp 150.000</p>
              <div className="absolute bottom-2 left-2 right-2 flex justify-between text-xs">
                <button className="bg-[#AC7A42] text-white px-4 py-2 rounded-full">Add to cart</button>
                <div className="flex gap-2">
                  <button className="bg-gray-200 px-2 py-1 rounded-full">Share</button>
                  <button className="bg-gray-200 px-2 py-1 rounded-full">Compare</button>
                  <button className="bg-gray-200 px-2 py-1 rounded-full">Like</button>
                </div>
              </div>
            </div>
          </div>
  
          {/* Card 6 */}
          <div className="relative w-[320px] h-[400px] bg-white shadow-md rounded-lg overflow-hidden">
            <img
              src="/images/image 6.png" // Replace with the actual image path
              alt="Muggo"
              className="w-full h-[60%] object-cover"
            />
            <div className="text-center py-4">
              <h3 className="text-lg font-semibold">Muggo</h3>
              <p className="text-sm text-gray-600">Small mug</p>
              <p className="text-lg font-bold text-[#AC7A42]">Rp 150.000</p>
              <div className="absolute bottom-2 left-2 right-2 flex justify-between text-xs">
                <button className="bg-[#AC7A42] text-white px-4 py-2 rounded-full">Add to cart</button>
                <div className="flex gap-2">
                  <button className="bg-gray-200 px-2 py-1 rounded-full">Share</button>
                  <button className="bg-gray-200 px-2 py-1 rounded-full">Compare</button>
                  <button className="bg-gray-200 px-2 py-1 rounded-full">Like</button>
                </div>
              </div>
            </div>
          </div>
  
          {/* Card 7 */}
          <div className="relative w-[320px] h-[400px] bg-white shadow-md rounded-lg overflow-hidden">
            <img
              src="/images/image 7.png" // Replace with the actual image path
              alt="Pingky"
              className="w-full h-[60%] object-cover"
            />
            <div className="text-center py-4">
              <h3 className="text-lg font-semibold">Pingky</h3>
              <p className="text-sm text-gray-600">Cute bed set</p>
              <p className="text-lg font-bold text-[#AC7A42]">Rp 7.000.000</p>
              <div className="absolute bottom-2 left-2 right-2 flex justify-between text-xs">
                <button className="bg-[#AC7A42] text-white px-4 py-2 rounded-full">Add to cart</button>
                <div className="flex gap-2">
                  <button className="bg-gray-200 px-2 py-1 rounded-full">Share</button>
                  <button className="bg-gray-200 px-2 py-1 rounded-full">Compare</button>
                  <button className="bg-gray-200 px-2 py-1 rounded-full">Like</button>
                </div>
              </div>
            </div>
          </div>
  
          {/* Card 8 */}
          <div className="relative w-[320px] h-[400px] bg-white shadow-md rounded-lg overflow-hidden">
            <img
              src="/images/Images.png" // Replace with the actual image path
              alt="Potty"
              className="w-full h-[60%] object-cover"
            />
            <div className="text-center py-4">
              <h3 className="text-lg font-semibold">Potty</h3>
              <p className="text-sm text-gray-600">Minimalist flower pot</p>
              <p className="text-lg font-bold text-[#AC7A42]">Rp 500.000</p>
              <div className="absolute bottom-2 left-2 right-2 flex justify-between text-xs">
                <button className="bg-[#AC7A42] text-white px-4 py-2 rounded-full">Add to cart</button>
                <div className="flex gap-2">
                  <button className="bg-gray-200 px-2 py-1 rounded-full">Share</button>
                  <button className="bg-gray-200 px-2 py-1 rounded-full">Compare</button>
                  <button className="bg-gray-200 px-2 py-1 rounded-full">Like</button>
                </div>
              </div>
            </div>
          </div>
  
        </div>
  
        {/* Show More Button */}
        <div className="text-center mt-8">
          <button className="bg-[#AC7A42] text-white px-6 py-3 rounded-full">Show More</button>
        </div>
      </section>
    );
  };
  
  export default OurProducts;
  
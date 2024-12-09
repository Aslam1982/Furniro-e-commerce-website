const BrowseRange = () => {
    return (
      <section className="w-full py-8 bg-[#f9f9f9]">
        {/* Section Title */}
        <div className="relative w-full flex items-center justify-center bg-white flex-col mt-8">
          <h2
            className="font-poppins text-[32px] font-bold leading-[48px] text-[#333] mb-1"
            style={{
              width: "300px",
              height: "48px",
              textAlign: "center",
              textUnderlinePosition: "from-font",
              textDecorationSkipInk: "none",
            }}
          >
            Browse The Range
          </h2>
          <p className="text-lg text-gray-800 text-center mb-10"> {/* Added mb-8 for more gap between paragraph and cards */}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
  
        {/* Cards Container */}
        <div className="max-w-[1440px] mx-auto flex justify-center gap-8 px-4">
          {/* Card 1 */}
          <div className="w-[320px] h-[600px] bg-white shadow-md rounded-lg overflow-hidden">
            <img
              src="/images/image 106.jpg" 
              alt="Dining"
              className="w-full h-[75%] object-cover"
            />
            <div className="text-center py-4">
              <h3 className="text-lg font-semibold">Dining</h3>
            </div>
          </div>
  
          {/* Card 2 */}
          <div className="w-[320px] h-[600px] bg-white shadow-md rounded-lg overflow-hidden">
            <img
              src="/images/image 100.jpg" 
              alt="Living"
              className="w-full h-[75%] object-cover"
            />
            <div className="text-center py-4">
              <h3 className="text-lg font-semibold">Living</h3>
            </div>
          </div>
  
          {/* Card 3 */}
          <div className="w-[320px] h-[600px] bg-white shadow-md rounded-lg overflow-hidden">
            <img
              src="/images/image 101.jpg" // Replace with your actual image path
              alt="Bedroom"
              className="w-full h-[75%] object-cover"
            />
            <div className="text-center py-4">
              <h3 className="text-lg font-semibold">Bedroom</h3>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default BrowseRange;
  
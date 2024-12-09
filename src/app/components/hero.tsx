const Hero = () => {
  return (
    <div className="relative w-full h-screen pt-[100px] flex items-center justify-center">
      {/* Background Image */}
      <img
        src="/images/scandinavian-interior-mockup-wall-decal-background 1.jpg" // Replace with your actual image path
        alt="Banner"
        className="absolute inset-0 w-full h-full object-cover opacity-100"
      />

      {/* Content Section */}
      <div className="absolute right-[16%] top-[60%] transform -translate-y-1/2 bg-[#FFF4E9] max-w-md p-8 shadow-lg z-20">
        {/* Tag */}
        <div className="mb-4">
        <span
  className="text-[16px] font-semibold uppercase text-black px-2 py-1 rounded-full"
  style={{
    width: "123px",
    height: "24px",
    lineHeight: "24px",
    letterSpacing: "3px",
    textAlign: "left",
    textUnderlinePosition: "from-font",
    textDecorationSkipInk: "none",
    opacity: 1, // Adjust as needed
  }}
>
  New Arrival
</span>
        </div>

        {/* Title */}
        <h1
  className="text-[52px] font-bold text-left mb-4"
  style={{
    width: "559px",
    height: "127px",
    lineHeight: "65px",
    textUnderlinePosition: "from-font",
    textDecorationSkipInk: "none",
color: "#AC7A42",
  }}
>
  Discover Our <br />
  <span>New Collection</span>
</h1>

        {/* Description */}
        <p
  className="text-[16px] text-left mb-6"
  style={{
    width: "546px",
    height: "24px",
    color: "black",
    fontFamily: "Poppins",
    fontSize: "15px",
    fontWeight: 700,
    lineHeight: "18px",
    opacity: "1", // Assuming opacity should be visible
  }}
>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut <br /> <span> elit tellus, luctus nec ullamcorper mattis. </span>
</p>

        {/* Button */}
        <button
  className="bg-[#AC7A42] text-white px-6 py-3 shadow hover:bg-opacity-90"
  style={{
    fontFamily: "Poppins",
    fontSize: "10px",
    fontWeight: 700,
    lineHeight: "24px",
    textAlign: "left",
    textUnderlinePosition: "from-font",
    textDecorationSkipInk: "none",
  }}
>
  BUY NOW
</button>
      </div>
    </div>
  );
};

export default Hero;

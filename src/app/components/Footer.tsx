import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#F9F9F9] py-12">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="grid grid-cols-12 gap-8">
          {/* Logo and Address */}
          <div className="col-span-4">
          <h2
  className="font-poppins text-[24px] font-bold leading-[36px] text-black mb-4"
  style={{
    textAlign: "left",
    textUnderlinePosition: "from-font",
    textDecorationSkipInk: "none",
  }}
>
  Funiro.
</h2>
            <p className="text-gray-600 text-sm">
              400 University Drive Suite 200 Coral Gables,
              <br />
              FL 33134 USA
            </p>
          </div>

          {/* Links Section */}
          <div className="col-span-2">
            <h3 className="font-medium text-sm text-black mb-4">Links</h3>
            <ul className="space-y-2 text-sm text-gray-700">
            <ul>
  <li>
    <a
      href="#"
      className="font-poppins text-[16px] font-bold leading-[24px] text-black text-left hover:underline"
      style={{
        textUnderlinePosition: "from-font",
        textDecorationSkipInk: "none",
      }}
    >
      Home
    </a>
  </li>
  <li>
    <a
      href="#"
      className="font-poppins text-[16px] font-bold leading-[24px] text-black text-left hover:underline"
      style={{
        textUnderlinePosition: "from-font",
        textDecorationSkipInk: "none",
      }}
    >
      Shop
    </a>
  </li>
  <li>
    <a
      href="#"
      className="font-poppins text-[16px] font-bold leading-[24px] text-black text-left hover:underline"
      style={{
        textUnderlinePosition: "from-font",
        textDecorationSkipInk: "none",
      }}
    >
      About
    </a>
  </li>
  <li>
    <a
      href="#"
      className="font-poppins text-[16px] font-bold leading-[24px] text-black text-left hover:underline"
      style={{
        textUnderlinePosition: "from-font",
        textDecorationSkipInk: "none",
      }}
    >
      Contact
    </a>
  </li>
</ul>


            </ul>
          </div>

          {/* Help Section */}
<div className="col-span-2">
  <h3 className="font-poppins text-sm text-black mb-4">Help</h3>
  <ul className="space-y-2">
    <li>
      <a
        href="#"
        className="font-poppins text-[16px] font-bold text-black leading-[24px] hover:underline"
        style={{
          textUnderlinePosition: "from-font",
          textDecorationSkipInk: "none",
        }}
      >
        Payment Options
      </a>
    </li>
    <li>
      <a
        href="#"
        className="font-poppins text-[16px] font-bold text-black leading-[24px] hover:underline"
        style={{
          textUnderlinePosition: "from-font",
          textDecorationSkipInk: "none",
        }}
      >
        Returns
      </a>
    </li>
    <li>
      <a
        href="#"
        className="font-poppins text-[16px] font-bold text-black leading-[24px] hover:underline"
        style={{
          textUnderlinePosition: "from-font",
          textDecorationSkipInk: "none",
        }}
      >
        Privacy Policies
      </a>
    </li>
  </ul>
</div>


          {/* Newsletter Section */}
          <div className="col-span-4">
            <h3 className="font-medium text-sm text-black mb-4">Newsletter</h3>
            <div className="flex items-center space-x-4">
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-gray-500"
              />
              <button className="px-6 py-2 text-black font-bold  text-lg underline">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t border-gray-300 pt-4 text-center">
          <p className="text-sm text-gray-500">2023 Funiro. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

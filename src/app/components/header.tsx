import React from "react";

const Header = () => {
  return (
    <div className="relative">
      {/* Header */}
      <header className="w-full h-[100px] bg-white fixed top-0 left-0 z-50 flex items-center justify-between px-4">
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          {/* Logo Image */}
          <img
            src="/images/Meubel House_Logos-05.jpg"
            alt="Logo"
            className="w-[50px] h-[32px] opacity-100"
          />
          {/* Logo Text */}
          <div
            className="w-[130px] h-[41px] gap-0 opacity-100 font-montserrat text-[34px] 
            font-bold leading-[41.45px] text-left decoration-black decoration-underline"
          >
            Furniro
          </div>
        </div>

        {/* Navbar */}
        <nav className="flex gap-20 text-black">
          <a href="#home" className="hover:underline">
            Home
          </a>
          <a href="#shop" className="hover:underline">
            Shop
          </a>
          <a href="#blog" className="hover:underline">
            Blog
          </a>
          <a href="#contact" className="hover:underline">
            Contact
          </a>
        </nav>

        {/* Icons Section */}
        <div className="flex items-center gap-10">
          {/* Account Alert Icon */}
          <img
            src="/images/mdi_account-alert-outline.jpg"
            alt="Account Alert"
            className="w-[23.33px] h-[18.67px] opacity-100"
          />
          {/* Search Icon */}
          <img
            src="/images/akar-icons_search.png"
            alt="Search Icon"
            className="w-[23.33px] h-[18.67px] opacity-100"
          />
          {/* Heart Icon */}
          <img
            src="/images/akar-icons_heart.png"
            alt="Heart Icon"
            className="w-[23.33px] h-[18.67px] opacity-100"
          />
          {/* Shopping Cart Icon */}
          <img
            src="/images/ant-design_shopping-cart-outlined.png"
            alt="Shopping Cart Icon"
            className="w-[23.33px] h-[18.67px] opacity-100"
          />
        </div>
      </header>
    </div>
  );
};

export default Header;

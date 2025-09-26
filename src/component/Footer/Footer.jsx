import React from 'react';
import FacebookImg from '../../assets/facebook.png'
import LinkedImg from '../../assets/linkedin.png'
import TwitterImg from '../../assets/twitter.png'

const Footer = () => {
    return (
        <footer className= "bg-black text-white py-10 mt-10 ">
  <div className="   grid grid-cols-1 md:grid-cols-5 gap-8 px-4">
    
    {/* About Section */}
    <div>
      <h2 className="text-lg font-bold mb-2">CS — Ticket System</h2>
      <p className="text-sm ">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
      </p>
    </div>

    {/* Company */}
    <div>
      <h2 className="text-lg font-bold mb-2">Company</h2>
      <p>About Us</p>
      <p>Our Mission</p>
      <p>Contact Sales</p>
    </div>

    {/* Services */}
    <div>
      <h2 className="text-lg font-bold mb-2">Services</h2>
      <p>Products & Services</p>
      <p>Customer Stories</p>
      <p>Download Apps</p>
    </div>

    {/* Information */}
    <div>
      <h2 className="text-lg font-bold mb-2">Information</h2>
      <p>Privacy Policy</p>
      <p>Terms & Conditions</p>
      <p>Join Us</p>
    </div>

    {/* Social Links */}
    <div>
      <h2 className="text-lg font-bold mb-2">Social Links</h2>
      <div className="flex items-center gap-2">
        <img src={TwitterImg} alt="Twitter" className="w-5 h-5" />
        <span>@CS — Ticket System</span>
      </div>
      <div className="flex items-center gap-2">
        <img src={LinkedImg} alt="LinkedIn" className="w-5 h-5" />
        <span>@CS — Ticket System</span>
      </div>
      <div className="flex items-center gap-2">
        <img src={FacebookImg} alt="Facebook" className="w-5 h-5" />
        <span>@CS — Ticket System</span>
      </div>
      <p className="mt-2">support@cst.com</p>
    </div>
  </div>

  {/* Bottom Bar */}
  <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
    © 2025 CS — Ticket System. All rights reserved.
  </div>
</footer>

    );
};

export default Footer;
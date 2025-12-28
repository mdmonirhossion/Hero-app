import React from "react";
import { Link } from "react-router";
import { FaSquareXTwitter, FaFacebookF, FaInstagram } from "react-icons/fa6";

const socialLinks = [
  {
    name: "Twitter",
    url: "https://twitter.com",
    icon: <FaSquareXTwitter />,
    color: "hover:bg-sky-500", // Custom hover colors
  },
  {
    name: "Facebook",
    url: "https://facebook.com",
    icon: <FaFacebookF />,
    color: "hover:bg-blue-600",
  },
  {
    name: "Instagram",
    url: "https://instagram.com",
    icon: <FaInstagram />,
    color: "hover:bg-pink-600",
  },
];

const Footer = () => {
  return (
    <footer className="w-full bg-slate-950 pt-16 pb-8 border-t border-slate-900">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0">
          
          {/* Brand / Logo Section */}
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="bg-white/5 p-2 rounded-lg group-hover:bg-white/10 transition-colors">
              <img
                src="../logo.png"
                alt="HERO.IO Logo"
                className="w-8 h-8 md:w-10 md:h-10 object-contain"
              />
            </div>
            <Link
              to="/"
              className="text-2xl font-black tracking-wide bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-transparent hover:to-violet-400 transition-all"
            >
              HERO.IO
            </Link>
          </div>

          {/* Social Links Section */}
          <div className="flex flex-col items-center md:items-end gap-4">
            <span className="text-sm font-semibold text-slate-500 uppercase tracking-wider">
              Follow Us
            </span>
            <div className="flex gap-4">
              {socialLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 flex items-center justify-center rounded-full bg-slate-900 text-slate-400 transition-all duration-300 hover:text-white hover:-translate-y-1 ${link.color}`}
                  aria-label={link.name}
                >
                  <span className="text-xl">{link.icon}</span>
                </Link>
              ))}
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="w-full h-px bg-slate-800 my-8 md:my-10"></div>

        {/* Copyright Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-slate-500 gap-4">
          <p className="text-center md:text-left">
            &copy; {new Date().getFullYear()} HERO.IO. All rights reserved.
          </p>
          
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-slate-300 transition-colors">Privacy</Link>
            <Link to="/terms" className="hover:text-slate-300 transition-colors">Terms</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
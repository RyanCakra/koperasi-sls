import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-14 text-center">
      <div className="container mx-auto flex justify-between items-center ">
        <p>&copy; {new Date().getFullYear()} Koperasi SLS. All rights reserved.</p>
        <nav className="">
          <a href="/about" className="text-blue-400 hover:underline mx-2">
            About
          </a>
          <a href="/contact" className="text-blue-400 hover:underline mx-2">
            Contact
          </a>
          <a href="/privacy" className="text-blue-400 hover:underline mx-2">
            Privacy Policy
          </a>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;

import React from "react";

const Footer = () => (
  <footer className="bg-gray-900 text-white py-8">
    <div className="container mx-auto px-4 text-center text-sm">
      <p>
        &copy; {new Date().getFullYear()} Pavan Reddy Nalla. All rights
        reserved.
      </p>
      <p className="mt-2">
        Designed and Developed with ❤️ using React & Tailwind CSS
      </p>
    </div>
  </footer>
);

export default Footer;

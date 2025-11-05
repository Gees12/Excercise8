import React from "react";

function Footer({ text }) {
  return (
    <footer className="w-full bg-purple-700 text-white py-4 mt-10 text-center">
      <p className="text-sm font-medium">{text}</p>
    </footer>
  );
}

export default Footer;

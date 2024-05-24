import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="text-sm text-center bg-neutral-700 bg-opacity-35 text-neutral-400 p-1">
      <div className="flex items-center justify-center gap-5 my-2 sticky bottom-0">
        <Link to="/">Home</Link>
        <Link to="/">About</Link>
      </div>
      <p>Created by Nishant Gaurav</p>
    </footer>
  );
};

export default Footer;

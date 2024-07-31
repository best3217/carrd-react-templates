import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <nav>
        <ul className="flex p-0 m-0">
          <li className="mr-6">
            <Link className="text-blue-500 hover:text-blue-800" to="/carrd-70">
              Template 70
            </Link>
          </li>
          <li className="mr-6">
            <Link className="text-blue-500 hover:text-blue-800" to="/carrd-72">
              Template 72
            </Link>
          </li>
          <li className="mr-6">
            <Link className="text-blue-500 hover:text-blue-800" to="/carrd-104">
              Template 104
            </Link>
          </li>
          <li className="mr-6">
            <Link className="text-blue-500 hover:text-blue-800" to="/carrd-184">
              Template 184
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default HomePage;

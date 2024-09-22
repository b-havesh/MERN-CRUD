import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="h-[83vh] flex flex-col items-center justify-center">
      <h1 className="text-8xl font-bold text-[#011936] mb-4">404</h1>
      <h2 className="text-3xl text-gray-700 font-semibold mb-4">
        Oops! Page not found.
      </h2>
      <p className="text-lg text-gray-600 mb-8 text-center">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="bg-[#011936] text-yellow-100 font-bold py-2 px-6 rounded-lg hover:bg-[#011926] transition duration-200"
      >
        Go back home
      </Link>
      <div className="mt-10 text-gray-600">
        <p>If you're lost, follow the link back to safety! 🛡️</p>
      </div>
    </div>
  );
};

export default NotFound;

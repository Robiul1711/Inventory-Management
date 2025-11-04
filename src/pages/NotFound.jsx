import React from "react";
import { Home } from "lucide-react";
import { useNavigate } from "react-router-dom"; // remove if not using react-router

const NotFound = () => {
  const navigate = useNavigate(); // remove if not using react-router

  return (
    <div className="flex flex-col items-center justify-center  bg-gray-50 text-center px-6">
      <h1 className="text-[120px] font-bold text-blue-600 leading-none">404</h1>
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Page Not Found</h2>
      <p className="text-gray-500 mb-6 max-w-md">
        Sorry, the page you are looking for doesn’t exist or has been moved.
      </p>

      <button
        onClick={() => navigate("/")}
        className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all"
      >
        <Home className="w-5 h-5" />
        Back to Home
      </button>
    </div>
  );
};

export default NotFound;

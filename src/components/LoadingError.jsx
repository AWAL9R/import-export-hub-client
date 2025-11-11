import React from 'react';
import { useRouteError } from "react-router";
import { AlertTriangle } from "lucide-react";

const LoadingError = () => {
   const error = useRouteError();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center bg-gray-50">
      <AlertTriangle className="w-20 h-20 text-red-500 mb-4 animate-bounce" />
      <h1 className="text-3xl font-bold text-gray-800 mb-2">
        Oops! Something is wrong
      </h1>
      <p className="text-gray-600 mb-4 max-w-md">
        {error?.statusText || error?.message || "An unexpected error occured."}
      </p>
      <button
        onClick={() => window.location.reload()}
        className="px-6 py-2 bg-red-500 text-white rounded-xl hover:bg-red-600 transition">
        Reload
      </button>
    </div>
  );
};

export default LoadingError;
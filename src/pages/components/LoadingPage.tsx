import React from "react";
import { FaSpinner } from "react-icons/fa";

const LoadingPage = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center text-blu">
      <FaSpinner className="mb-4 animate-spin text-4xl" />
      <p className="">Loading...</p>
    </div>
  );
};

export default LoadingPage;

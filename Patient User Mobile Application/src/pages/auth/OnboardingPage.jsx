import React from 'react';
import { Link } from 'react-router-dom';
import MobileContainer from '../../components/common/MobileContainer';
import { images } from '../../assets/imageImports';

function OnboardingPage() {
  return (
    <MobileContainer>
      <div className="flex flex-col items-center justify-center px-6 py-8">
        {/* Doctor illustration */}
        <div className="mb-8 h-[200px] overflow-hidden rounded-xl">
          <img src={images.consultation} alt="Doctor consultation" className="w-full h-full object-cover" />
        </div>

        {/* Logo */}
        <div className="flex flex-col items-center mb-8">
          <div className="flex items-center justify-center w-16 h-16 relative mb-2">
            <img
              src={images.logo}
              alt="DikCare Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <h1 className="text-2xl font-bold text-gray-900">DikCare</h1>
        </div>
        <p className="text-xl text-gray-600 mb-8">Your Health Companion</p>

        {/* Progress indicator */}
        <div className="w-full h-2 bg-gray-200 rounded-full mb-8 overflow-hidden">
          <div className="h-full bg-gray-800 w-1/3 rounded-full"></div>
        </div>

        {/* Buttons */}
        <Link
          to="/signup"
          className="w-full bg-blue-200 text-gray-800 py-3 rounded-full font-medium mb-4 text-center hover:bg-blue-300 transition-colors"
        >
          Sign Up
        </Link>
        <Link
          to="/login"
          className="w-full bg-gray-100 text-gray-800 py-3 rounded-full font-medium mb-4 text-center hover:bg-gray-200 transition-colors"
        >
          Log In
        </Link>

        <p className="text-sm text-gray-500">No account? <Link to="/signup" className="text-gray-800">Sign up instead</Link></p>
      </div>
    </MobileContainer>
  );
}

export default OnboardingPage; 
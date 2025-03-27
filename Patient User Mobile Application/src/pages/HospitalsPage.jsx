import React from 'react';
import { Link } from 'react-router-dom';
import MobileContainer from '../components/common/MobileContainer';
import BottomNavBar from '../components/common/BottomNavBar';
import { images } from '../assets/imageImports';

function HospitalsPage() {
  return (
    <MobileContainer>
      <div className="p-4 bg-white min-h-full">
        {/* Header with back button */}
        <div className="flex items-center mb-6">
          <h1 className="text-xl font-bold text-gray-900">Hospitals</h1>
        </div>

        {/* Search Bar */}
        <div className="bg-gray-50 rounded-lg p-3 mb-6 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            placeholder="Find a hospital"
            className="bg-transparent w-full outline-none text-gray-900 placeholder-gray-500"
          />
        </div>

        {/* Hospital Card */}
        <div className="bg-white rounded-xl shadow-md mb-6">
          <div className="p-4">
            <h2 className="text-lg font-medium mb-1 text-gray-900">Cedars-Sinai Medical Center</h2>
            <p className="text-gray-900 mb-4">Johor Bahru, Malaysia</p>

            {/* Hospital Image */}
            <div className="rounded-lg overflow-hidden mb-4">
              <img src={images.hospital} alt="Hospital" className="w-full h-auto object-cover" />
            </div>

            {/* Rating */}
            <div className="mb-8">
              <h3 className="font-medium mb-1 text-gray-900">Average rating</h3>
              <p className="text-gray-900 text-sm mb-1">Based on 2,500 reviews</p>
              <p className="text-xl font-semibold text-gray-900">4.5</p>
            </div>

            {/* Services */}
            <div className="mb-8">
              <h3 className="font-medium text-lg mb-2 text-gray-900">Services</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between py-3 border-b border-gray-100 cursor-pointer hover:bg-gray-50 rounded-lg px-2">
                  <span className="text-gray-900">Emergency Room</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-gray-100 cursor-pointer hover:bg-gray-50 rounded-lg px-2">
                  <span className="text-gray-900">Cardiology</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-gray-100 cursor-pointer hover:bg-gray-50 rounded-lg px-2">
                  <span className="text-gray-900">Orthopedics</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-gray-100 cursor-pointer hover:bg-gray-50 rounded-lg px-2">
                  <span className="text-gray-900">Neurology</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Operating Hours */}
            <div className="mb-8">
              <h3 className="font-medium mb-2 text-gray-900">Operating Hours</h3>
              <p className="font-medium mb-1 text-gray-900">Open 24 hours</p>
              <p className="text-gray-900">Mon-Sun</p>
            </div>

            {/* Contact */}
            <div className="mb-8">
              <h3 className="font-medium mb-2 text-gray-900">Contact</h3>
              <div className="mb-4">
                <p className="font-medium mb-1 text-gray-900">Phone</p>
                <p className="text-blue-500 mb-1 cursor-pointer hover:text-blue-600">Call now</p>
                <p className="text-gray-900">(60) 123-4567</p>
              </div>
              <div>
                <p className="font-medium mb-1 text-gray-900">Address</p>
                <p className="text-blue-500 mb-1 cursor-pointer hover:text-blue-600">Get directions</p>
                <p className="text-gray-900">Blvd, Johor Bahru, Johor 81110</p>
              </div>
            </div>

            {/* Map */}
            <div className="mb-8 rounded-lg overflow-hidden h-48">
              <img src={images.map} alt="Map" className="w-full h-full object-cover" />
            </div>

            {/* Write Review Button */}
            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-medium transition-colors">
              Write Review
            </button>
          </div>
        </div>
      </div>
    </MobileContainer>
  );
}

export default HospitalsPage; 
import { Link } from 'react-router-dom';
import { useState } from 'react';
import MobileContainer from '../components/common/MobileContainer';

function EditProfilePage() {
  const [profileData, setProfileData] = useState({
    name: 'Patient',
    email: 'patient@gmail.com',
    height: '170cm',
    weight: '70kg',
    profilePicture: '/profile-placeholder.jpg'
  });

  const handleInputChange = (field, value) => {
    setProfileData({
      ...profileData,
      [field]: value
    });
  };

  const handleSaveChanges = () => {
    // In a real app, this would save to backend
    alert('Profile changes saved!');
  };

  return (
    <MobileContainer>
      <div className="p-4 bg-white min-h-full">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <Link to="/profile" className="mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
            </Link>
            <h1 className="text-xl font-bold">Edit Profile</h1>
          </div>
        </div>

        <div className="space-y-6 mb-8">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <div className="relative">
              <input
                type="text"
                className="bg-gray-50 w-full p-3 rounded-lg text-gray-900"
                value={profileData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
              />
              <button className="absolute right-3 top-3 text-gray-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <div className="relative">
              <input
                type="email"
                className="bg-gray-50 w-full p-3 rounded-lg text-gray-900"
                value={profileData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
              />
              <button className="absolute right-3 top-3 text-gray-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Height</label>
            <div className="relative">
              <input
                type="text"
                className="bg-gray-50 w-full p-3 rounded-lg text-gray-900"
                value={profileData.height}
                onChange={(e) => handleInputChange('height', e.target.value)}
              />
              <button className="absolute right-3 top-3 text-gray-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Weight</label>
            <div className="relative">
              <input
                type="text"
                className="bg-gray-50 w-full p-3 rounded-lg text-gray-900"
                value={profileData.weight}
                onChange={(e) => handleInputChange('weight', e.target.value)}
              />
              <button className="absolute right-3 top-3 text-gray-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Profile Picture URL</label>
            <div className="relative">
              <input
                type="text"
                className="bg-gray-50 w-full p-3 rounded-lg text-gray-900"
                value={profileData.profilePicture}
                onChange={(e) => handleInputChange('profilePicture', e.target.value)}
              />
              <button className="absolute right-3 top-3 text-gray-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <button
          onClick={handleSaveChanges}
          className="w-full bg-blue-500 text-white py-3 rounded-lg font-medium"
        >
          Save Changes
        </button>
      </div>
    </MobileContainer>
  );
}

export default EditProfilePage; 
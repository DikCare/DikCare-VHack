import { Link } from 'react-router-dom';
import MobileContainer from '../components/common/MobileContainer';

function ProfilePage() {
  const userProfile = {
    name: 'Patient',
    email: 'patient@gmail.com',
    profilePicture: '/profile-placeholder.jpg', // This should be placed in the public folder
  };

  return (
    <MobileContainer>
      <div className="p-4 bg-white min-h-full">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-xl font-bold">Profile</h1>
        </div>
        
        <div className="flex items-center mb-6">
          <div 
            className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4"
            aria-label="Profile"
          />
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-medium">{userProfile.name}</h2>
              <Link to="/edit-profile" className="text-gray-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
              </Link>
            </div>
            <p className="text-gray-500 text-sm">{userProfile.email}</p>
          </div>
        </div>

        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-medium">Notifications</h3>
          <button className="text-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </button>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-bold mb-4">My Account</h3>
          <div className="space-y-4">
            <Link to="/medical-history" className="block">
              <div className="flex justify-between items-center py-2">
                <div>
                  <h4 className="font-medium">Medical History & Reports</h4>
                  <p className="text-sm text-gray-500">View all your medical records and reports</p>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </div>
            </Link>

            <Link to="/reminders-alerts" className="block">
              <div className="flex justify-between items-center py-2">
                <div>
                  <h4 className="font-medium">Reminders & Alerts</h4>
                  <p className="text-sm text-gray-500">Manage reminders and alerts</p>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </div>
            </Link>

            <Link to="/marketplace" className="block">
              <div className="flex justify-between items-center py-2">
                <div>
                  <h4 className="font-medium">Marketplace</h4>
                  <p className="text-sm text-gray-500">Explore our marketplace for more services</p>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </div>
            </Link>

            <Link to="/orders" className="block">
              <div className="flex justify-between items-center py-2">
                <div>
                  <h4 className="font-medium">Orders</h4>
                  <p className="text-sm text-gray-500">Review your orders and invoices</p>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </div>
            </Link>

            <Link to="/mental-health" className="block">
              <div className="flex justify-between items-center py-2">
                <div>
                  <h4 className="font-medium">Mental & Cognitive Health</h4>
                  <p className="text-sm text-gray-500">Manage your mental health care</p>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </div>
            </Link>

            <div className="py-2">
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="font-medium">Privacy & Settings</h4>
                  <p className="text-sm text-gray-500">Manage privacy settings and update account details</p>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </div>
            </div>

            <div className="py-2">
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="font-medium">About App</h4>
                  <p className="text-sm text-gray-500">Learn about our app and how it works</p>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MobileContainer>
  );
}

export default ProfilePage; 
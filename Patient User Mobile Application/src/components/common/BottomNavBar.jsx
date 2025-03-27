import { Link, useLocation } from 'react-router-dom';
import { images } from '../../assets/imageImports';

function BottomNavBar() {
  const location = useLocation();

  return (
    <div className="w-full bg-white border-t border-gray-200 py-2 absolute bottom-0 left-0 right-0">
      <div className="max-w-[430px] mx-auto flex justify-between items-center px-6">
        <Link to="/home" className={`flex flex-col items-center ${location.pathname === '/home' ? 'text-primary' : 'text-gray-500'}`}>
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          <span className="text-xs mt-1">Home</span>
        </Link>

        <Link to="/monitor" className={`flex flex-col items-center ${location.pathname === '/monitor' ? 'text-primary' : 'text-gray-500'}`}>
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
          <span className="text-xs mt-1">Monitor</span>
        </Link>

        <Link to="/assistant" className={`flex flex-col items-center ${location.pathname === '/assistant' ? 'text-primary' : 'text-gray-500'}`}>
          <img src={images.robot} className="w-5 h-5" alt="Assistant" />
          <span className="text-xs mt-1">Assistant</span>
        </Link>

        <Link to="/hospitals" className={`flex flex-col items-center ${location.pathname === '/hospitals' ? 'text-primary' : 'text-gray-500'}`}>
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
          <span className="text-xs mt-1">Hospitals</span>
        </Link>

        <Link to="/profile" className={`flex flex-col items-center ${location.pathname === '/profile' ? 'text-primary' : 'text-gray-500'}`}>
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
          <span className="text-xs mt-1">Profile</span>
        </Link>
      </div>
    </div>
  );
}

export default BottomNavBar; 
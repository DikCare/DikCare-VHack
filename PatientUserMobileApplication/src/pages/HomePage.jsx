import MobileContainer from '../components/common/MobileContainer';
import { useState, useEffect } from 'react';

function HomePage() {
  const [completedReminders, setCompletedReminders] = useState({
    medication: false,
    bloodPressure: false
  });
  const [showSOSModal, setShowSOSModal] = useState(false);
  const [sosStatus, setSOSStatus] = useState('loading'); // 'loading' or 'done'
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isRefreshing, setIsRefreshing] = useState(false);

  const toggleReminder = (reminderKey) => {
    setCompletedReminders({
      ...completedReminders,
      [reminderKey]: !completedReminders[reminderKey]
    });
  };

  const handleSOSClick = () => {
    setShowSOSModal(true);
    setSOSStatus('loading');
    
    // Simulate processing time
    setTimeout(() => {
      setSOSStatus('done');
    }, 3000);
  };

  const closeModal = () => {
    setShowSOSModal(false);
  };

  const simulateRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
    }, 1500);
  };

  // Calculate health score based on various metrics
  const healthScore = 82; // Hardcoded for prototype

  return (
    <MobileContainer>
      {/* Pull to refresh indicator */}
      {isRefreshing && (
        <div className="absolute top-0 left-0 right-0 bg-blue-100 py-2 text-center text-blue-600 text-sm">
          <div className="flex items-center justify-center">
            <svg className="animate-spin h-4 w-4 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Refreshing...
          </div>
        </div>
      )}

      {/* Header */}
      <div className="flex justify-between items-center p-4 bg-gray-50">
        <div>
          <h1 className="text-xl font-bold text-gray-900">Good morning, Patient</h1>
          <p className="text-sm text-gray-600">{new Date().toLocaleDateString('en-US', { weekday: 'long', day: 'numeric', month: 'long' })}</p>
        </div>
        <div className="flex space-x-2">
          <button className="p-2" onClick={() => setShowSearch(!showSearch)}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          <button className="p-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Search Bar */}
      {showSearch && (
        <div className="px-4 py-2 bg-gray-50 border-b border-gray-200">
          <div className="relative">
            <input
              type="text"
              placeholder="Search symptoms, medication, etc."
              className="w-full py-2 pl-10 pr-3 bg-white rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className="absolute left-3 top-2.5 text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>
      )}

      <div className="p-4 bg-gray-50">
        {/* Quick Actions */}
        <div className="flex justify-between mb-6 bg-white p-3 rounded-xl shadow-sm">
          <button className="flex flex-col items-center justify-center space-y-1">
            <div className="bg-blue-100 p-2 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <span className="text-xs text-gray-900">Appointment</span>
          </button>
          <button className="flex flex-col items-center justify-center space-y-1">
            <div className="bg-green-100 p-2 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
              </svg>
            </div>
            <span className="text-xs text-gray-900">Message</span>
          </button>
          <button className="flex flex-col items-center justify-center space-y-1">
            <div className="bg-purple-100 p-2 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <span className="text-xs text-gray-900">Reports</span>
          </button>
          <button className="flex flex-col items-center justify-center space-y-1">
            <div className="bg-amber-100 p-2 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <span className="text-xs text-gray-900">Emergency</span>
          </button>
        </div>

        {/* Today's Summary */}
        <div className="mb-6 bg-white rounded-xl shadow-sm p-4">
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-lg font-bold text-gray-900">Today's Summary</h2>
            <div className="bg-green-100 px-2 py-1 rounded-full text-green-700 text-sm font-medium">Good</div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="relative h-16 w-16 rounded-full bg-blue-50 flex items-center justify-center">
                <svg viewBox="0 0 36 36" className="h-16 w-16 absolute">
                  <path
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#E6E6E6"
                    strokeWidth="2"
                  />
                  <path
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#3B82F6"
                    strokeWidth="2"
                    strokeDasharray={`${healthScore}, 100`}
                    strokeLinecap="round"
                  />
                </svg>
                <div className="text-blue-600 font-bold text-lg">{healthScore}%</div>
              </div>
              <div className="ml-4">
                <h3 className="font-medium text-gray-900">Health Score</h3>
                <p className="text-sm text-gray-500">Last updated: Today, 8:15 AM</p>
              </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>

        {/* Health Stats Grid */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-gray-900">Health Stats</h2>
            <button className="text-blue-500 text-sm font-medium">View All</button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-[#E8F0F2] p-4 rounded-xl text-black">
              <div className="flex justify-between items-center mb-1">
                <div className="text-gray-700 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                  Sleep
                </div>
                <div className="text-green-600 text-xs flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                  </svg>
                  <span>+5%</span>
                </div>
              </div>
              <div className="text-2xl font-bold">7hr31min</div>
            </div>
            <div className="bg-[#E8F0F2] p-4 rounded-xl text-black">
              <div className="flex justify-between items-center mb-1">
                <div className="text-gray-700 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                  Steps
                </div>
                <div className="text-red-600 text-xs flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                  <span>-12%</span>
                </div>
              </div>
              <div className="text-2xl font-bold">5,349</div>
              <div className="w-full bg-gray-200 rounded-full h-1.5 mt-1">
                <div className="bg-blue-500 h-1.5 rounded-full" style={{ width: "53%" }}></div>
              </div>
              <div className="text-xs text-gray-600 mt-1">Goal: 10,000</div>
            </div>
            <div className="bg-[#E8F0F2] p-4 rounded-xl text-black">
              <div className="flex justify-between items-center mb-1">
                <div className="text-gray-700 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                  Walking
                </div>
                <div className="text-green-600 text-xs flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                  </svg>
                  <span>+8%</span>
                </div>
              </div>
              <div className="text-2xl font-bold">2.5mi</div>
            </div>
            <div className="bg-[#E8F0F2] p-4 rounded-xl text-black">
              <div className="flex justify-between items-center mb-1">
                <div className="text-gray-700 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                  </svg>
                  Weight
                </div>
                <div className="text-gray-600 text-xs flex items-center">
                  <span>~</span>
                </div>
              </div>
              <div className="text-2xl font-bold">70.0kg</div>
            </div>
            <div className="bg-[#E8F0F2] p-4 rounded-xl col-span-2 text-black">
              <div className="flex justify-between items-center mb-1">
                <div className="text-gray-700 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                  </svg>
                  Height
                </div>
                <div className="text-gray-600 text-xs flex items-center">
                  <span>~</span>
                </div>
              </div>
              <div className="text-2xl font-bold">170cm</div>
            </div>
          </div>
        </div>

        {/* Upcoming Reminders */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-gray-900">Upcoming Reminders</h2>
            <div className="flex items-center">
              <div className="mr-2 px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                Today
              </div>
              <button className="text-blue-500 text-sm font-medium">View All</button>
            </div>
          </div>
          <div className="space-y-4">
            <div className={`flex items-center justify-between bg-[#E8F0F2] p-4 rounded-xl text-black ${completedReminders.medication ? 'opacity-50' : ''}`}>
              <div className="flex items-center gap-3">
                <div className="bg-blue-100 p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                </div>
                <div>
                  <div className="font-medium">Take your medications</div>
                  <div className="text-sm text-gray-700">8:00am • Daily • 75% adherence</div>
                </div>
              </div>
              <div 
                className={`h-5 w-5 border border-gray-300 rounded flex items-center justify-center cursor-pointer ${completedReminders.medication ? 'bg-blue-500 border-blue-500' : ''}`}
                onClick={() => toggleReminder('medication')}
              >
                {completedReminders.medication && (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="white">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </div>
            </div>
            <div className={`flex items-center justify-between bg-[#E8F0F2] p-4 rounded-xl text-black ${completedReminders.bloodPressure ? 'opacity-50' : ''}`}>
              <div className="flex items-center gap-3">
                <div className="bg-red-100 p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <div>
                  <div className="font-medium">Check blood pressure</div>
                  <div className="text-sm text-gray-700">9:00am • Every other day</div>
                </div>
              </div>
              <div 
                className={`h-5 w-5 border border-gray-300 rounded flex items-center justify-center cursor-pointer ${completedReminders.bloodPressure ? 'bg-blue-500 border-blue-500' : ''}`}
                onClick={() => toggleReminder('bloodPressure')}
              >
                {completedReminders.bloodPressure && (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="white">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Health Tips */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-gray-900">Health Tips</h2>
            <button className="text-blue-500 text-sm font-medium">View All</button>
          </div>
          <div className="space-y-4">
            <div className="bg-[#E8F0F2] p-4 rounded-xl">
              <div className="flex items-start mb-2">
                <div className="bg-green-100 p-2 rounded-full mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Start the day with a healthy breakfast</h3>
                  <p className="text-gray-700 mt-1">Eating a nutritious breakfast helps kickstart your metabolism and provides energy for the day ahead. Include protein, whole grains, and fruits.</p>
                </div>
              </div>
              <div className="flex justify-end">
                <button className="text-blue-500 text-sm font-medium">Learn more</button>
              </div>
            </div>
            <div className="bg-[#E8F0F2] p-4 rounded-xl">
              <div className="flex items-start mb-2">
                <div className="bg-blue-100 p-2 rounded-full mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Stay hydrated throughout the day</h3>
                  <p className="text-gray-700 mt-1">Drink at least 8 glasses of water daily. Proper hydration improves energy levels, brain function, and helps maintain healthy skin.</p>
                </div>
              </div>
              <div className="flex justify-end">
                <button className="text-blue-500 text-sm font-medium">Learn more</button>
              </div>
            </div>
          </div>
        </div>

        {/* Conditions & Labels */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-gray-900">Conditions & Labels</h2>
            <button className="text-blue-500 text-sm font-medium">View All</button>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between items-center bg-[#E8F0F2] p-4 rounded-xl">
              <div className="flex items-center">
                <span className="text-black font-medium">Diabetes</span>
                <span className="ml-2 px-2 py-0.5 bg-yellow-100 text-yellow-700 text-xs rounded-full">
                  Moderate
                </span>
              </div>
              <button className="bg-white px-4 py-2 rounded-lg text-sm text-black shadow-sm">Learn More</button>
            </div>
            <div className="flex justify-between items-center bg-[#E8F0F2] p-4 rounded-xl">
              <div className="flex items-center">
                <span className="text-black font-medium">Mental Health</span>
                <span className="ml-2 px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded-full">
                  Mild
                </span>
              </div>
              <button className="bg-white px-4 py-2 rounded-lg text-sm text-black shadow-sm">Learn More</button>
            </div>
            <div className="flex justify-between items-center bg-[#E8F0F2] p-4 rounded-xl">
              <div className="flex items-center">
                <span className="text-black font-medium">Allergies</span>
                <span className="ml-2 px-2 py-0.5 bg-red-100 text-red-700 text-xs rounded-full">
                  Severe
                </span>
              </div>
              <button className="bg-white px-4 py-2 rounded-lg text-sm text-black shadow-sm">Learn More</button>
            </div>
          </div>
        </div>

        {/* Emergency Alert Button */}
        <div className="absolute bottom-16 right-4">
          <button 
            className="bg-red-500 text-white p-3 rounded-full shadow-lg flex items-center justify-center"
            onClick={handleSOSClick}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </button>
        </div>
      </div>

      {/* SOS Modal */}
      {showSOSModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-6 max-w-sm w-full">
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4">Emergency SOS</h3>
              
              {sosStatus === 'loading' ? (
                <>
                  <p className="mb-4 text-gray-900">Calling your emergency contact and sending SOS message...</p>
                  <div className="flex justify-center my-6">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-500"></div>
                  </div>
                </>
              ) : (
                <>
                  <p className="mb-4 text-green-600 font-medium">Emergency contacts notified!</p>
                  <p className="mb-6 text-gray-900">Help is on the way.</p>
                  <button 
                    className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-6 rounded-lg"
                    onClick={closeModal}
                  >
                    Close
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </MobileContainer>
  );
}

export default HomePage; 
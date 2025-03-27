import React, { useState } from 'react';
import MobileContainer from '../components/common/MobileContainer';

function MonitorPage() {
  const [showInfoTooltip, setShowInfoTooltip] = useState(false);
  const [selectedTimeRange, setSelectedTimeRange] = useState('Week');
  const [selectedDate, setSelectedDate] = useState('Today');

  return (
    <MobileContainer>
      <div className="p-4 bg-white min-h-full">
        {/* Header with Date Selector and Refresh */}
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-xl font-bold text-gray-900">Monitor</h1>
          <div className="flex items-center space-x-2">
            <div className="relative">
              <button className="flex items-center text-gray-900 text-sm bg-gray-50 px-3 py-1 rounded-full">
                {selectedDate}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            <button className="text-gray-900 bg-gray-50 p-2 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </button>
          </div>
        </div>

        {/* Health Goals */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-lg font-bold text-gray-900">My Health Goals</h2>
            <button className="text-blue-500 text-sm font-medium">Set Goals</button>
          </div>
          <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
            <div className="flex justify-between items-center mb-3">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <span className="text-gray-900 font-medium">Daily Steps</span>
              </div>
              <div className="flex items-center">
                <span className="text-gray-900 font-medium text-sm mr-2">7,500 / 10,000</span>
                <span className="text-yellow-600 text-xs bg-yellow-100 px-2 py-0.5 rounded-full">In Progress</span>
              </div>
            </div>
            <div className="w-full bg-blue-100 rounded-full h-2.5 mb-1">
              <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: "75%" }}></div>
            </div>
            <p className="text-right text-xs text-gray-500">75% complete</p>
          </div>
        </div>

        {/* Live Data */}
        <div className="mb-6">
          <h2 className="text-lg font-bold mb-3 text-gray-900">Live Data</h2>
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <span className="text-gray-900 font-medium">Heart Rate</span>
                </div>
                <div className="flex items-center">
                  <span className="text-gray-900 font-bold text-xl mr-2">75 bpm</span>
                  <span className="text-green-600 text-xs bg-green-100 px-2 py-0.5 rounded-full">Normal</span>
                </div>
              </div>

              <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <span className="text-gray-900 font-medium">Glucose</span>
                </div>
                <div className="flex items-center">
                  <span className="text-gray-900 font-bold text-xl mr-2">99 mg/dL</span>
                  <span className="text-green-600 text-xs bg-green-100 px-2 py-0.5 rounded-full">Normal</span>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                    </svg>
                  </div>
                  <span className="text-gray-900 font-medium">Oxygen</span>
                </div>
                <div className="flex items-center">
                  <span className="text-gray-900 font-bold text-xl mr-2">98%</span>
                  <span className="text-green-600 text-xs bg-green-100 px-2 py-0.5 rounded-full">Normal</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Medication Tracking */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-lg font-bold text-gray-900">Medication Tracking</h2>
            <button className="text-blue-500 text-sm font-medium">View All</button>
          </div>
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="flex justify-between items-center mb-3">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <span className="text-gray-900 font-medium block">Metformin</span>
                  <span className="text-gray-500 text-xs">500mg, 2 times daily</span>
                </div>
              </div>
              <button className="bg-green-500 text-white text-sm py-1 px-3 rounded-lg">
                Take Now
              </button>
            </div>
            <div className="flex justify-between p-1">
              <div className="text-center">
                <div className="h-4 w-4 rounded-full bg-green-500 mx-auto"></div>
                <span className="text-xs text-gray-500 mt-1 block">Mon</span>
              </div>
              <div className="text-center">
                <div className="h-4 w-4 rounded-full bg-green-500 mx-auto"></div>
                <span className="text-xs text-gray-500 mt-1 block">Tue</span>
              </div>
              <div className="text-center">
                <div className="h-4 w-4 rounded-full bg-green-500 mx-auto"></div>
                <span className="text-xs text-gray-500 mt-1 block">Wed</span>
              </div>
              <div className="text-center">
                <div className="h-4 w-4 rounded-full bg-gray-300 mx-auto"></div>
                <span className="text-xs text-gray-500 mt-1 block">Thu</span>
              </div>
              <div className="text-center">
                <div className="h-4 w-4 rounded-full bg-gray-300 mx-auto"></div>
                <span className="text-xs text-gray-500 mt-1 block">Fri</span>
              </div>
              <div className="text-center">
                <div className="h-4 w-4 rounded-full bg-gray-300 mx-auto"></div>
                <span className="text-xs text-gray-500 mt-1 block">Sat</span>
              </div>
              <div className="text-center">
                <div className="h-4 w-4 rounded-full bg-gray-300 mx-auto"></div>
                <span className="text-xs text-gray-500 mt-1 block">Sun</span>
              </div>
            </div>
          </div>
        </div>

        {/* Symptom Logging */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-lg font-bold text-gray-900">Symptom Logging</h2>
            <button className="bg-blue-500 text-white text-sm py-1 px-3 rounded-lg">
              Record Symptom
            </button>
          </div>
          <div className="bg-gray-50 p-3 rounded-lg flex items-start">
            <div className="h-6 w-6 rounded-full bg-green-500 flex items-center justify-center mr-3 mt-0.5">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <p className="text-gray-900">No symptoms to report</p>
              <p className="text-gray-500 text-sm">No additional information available</p>
            </div>
          </div>
        </div>

        {/* Health Predictions */}
        <div className="mb-6">
          <h2 className="text-lg font-bold mb-3 text-gray-900">Health Predictions</h2>
          <div className="bg-gray-50 p-3 rounded-lg flex items-start justify-between relative">
            <div className="flex items-start">
              <div className="h-6 w-6 rounded-full bg-green-500 flex items-center justify-center mr-3 mt-0.5">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <p className="text-gray-900">AI predicts no health anomalies</p>
                <p className="text-gray-500 text-sm">No issues detected</p>
              </div>
            </div>
            <button onClick={() => setShowInfoTooltip(!showInfoTooltip)}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </button>
            
            {showInfoTooltip && (
              <div className="absolute right-0 top-10 bg-white p-3 rounded-lg shadow-lg border border-gray-100 z-10 w-72 mt-2">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-medium text-gray-900">Health Predictions Info</h4>
                  <button onClick={() => setShowInfoTooltip(false)} className="text-gray-400 hover:text-gray-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <p className="text-sm text-gray-700 mb-2">
                  Our AI analyzes your health data to identify potential issues before they become problems.
                </p>
                <p className="text-sm text-gray-700">
                  Data sources include: heart rate patterns, glucose levels, oxygen saturation, activity levels, and sleep quality.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Historical Data */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-lg font-bold text-gray-900">Historical Data</h2>
            <div className="flex bg-gray-100 rounded-lg overflow-hidden">
              <button 
                className={`px-3 py-1 text-sm ${selectedTimeRange === 'Day' ? 'bg-blue-500 text-white' : 'text-gray-900'}`}
                onClick={() => setSelectedTimeRange('Day')}
              >
                Day
              </button>
              <button 
                className={`px-3 py-1 text-sm ${selectedTimeRange === 'Week' ? 'bg-blue-500 text-white' : 'text-gray-900'}`}
                onClick={() => setSelectedTimeRange('Week')}
              >
                Week
              </button>
              <button 
                className={`px-3 py-1 text-sm ${selectedTimeRange === 'Month' ? 'bg-blue-500 text-white' : 'text-gray-900'}`}
                onClick={() => setSelectedTimeRange('Month')}
              >
                Month
              </button>
              <button 
                className={`px-3 py-1 text-sm ${selectedTimeRange === 'Year' ? 'bg-blue-500 text-white' : 'text-gray-900'}`}
                onClick={() => setSelectedTimeRange('Year')}
              >
                Year
              </button>
            </div>
          </div>
          
          {/* Heart Rate Card */}
          <div className="bg-gray-50 rounded-lg p-4 mb-4 border border-gray-100">
            <h3 className="text-gray-900 mb-1">Heart Rate</h3>
            <div className="flex items-center">
              <div className="text-3xl font-bold text-gray-900 mr-2">75 bpm</div>
              <div className="flex items-center text-red-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
                <span className="text-sm">8%</span>
              </div>
            </div>
            <div className="text-gray-900 text-sm mb-3">Past Week</div>
            
            {/* Heart Rate Graph */}
            <div className="h-24 mb-3 relative">
              {/* Reference Range */}
              <div className="absolute inset-0 opacity-20 bg-green-200 rounded" style={{top: "20%", bottom: "30%"}}></div>
              
              <svg viewBox="0 0 100 40" className="w-full h-full" preserveAspectRatio="none">
                <path 
                  d="M0,20 C10,10 15,30 25,20 S35,5 45,15 S60,35 70,15 S80,5 90,25 L100,5" 
                  fill="none" 
                  stroke="black" 
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round" 
                />
              </svg>
            </div>
            
            {/* Days of Week */}
            <div className="flex justify-between">
              <span className="text-xs text-gray-900">M</span>
              <span className="text-xs text-gray-900">T</span>
              <span className="text-xs text-gray-900">W</span>
              <span className="text-xs text-gray-900">T</span>
              <span className="text-xs text-gray-900">F</span>
              <span className="text-xs text-gray-900">S</span>
              <span className="text-xs text-gray-900">S</span>
            </div>
          </div>
          
          {/* Glucose Card */}
          <div className="bg-gray-50 rounded-lg p-4 mb-4 border border-gray-100">
            <h3 className="text-gray-900 mb-1">Glucose</h3>
            <div className="flex items-center">
              <div className="text-3xl font-bold text-gray-900 mr-2">99 mg/dL</div>
              <div className="flex items-center text-green-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
                <span className="text-sm">3%</span>
              </div>
            </div>
            <div className="text-gray-900 text-sm mb-3">Past Week</div>
            
            {/* Glucose Graph */}
            <div className="h-24 mb-3 relative">
              {/* Reference Range */}
              <div className="absolute inset-0 opacity-20 bg-green-200 rounded" style={{top: "25%", bottom: "35%"}}></div>
              
              <svg viewBox="0 0 100 40" className="w-full h-full" preserveAspectRatio="none">
                <path 
                  d="M0,20 C10,15 15,10 25,20 S40,30 50,15 S65,5 75,30 S85,20 100,10" 
                  fill="none" 
                  stroke="black" 
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round" 
                />
              </svg>
            </div>
            
            {/* Days of Week */}
            <div className="flex justify-between">
              <span className="text-xs text-gray-900">M</span>
              <span className="text-xs text-gray-900">T</span>
              <span className="text-xs text-gray-900">W</span>
              <span className="text-xs text-gray-900">T</span>
              <span className="text-xs text-gray-900">F</span>
              <span className="text-xs text-gray-900">S</span>
              <span className="text-xs text-gray-900">S</span>
            </div>
          </div>
          
          {/* Oxygen Card */}
          <div className="bg-gray-50 rounded-lg p-4 mb-4 border border-gray-100">
            <h3 className="text-gray-900 mb-1">Oxygen</h3>
            <div className="flex items-center">
              <div className="text-3xl font-bold text-gray-900 mr-2">98%</div>
              <div className="flex items-center text-green-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
                <span className="text-sm">2%</span>
              </div>
            </div>
            <div className="text-gray-900 text-sm mb-3">Past Week</div>
            
            {/* Oxygen Graph */}
            <div className="h-24 mb-3 relative">
              {/* Reference Range */}
              <div className="absolute inset-0 opacity-20 bg-green-200 rounded" style={{top: "15%", bottom: "40%"}}></div>
              
              <svg viewBox="0 0 100 40" className="w-full h-full" preserveAspectRatio="none">
                <path 
                  d="M0,15 C10,25 20,10 30,20 S45,25 55,15 S70,5 80,25 S90,15 100,5" 
                  fill="none" 
                  stroke="black" 
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round" 
                />
              </svg>
            </div>
            
            {/* Days of Week */}
            <div className="flex justify-between">
              <span className="text-xs text-gray-900">M</span>
              <span className="text-xs text-gray-900">T</span>
              <span className="text-xs text-gray-900">W</span>
              <span className="text-xs text-gray-900">T</span>
              <span className="text-xs text-gray-900">F</span>
              <span className="text-xs text-gray-900">S</span>
              <span className="text-xs text-gray-900">S</span>
            </div>
          </div>
        </div>

        {/* Cognitive Function */}
        <div className="mb-6">
          <h2 className="text-lg font-bold mb-3 text-gray-900">Cognitive Function</h2>
          <div className="bg-gray-50 p-3 rounded-lg flex items-start">
            <div className="h-6 w-6 rounded-full bg-green-500 flex items-center justify-center mr-3 mt-0.5">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <p className="text-gray-900">No data to report</p>
              <p className="text-gray-500 text-sm">No additional information</p>
            </div>
          </div>
        </div>

        {/* Mental Health */}
        <div className="mb-[2rem]">
          <h2 className="text-lg font-bold mb-3 text-gray-900">Mental Health</h2>
          <div className="bg-gray-50 p-3 rounded-lg flex items-start justify-between">
            <div className="flex items-start">
              <div className="h-6 w-6 rounded-full bg-green-500 flex items-center justify-center mr-3 mt-0.5">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <p className="text-gray-900">No data to report</p>
                <p className="text-gray-500 text-sm">No additional information</p>
              </div>
            </div>
            <button className="text-blue-500 text-sm font-medium">View Details</button>
          </div>
        </div>
      </div>
    </MobileContainer>
  );
}

export default MonitorPage; 
import { Link } from 'react-router-dom';
import MobileContainer from '../components/common/MobileContainer';

function MedicalHistoryPage() {
  // Hardcoded medical reports data
  const reports = [
    {
      id: 1,
      title: 'Report 1',
      date: 'Jan 1, 2022',
      description: 'Blood test results'
    },
    {
      id: 2,
      title: 'Report 2',
      date: 'Feb 1, 2022',
      description: 'X-ray results'
    },
    {
      id: 3,
      title: 'Report 3',
      date: 'Mar 1, 2022',
      description: 'MRI results'
    }
  ];

  return (
    <MobileContainer>
      <div className="p-4 bg-white min-h-full">
        <div className="flex items-center mb-6">
          <Link to="/profile" className="mr-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
          </Link>
          <h1 className="text-xl font-bold">Medical History & Reports</h1>
        </div>

        <div className="space-y-6">
          {reports.map(report => (
            <div key={report.id} className="border-b pb-4">
              <h2 className="font-medium text-lg">{report.title}</h2>
              <p className="text-sm text-gray-500">Date: {report.date} · Description: {report.description}</p>
              
              <div className="mt-2 flex justify-between items-center">
                <span className="text-sm font-medium">Actions</span>
                <button className="bg-gray-100 text-gray-800 px-4 py-1 rounded-full text-sm">
                  View
                </button>
              </div>
            </div>
          ))}

          <div className="mt-8">
            <h3 className="text-lg font-medium mb-2">Upload New Report</h3>
            <p className="text-sm text-gray-500 mb-4">Upload a new report with date and description</p>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                <div className="relative">
                  <input 
                    type="date" 
                    className="w-full border rounded-lg pl-3 pr-10 py-3 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
                    placeholder="Select date"
                  />
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                <textarea 
                  className="w-full border rounded-lg p-3 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows="3"
                  placeholder="Enter report description..."
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Attachment</label>
                <div className="border rounded-lg p-4">
                  <button className="w-full py-3 px-4 bg-gray-100 text-gray-800 rounded-lg flex items-center justify-center space-x-2 hover:bg-gray-200 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    <span>Add Attachment</span>
                  </button>
                </div>
              </div>

              <button className="w-full py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
                Save Report
              </button>
            </div>
          </div>
        </div>
      </div>
    </MobileContainer>
  );
}

export default MedicalHistoryPage; 
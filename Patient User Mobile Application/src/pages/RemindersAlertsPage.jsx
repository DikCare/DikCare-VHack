import { Link } from 'react-router-dom';
import { useState } from 'react';
import MobileContainer from '../components/common/MobileContainer';

function RemindersAlertsPage() {
  const [enableReminders, setEnableReminders] = useState(false);
  const [alertMethod, setAlertMethod] = useState('Push notifications');

  return (
    <MobileContainer>
      <div className="p-4 bg-white min-h-full">
        <div className="flex items-center mb-6">
          <Link to="/profile" className="mr-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
          </Link>
          <h1 className="text-xl font-bold">Reminders & Alerts</h1>
        </div>

        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-medium mb-4">Reminders</h2>
            
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-medium">Enable reminders</h3>
                  <p className="text-sm text-gray-500">Receive a notification or an email</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input 
                    type="checkbox" 
                    className="sr-only peer" 
                    checked={enableReminders}
                    onChange={() => setEnableReminders(!enableReminders)}
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                </label>
              </div>

              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-medium">Medication reminders</h3>
                  <p className="text-sm text-gray-500">Set up daily, weekly, monthly reminders</p>
                </div>
                <button className="text-blue-500 font-medium">Create reminder</button>
              </div>

              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-medium">Health check-up reminders</h3>
                  <p className="text-sm text-gray-500">Get a reminder for your next checkup</p>
                </div>
                <button className="text-blue-500 font-medium">Create reminder</button>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-medium mb-4">Alerts</h2>
            
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-medium">Method</h3>
                  <p className="text-sm text-gray-500">Choose how you'd like to receive alerts</p>
                </div>
                <span className="text-gray-700">{alertMethod}</span>
              </div>
            </div>
          </section>

          <div className="pt-6">
            <button className="w-full bg-blue-500 text-white py-3 rounded-lg font-medium">
              Save changes
            </button>
          </div>
        </div>
      </div>
    </MobileContainer>
  );
}

export default RemindersAlertsPage; 
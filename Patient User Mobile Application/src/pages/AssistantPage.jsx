import MobileContainer from '../components/common/MobileContainer';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AIChatBox from '../components/assistant/AIChatBox';
import SymptomChecker from '../components/assistant/SymptomChecker';
import { images } from '../assets/imageImports';

function AssistantPage() {
  const navigate = useNavigate();
  const [activeChat, setActiveChat] = useState(false);
  const [chatType, setChatType] = useState('');
  const [activeSymptomsCheck, setActiveSymptomsCheck] = useState(false);
  
  // Initial messages for physical health chat
  const physicalHealthMessages = [
    {
      id: 1,
      sender: 'user',
      name: 'You',
      content: "Alexa, what's the best way to lower my cholesterol?",
      time: '10:03 AM'
    },
    {
      id: 2,
      sender: 'assistant',
      name: 'Alexa (Your AI Assistant)',
      content: 'The American Heart Association recommends 30 minutes of moderate exercise most days of the week. This can help raise HDL cholesterol and lower LDL cholesterol',
      time: '10:03 AM'
    },
    {
      id: 3,
      sender: 'user',
      name: 'You',
      content: "Thank you for the advice.",
      time: '10:09 AM'
    },
    {
      id: 4,
      sender: 'assistant',
      name: 'Alexa (Your AI Assistant)',
      content: "You're welcome. Let me know if you need any other advice.",
      time: '10:09 AM'
    }
  ];
  
  const handleStartPhysicalHealthChat = () => {
    setActiveChat(true);
    setChatType('physical');
    setActiveSymptomsCheck(false);
  };
  
  const handleStartEmotionalHealthChat = () => {
    setActiveChat(true);
    setChatType('emotional');
    setActiveSymptomsCheck(false);
  };
  
  const handleStartSymptomsCheck = () => {
    setActiveSymptomsCheck(true);
    setActiveChat(false);
  };
  
  const handleBackToAssistant = () => {
    setActiveChat(false);
    setActiveSymptomsCheck(false);
    setChatType('');
  };

  return (
    <MobileContainer>
      {!activeChat && !activeSymptomsCheck ? (
        // Main Assistant Page
        <div className="bg-white min-h-screen">
          {/* Header */}
          <div className="p-4 flex justify-between items-center">
            <h1 className="text-xl font-bold text-gray-900">Assistant Page</h1>
          </div>
          
          {/* Assistant Intro */}
          <div className="px-4 py-2 flex items-center space-x-4">
            <div className="w-16 h-16 rounded-full overflow-hidden bg-blue-100">
              <div className="w-full h-full flex items-center justify-center text-blue-500">
                <img src={images.robot} className="h-10 w-10" alt="Robot assistant" />
              </div>
            </div>
            <div>
              <h2 className="text-lg font-medium text-gray-900">We're here to help you</h2>
              <p className="text-sm text-gray-600">Ask me anything about your health</p>
            </div>
          </div>
          
          {/* Categories */}
          <div className="px-4 mt-6">
            <h3 className="font-bold text-gray-900 mb-2">Mental Health</h3>
            <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-4">
              <div className="relative">
                <div className="w-full h-32 bg-gradient-to-r from-purple-400 to-indigo-500 flex items-end">
                  <div className="p-4 text-white relative z-10">
                    <h4 className="text-lg font-bold">Manage stress with relaxation techniques</h4>
                    <p className="text-sm">Learn how to manage stress and anxiety through breathing exercises, sleep stories, and more.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-6">
              <div className="p-4 flex items-start space-x-3 cursor-pointer">
                <div className="flex-shrink-0 bg-blue-100 p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Check in on your mental health</h4>
                  <p className="text-sm text-gray-600 mb-2">Take a few minutes each day to track your mood and progress.</p>
                </div>
              </div>
            </div>
            
            <h3 className="font-bold text-gray-900 mb-2">Physical Health</h3>
            <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-4" onClick={handleStartSymptomsCheck}>
              <div className="p-4 flex items-start space-x-3 cursor-pointer">
                <div className="flex-shrink-0 bg-green-100 p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 11v-1m0 0L7 8m2 2l-2 2" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11v-1m0 0l-2-2m2 2l2 2" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">AI-powered symptom checker</h4>
                  <p className="text-sm text-gray-600 mb-2">Get personalized guidance for common symptoms based on your medical history.</p>
                </div>
              </div>
            </div>
            
            <h3 className="font-bold text-gray-900 mb-2">Brain Training</h3>
            <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-4">
              <div className="p-4 flex items-start space-x-3 cursor-pointer">
                <div className="flex-shrink-0 bg-purple-100 p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Train your brain with games</h4>
                  <p className="text-sm text-gray-600 mb-2">Play fun games designed to help stimulate and improve your cognitive skills.</p>
                </div>
              </div>
            </div>
            
            <h3 className="font-bold text-gray-900 mb-2">Emotional Health</h3>
            <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-6" onClick={handleStartEmotionalHealthChat}>
              <div className="p-4 flex items-start space-x-3 cursor-pointer">
                <div className="flex-shrink-0 bg-amber-100 p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Chat with an AI therapist</h4>
                  <p className="text-sm text-gray-600 mb-2">Our chatbot is here to help with feelings of stress, sadness, or anxiety.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="px-4 pb-8">
            <button 
              onClick={handleStartPhysicalHealthChat}
              className="w-full bg-blue-500 text-white py-3 rounded-lg font-medium text-center"
            >
              Start a conversation
            </button>
          </div>
        </div>
      ) : activeChat ? (
        // AI Chat Interface
        <AIChatBox 
          onBackClick={handleBackToAssistant}
          initialMessages={chatType === 'physical' ? physicalHealthMessages : []}
          chatType={chatType}
        />
      ) : (
        // Symptom Checker Interface
        <SymptomChecker 
          onBackClick={handleBackToAssistant}
        />
      )}
    </MobileContainer>
  );
}

export default AssistantPage; 
import { useState, useEffect } from 'react';

function AIChatBox({ onBackClick, initialMessages = [], chatType = 'emotional' }) {
  // Example therapeutic conversation presets for empty emotional chats
  const exampleTherapistConversation = [
    {
      id: 1,
      sender: 'user',
      name: 'You',
      content: "I've been feeling really anxious lately",
      time: '5:42 PM'
    },
    {
      id: 2,
      sender: 'assistant',
      name: 'Emma (Your AI Therapist)',
      content: "I hear that you're feeling anxious. That's a very common experience. Can you tell me more about what's causing these feelings of anxiety?",
      time: '5:42 PM'
    },
    {
      id: 3,
      sender: 'user',
      name: 'You',
      content: "Work stress mostly. I can't sleep well because I keep thinking about deadlines.",
      time: '5:43 PM'
    },
    {
      id: 4,
      sender: 'assistant',
      name: 'Emma (Your AI Therapist)',
      content: "Being stressed and overwhelmed can feel very challenging. Let's explore what's contributing to your stress and perhaps identify some coping strategies that might help. Have you tried any relaxation techniques before bedtime to help with your sleep?",
      time: '5:43 PM'
    },
    {
      id: 5,
      sender: 'user',
      name: 'You',
      content: "I usually just scroll on my phone but that probably doesn't help",
      time: '5:44 PM'
    },
    {
      id: 6,
      sender: 'assistant',
      name: 'Emma (Your AI Therapist)',
      content: "You're right that screen time before bed can actually make sleep more difficult. Instead, you might try a brief meditation, deep breathing exercises, or gentle stretching. Setting boundaries between work and personal time can also help. What do you think might be a small, manageable step you could take tonight?",
      time: '5:44 PM'
    }
  ];

  // Use initial messages if provided, otherwise use example conversation for emotional type
  const startingMessages = initialMessages.length > 0 
    ? initialMessages 
    : (chatType === 'emotional' ? exampleTherapistConversation : []);
  
  const [messages, setMessages] = useState(startingMessages);
  const [messageInput, setMessageInput] = useState('');

  const handleSendMessage = () => {
    if (messageInput.trim() === '') return;
    
    const newMessage = {
      id: messages.length + 1,
      sender: 'user',
      name: 'You',
      content: messageInput,
      time: new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true })
    };
    
    setMessages([...messages, newMessage]);
    setMessageInput('');
    
    // Handle responses based on chat type
    setTimeout(() => {
      let response;
      let assistantName;
      
      if (chatType === 'emotional') {
        // Emotional health responses (AI therapist)
        assistantName = 'Emma (Your AI Therapist)';
        
        // Simple keyword matching for different emotional concerns
        const lowercaseMessage = messageInput.toLowerCase();
        
        if (lowercaseMessage.includes('anxious') || lowercaseMessage.includes('anxiety') || lowercaseMessage.includes('worried')) {
          response = "I hear that you're feeling anxious. That's a very common experience. Can you tell me more about what's causing these feelings of anxiety?";
        } else if (lowercaseMessage.includes('sad') || lowercaseMessage.includes('depressed') || lowercaseMessage.includes('depression')) {
          response = "I'm sorry to hear you're feeling down. Depression and sadness can be difficult to navigate. Would you like to talk more about what might be contributing to these feelings?";
        } else if (lowercaseMessage.includes('stressed') || lowercaseMessage.includes('overwhelmed')) {
          response = "Being stressed and overwhelmed can feel very challenging. Let's explore what's contributing to your stress and perhaps identify some coping strategies that might help.";
        } else if (lowercaseMessage.includes('lonely') || lowercaseMessage.includes('alone')) {
          response = "Feeling lonely can be really difficult. Many people experience this, and it doesn't mean there's something wrong with you. Would you like to discuss what might help you feel more connected?";
        } else if (lowercaseMessage.includes('sleep') || lowercaseMessage.includes('insomnia') || lowercaseMessage.includes('can\'t sleep')) {
          response = "Sleep difficulties can have a significant impact on your emotional wellbeing. Blue light from screens before bed can interfere with melatonin production. Have you established a consistent sleep routine without screens?";
        } else if (lowercaseMessage.includes('work') || lowercaseMessage.includes('job') || lowercaseMessage.includes('deadline')) {
          response = "Work stress can significantly impact our mental health. It sounds like your work responsibilities might be overwhelming you. Have you been able to communicate with anyone at work about managing these expectations?";
        } else if (lowercaseMessage.includes('yes') || lowercaseMessage.includes('thank') || lowercaseMessage.includes('helpful')) {
          response = "I'm glad that's helpful. Remember that managing mental health is an ongoing process, and small steps can lead to meaningful changes. Is there anything specific you'd like to focus on or explore further?";
        } else if (lowercaseMessage.includes('no') || lowercaseMessage.includes('not really') || lowercaseMessage.includes('don\'t think')) {
          response = "That's completely okay. Sometimes it takes time to find what works for you. Would you be open to exploring different approaches or techniques that others have found helpful for similar challenges?";
        } else {
          response = "Thank you for sharing that with me. It takes courage to open up about your feelings. Can you tell me more about how this has been affecting you?";
        }
      } else {
        // Physical health responses
        assistantName = 'Alexa (Your AI Assistant)';
        
        // Simple keyword matching for different physical health concerns
        const lowercaseMessage = messageInput.toLowerCase();
        
        if (lowercaseMessage.includes('diet') || lowercaseMessage.includes('eat') || lowercaseMessage.includes('food') || lowercaseMessage.includes('nutrition')) {
          response = "A balanced diet rich in fruits, vegetables, whole grains, and lean proteins is recommended for overall health. Would you like some specific dietary suggestions for your health goals?";
        } else if (lowercaseMessage.includes('exercise') || lowercaseMessage.includes('workout') || lowercaseMessage.includes('fitness')) {
          response = "Regular physical activity is key to maintaining good health. The CDC recommends at least 150 minutes of moderate-intensity exercise per week. What type of activities do you enjoy?";
        } else if (lowercaseMessage.includes('sleep') || lowercaseMessage.includes('insomnia') || lowercaseMessage.includes('tired')) {
          response = "Good sleep is crucial for health. Adults should aim for 7-9 hours of quality sleep per night. Would you like some tips for improving your sleep habits?";
        } else if (lowercaseMessage.includes('weight') || lowercaseMessage.includes('lose weight') || lowercaseMessage.includes('gain weight')) {
          response = "Healthy weight management combines balanced nutrition, regular physical activity, and lifestyle changes. It's important to focus on health rather than just numbers. Would you like to discuss sustainable approaches?";
        } else if (lowercaseMessage.includes('blood pressure') || lowercaseMessage.includes('hypertension')) {
          response = "Maintaining healthy blood pressure (under 120/80 mmHg) is important for heart health. Regular exercise, reducing sodium intake, and managing stress can help. Have you had your blood pressure checked recently?";
        } else if (lowercaseMessage.includes('cholesterol')) {
          response = "To maintain healthy cholesterol levels, the American Heart Association recommends a diet low in saturated fats, regular exercise, and not smoking. Medications may be needed in some cases. Have you had your levels checked recently?";
        } else {
          response = "That's an important health topic. To give you the best guidance, could you share a bit more about your specific concerns or questions?";
        }
      }
      
      const assistantResponse = {
        id: messages.length + 2,
        sender: 'assistant',
        name: assistantName,
        content: response,
        time: new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true })
      };
      setMessages(prev => [...prev, assistantResponse]);
    }, 1500);
  };

  return (
    <div className="bg-white min-h-screen flex flex-col">
      {/* Chat Header */}
      <div className="bg-white p-4 border-b border-gray-200 flex items-center">
        <button onClick={onBackClick} className="mr-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <h1 className="text-xl font-semibold text-gray-900">
          {chatType === 'emotional' ? 'AI Therapist' : 'Health Assistant'}
        </h1>
      </div>
      
      {/* Chat Intro */}
      <div className="p-4 text-center bg-gray-50">
        <p className="text-gray-700">
          {chatType === 'emotional' 
            ? "Share how you're feeling today" 
            : "Ask anything about your physical health"}
        </p>
      </div>
      
      {/* Messages Container */}
      <div className="flex-1 p-4 overflow-y-auto space-y-4">
        {messages.length === 0 && chatType === 'emotional' && (
          <div className="bg-blue-50 rounded-lg p-4 mx-auto max-w-md">
            <h3 className="font-medium text-blue-800 mb-2">Welcome to your safe space</h3>
            <p className="text-blue-700 text-sm">
              I'm here to listen and support you through any emotional challenges. Feel free to share what's on your mind, and we can work through it together.
            </p>
          </div>
        )}

        {messages.length === 0 && chatType === 'physical' && (
          <div className="bg-green-50 rounded-lg p-4 mx-auto max-w-md">
            <h3 className="font-medium text-green-800 mb-2">Your health matters</h3>
            <p className="text-green-700 text-sm">
              I can help answer questions about diet, exercise, sleep, medications, and other health topics. What would you like to know about today?
            </p>
          </div>
        )}
        
        {messages.map((message) => (
          <div key={message.id} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            {message.sender === 'user' ? (
              <div className="flex flex-col items-end">
                <div className="flex items-center mb-1">
                  <span className="text-sm text-gray-500 mr-2">{message.time}</span>
                  <span className="text-sm font-medium">{message.name}</span>
                </div>
                <div className="bg-blue-100 rounded-lg p-3 max-w-xs md:max-w-md">
                  <p className="text-gray-800">{message.content}</p>
                </div>
              </div>
            ) : (
              <div className="flex flex-col">
                <div className="flex items-center mb-1">
                  <span className="text-sm font-medium mr-2 text-gray-900">{message.name}</span>
                  <span className="text-sm text-gray-500">{message.time}</span>
                </div>
                <div className={`${chatType === 'emotional' ? 'bg-purple-50' : 'bg-green-50'} rounded-lg p-3 max-w-xs md:max-w-md`}>
                  <p className="text-gray-800">{message.content}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      
      {/* Message Input */}
      <div className="p-4 border-t border-gray-200 bg-white">
        <div className="flex items-center bg-gray-100 rounded-full p-1">
          <input
            type="text"
            placeholder={chatType === 'emotional' 
              ? "Express how you're feeling..." 
              : "Ask a health question..."}
            className="flex-1 bg-transparent py-2 px-4 outline-none"
            value={messageInput}
            onChange={(e) => setMessageInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
          />
          <button 
            onClick={handleSendMessage}
            className="p-2 rounded-full"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default AIChatBox; 
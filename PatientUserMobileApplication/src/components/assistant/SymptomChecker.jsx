import { useState, useEffect } from 'react';

function SymptomChecker({ onBackClick }) {
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [possibleConditions, setPossibleConditions] = useState([]);
  
  const toggleSymptom = (symptom) => {
    if (selectedSymptoms.includes(symptom)) {
      setSelectedSymptoms(selectedSymptoms.filter(s => s !== symptom));
    } else {
      setSelectedSymptoms([...selectedSymptoms, symptom]);
    }
  };

  // Calculate possible conditions based on symptoms
  const calculatePossibleConditions = (symptoms) => {
    // This is a simplified example for demonstration purposes
    const conditions = [];
    
    // COVID-19 check
    const covidSymptoms = ['Fever', 'Cough', 'Sore throat', 'Loss of smell'];
    const covidMatchCount = covidSymptoms.filter(s => symptoms.includes(s)).length;
    
    if (covidMatchCount >= 3) {
      const percentage = Math.min(95, 60 + (covidMatchCount / covidSymptoms.length) * 40);
      conditions.push({
        name: 'COVID-19',
        percentage: Math.round(percentage),
        description: 'A respiratory illness caused by the SARS-CoV-2 virus.',
        recommendation: 'Consider getting tested for COVID-19 and self-isolate while waiting for results.'
      });
    }
    
    // Common cold check
    const coldSymptoms = ['Runny nose', 'Sore throat', 'Cough'];
    const coldMatchCount = coldSymptoms.filter(s => symptoms.includes(s)).length;
    
    if (coldMatchCount >= 2) {
      const percentage = 40 + (coldMatchCount / coldSymptoms.length) * 45;
      conditions.push({
        name: 'Common Cold',
        percentage: Math.round(percentage),
        description: 'A viral infection of the upper respiratory tract.',
        recommendation: 'Rest, stay hydrated, and consider over-the-counter medications for symptom relief.'
      });
    }
    
    // Flu check
    const fluSymptoms = ['Fever', 'Fatigue', 'Cough', 'Sore throat'];
    const fluMatchCount = fluSymptoms.filter(s => symptoms.includes(s)).length;
    
    if (fluMatchCount >= 2) {
      const percentage = 35 + (fluMatchCount / fluSymptoms.length) * 50;
      conditions.push({
        name: 'Influenza (Flu)',
        percentage: Math.round(percentage),
        description: 'A contagious respiratory illness caused by influenza viruses.',
        recommendation: 'Rest, stay hydrated, and consult a healthcare provider for antiviral medication if diagnosed early.'
      });
    }
    
    // Sort by percentage (highest first)
    return conditions.sort((a, b) => b.percentage - a.percentage);
  };

  const handleContinue = () => {
    if (selectedSymptoms.length === 0) {
      alert('Please select at least one symptom to continue.');
      return;
    }
    
    const conditions = calculatePossibleConditions(selectedSymptoms);
    setPossibleConditions(conditions);
    setShowResults(true);
  };

  useEffect(() => {
    // Reset results when symptoms change
    if (showResults) {
      setShowResults(false);
    }
  }, [selectedSymptoms]);

  const symptoms = [
    'Fever', 
    'Cough', 
    'Runny nose', 
    'Sore throat', 
    'Fatigue', 
    'Shortness of breath', 
    'Loss of taste', 
    'Loss of smell'
  ];

  return (
    <div className="bg-white min-h-screen flex flex-col">
      {/* Symptom Checker Header */}
      <div className="bg-white p-4 border-b border-gray-200 flex items-center">
        <button onClick={onBackClick} className="mr-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <h1 className="text-xl font-semibold text-gray-900">Check Symptoms</h1>
      </div>
      
      {/* Symptom Checker Content */}
      <div className="p-4 overflow-y-auto flex-1">
        {!showResults ? (
          <>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">What are your symptoms?</h2>
            <p className="text-gray-600 mb-6">We'll use this information to personalize your symptom checker.</p>
            
            {/* Symptom Selection */}
            <div className="flex flex-wrap gap-3 mb-8">
              {symptoms.map((symptom) => (
                <button
                  key={symptom}
                  className={`py-2 px-4 rounded-full border ${
                    selectedSymptoms.includes(symptom)
                      ? 'bg-blue-500 text-white border-blue-500'
                      : 'bg-gray-100 text-gray-800 border-gray-200'
                  }`}
                  onClick={() => toggleSymptom(symptom)}
                >
                  {symptom}
                </button>
              ))}
            </div>
            
            {/* Continue Button */}
            <button 
              className="w-full bg-blue-500 text-white py-3 rounded-full font-medium"
              onClick={handleContinue}
            >
              Continue
            </button>
          </>
        ) : (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Possible Conditions</h2>
            <p className="text-gray-600 mb-6">
              Based on your symptoms: {selectedSymptoms.join(', ')}
            </p>
            
            {possibleConditions.length > 0 ? (
              <div className="space-y-4">
                {possibleConditions.map((condition, index) => (
                  <div key={index} className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
                    <div className="flex justify-between items-center mb-3">
                      <h3 className="text-lg font-bold text-gray-900">{condition.name}</h3>
                      <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                        condition.percentage > 70 
                          ? 'bg-red-100 text-red-800' 
                          : condition.percentage > 40 
                            ? 'bg-yellow-100 text-yellow-800' 
                            : 'bg-green-100 text-green-800'
                      }`}>
                        {condition.percentage}% likelihood
                      </div>
                    </div>
                    
                    <p className="text-gray-700 mb-3">{condition.description}</p>
                    
                    {/* Progress bar */}
                    <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
                      <div 
                        className={`h-2.5 rounded-full ${
                          condition.percentage > 70 
                            ? 'bg-red-500' 
                            : condition.percentage > 40 
                              ? 'bg-yellow-500' 
                              : 'bg-green-500'
                        }`} 
                        style={{ width: `${condition.percentage}%` }}
                      ></div>
                    </div>
                    
                    <div className="bg-blue-50 border border-blue-100 rounded-lg p-3">
                      <p className="text-blue-800 text-sm">
                        <span className="font-medium">Recommendation:</span> {condition.recommendation}
                      </p>
                    </div>
                  </div>
                ))}
                
                <div className="bg-yellow-50 border border-yellow-100 rounded-xl p-4 mt-6">
                  <div className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <p className="text-yellow-800 font-medium">Important Disclaimer</p>
                      <p className="text-yellow-700 text-sm mt-1">
                        This assessment is for informational purposes only and doesn't substitute for professional medical advice. 
                        Please consult a healthcare professional for proper diagnosis and treatment.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 text-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-400 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-lg font-medium text-gray-900 mb-2">No Matching Conditions</h3>
                <p className="text-gray-600 mb-4">We couldn't determine a likely condition based on your selected symptoms.</p>
                <button 
                  className="text-blue-500 font-medium"
                  onClick={() => setShowResults(false)}
                >
                  Try Again
                </button>
              </div>
            )}
            
            <div className="mt-6 flex space-x-3">
              <button 
                className="flex-1 bg-gray-100 text-gray-800 py-3 rounded-full font-medium"
                onClick={() => setShowResults(false)}
              >
                Back to Symptoms
              </button>
              <button 
                className="flex-1 bg-blue-500 text-white py-3 rounded-full font-medium"
                onClick={() => alert('In a real app, this would connect you with a healthcare professional.')}
              >
                Consult a Doctor
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default SymptomChecker; 
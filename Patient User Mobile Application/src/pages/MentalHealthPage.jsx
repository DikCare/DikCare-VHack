import { Link } from 'react-router-dom';
import MobileContainer from '../components/common/MobileContainer';

function MentalHealthPage() {
  // Hardcoded data
  const cognitiveScore = 95.6;
  const cognitiveTestCount = 3;
  
  const recommendations = [
    {
      id: 1,
      title: 'Manage stress',
      description: 'Learn about how to manage stress and track your progress'
    },
    {
      id: 2,
      title: 'Improve sleep',
      description: 'Get tips on how to improve your sleep and see how it relates to your mental health'
    },
    {
      id: 3,
      title: 'Boost mood',
      description: 'Find ways to boost your mood and see how it relates to your cognitive health'
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
          <h1 className="text-xl font-bold">Mental & Cognitive Health</h1>
        </div>

        {/* Cognitive Assessment Section */}
        <div className="mb-10">
          <h2 className="text-xl font-medium mb-4">Cognitive Assessment</h2>
          <p className="text-gray-600 mb-6">
            You've taken {cognitiveTestCount} cognitive assessments with an average score of {cognitiveScore}.
          </p>

          <div className="mb-4">
            <h3 className="text-gray-500 mb-1">Your Score</h3>
            <div className="text-4xl font-semibold mb-1 text-gray-900">{cognitiveScore}</div>
            <div className="text-gray-500 text-sm">past 3 months</div>
          </div>

          {/* Graph - this would typically be a chart component */}
          <div className="h-32 mb-6 bg-blue-50 rounded-2xl relative overflow-hidden border border-blue-100">
            <svg viewBox="0 0 400 100" className="w-full h-full">
              <path
                d="M0,50 C50,15 75,85 125,25 C175,15 200,75 250,20 C300,15 325,85 375,25 C400,15 400,50 400,50"
                fill="none"
                stroke="#3B82F6"
                strokeWidth="2"
                className="transition-all duration-300"
              />
            </svg>
          </div>

          <div className="block cursor-pointer hover:bg-gray-50">
            <div className="flex justify-between items-center">
              <span className="font-medium text-gray-800">See all cognitive assessments</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <p className="text-gray-500 text-sm mt-1">View your full history of cognitive assessments</p>
          </div>
        </div>

        {/* AI Recommendations */}
        <div>
          <h2 className="text-xl font-medium mb-4">AI Recommendations</h2>
          <div className="space-y-6">
            {recommendations.map(recommendation => (
              <div 
                key={recommendation.id} 
                className="border-b pb-5 hover:bg-gray-50 transition-colors cursor-pointer"
              >
                <h3 className="font-medium mb-2">{recommendation.title}</h3>
                <p className="text-gray-500 text-sm">{recommendation.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MobileContainer>
  );
}

export default MentalHealthPage; 
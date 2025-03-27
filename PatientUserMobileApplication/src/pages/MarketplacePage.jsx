import { Link } from 'react-router-dom';
import { useState } from 'react';
import MobileContainer from '../components/common/MobileContainer';

function MarketplacePage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [isPriceMenuOpen, setIsPriceMenuOpen] = useState(false);
  const [isRatingMenuOpen, setIsRatingMenuOpen] = useState(false);
  const [selectedPrice, setSelectedPrice] = useState('');
  const [selectedRating, setSelectedRating] = useState('');
  
  // Categories
  const categories = [
    'Diabetes Care',
    'Cognitive Support',
    'Mental Health Kits',
    'Chronic Medication',
    'Wearables',
    'First Aid'
  ];

  // Price ranges
  const priceRanges = [
    'Under RM50',
    'RM50 - RM100',
    'RM100 - RM200',
    'Above RM200'
  ];

  // Rating options
  const ratingOptions = [
    '5 stars',
    '4 stars & above',
    '3 stars & above',
    'All ratings'
  ];

  const toggleCategory = (category) => {
    setSelectedCategories(prev => 
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  // Close menus when clicking outside
  const handleClickOutside = () => {
    setIsPriceMenuOpen(false);
    setIsRatingMenuOpen(false);
  };

  // AI Recommendations
  const aiRecommendations = [
    {
      id: 1,
      name: 'NeuroBoost',
      description: 'Enhance cognitive abilities',
      image: '/images/NeuroBoost.jpg'
    },
    {
      id: 2,
      name: 'Health Tracker',
      description: 'Track fitness & vitals',
      image: '/images/HealthTracker.jpg'
    }
  ];

  // Featured Products
  const featuredProducts = [
    {
      id: 1,
      name: 'Chronic Medication..',
      description: 'Manage your medications easily',
      image: '/images/medication-dispenser.jpg',
      action: 'Reorder'
    },
    {
      id: 2,
      name: 'Mindful Moments Tea Blend',
      description: 'Helps alleviate anxiety',
      image: '/images/tea-collection.jpg',
      action: 'Add to Cart'
    },
    {
      id: 3,
      name: 'NeuroSpark Capsules',
      description: 'Support memory retention',
      image: '/images/neurospark-bottle.jpg',
      action: 'Add to Cart'
    }
  ];

  // Doctor Recommended Products
  const doctorRecommended = [
    {
      id: 1,
      name: 'GlucoBalance Pro',
      description: 'Manages blood sugar levels',
      image: '/images/glucobalance.avif'
    },
    {
      id: 2,
      name: 'VitalTrack 360 Smartwatch',
      description: 'Monitors key health metrics',
      image: '/images/smartwatch.jpg'
    }
  ];

  return (
    <MobileContainer>
      <div className="p-4 bg-white min-h-full" onClick={handleClickOutside}>
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <Link to="/profile">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
          </Link>
          <h1 className="text-xl font-medium">Marketplace</h1>
          <Link to="/cart">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </Link>
        </div>

        {/* Search */}
        <div className="mb-4">
          <div className="relative">
            <div className="absolute inset-y-0 left-3 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              className="w-full bg-gray-50 rounded-lg py-3 pl-10 pr-4 text-sm text-gray-900"
              placeholder="Search by product or condition"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Filters */}
        <div className="flex gap-2 mb-6">
          <button className="flex-1 bg-gray-50 rounded-lg text-sm text-gray-900">Condition</button>
          <div className="relative flex-1">
            <button 
              className="w-full bg-gray-50 py-2 px-3 rounded-lg text-sm flex items-center justify-between text-gray-900"
              onClick={(e) => {
                e.stopPropagation();
                setIsPriceMenuOpen(!isPriceMenuOpen);
                setIsRatingMenuOpen(false);
              }}
            >
              {selectedPrice || 'Price Range'}
              <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 transition-transform ${isPriceMenuOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {isPriceMenuOpen && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-lg shadow-lg border p-2 z-10">
                {priceRanges.map((range) => (
                  <button
                    key={range}
                    className={`w-full text-left px-3 py-2 text-sm rounded-lg ${selectedPrice === range ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-50 text-gray-900'}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedPrice(range);
                      setIsPriceMenuOpen(false);
                    }}
                  >
                    {range}
                  </button>
                ))}
              </div>
            )}
          </div>
          <div className="relative flex-1">
            <button 
              className="w-full bg-gray-50 py-2 px-3 rounded-lg text-sm flex items-center justify-between text-gray-900"
              onClick={(e) => {
                e.stopPropagation();
                setIsRatingMenuOpen(!isRatingMenuOpen);
                setIsPriceMenuOpen(false);
              }}
            >
              {selectedRating || 'Rating'}
              <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 transition-transform ${isRatingMenuOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {isRatingMenuOpen && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-lg shadow-lg border p-2 z-10">
                {ratingOptions.map((option) => (
                  <button
                    key={option}
                    className={`w-full text-left px-3 py-2 text-sm rounded-lg ${selectedRating === option ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-50 text-gray-900'}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedRating(option);
                      setIsRatingMenuOpen(false);
                    }}
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Categories */}
        <div className="mb-6">
          <h2 className="text-base font-medium mb-3 text-gray-900">Categories</h2>
          <div className="flex flex-wrap gap-2">
            {categories.map((category, index) => (
              <button 
                key={index} 
                className={`px-4 py-2 rounded-lg text-sm transition-colors ${
                  selectedCategories.includes(category)
                    ? 'bg-blue-50 text-blue-600'
                    : 'bg-gray-50 text-gray-900'
                }`}
                onClick={() => toggleCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* AI Recommendations */}
        <div className="mb-6">
          <h2 className="text-base font-medium mb-3">AI Recommendations</h2>
          <div className="grid grid-cols-2 gap-3">
            {aiRecommendations.map(item => (
              <div 
                key={item.id} 
                className="rounded-lg overflow-hidden cursor-pointer hover:opacity-80 transition-opacity"
                onClick={() => {}}
              >
                <div className="h-32 bg-gray-100">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div className="mt-2">
                  <h3 className="font-medium text-base text-gray-900">{item.name}</h3>
                  <p className="text-gray-500 text-xs">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Products */}
        <div className="mb-6">
          <h2 className="text-base font-medium mb-3 text-gray-900">Featured Products</h2>
          <div className="space-y-3">
            {featuredProducts.map(product => (
              <div key={product.id} className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                {product.id === 1 ? (
                  <>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-medium text-base text-gray-900 cursor-pointer hover:opacity-80" onClick={() => {}}>{product.name}</h3>
                        <p className="text-gray-500 text-xs">{product.description}</p>
                      </div>
                    </div>
                    <button className="px-4 py-2 rounded-lg text-sm bg-gray-200 text-gray-900">
                      {product.action}
                    </button>
                  </>
                ) : (
                  <>
                    <div>
                      <h3 className="font-medium text-base text-gray-900 cursor-pointer hover:opacity-80" onClick={() => {}}>{product.name}</h3>
                      <p className="text-gray-500 text-xs mb-2">{product.description}</p>
                      <button className="px-4 py-2 rounded-lg text-sm bg-gray-200 text-gray-900 mt-2">
                        {product.action}
                      </button>
                    </div>
                    <div className="w-24 h-24 rounded-lg overflow-hidden">
                      <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Doctor Recommended */}
        <div className="mb-6">
          <h2 className="text-base font-medium mb-3 text-gray-900">Doctor Recommended</h2>
          <div className="space-y-3">
            {doctorRecommended.map(product => (
              <div key={product.id} className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                <div>
                  <h3 className="font-medium text-base text-gray-900 cursor-pointer hover:opacity-80" onClick={() => {}}>{product.name}</h3>
                  <p className="text-gray-500 text-xs mb-2">{product.description}</p>
                  <button className="px-4 py-2 rounded-lg text-sm bg-gray-200 text-gray-900 mt-2">
                    Add to Cart
                  </button>
                </div>
                <div className="w-24 h-24 rounded-lg overflow-hidden">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Rx Medications */}
        <div className="mb-[6rem] bg-white border rounded-lg p-4">
          <h2 className="text-base font-medium mb-1 text-gray-900">Rx Medications</h2>
          <p className="text-sm text-gray-500 mb-3">
            For restricted medications, a prescription is required.
          </p>
          <button className="w-full bg-blue-50 text-blue-600 py-2 rounded-lg text-sm">
            Upload Prescription
          </button>
        </div>

        {/* Checkout */}
        <div className="fixed bottom-[3rem] left-0 right-0 p-4 bg-white border-t max-w-[430px] mx-auto">
          <button className="w-full bg-blue-50 text-blue-600 py-3 rounded-lg font-medium mb-2">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </MobileContainer>
  );
}

export default MarketplacePage; 
import { Link } from 'react-router-dom';
import { useState } from 'react';
import MobileContainer from '../components/common/MobileContainer';

function OrdersPage() {
  const [activeTab, setActiveTab] = useState('active');
  
  // Hardcoded orders data
  const orders = [
    {
      id: 'NFDYGS',
      date: '11/08/23',
      total: 'RM 25',
      name: 'Panadol Rapid Soluble',
      image: '/images/panadol-rapid.jpg'
    },
    {
      id: '394KRD',
      date: '24/03/22',
      total: 'RM 45',
      name: 'COVID-19 Antigen Test Kit',
      image: '/images/covid-test-kit.jpg'
    },
    {
      id: 'HCU778',
      date: '1/10/22',
      total: 'RM 385',
      name: 'Standard Wheelchair',
      image: '/images/wheelchair.jpg'
    },
    {
      id: 'X78FJT',
      date: '21/05/21',
      total: 'RM 35',
      name: 'Medical Face Masks (50pcs)',
      image: '/images/face-masks.jpg'
    }
  ];

  return (
    <MobileContainer>
      <div className="p-4 bg-gray-50 min-h-full">
        <div className="flex items-center mb-6">
          <Link to="/profile" className="mr-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
          </Link>
          <h1 className="text-xl font-bold">Orders & returns</h1>
        </div>

        {/* Tabs */}
        <div className="flex border-b mb-6">
          <button
            className={`flex-1 py-2 text-center text-gray-900 ${activeTab === 'active' ? 'border-b-2 border-blue-500 font-medium' : 'text-gray-500'}`}
            onClick={() => setActiveTab('active')}
          >
            Active
          </button>
          <button
            className={`flex-1 py-2 text-center text-gray-900 ${activeTab === 'history' ? 'border-b-2 border-blue-500 font-medium' : 'text-gray-500'}`}
            onClick={() => setActiveTab('history')}
          >
            History
          </button>
        </div>

        {/* Orders List */}
        <div className="space-y-4">
          {orders.map(order => (
            <div key={order.id} className="bg-white rounded-lg p-4 flex items-center">
              <div className="h-16 w-16 bg-gray-100 rounded-md overflow-hidden mr-4 flex items-center justify-center">
                <img src={order.image} alt={order.name} className="w-full h-full object-contain" />
              </div>
              <div className="flex-1">
                <div className="font-medium text-gray-900">{order.name}</div>
                <div className="text-sm text-gray-500">Order #{order.id}</div>
                <div className="text-sm text-gray-500">Order date: {order.date}</div>
                <div className="text-sm font-medium text-gray-900">Total: {order.total}</div>
              </div>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm hover:bg-blue-600 transition-colors">
                Reorder
              </button>
            </div>
          ))}
        </div>

        <div className="pt-10 pb-6">
          <button className="w-full bg-blue-500 text-white py-3 rounded-full font-medium">
            Browse Marketplace
          </button>
        </div>
      </div>
    </MobileContainer>
  );
}

export default OrdersPage; 
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/auth/LoginPage';
import SignupPage from './pages/auth/SignupPage';
import OnboardingPage from './pages/auth/OnboardingPage';
import HomePage from './pages/HomePage';
import MonitorPage from './pages/MonitorPage';
import AssistantPage from './pages/AssistantPage';
import HospitalsPage from './pages/HospitalsPage';
import ProfilePage from './pages/ProfilePage';
import MedicalHistoryPage from './pages/MedicalHistoryPage';
import RemindersAlertsPage from './pages/RemindersAlertsPage';
import MarketplacePage from './pages/MarketplacePage';
import OrdersPage from './pages/OrdersPage';
import MentalHealthPage from './pages/MentalHealthPage';
import EditProfilePage from './pages/EditProfilePage';
import './index.css';

function App() {
  return (
    <Routes>
      {/* Auth Routes */}
      <Route path="/" element={<OnboardingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />

      {/* App Routes */}
      <Route path="/home" element={<HomePage />} />
      <Route path="/monitor" element={<MonitorPage />} />
      <Route path="/assistant" element={<AssistantPage />} />
      <Route path="/hospitals" element={<HospitalsPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/medical-history" element={<MedicalHistoryPage />} />
      <Route path="/reminders-alerts" element={<RemindersAlertsPage />} />
      <Route path="/marketplace" element={<MarketplacePage />} />
      <Route path="/orders" element={<OrdersPage />} />
      <Route path="/mental-health" element={<MentalHealthPage />} />
      <Route path="/edit-profile" element={<EditProfilePage />} />

      {/* Fallback Route */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;

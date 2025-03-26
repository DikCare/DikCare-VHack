import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
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
import ProtectedRoute from './components/auth/ProtectedRoute';
import './index.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Auth Routes */}
          <Route path="/" element={<OnboardingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />

          {/* Protected App Routes */}
          <Route 
            path="/home" 
            element={
              <ProtectedRoute>
                <HomePage />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/monitor" 
            element={
              <ProtectedRoute>
                <MonitorPage />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/assistant" 
            element={
              <ProtectedRoute>
                <AssistantPage />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/hospitals" 
            element={
              <ProtectedRoute>
                <HospitalsPage />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/profile" 
            element={
              <ProtectedRoute>
                <ProfilePage />
              </ProtectedRoute>
            } 
          />
          
          {/* Profile Related Routes */}
          <Route 
            path="/medical-history" 
            element={
              <ProtectedRoute>
                <MedicalHistoryPage />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/reminders-alerts" 
            element={
              <ProtectedRoute>
                <RemindersAlertsPage />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/marketplace" 
            element={
              <ProtectedRoute>
                <MarketplacePage />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/orders" 
            element={
              <ProtectedRoute>
                <OrdersPage />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/mental-health" 
            element={
              <ProtectedRoute>
                <MentalHealthPage />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/edit-profile" 
            element={
              <ProtectedRoute>
                <EditProfilePage />
              </ProtectedRoute>
            } 
          />

          {/* Fallback Route */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;

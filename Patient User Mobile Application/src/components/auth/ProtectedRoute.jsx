import { Navigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import MobileContainer from '../common/MobileContainer';

function ProtectedRoute({ children }) {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return (
      <MobileContainer>
        <div className="flex items-center justify-center min-h-[667px]">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
        </div>
      </MobileContainer>
    );
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default ProtectedRoute; 
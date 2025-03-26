import { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Check if user is already logged in (from localStorage)
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  // Hardcoded users for demo
  const users = [
    { email: 'user@example.com', password: 'password' }
  ];

  const login = (email, password) => {
    // Find user with matching credentials
    const foundUser = users.find(user => 
      user.email === email && user.password === password
    );

    if (foundUser) {
      const userData = { email: foundUser.email };
      setUser(userData);
      localStorage.setItem('user', JSON.stringify(userData));
      return true;
    }
    return false;
  };

  const signup = (email, password) => {
    // Check if user already exists
    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
      return false;
    }

    // Create new user (in a real app this would go to a database)
    const newUser = { email, password };
    users.push(newUser);
    
    // Log in the new user
    setUser({ email });
    localStorage.setItem('user', JSON.stringify({ email }));
    return true;
  };

  const loginWithGoogle = () => {
    // Simulate Google login
    const googleUser = { email: 'google@example.com' };
    setUser(googleUser);
    localStorage.setItem('user', JSON.stringify(googleUser));
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ 
      user, 
      login, 
      signup, 
      logout, 
      loginWithGoogle,
      isLoading 
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext); 
import React, {useState, createContext} from 'react';
import SignInStack from './SignInStack';
import SignOutStack from './SignOutStack';

export const AuthContext = createContext(null);

export default function AuthNavigator() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState(null);

  // Handle user state changes
  function onAuthStateChanged(result) {
    setUser(result);
    if (initializing) setInitializing(false);
  }
  console.log('asdasdasd', {user});

  if (!initializing) {
    return null;
  }
  return user ? (
    <AuthContext.Provider value={user}>
      <SignInStack />
    </AuthContext.Provider>
  ) : (
    <SignOutStack />
  );
}

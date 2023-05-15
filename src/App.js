import React, { useState } from 'react';
import LoginPage from './LoginPage';
import SignUpPage from './SignUpPage';

const App = () => {
  const [showSignUp, setShowSignUp] = useState(false);

  const handleSignUpClick = () => {
    setShowSignUp(true);
  };

  const handleBackToLoginClick = () => {
    setShowSignUp(false);
  };

  return (
    <div>
      <h1>CodeBomb</h1>
      {showSignUp ? (
        <SignUpPage onBackToLogin={handleBackToLoginClick} />
      ) : (
        <LoginPage onSignUp={handleSignUpClick} />
      )}
    </div>
  );
};

export default App;








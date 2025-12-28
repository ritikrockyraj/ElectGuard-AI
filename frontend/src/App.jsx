// src/App.jsx
import React, { useState } from 'react';
import Login from './pages/Login';
import VotingBooth from './pages/VotingBooth';

function App() {
  const [step, setStep] = useState('login');

  return (
    <div>
      {step === 'login' && (
        <Login onLogin={() => setStep('vote')} />
      )}

      {step === 'vote' && (
        <VotingBooth onVote={(party) => alert('Voted for: ' + party)} />
      )}
    </div>
  );
}

export default App;
// src/pages/VotingBooth.jsx
import React from 'react';

const VotingBooth = ({ onVote }) => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-slate-900 text-white">
      <h1 className="text-3xl font-bold text-green-400">🗳️ Voting Booth</h1>
      <div className="flex gap-4 mt-8">
        <button 
          onClick={() => onVote('Party A')}
          className="px-8 py-4 bg-gray-700 rounded hover:bg-gray-600 border border-white/20"
        >
          Vote Party A
        </button>
        <button 
          onClick={() => onVote('Party B')}
          className="px-8 py-4 bg-gray-700 rounded hover:bg-gray-600 border border-white/20"
        >
          Vote Party B
        </button>
      </div>
    </div>
  );
};

export default VotingBooth;
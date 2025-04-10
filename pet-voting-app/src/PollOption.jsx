import React from 'react';

function PollOption({ label, count, onVote }) {
  return (
    <div style={{ marginBottom: '15px' }}>
      <span style={{ marginRight: '10px' }}>
        {label} - Votes: {count}
      </span>
      <button onClick={onVote}>Vote</button>
    </div>
  );
}

export default PollOption;
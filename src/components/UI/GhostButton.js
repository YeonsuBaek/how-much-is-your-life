import React from 'react';
import './GhostButton.css';

const GhostButton = ({ text }) => {
  return (
    <div className='GhostButton'>
      <button type='submit'>{text}</button>
    </div>
  );
};

export default GhostButton;

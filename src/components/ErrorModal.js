import React from 'react';
import './ErrorModal.css';

const ErrorModal = () => {
  return (
    <div className='errorModal'>
      <strong className='errorMessage'>
        이전에 입력한 시간과 겹칠 수 없습니다.
      </strong>
    </div>
  );
};

export default ErrorModal;

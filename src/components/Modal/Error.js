import React from 'react';
import ReactDom from 'react-dom';
import ErrorModal from './ErrorModal';

const FinishedEdit = () => {
  return (
    <>
      {ReactDom.createPortal(
        <ErrorModal />,
        document.getElementById('modal-root')
      )}
    </>
  );
};

export default FinishedEdit;

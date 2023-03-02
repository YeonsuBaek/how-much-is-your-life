import React from 'react';
import ReactDom from 'react-dom';
import Backdrop from './Backdrop';
import EditModal from './EditModal';

const FinishedEdit = ({ item, getEditItem }) => {
  return (
    <>
      {ReactDom.createPortal(
        <Backdrop />,
        document.getElementById('backdrop-root')
      )}
      {ReactDom.createPortal(
        <EditModal item={item} getEditItem={getEditItem} />,
        document.getElementById('modal-root')
      )}
    </>
  );
};

export default FinishedEdit;

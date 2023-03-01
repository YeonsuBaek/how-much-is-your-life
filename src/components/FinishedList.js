import React from 'react';
import FinishedItems from './FinishedItems';
import '../App.css';

const FinishedList = ({ finishedItems, onDelete }) => {
  return (
    <div>
      <h2 className='subTitle'>한 일 목록</h2>
      <FinishedItems items={finishedItems} onDelete={onDelete} />
    </div>
  );
};

export default FinishedList;

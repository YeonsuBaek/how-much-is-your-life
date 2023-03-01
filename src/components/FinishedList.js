import React from 'react';
import FinishedItems from './FinishedItems';
import '../App.css';

const FinishedList = ({ finishedItems, onDelete }) => {
  return (
    <div>
      <h2 className='subTitle'>한 일 목록</h2>
      <ul>
        <FinishedItems items={finishedItems} onDelete={onDelete} />
      </ul>
    </div>
  );
};

export default FinishedList;

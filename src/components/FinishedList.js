import React from 'react';
import FinishedItems from './FinishedItems';

const FinishedList = ({ finishedItems }) => {
  return (
    <div>
      <h2>한 일 목록</h2>
      <ul>
        <FinishedItems items={finishedItems} />
      </ul>
    </div>
  );
};

export default FinishedList;

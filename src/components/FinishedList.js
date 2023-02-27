import React from 'react';
import FinishedItems from './FinishedItems';

const dome = [
  {
    start: '06:00',
    end: '08:00',
    finished: '코테 풀기',
    money: 19240,
  },
  {
    start: '08:00',
    end: '10:00',
    finished: '애플 클론코딩',
    money: 19240,
  },
];

const FinishedList = () => {
  return (
    <div>
      <h2>한 일 목록</h2>
      <ul>
        <FinishedItems items={dome} />
      </ul>
    </div>
  );
};

export default FinishedList;

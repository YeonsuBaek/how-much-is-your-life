import React from 'react';

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
        {dome.map((item) => {
          return (
            <li key={item.start}>
              <h3>{item.finished}</h3>
              <span>
                {item.start} - {item.end}
              </span>
              <strong>{item.money}원</strong>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FinishedList;

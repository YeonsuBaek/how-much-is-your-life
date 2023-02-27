import React from 'react';

const FinishedItems = ({ items }) => {
  return (
    <div>
      {items.map((item) => {
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
    </div>
  );
};

export default FinishedItems;

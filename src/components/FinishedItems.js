import React from 'react';

const FinishedItems = ({ items }) => {
  return (
    <div>
      {items.map((item) => {
        return (
          <li key={item.startHours}>
            <h3>{item.finished}</h3>
            <span>
              {item.startHours}:{item.startMinutes} - {item.endHours}:
              {item.endMinutes}
            </span>
            <strong>{item.money.toLocaleString()}원</strong>
          </li>
        );
      })}
    </div>
  );
};

export default FinishedItems;

import React from 'react';

const FinishedItems = ({ items, onDelete }) => {
  return (
    <div>
      {items.map((item) => {
        return (
          <li key={item.id}>
            <h3>{item.finished}</h3>
            <span>
              {item.startHours}:{item.startMinutes} - {item.endHours}:
              {item.endMinutes}
            </span>
            <strong>{item.money.toLocaleString()}원</strong>
            <button onClick={() => onDelete(item.id)}>삭제</button>
          </li>
        );
      })}
    </div>
  );
};

export default FinishedItems;

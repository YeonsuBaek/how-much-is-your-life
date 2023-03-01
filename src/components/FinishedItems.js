import React from 'react';
import './FinishedItems.css';
import chevron from '../assets/icons/chevron.png';

const FinishedItems = ({ items, onDelete }) => {
  return (
    <ul className='finishedList'>
      {items.map((item) => {
        return (
          <li className='finishedItem' key={item.id}>
            <div class='finishedDetailWrapper'>
              <h3>{item.finished}</h3>
              <strong>
                {item.money.toLocaleString()}원
                <i className='chevronIcon'>
                  <img src={chevron} alt='수정 또는 삭제하러 가기' />
                </i>
              </strong>
            </div>
            <span>
              {item.startHours}:{item.startMinutes} - {item.endHours}:
              {item.endMinutes}
            </span>
            {/* <button onClick={() => onDelete(item.id)}>삭제</button> */}
          </li>
        );
      })}
    </ul>
  );
};

export default FinishedItems;

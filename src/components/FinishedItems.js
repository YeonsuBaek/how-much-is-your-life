import React, { useState } from 'react';
import './FinishedItems.css';
import chevron from '../assets/icons/chevron.svg';
import pencil from '../assets/icons/pencil.svg';
import trash from '../assets/icons/trash.svg';

const FinishedItems = ({ item, onDelete, onEdit }) => {
  const [push, setPush] = useState(false);
  const handlePushClick = () => {
    setPush(!push);
  };

  const time =
    +item.endHours * 60 +
    +item.endMinutes -
    (+item.startHours * 60 + +item.startMinutes);
  const hours = Math.floor(time / 60);
  const minutes = time % 60;

  return (
    <li
      className={push ? 'pushedFinishedItem finishedItem' : 'finishedItem'}
      onClick={handlePushClick}
    >
      <div className='finishedDetailWrapper'>
        <h3>{item.finished}</h3>
        <strong>
          {item.money.toLocaleString()}원
          <i className='chevronIcon'>
            <img src={chevron} alt='수정 또는 삭제하러 가기' />
          </i>
        </strong>
      </div>
      <div className='timeWrapper'>
        <span>
          {item.startHours}:{item.startMinutes} - {item.endHours}:
          {item.endMinutes}
        </span>
        <span>
          ({hours > 0 && `${hours}시간`}
          {hours > 0 && minutes > 0 && ' '}
          {minutes > 0 && `${minutes}분`})
        </span>
      </div>
      <div className='buttonWrapper'>
        <button className='editButton' onClick={() => onEdit(item.id)}>
          <img src={pencil} alt='수정' />
        </button>
        <button className='deleteButton' onClick={() => onDelete(item.id)}>
          <img src={trash} alt='삭제' />
        </button>
      </div>
    </li>
  );
};

export default FinishedItems;

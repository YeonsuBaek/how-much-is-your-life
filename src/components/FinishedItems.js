import React, { useState } from 'react';
import './FinishedItems.css';
import chevron from '../assets/icons/chevron.png';
import pencil from '../assets/icons/pencil.png';
import trash from '../assets/icons/trash.png';

const FinishedItems = ({ item, onDelete, onEdit }) => {
  const [push, setPush] = useState(false);
  const handlePushClick = () => {
    setPush(!push);
  };

  return (
    <li
      className={push ? 'pushedFinishedItem finishedItem' : 'finishedItem'}
      key={item.id}
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
      <span>
        {item.startHours}:{item.startMinutes} - {item.endHours}:
        {item.endMinutes}
      </span>
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

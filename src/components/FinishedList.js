import React from 'react';
import FinishedItems from './FinishedItems';
import '../App.css';
import './FinishedList.css';
import SubTitle from './UI/SubTitle';

const FinishedList = ({ finishedItems, onDelete, onEdit }) => {
  return (
    <div>
      <SubTitle title='한 일 목록' />
      <ul className='finishedList'>
        {finishedItems.map((item) => {
          return (
            <FinishedItems
              key={item.id}
              item={item}
              onEdit={onEdit}
              onDelete={onDelete}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default FinishedList;

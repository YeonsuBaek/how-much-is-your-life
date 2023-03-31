import React from 'react';
import '../App.css';
import './FinishedTotal.css';
import SubTitle from './UI/SubTitle';

const FinishedTotal = ({ finishedItems }) => {
  let time = finishedItems.reduce((acc, cur) => {
    return acc + cur.time.hours * 60 + cur.time.minutes;
  }, 0);

  const [hours, minutes] = [Math.floor(time / 60), Number(time % 60)];

  let totalMoney = finishedItems.reduce((acc, cur) => {
    return acc + cur.money;
  }, 0);

  return (
    <div className='finishedTotal'>
      <SubTitle title='최종 환산' />
      <div className='totalInformation'>
        <strong>총 {totalMoney.toLocaleString()}원</strong>
        <span>
          ({hours > 0 && `${hours}시간`}
          {hours > 0 && minutes > 0 && ' '}
          {minutes > 0 && `${minutes}분`})
        </span>
      </div>
    </div>
  );
};

export default FinishedTotal;

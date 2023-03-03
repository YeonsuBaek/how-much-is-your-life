import React from 'react';
import '../App.css';

const FinishedTotal = ({ finishedItems }) => {
  let time = finishedItems.reduce((acc, cur) => {
    return acc + cur.time.hours * 60 + cur.time.minutes;
  }, 0);

  const [hours, minutes] = [Math.floor(time / 60), Number(time % 60)];

  let totalMoney = finishedItems.reduce((acc, cur) => {
    return acc + cur.money;
  }, 0);

  return (
    <div>
      <h2 className='subTitle'>최종 환산</h2>
      <span>
        총 {hours > 0 && `${hours}시간`} {minutes > 0 && `${minutes}분`}
      </span>
      <strong>총 {totalMoney.toLocaleString()}원</strong>
    </div>
  );
};

export default FinishedTotal;

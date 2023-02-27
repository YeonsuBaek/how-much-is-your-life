import React from 'react';

const FinishedTotal = ({ finishedItems }) => {
  console.log(finishedItems);
  let totalHours = finishedItems.reduce((acc, cur) => {
    return acc + cur.time.hours;
  }, 0);
  let totalMinutes = finishedItems.reduce((acc, cur) => {
    return acc + cur.time.minutes;
  }, 0);

  if (totalMinutes >= 60) {
    totalHours = Number(totalHours) + Number(totalMinutes / 60);
    totalMinutes = Number(totalMinutes) % 60;
  }

  let totalMoney = finishedItems.reduce((acc, cur) => {
    return acc + cur.money;
  }, 0);

  return (
    <div>
      <h2>최종 환산</h2>
      <span>
        총 {totalHours}시간 {totalMinutes > 0 && `${totalMinutes}분`}
      </span>
      <strong>총 {totalMoney.toLocaleString()}원</strong>
    </div>
  );
};

export default FinishedTotal;

import React, { useState, useEffect } from 'react';

const FinishedForm = ({ getItem }) => {
  const [startHours, setStartHours] = useState('00');
  const [startMinutes, setStartMinutes] = useState('00');
  const [endHours, setEndHours] = useState(startHours);
  const [endMinutes, setEndMinutes] = useState(startMinutes);
  const [finished, setFinished] = useState('');

  const handleStartHoursChange = (e) => {
    setStartHours(e.target.value);
  };
  const handleStartMinutesChange = (e) => {
    setStartMinutes(e.target.value);
  };

  const handleEndHoursChange = (e) => {
    setEndHours(e.target.value);
  };
  const handleEndMinutesChange = (e) => {
    setEndMinutes(e.target.value);
  };

  const handleFinishedChange = (e) => {
    setFinished(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    getItem({
      startHours: startHours,
      startMinutes: startMinutes,
      endHours: endHours,
      endMinutes: endMinutes,
      finished: finished,
    });

    setStartHours(endHours);
    setStartMinutes(endMinutes);
  };

  useEffect(() => {
    setEndHours(startHours);
    setEndMinutes(startMinutes);
  }, [startHours, startMinutes]);

  return (
    <div>
      <h2>한 일을 입력해주세요.</h2>
      <form onSubmit={handleFormSubmit}>
        <label>시작 시간</label>
        <input
          type='number'
          min='00'
          max='23'
          step='1'
          value={startHours}
          onChange={handleStartHoursChange}
          required
        />
        <span>:</span>
        <input
          type='number'
          min='00'
          max='50'
          step='10'
          value={startMinutes}
          onChange={handleStartMinutesChange}
          required
        />
        <label>종료 시간</label>
        <input
          type='number'
          min='00'
          max='23'
          step='1'
          value={endHours}
          onChange={handleEndHoursChange}
          required
        />
        <span>:</span>
        <input
          type='number'
          min='00'
          max='50'
          step='10'
          value={endMinutes}
          onChange={handleEndMinutesChange}
          required
        />
        <label htmlFor='todo'>한 일</label>
        <input
          name='todo'
          type='text'
          value={finished}
          onChange={handleFinishedChange}
          required
        />
        <button type='submit'>저장</button>
      </form>
    </div>
  );
};

export default FinishedForm;

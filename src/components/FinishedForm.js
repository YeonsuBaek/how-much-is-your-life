import React, { useState, useEffect } from 'react';

const FinishedForm = ({ getItem }) => {
  const [startTime, setStartTime] = useState('00:00');
  const [endTime, setEndTime] = useState('00:00');
  const [finished, setFinished] = useState('');

  const handleStartTimeChange = (e) => {
    setStartTime(e.target.value);
  };

  const handleEndTimeChange = (e) => {
    setEndTime(e.target.value);
  };

  const handleFinishedChange = (e) => {
    setFinished(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    getItem({
      start: startTime,
      end: endTime,
      finished: finished,
    });
  };

  useEffect(() => {
    setEndTime(startTime);
  }, [startTime]);

  return (
    <div>
      <h2>한 일을 입력해주세요.</h2>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor='start'>시작 시간</label>
        <input
          name='start'
          type='time'
          min='00:00'
          max='24:00'
          value={startTime}
          onChange={handleStartTimeChange}
          required
        />
        <label htmlFor='end'>종료 시간</label>
        <input
          name='end'
          type='time'
          min={startTime}
          max='24:00'
          value={endTime}
          onChange={handleEndTimeChange}
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

import React, { useState, useEffect } from 'react';
import '../App.css';
import './FinishedForm.css';
import removeIcon from '../assets/icons/close.svg';
import GhostButton from './UI/GhostButton';
import SubTitle from './UI/SubTitle';

const FinishedForm = ({ openForm, getItem }) => {
  const [opened, setOpened] = useState(false);
  const [startHours, setStartHours] = useState('00');
  const [startMinutes, setStartMinutes] = useState('00');
  const [endHours, setEndHours] = useState(startHours);
  const [endMinutes, setEndMinutes] = useState(Number(startMinutes) + 10);
  const [finished, setFinished] = useState('');

  useEffect(() => {
    setOpened(openForm);
  }, [openForm]);

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
    setFinished('');
  };

  const handleRemoveClick = () => {
    setFinished('');
  };

  useEffect(() => {
    setEndHours(startMinutes === '50' ? Number(startHours) + 1 : startHours);
    setEndMinutes(startMinutes === '50' ? '00' : Number(startMinutes) + 10);
  }, [startHours, startMinutes]);

  if (opened) {
    return (
      <div>
        <SubTitle title='한 일을 입력해주세요.' />
        <form onSubmit={handleFormSubmit}>
          <div className='timePickerWrapper'>
            <div className='formItem'>
              <label>시작 시간</label>
              <div className='timePicker'>
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
              </div>
            </div>
            <div className='formItem'>
              <label>종료 시간</label>
              <div className='timePicker'>
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
              </div>
            </div>
          </div>
          <div className='formItem finished'>
            <label htmlFor='todo'>한 일</label>
            <input
              name='todo'
              type='text'
              value={finished}
              onChange={handleFinishedChange}
              placeholder='생산적으로 한 일'
              required
            />
            {finished && (
              <span className='removeButton' onClick={handleRemoveClick}>
                <img src={removeIcon} alt='텍스트 삭제하기' />
              </span>
            )}
          </div>
          <GhostButton text='저장' />
        </form>
      </div>
    );
  }
};

export default FinishedForm;

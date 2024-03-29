import React, { useState } from 'react';
import GhostButton from '../UI/GhostButton';
import './EditModal.css';

const EditModal = ({ item, getEditItem }) => {
  const [startHoursEdit, setStartHoursEdit] = useState(item.startHours);
  const [startMinutesEdit, setStartMinutesEdit] = useState(item.startMinutes);
  const [endHoursEdit, setEndHoursEdit] = useState(item.endHours);
  const [endMinutesEdit, setEndMinutesEdit] = useState(item.endMinutes);
  const [finishedEdit, setFinishedEdit] = useState(item.finished);

  const handleStartHoursEdit = (e) => {
    setStartHoursEdit(e.target.value);
  };
  const handleStartMinutesEdit = (e) => {
    setStartMinutesEdit(e.target.value);
  };
  const handleEndHoursEdit = (e) => {
    setEndHoursEdit(e.target.value);
  };
  const handleEndMinutesEdit = (e) => {
    setEndMinutesEdit(e.target.value);
  };
  const handleFinishedEdit = (e) => {
    setFinishedEdit(e.target.value);
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();

    getEditItem({
      startHours: startHoursEdit,
      startMinutes: startMinutesEdit,
      endHours: endHoursEdit,
      endMinutes: endMinutesEdit,
      finished: finishedEdit,
    });
  };

  return (
    <form className='editModal' onSubmit={handleEditSubmit}>
      <div className='editItem'>
        <label>시작 시간</label>
        <div className='timePickerToEdit'>
          <input
            type='number'
            min='00'
            max='23'
            step='1'
            value={startHoursEdit}
            onChange={handleStartHoursEdit}
            required
          />
          <span>:</span>
          <input
            type='number'
            min='00'
            max='50'
            step='10'
            value={startMinutesEdit}
            onChange={handleStartMinutesEdit}
            required
          />
        </div>
      </div>
      <div className='editItem'>
        <label>종료 시간</label>
        <div className='timePickerToEdit'>
          <input
            type='number'
            min='00'
            max='23'
            step='1'
            value={endHoursEdit}
            onChange={handleEndHoursEdit}
            required
          />
          <span>:</span>
          <input
            type='number'
            min='00'
            max='50'
            step='10'
            value={endMinutesEdit}
            onChange={handleEndMinutesEdit}
            required
          />
        </div>
      </div>
      <div className='editItem'>
        <label>한 일</label>
        <input
          className='finishedToEdit'
          name='todo'
          type='text'
          value={finishedEdit}
          onChange={handleFinishedEdit}
          placeholder='생산적으로 한 일'
          required
        />
      </div>
      <GhostButton text='수정' />
    </form>
  );
};

export default EditModal;

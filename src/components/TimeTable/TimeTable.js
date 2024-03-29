import React from 'react';
import TimeTableHours from './TimeTableHours';
import './TimeTable.css';
import SubTitle from '../UI/SubTitle';

const TimeTable = ({ timetable }) => {
  return (
    <div className='timeTable'>
      <SubTitle title='타임 테이블' />
      <table border='1'>
        <thead>
          <tr>
            <th></th>
            <th>0</th>
            <th>10</th>
            <th>20</th>
            <th>30</th>
            <th>40</th>
            <th>50</th>
          </tr>
        </thead>
        <TimeTableHours timetable={timetable} />
      </table>
    </div>
  );
};

export default TimeTable;

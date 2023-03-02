import React from 'react';
import TimeTableHours from './TimeTableHours';

const TimeTable = ({ timetable }) => {
  return (
    <div>
      <h2>타임 테이블</h2>
      <table border='1'>
        <thead>
          <tr>
            <th>Hour</th>
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

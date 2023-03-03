import React from 'react';
import './TimeTableHours.css';

const TimeTableHours = ({ timetable }) => {
  return (
    <tbody>
      {timetable.map((time, hour) => {
        return (
          <tr key={hour}>
            <td>{hour}</td>
            <td className={time[0] ? 'checkedTime' : ''}></td>
            <td className={time[1] ? 'checkedTime' : ''}></td>
            <td className={time[2] ? 'checkedTime' : ''}></td>
            <td className={time[3] ? 'checkedTime' : ''}></td>
            <td className={time[4] ? 'checkedTime' : ''}></td>
            <td className={time[5] ? 'checkedTime' : ''}></td>
          </tr>
        );
      })}
    </tbody>
  );
};

export default TimeTableHours;

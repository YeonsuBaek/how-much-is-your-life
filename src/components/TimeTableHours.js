import React from 'react';

const TimeTableHours = ({ timetable }) => {
  return (
    <tbody>
      {timetable.map((time, hour) => {
        return (
          <tr>
            <td>{hour}</td>
            <td>{time[0] ? 'okay' : ''}</td>
            <td>{time[1] ? 'okay' : ''}</td>
            <td>{time[2] ? 'okay' : ''}</td>
            <td>{time[3] ? 'okay' : ''}</td>
            <td>{time[4] ? 'okay' : ''}</td>
            <td>{time[5] ? 'okay' : ''}</td>
          </tr>
        );
      })}
    </tbody>
  );
};

export default TimeTableHours;

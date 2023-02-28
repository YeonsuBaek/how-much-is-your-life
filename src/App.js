import React, { useState, useEffect } from 'react';
import FinishedForm from './components/FinishedForm';
import FinishedList from './components/FinishedList';
import FinishedTotal from './components/FinishedTotal';
import Header from './components/Header';

const App = () => {
  const [finishedItems, setFinishedItems] = useState([]);
  const [timetable, setTimetable] = useState(
    new Array(24).fill(new Array(6).fill(false))
  );

  const getTime = (startH, startM, endH, endM) => {
    let hours = Number(endH) - Number(startH);
    let minutes = Number(endM) - Number(startM);

    if (minutes >= 60) {
      hours += Number(minutes / 60);
      minutes %= 60;
    }

    return { hours: hours, minutes: minutes };
  };

  const getMoney = (time) => {
    const hourlyRate = 9620;

    return (
      (time.hours + Math.round((time.minutes / 60) * 10) / 10) * hourlyRate
    );
  };

  const putItem = (item) => {
    fillTimetable(
      item.startHours,
      item.startMinutes,
      item.endHours,
      item.endMinutes
    );

    setFinishedItems((prevItems) => {
      const currentItem = item;
      currentItem['time'] = getTime(
        item.startHours,
        item.startMinutes,
        item.endHours,
        item.endMinutes
      );
      currentItem['money'] = getMoney(currentItem.time);
      currentItem['id'] =
        item.startHours.toString() + item.startMinutes.toString();
      return [currentItem, ...prevItems].sort((a, b) => a.id - b.id);
    });
  };

  const fillTimetable = (startH, startM, endH, endM) => {
    setTimetable(
      timetable.map((hour, hIndex) =>
        hour.map((minute, mIndex) => {
          if (hIndex >= startH && hIndex <= endH) {
            const firstM = hIndex === +startH ? startM : 0;
            const lastM = hIndex === +endH ? endM : 59;
            return mIndex * 10 >= firstM && mIndex * 10 < lastM ? true : minute;
          } else return minute;
        })
      )
    );
  };

  useEffect(() => {
    console.log(timetable);
  }, [timetable]);

  const handleDelete = (id) => {
    const nextItems = finishedItems.filter((item) => item.id !== id);
    setFinishedItems(nextItems);
  };

  return (
    <div>
      <Header />
      <FinishedForm getItem={putItem} />
      {finishedItems.length > 0 && (
        <>
          <FinishedList finishedItems={finishedItems} onDelete={handleDelete} />
          <FinishedTotal finishedItems={finishedItems} />
        </>
      )}
    </div>
  );
};

export default App;

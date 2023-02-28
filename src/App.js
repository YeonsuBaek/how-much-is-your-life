import React, { useState } from 'react';
import FinishedForm from './components/FinishedForm';
import FinishedList from './components/FinishedList';
import FinishedTotal from './components/FinishedTotal';
import Header from './components/Header';

const App = () => {
  const [finishedItems, setFinishedItems] = useState([]);

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
      return [currentItem, ...prevItems];
    });
  };

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

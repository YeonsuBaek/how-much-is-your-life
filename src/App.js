import React, { useState } from 'react';
import FinishedForm from './components/FinishedForm';
import FinishedList from './components/FinishedList';
import FinishedTotal from './components/FinishedTotal';
import Header from './components/Header';

const App = () => {
  const [finishedItems, setFinishedItems] = useState([]);

  const getTime = (start, end) => {
    let hours = Number(end.slice(0, 2)) - Number(start.slice(0, 2));
    let minutes = Number(end.slice(3)) - Number(start.slice(3));

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
      currentItem['time'] = getTime(item.start, item.end);
      currentItem['money'] = getMoney(currentItem.time);
      return [currentItem, ...prevItems];
    });
  };

  return (
    <div>
      <Header />
      <FinishedForm getItem={putItem} />
      {finishedItems.length > 0 && (
        <>
          <FinishedList finishedItems={finishedItems} />
          <FinishedTotal finishedItems={finishedItems} />
        </>
      )}
    </div>
  );
};

export default App;

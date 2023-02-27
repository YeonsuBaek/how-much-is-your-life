import React, { useState } from 'react';
import FinishedForm from './components/FinishedForm';
import FinishedList from './components/FinishedList';

const App = () => {
  const [finishedItems, setFinishedItems] = useState([]);

  const getMoney = (start, end) => {
    const hourlyRate = 9620;

    const startMinutes =
      Number(start.slice(0, 2)) * 60 + Number(start.slice(3, 2));
    const endMinutes = Number(end.slice(0, 2)) * 60 + Number(end.slice(3, 2));
    const time = endMinutes - startMinutes;

    return time * Number(hourlyRate / 60);
  };

  const putItem = (item) => {
    setFinishedItems((prevItems) => {
      const currentItem = item;
      currentItem['money'] = getMoney(item.start, item.end);
      return [currentItem, ...prevItems];
    });
  };

  return (
    <div>
      <FinishedForm getItem={putItem} />
      <FinishedList finishedItems={finishedItems} />
    </div>
  );
};

export default App;

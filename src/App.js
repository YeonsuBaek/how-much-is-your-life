import React, { useState } from 'react';
import FinishedForm from './components/FinishedForm';
import FinishedList from './components/FinishedList';
import FinishedTotal from './components/FinishedTotal';
import Header from './components/Header';
import './App.css';
import FinishedEdit from './components/Modal/FinishedEdit';
import TimeTable from './components/TimeTable/TimeTable';
import Error from './components/Modal/Error';

const App = () => {
  const [openForm, setOpenForm] = useState(false);
  const [finishedItems, setFinishedItems] = useState([]);
  const [timetable, setTimetable] = useState(
    new Array(24).fill(new Array(6).fill(false))
  );
  const [openModal, setOpenModal] = useState(false);
  const [itemToEdit, setItemToEdit] = useState();
  const [openErrorModal, setOpenErrorModal] = useState(false);

  const checkOverlappingTime = (startH, startM, endH, endM) => {
    for (let h = +startH; h <= +endH; h++) {
      const firstM = h === +startH ? +startM : 0;
      const lastM = h === +endH ? +endM : 50;
      for (let m = firstM; m < lastM; m += 10) {
        if (timetable[h][m / 10]) {
          return false;
        }
      }
    }
    return true;
  };

  const handleOpen = (clicked) => {
    setOpenForm(clicked);
  };

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
    const isChecked = checkOverlappingTime(
      item.startHours,
      item.startMinutes,
      item.endHours,
      item.endMinutes
    );

    if (!isChecked) {
      setOpenErrorModal(true);
      setTimeout(() => {
        setOpenErrorModal(false);
      }, 3000);
      return;
    }

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

  const emptyTimetable = (startH, startM, endH, endM) => {
    setTimetable(
      timetable.map((hour, hIndex) =>
        hour.map((minute, mIndex) => {
          if (hIndex >= startH && hIndex <= endH) {
            const firstM = hIndex === +startH ? startM : 0;
            const lastM = hIndex === +endH ? endM : 59;
            return mIndex * 10 >= firstM && mIndex * 10 < lastM
              ? false
              : minute;
          } else return minute;
        })
      )
    );
  };

  const handleEdit = (id) => {
    setItemToEdit(finishedItems.find((item) => item.id === id));
    setOpenModal(true);
    handleDelete(id);
  };

  const putEditItem = (item) => {
    const isChecked = checkOverlappingTime(
      item.startHours,
      item.startMinutes,
      item.endHours,
      item.endMinutes
    );

    if (!isChecked) {
      setOpenErrorModal(true);
      setTimeout(() => {
        setOpenErrorModal(false);
      }, 3000);
      return;
    }

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

    setOpenModal(false);
  };

  const handleDelete = (id) => {
    const deletedItem = finishedItems.find((item) => item.id === id);
    emptyTimetable(
      deletedItem.startHours,
      deletedItem.startMinutes,
      deletedItem.endHours,
      deletedItem.endMinutes
    );

    const nextItems = finishedItems.filter((item) => item.id !== id);
    setFinishedItems(nextItems);
  };

  return (
    <div>
      <Header onOpen={handleOpen} />
      <FinishedForm openForm={openForm} getItem={putItem} />
      {finishedItems.length > 0 && (
        <>
          <FinishedList
            finishedItems={finishedItems}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
          <TimeTable timetable={timetable} />
          <FinishedTotal finishedItems={finishedItems} />
        </>
      )}
      {openModal && (
        <FinishedEdit item={itemToEdit} getEditItem={putEditItem} />
      )}
      {openErrorModal && <Error />}
    </div>
  );
};

export default App;

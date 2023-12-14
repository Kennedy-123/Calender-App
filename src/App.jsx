import React from 'react';
import './index.css';
import { birthdayList } from './birthdayList';

function App() {

  const weekday = new Date().toLocaleString('en-US', {weekday: "long"})
  const day = new Date().toLocaleString('en-US', {day: "2-digit"})
  const month = new Date().toLocaleString('en-US', {month: "long"})
  const year = new Date().getFullYear()
  const amPm = new Date().getHours() < 12 ? 'AM' : 'PM'
  const currentHour = new Date().getHours()
  const currentMinute = new Date().getMinutes()

  const person = birthdayList.find(people => people.month === month && people.day === day)

  return (
    <div className="dateContainer">
      <div className="dateContainer__detail">
        <h1>{weekday}</h1>
        <h2>{day}</h2>
        <h1>{`${month} ${year}`}</h1>
        <h4>{`${currentHour}:${currentMinute}${amPm}`}</h4>
      </div>
         <p className="dateContainer__birthdayMessage"> {person ? `Happy birthday ${person.name} ${person.emoji}` : null}</p>
    </div>
  );
}

export default App;

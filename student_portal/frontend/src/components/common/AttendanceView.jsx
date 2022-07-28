import React from 'react';
import format from 'date-fns/format';
import getDay from 'date-fns/getDay';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import {Calendar,dateFnsLocalizer} from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { useState } from 'react';
import moment from 'moment'
const locales = {
  "en-US" : require("date-fns/locale/en-US")
};
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  getDay,
  locales,
});
const Attendance = () => {
  const events = [{
    title:"meet",
    allDay : true,
    start : new Date(2022,7,1),
    end : new Date(2022,7,15)
  }]
  const [newEvent,setNewEvent]=useState({title:"",start:"",end:""});
  const [allEvents,setAllEvents]=useState(events)
  const handleEvent = ()=>{
    setAllEvents([...allEvents,newEvent]);
  }
  return (
    <>
    <div className="container">
      <h1>Calendar</h1>
      <h2>Add New Event</h2>
      <div>
        <input type="text" style={{ width: "20%", marginRight: "10px" }} value={newEvent.title} onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}/>
        <DatePicker placeholderText="Start Date" style={{ marginRight: "10px" }} selected={newEvent.start} onChange={(start) => setNewEvent({ ...newEvent, start })} />
                <DatePicker placeholderText="End Date" selected={newEvent.end} onChange={(end) => setNewEvent({ ...newEvent, end })} />
                <button stlye={{ marginTop: "10px" }} onClick={handleEvent}>
                    Add Event
                </button>
            </div>
            <Calendar localizer={localizer} events={allEvents} startAccessor="start" endAccessor="end" style={{ height: 500, margin: "50px" }} />
      </div>
    </>
  )
}

export default Attendance
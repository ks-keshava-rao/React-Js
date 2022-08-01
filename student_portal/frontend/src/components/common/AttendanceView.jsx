import React from 'react';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin,{DateClickArg} from '@fullcalendar/interaction'
const AttendanceView = () => {
  const handleDateClick = (currDate)=>{
   if(currDate.jsEvent.altKey) console.log(currDate);

  }
  return (
    <div className="container-sm">
    <FullCalendar 
    plugins={[dayGridPlugin,interactionPlugin]}
    dateClick={(e)=>{handleDateClick(e)}}
    />
    
    </div>
  )
}

export default AttendanceView
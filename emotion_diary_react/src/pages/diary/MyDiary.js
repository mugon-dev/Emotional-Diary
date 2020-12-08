import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import React from 'react';
import Calendar from '../../components/Calendar';
const MyDiary = () => {
  return (
    <div>
      <h1>나의 일기</h1>
      <Calendar />
      <div className="mypage-body">
        <div className="body-wrapper box">
          <div className="body-info-container">
            <div className="calendar-wrapper">
              <FullCalendar
                defaultView="dayGridMonth"
                plugins={[dayGridPlugin]}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mypage-body">
        <div className="body-wrapper box">
          <div className="body-info-container">
            <div className="calendar-wrapper">
              <FullCalendar
                plugins={[dayGridPlugin]}
                initialView="dayGridWeek"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyDiary;

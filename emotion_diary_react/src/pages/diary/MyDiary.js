import FullCalendar from '@fullcalendar/react';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import bootstrapPlugin from '@fullcalendar/bootstrap';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const MyDiaryStyle = styled.div`
  display: grid;
  max-width: 100%;
  align-content: baseline;
  grid-template-columns: 100%;
  padding: 10px 10px;
`;

const MyDiary = () => {
  const [boards, setBoards] = useState([]);
  let eventDb = [
    {
      id: 1,
      title: 'All-day event',
      start: '2020-12-02',
    },
    {
      id: 2,
      title: 'Timed event',
      start: '2020-12-03',
    },
    {
      id: 3,
      title: '내가 생성',
      start: '2020-12-04',
    },
  ];
  useEffect(() => {
    fetch('http://10.100.102.31:8000/board/my', {
      method: 'GET',
      headers: {
        Authorization: localStorage.getItem('Authorization'),
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log('res.bno', res.bno);

        setBoards({
          id: res.bno,
          title: res.title,
          start: res.createTime,
        });
        //setBoards(res);
        console.log('aaa', boards);
      });
  }, []);
  const [selectDate, setSelectDate] = useState({
    start: '',
    end: '',
    allDay: '',
  });

  function INITIAL_EVENTS() {
    //최초 데이터 불러오는것
  }

  function renderEventContent() {
    //잘모름
  }

  function handleEventClick() {
    //클릭했을때 동작
  }

  function handleEvents() {}

  // 자체 bno
  /* function createEventId() {
    return String(eventGuid++);
  } */
  function handleDateSelect(selectInfo) {
    console.log(boards);
    //let title = prompt('Please enter a new title for your event');
    let calendarApi = selectInfo.view.calendar;
    setSelectDate({
      start: selectInfo.startStr,
      end: selectInfo.endStr,
      allDay: selectInfo.allDay,
    });

    calendarApi.unselect(); // clear date selection

    /* if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
      });
    } */
  }
  return (
    <MyDiaryStyle>
      <br />
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin, bootstrapPlugin]}
        headerToolbar={{
          left: 'prev',
          center: 'title',
          right: 'next',
        }}
        themeSystem="bootstrap"
        contentHeight="auto"
        handleWindowResize={true}
        locale="ko"
        initialView="dayGridMonth"
        editable={true}
        selectable={true}
        selectMirror={true}
        dayMaxEvents={true}
        weekends={true}
        //initialEvents={boards} // alternatively, use the `events` setting to fetch from a feed
        events={boards}
        select={handleDateSelect}
        eventContent={renderEventContent} // custom render function
        eventClick={handleEventClick}
        eventsSet={handleEvents} // called after events are initialized/added/changed/removed
        /* you can update a remote database when these fire:
                   eventAdd={function(){}}
                   eventChange={function(){}}
                   eventRemove={function(){}}
                   */
      />
    </MyDiaryStyle>
  );
};

export default MyDiary;

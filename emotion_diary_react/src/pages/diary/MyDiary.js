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

const MyDiary = ({history}) => {
  const [boards, setBoards] = useState([]);
  useEffect(() => {
    fetch("http://10.100.102.31:8000/board/my",{
        method: "GET",
        headers: {
            Authorization: localStorage.getItem("Authorization"),
        },})
        .then((res)=>res.json())
        .then((res)=>{
            let db = res.map((ress,index)=>{
              return (
                  index,{
                      "id":ress.bno,
                      "title":ress.title,
                      "start":ress.createTime,
                      "emotion":ress.emotion
                  }
              )
          });
          setBoards(db)
        });

},[]);

  const [selectDate, setSelectDate] = useState({
    start: '',
    end: '',
    allDay: '',
  });

  

  function renderEventContent(eventInfo) {
    // 리스트 그리기
    return (
      <>
        <div>
          <p>{eventInfo.event.title}</p>
          <img className="eventimage" src="http://10.100.102.90:7000/static/board/pie6.png" />
        </div>
      </>
    )
  }

  function handleEventClick(clickInfo) {
    //클릭했을때 동작
    // 다이어리 등록되었을때 그 항목 클릭 ->디테일페이지 이동하게 만들기
    history.push("/diary/detail/"+clickInfo.event.id)
    // history.push({
    //   pathname: "/detail/"+clickInfo.event.id,
    //   state:{}
    // })
  }

  function handleEvents() {}

  // 자체 bno
  /* function createEventId() {
    return String(eventGuid++);
  } */
  function handleDateSelect(selectInfo) {
    // 빈 달력 클릭
    console.log(boards)
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

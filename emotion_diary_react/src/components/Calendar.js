import React from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import styled from 'styled-components';
import moment from 'moment';

const CalendarStyle = styled.div`
  user-select: none;
`;
const HeadStyle = styled(CalendarStyle)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 8px;
`;
const ButtonStyle = styled.button`
  cursor: pointer;
  outline: none;
  display: inline-flex;
  background: transparent;
  border: none;
  font-size: 20pt;
  padding: 4px;
  border-radius: 4px;
  &:hover {
    background-color: rgba(gray, 0.1);
  }
  &:active {
    background-color: rgba(gray, 0.2);
  }
`;
const TitleStyle = styled.span`
  cursor: pointer;
  border-radius: 5px;
  padding: 4px 12px;
  &:hover {
    background-color: rgba(gray, 0.1);
  }
  &:active {
    background-color: rgba(gray, 0.2);
  }
`;
const BodyStyle = styled(CalendarStyle)``;
const RowStyle = styled(CalendarStyle)`
  display: flex;
  cursor: pointer;
  &:first-child {
    cursor: initial;
    .box {
      font-weight: bold;
    }
    .box:hover > span.text {
      background-color: white;
    }
  }
`;
const BoxStyle = styled(RowStyle)`
  position: relative;
  display: inline-flex;
  width: calc(100% / 7);
  height: 0;
  padding-bottom: calc(100% / 7);
  font-size: 12pt;
  &:first-child {
    color: red;
  }
  &:last-child {
    color: #588dff;
  }
  &.grayed {
    color: gray;
  }
  &:hover {
    span.text {
      background-color: rgba(#588dff, 0.1);
    }
  }
  &.selected {
    span.text {
      background-color: #588dff;
      color: white;
    }
  }
`;
const TextStyle = styled.span`
  border-radius: 100%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 60%;
  height: 60%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const Calendar = () => {
  //달력 날짜 만드는 함수
  function generate() {
    const today = moment(); // moment를 이용해 현재 한국 시간을 가져옴
    const startWeek = today.clone().startOf('month').week();
    const endWeek =
      today.clone().endOf('month').week() === 1
        ? 53
        : today.clone().endOf('month').week();
    let calendar = [];
    for (let week = startWeek; week <= endWeek; week++) {
      calendar.push(
        <RowStyle key={week}>
          {Array(7)
            .fill(0)
            .map((n, i) => {
              let current = today
                .clone()
                .week(week)
                .startOf('week')
                .add(n + i, 'day');
              let isSelected =
                today.format('YYYYMMDD') === current.format('YYYYMMDD')
                  ? 'selected'
                  : '';
              let isGrayed =
                current.format('MM') === today.format('MM') ? '' : 'grayed';
              return (
                <BoxStyle isSelected isGrayed key={i}>
                  <TextStyle>{current.format('D')}</TextStyle>
                </BoxStyle>
              );
            })}
        </RowStyle>,
      );
    }
    return calendar;
  }
  return (
    <CalendarStyle>
      <HeadStyle>
        <ButtonStyle>
          <MdChevronLeft />
        </ButtonStyle>
        <TitleStyle>{moment().format('MMMM YYYY')}</TitleStyle>
        <ButtonStyle>
          <MdChevronRight />
        </ButtonStyle>
      </HeadStyle>
      <BodyStyle>
        <RowStyle>
          <BoxStyle>
            <TextStyle>SUN</TextStyle>
          </BoxStyle>
          <BoxStyle>
            <TextStyle>MON</TextStyle>
          </BoxStyle>
          <BoxStyle>
            <TextStyle>TUE</TextStyle>
          </BoxStyle>
          <BoxStyle>
            <TextStyle>WED</TextStyle>
          </BoxStyle>
          <BoxStyle>
            <TextStyle>THU</TextStyle>
          </BoxStyle>
          <BoxStyle>
            <TextStyle>FRI</TextStyle>
          </BoxStyle>
          <BoxStyle>
            <TextStyle>SAT</TextStyle>
          </BoxStyle>
        </RowStyle>
        {generate()}
      </BodyStyle>
    </CalendarStyle>
  );
};

export default Calendar;

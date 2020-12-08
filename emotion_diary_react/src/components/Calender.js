import React from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import Moment from 'react-moment';
import styled from 'styled-components';
import moment, { Moment as MomentTypes } from 'moment';

const Calender = () => {
  function generate() {
    const today = moment();
    const startWeek = today.clone().startOf('month').week();
    const endWeek =
      today.clone().endOf('month').week() === 1
        ? 53
        : today.clone().endOf('month').week();
    let calendar = [];
    for (let week = startWeek; week <= endWeek; week++) {
      calendar.push(
        <div className="row" key={week}>
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
                <div className={`box  ${isSelected} ${isGrayed}`} key={i}>
                  <span className={`text`}>{current.format('D')}</span>
                </div>
              );
            })}
        </div>,
      );
    }
    return calendar;
  }
  return (
    <div className="Calendar">
      <div className="head">
        <button>
          <MdChevronLeft />
        </button>
        <span className="title">{moment().format('MMMM YYYY')}</span>
        <button>
          <MdChevronRight />
        </button>
      </div>
      <div className="body">
        <div className="row">
          <div className="box">
            <span className="text">SUN</span>
          </div>
          <div className="box">
            <span className="text">MON</span>
          </div>
          <div className="box">
            <span className="text">TUE</span>
          </div>
          <div className="box">
            <span className="text">WED</span>
          </div>
          <div className="box">
            <span className="text">THU</span>
          </div>
          <div className="box">
            <span className="text">FRI</span>
          </div>
          <div className="box">
            <span className="text">SAT</span>
          </div>
        </div>
        {generate()}
      </div>
    </div>
  );
};

export default Calender;

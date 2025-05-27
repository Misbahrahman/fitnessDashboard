import React from 'react';
import { ChevronLeft, ChevronRight } from "lucide-react";

const CalendarView = () => {
  return (
    <>
      <div className="calendar-header">
        <h2 className="month-year">October 2021</h2>
        <div className="calendar-nav">
          <ChevronLeft />
          <ChevronRight />
        </div>
      </div>

      <div className="calendar-grid">
        <div className="calendar-dates">
          <div className="date-cell">
            <div className="day-header">Mon</div>
            <div className="date-number">25</div>
            <div className="date-times">
              <span className="time-slot">10:00</span>
              <span className="time-slot">11:00</span>
              <span className="time-slot">12:00</span>
            </div>
          </div>

          <div className="date-cell highlight">
            <div className="day-header">Tues</div>
            <div className="date-number">26</div>
            <div className="date-times">
              <span className="time-slot">08:00</span>
              <span className="time-slot highlight-cell ">09:00</span>
              <span className="time-slot">10:00</span>
            </div>
          </div>

          <div className="date-cell">
            <div className="day-header">Wed</div>
            <div className="date-number">27</div>
            <div className="date-times">
              <span className="time-slot">12:00</span>
              <span className="time-slot">13:00</span>
              <span className="time-slot dash "> ___</span>
            </div>
          </div>

          <div className="date-cell">
            <div className="day-header">Thur</div>
            <div className="date-number">28</div>
            <div className="date-times">
              <span className="time-slot">10:00</span>
              <span className="time-slot less-active">11:30</span>
              <span className="time-slot dash">___</span>
            </div>
          </div>

          <div className="date-cell">
            <div className="day-header">Fri</div>
            <div className="date-number">29</div>
            <div className="date-times">
              <span className="time-slot">14:00</span>
              <span className="time-slot dash">___</span>
              <span className="time-slot dash">___</span>
            </div>
          </div>

          <div className="date-cell">
            <div className="day-header">Sat</div>
            <div className="date-number">30</div>
            <div className="date-times">
              <span className="time-slot less-active">12:00</span>
              <span className="time-slot less-active">14:00</span>
              <span className="time-slot">15:00</span>
            </div>
          </div>

          <div className="date-cell greyed">
            <div className="day-header greyed">Sun</div>
            <div className="date-number greyed">31</div>
            <div className="date-times">
              <span className="time-slot less-active">09:00</span>
              <span className="time-slot greyed">10:00</span>
              <span className="time-slot greyed">11:00</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CalendarView;
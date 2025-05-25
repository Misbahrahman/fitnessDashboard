
import React from 'react';
import { Bell, Plus } from "lucide-react";
import { appointmentData } from '../data';

const RightPanel = () => {
  const days = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];
  const dates = [25, 26, 27, 28, 29, 30, 31];
  const times = {
    25: ['10:00', '11:00', '12:00'],
    26: ['08:00', '09:00', '10:00', '13:00'],
    27: ['12:00', '13:00'],
    28: ['10:00', '11:30'],
    29: ['14:00'],
    30: ['12:00', '14:00', '15:00'],
    31: ['09:00', '10:00', '11:00']
  };

  return (
    <div className="right-panel">
      {/* Profile Section */}
      <div className="profile-section">
        <div className="profile-icons">
          <Bell className="profile-icon" size={20} />
          <div className="user-profile">
            <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face&auto=format" alt="User" className="user-avatar" />
          </div>
          <button className="add-button">
            <Plus size={16} />
          </button>
        </div>
      </div>
      
      {/* Calendar Header */}
      <div className="calendar-header">
        <span className="week-indicator">This Week</span>
        <div className="calendar-nav">
          <button>‹</button>
          <button>›</button>
        </div>
      </div>
      
      <h2 className="month-year">October 2021</h2>
      
      {/* Calendar Grid */}
      <div className="calendar-grid">
        <div className="calendar-days">
          {days.map((day, index) => (
            <div key={index} className="day-header">{day}</div>
          ))}
        </div>
        
        <div className="calendar-dates">
          {dates.map((date, index) => (
            <div key={index} className="date-cell">
              <div className="date-number">{date}</div>
              <div className="date-times">
                {times[date]?.map((time, timeIndex) => (
                  <span key={timeIndex} className="time-slot">{time}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Appointment Cards */}
      <div className="appointment-cards">
        <div className="appointment-card dentist">
          <div className="appointment-icon">🦷</div>
          <div className="appointment-info">
            <h4>Dentist</h4>
            <p>09:00-11:00</p>
            <p>Dr. Cameron Williamson</p>
          </div>
        </div>
        
        <div className="appointment-card physio">
          <div className="appointment-icon">🏃</div>
          <div className="appointment-info">
            <h4>Physiotherapy Appointment</h4>
            <p>11:00-12:00</p>
            <p>Dr. Kevin Djones</p>
          </div>
        </div>
      </div>
      
      {/* Upcoming Schedule */}
      <div className="upcoming-schedule">
        <h3>The Upcoming Schedule</h3>
        
        {appointmentData.map((dayData, dayIndex) => (
          <div key={dayIndex} className="schedule-day">
            <h4 className="day-title">{dayData.day}</h4>
            <div className="day-appointments">
              {dayData.appointments.map((appointment, index) => (
                <div key={index} className="simple-appointment-card">
                  <span className="appointment-icon">{appointment.icon}</span>
                  <div className="appointment-details">
                    <span className="appointment-title">{appointment.title}</span>
                    <span className="appointment-time">{appointment.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RightPanel;
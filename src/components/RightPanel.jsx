import { ChevronLeft, ChevronRight, Plus } from "lucide-react";

const RightPanel = () => {
  const days = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"];

  return (
    <div className="right-panel">
      <div className="profile-section">
        <div className="profile-icons">
          <div className="user-profile">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face&auto=format"
              alt="User"
              className="user-avatar"
            />
          </div>
          <button className="add-button">
            <Plus size={18} />
          </button>
        </div>
      </div>

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

      <div className="appointment-cards">
        <div className="appointment-card dentist">
          <div className="appointment-info">
            <h4>Dentist</h4>
            <p>09:00-11:00</p>
            <p>Dr. Cameron Williamson</p>
          </div>
          <div className="appointment-icon">🦷</div>
        </div>

        <div className="appointment-card physio">
          <div className="appointment-info">
            <h4>Physiotherapy Appointment</h4>
            <p>11:00-12:00</p>
            <p>Dr. Kevin Djones</p>
          </div>
          <div className="appointment-icon">🏃</div>
        </div>
      </div>

      <div className="upcoming-schedule">
        <h3>The Upcoming Schedule</h3>

        <div className="schedule-day thursday">
          <h4 className="day-title">On Thursday</h4>

          <div className="day-appointments">
            <div className="appointment-card">
              <div className="appointment-info">
                <h4>Health Checkup Complete</h4>
                <p>11:00</p>
              </div>
              <div className="appointment-icon">🏥</div>
            </div>
            <div className="appointment-card">
              <div className="appointment-info">
                <h4>Opthalmologist</h4>
                <p>14:00</p>
              </div>
              <div className="appointment-icon">👁️</div>
            </div>
          </div>
        </div>

        <div className="schedule-day saturday">
          <h4 className="day-title">On Saturday</h4>
          <div className="day-appointments">
           <div className="appointment-card">
              <div className="appointment-info">
                <h4>Cardiologist</h4>
                <p>12:00</p>
              </div>
              <div className="appointment-icon">❤️</div>
            </div>
            <div className="appointment-card">
              <div className="appointment-info">
                <h4>Neurologist</h4>
                <p>16:00</p>
              </div>
              <div className="appointment-icon">🧠</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightPanel;

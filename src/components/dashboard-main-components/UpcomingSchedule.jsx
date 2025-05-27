import SimpleAppointmentCard from "./SimpleAppointmentCard";

const UpcomingSchedule = () => {
  return (
    <>
      <div className="appointment-cards">
        <SimpleAppointmentCard
          title="Dentist"
          time="09:00-11:00"
          doctor="Dr. Cameron Williamson"
          icon="🦷"
          className="dentist"
        />
        <SimpleAppointmentCard
          title="Physiotherapy Appointment"
          time="11:00-12:00"
          doctor="Dr. Kevin Djones"
          icon="🏃"
          className="physio"
        />
      </div>

      <div className="upcoming-schedule">
        <h3>The Upcoming Schedule</h3>

        <div className="schedule-day thursday">
          <h4 className="day-title">On Thursday</h4>
          <div className="day-appointments">
            <SimpleAppointmentCard 
              title="Health Checkup Complete"
              time="11:00"
              icon="🏥"
            />
            <SimpleAppointmentCard 
              title="Opthalmologist"
              time="14:00"
              icon="👁️"
            />
          </div>
        </div>

        <div className="schedule-day saturday">
          <h4 className="day-title">On Saturday</h4>
          <div className="day-appointments">
            <SimpleAppointmentCard 
              title="Cardiologist"
              time="12:00"
              icon="❤️"
            />
            <SimpleAppointmentCard 
              title="Neurologist"
              time="16:00"
              icon="🧠"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default UpcomingSchedule;
const SimpleAppointmentCard = ({ title, time, doctor, icon, className = "" }) => {
  return (
    <div className={`appointment-card ${className}`}>
      <div className="appointment-info">
        <h4>{title}</h4>
        <p>{time}</p>
        {doctor && <p>{doctor}</p>}
      </div>
      <div className="appointment-icon">{icon}</div>
    </div>
  );
};

export default SimpleAppointmentCard;
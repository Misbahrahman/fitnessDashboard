import CalendarView from "./CalenderView";
import ProfileView from "./ProfileView";
import UpcomingSchedule from "./UpcomingSchedule";

const CalenderPanel = () => {
  return (
    <div className="right-panel">
      <ProfileView />
      <CalendarView />
      <UpcomingSchedule />
    </div>
  );
};

export default CalenderPanel;
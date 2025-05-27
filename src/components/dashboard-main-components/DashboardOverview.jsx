import { Bell, Heart, Search } from "lucide-react";
import { activityData, healthData } from "../../data";
import ActivityFeed from "./ActivityFeed";
import AnatomySection from "./AnatomySection";
import HealthStatusCard from "./HealthStatusCards";



const DashboardOverview = () => {
  return (
    <div className="middle-panel">
      <div className="search-section">
        <Search className="search-icon" size={18} />
        <input type="text" placeholder="Search" className="search-input" />
        <Bell className="bell-icon" size={18} />
      </div>

      <div className="dashboard-title">
        <h1>Dashboard</h1>
      </div>

      <div className="dashboard-content-grid">
        <AnatomySection />
        <div className="health-cards-section">
          {healthData.map((item, index) => (
            <HealthStatusCard key={index} item={item} index={index} />
          ))}
          <button className="details-button">Details →</button>
        </div>
      </div>

      <ActivityFeed activityData={activityData} />
    </div>
  );
};

export default DashboardOverview;

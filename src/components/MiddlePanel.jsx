import React from 'react';
import { Bell, Heart, Search } from "lucide-react";
import { activityData, healthData } from "../data";


const HealthStatusCard = ({ item, index }) => {

  const getHealthTypeClass = (name) => {
    const type = name.toLowerCase();
    if (type.includes('lung')) return 'lungs';
    if (type.includes('teeth') || type.includes('dental')) return 'teeth';
    if (type.includes('heart') || type.includes('cardiac')) return 'heart';
    if (type.includes('brain') || type.includes('neuro')) return 'brain';
    return '';
  };

  return (
    <div 
      key={index} 
      className={`health-card ${getHealthTypeClass(item.name)}`}
    >
      <div className="health-card-header">
        <span className="health-icon">{item.icon}</span>
        <span className="health-card-title">{item.name}</span>
      </div>
      <div className="health-card-date">{item.date}</div>
      <div className="health-card-progress">
        <div 
          className="progress-bar" 
          style={{ 
            backgroundColor: item.color, 
            width: item.progress || '75%' // Use item.progress if available
          }}
        ></div>
      </div>
    </div>
  );
};

const MiddlePanel = () => {

  return (
    <div className="middle-panel">
      <div className="search-section">
          <Search className="search-icon" size={18} />
          <input type="text" placeholder="Search" className="search-input" />
          <Bell className="bell-icon" size={18}/>
      </div>
      
      <div className="dashboard-title">
        <h1>Dashboard</h1>
      </div>
      

      <div className="dashboard-content-grid">

        <div className="anatomy-image-card">
          <div className="anatomy-image">
            <img 
             src="/human-body-frontal.png" 
              alt="Human Anatomy" 
              className="human-body"
            />
            <div className="healthy-heart">
              <Heart className='heart-icon' />
              <span>Healthy Heart</span>
            </div>
            <div className="healthy-leg">
              <span>🦵 Healthy Leg</span>
            </div>
          </div>
        </div>

        <div className="health-cards-section">
          {healthData.map((item, index) => (
            <HealthStatusCard key={index} item={item} index={index} />
          ))}
          <button className="details-button">Details →</button>
        </div>
      </div>
      

      <div className="activity-card">
       <div className='activity-header'>
         <h3>Activity</h3>
        <p className="activity-summary">3 appointments on this week</p>
       </div>
        
        <div className="activity-chart">
          <div className="chart-bars">
            {activityData.map((dayData, dayIndex) => (
              <div key={dayIndex} className="chart-day">
                <div className="chart-bar-container">

                  {dayData.bars.map((bar, barIndex) => (
                    <div
                      key={barIndex}
                      className={`chart-bar ${bar.color}`}
                      style={{
                        height: `${bar.height}px`,
                        left: `${bar.x}%`,
                        bottom: `${bar.y}px`, 
                        minHeight: '8px'
                      }}
                    />
                  ))}
                </div>
                <span className="chart-label">{dayData.day}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiddlePanel;
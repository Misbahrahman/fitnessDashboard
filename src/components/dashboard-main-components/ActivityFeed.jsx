const ActivityFeed = ({activityData}) => {
  return (
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
  );
};

export default ActivityFeed;
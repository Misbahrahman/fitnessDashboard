const ActivityFeed = ({activityData}) => {
  return (
    <div className="activityCard">
     <div className='header-activ'>
       <h3>Activity</h3>
      <p className="summary">3 appointments on this week</p>
     </div>
      
      <div className="actchart">
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
              <span className="labelChart">{dayData.day}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActivityFeed;
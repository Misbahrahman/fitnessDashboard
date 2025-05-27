const HealthStatusCard = ({ item, index }) => {
  const getHealthTypeClass = (name) => {
    const type = name.toLowerCase();
    if (type.includes("lung")) return "lungs";
    if (type.includes("teeth") || type.includes("dental")) return "teeth";
    if (type.includes("heart") || type.includes("cardiac")) return "heart";
    if (type.includes("brain") || type.includes("neuro")) return "brain";
    return "";
  };

  return (
    <div key={index} className={`health-card ${getHealthTypeClass(item.name)}`}>
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
            width: item.progress || "75%",
          }}
        ></div>
      </div>
    </div>
  );
};

export default HealthStatusCard;
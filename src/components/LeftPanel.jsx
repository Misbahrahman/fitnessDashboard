import { navigationItems } from "../data";

const LeftPanel = () => {
  return (
    <div className="left-panel">

      <div className="logo-section">
        <h1 className="logo">
          <span className="logo-health">Health</span>
          <span className="logo-care">care.</span>
        </h1>
      </div>
      
      <div className="navigation-section">
        <h3 className="nav-title">General</h3>
        <nav className="nav-menu">
          {navigationItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <a 
                key={index} 
                href="#" 
                className={`nav-item ${item.active ? 'active' : ''}`}
              >
                <Icon size={18} />
                <span>{item.label}</span>
              </a>
            );
          })}
        </nav>
      </div>
    </div>
  );
};



export default LeftPanel;
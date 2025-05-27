import { navigationItems } from "../../data";
import NavItem from "./NavItem";

const SideBar = () => {
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
          {navigationItems.slice(0 , 5).map((item, index) => (
            <NavItem key={index} item={item} index={index} />
          ))}
        </nav>

        <h3 className="nav-title">Tools</h3>
        <nav className="nav-menu">
          {navigationItems.slice(5 , 7).map((item, index) => (
            <NavItem key={index} item={item} index={index} />
          ))}
        </nav>

      </div>
    </div>
  );
};

export default SideBar;
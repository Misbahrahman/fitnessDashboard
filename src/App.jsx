import DashboardOverview from "./components/dashboard-main-components/DashboardOverview";
import CalenderPanel from "./components/dashboard-main-components/CalenderPanel";
import SideBar from "./components/side-bar/SideBar";


const App = () => {
  return (
    <div className="app">
      <SideBar />
      <DashboardOverview />
      <CalenderPanel />
    </div>
  );
};

export default App;
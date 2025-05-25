import LeftPanel from './components/leftPanel';
import MiddlePanel from './components/middlePanel';
import RightPanel from './components/rightPanel';

const App = () => {
  return (
    <div className="app">
      <LeftPanel />
      <MiddlePanel />
      <RightPanel />
    </div>
  );
};

export default App;
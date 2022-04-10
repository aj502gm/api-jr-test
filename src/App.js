import logo from './logo.svg';
import './App.css';
import NavigatorBar from './Components/Navigator';
import { Outlet } from 'react-router-dom';
import { ApiDataProvider } from './Context/APIDataCT';
function App() {
  return (
    
        <div className="App">
          <NavigatorBar></NavigatorBar>
          <Outlet></Outlet>
        </div>
    
  );
}

export default App;

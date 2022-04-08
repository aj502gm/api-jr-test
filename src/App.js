import logo from './logo.svg';
import './App.css';
import NavigatorBar from './Components/Navigator';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div classNameNameNameName="App">
      <NavigatorBar></NavigatorBar>
      <Outlet></Outlet>
    </div>
  );
}

export default App;

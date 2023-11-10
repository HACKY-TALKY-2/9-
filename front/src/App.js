import logo from './logo.svg';
import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Main from './pages/main/Main';
import ActivityHome from './pages/activity_home/ActivityHome';
import CreateActivity from './pages/create_activity/CreateActivity';
import Signup from './pages/signup/Signup';
import Login from './pages/login/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' elemnt={<Login />} />
          <Route path='/activity/home/' element={<ActivityHome/>}/>
          <Route path='/activity/create/' element={<CreateActivity/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

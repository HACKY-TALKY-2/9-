import logo from './logo.svg';
import './App.css';
import './input.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Main from './pages/main/Main';
import ActivityHome from './pages/activity_home/ActivityHome';
import CreateActivity from './pages/create_activity/CreateActivity';
import Signup from './pages/signup/Signup';
import Login from './pages/login/Login';
import GatherActivity from './pages/gathering_activity/GatherActivity';
import MemberCheck from './pages/check_members/MemberCheck';
import ClassPage from './pages/class_page/classPage';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/activity/home/:id' element={<ActivityHome/>}/>
          <Route path='/activity/create/' element={<CreateActivity />} />
          <Route path='/activity/gather/' element={<GatherActivity />} />
          <Route path='/activity/membercheck' element={<MemberCheck />} />
          <Route path='/activity/classpage' element={<ClassPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

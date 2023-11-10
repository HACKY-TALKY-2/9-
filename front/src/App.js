import logo from './logo.svg';
import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Main from './pages/main/Main';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

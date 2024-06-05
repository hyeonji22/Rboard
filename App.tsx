import React from 'react';
import './App.css';
import Layouts from './component/layouts/Layouts';
import 'bootstrap/dist/css/bootstrap.min.css'; //부트스트랩 사용
import { Route, Routes } from 'react-router-dom';
import BoardList from './pages/BoardList';
import BoardDetail from './pages/BoardDetail';


function App() {
  return (
    <Layouts>
     <Routes>
        <Route path='/'  element={<BoardList/>}></Route>
        <Route path='/board/:id'  element={<BoardDetail/>}></Route>
     </Routes>
    </Layouts>
  );
}

export default App;

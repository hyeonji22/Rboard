import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import BoardList from './component/pages/BoardList';
import Layout from './component/layout/Layout';
import BoardDetail from './component/pages/BoardDetail';

function App() {
  return (
    <div className="App">
      <Layout>
      <Routes>
        <Route path='/'  element={<BoardList />}></Route>
        <Route path='/board/:id'  element={<BoardDetail />}></Route>
      </Routes>
      </Layout>
    </div>
  );
}

export default App;

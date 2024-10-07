import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Faculty from './Faculty';
import FacultyId from './FacultyId';
import AddFaculty from './AddFaculty';
import UpdateFaculty from './UpdateFaculty';
import Home from './Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <Routes>

        <Route path='/' element={<App/>}>
          <Route path='/faculty' element={<Faculty/>}></Route>
          <Route path='/faculty/:id' element={<FacultyId/>}></Route>
          <Route path='/faculty/add' element={<AddFaculty/>}></Route>
          <Route path='/faculty/edit/:id' element={<UpdateFaculty/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

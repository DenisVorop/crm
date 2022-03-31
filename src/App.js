import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Login from "./Components/Page/Login/Login.jsx";
import Page from "./Components/Page/Page.jsx";

import { getUsersData, getTimesData } from './Redux/Reducers/usersReducer';
import { getLastRecordsData } from './Redux/Reducers/lastRecordsReducer';


function App() {

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getUsersData());
    dispatch(getTimesData());
    dispatch(getLastRecordsData());
}, []);

  return (
    <div className="wrapper">
      <Routes>
        <Route path='/'
          element={<Login />} />
        <Route path='/records'
          element={<Page />} />
      </Routes>
    </div>
  );
}

export default App;
